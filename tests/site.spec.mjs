import { test, expect } from '@playwright/test';
import { readFile, stat } from 'node:fs/promises';

const pages = [
  '/', '/about/', '/publications/', '/research/', '/posts/', '/media_and_press/',
  '/2018-03-16-Hello-World/', '/2018-07-13-How-far-east-does-the-firefly-go/',
  '/2018-07-15-Firefly-photography/', '/2019-09-12-Easy_XIC_with_MZmine/',
  '/2022-06-26-I-found-a-bug-in-OneNote/',
];

test('published content and local asset requests work', async ({ page }) => {
  const errors = [], failed = [];
  page.on('pageerror', error => {
    if (!error.stack?.includes('c.disquscdn.com')) errors.push(error.message);
  });
  page.on('response', response => {
    if (response.url().startsWith('http://127.0.0.1:8765/') && response.status() >= 400) {
      failed.push(`${response.status()} ${response.url()}`);
    }
  });
  for (const path of pages) {
    const response = await page.goto(path);
    expect(response.status(), path).toBe(200);
    await expect(page).toHaveTitle(/Tim Fallon/);
    await expect(page.locator('h1').first()).not.toHaveText('');
    await page.evaluate(async () => {
      for (const image of document.querySelectorAll('article img')) {
        image.loading = 'eager';
        await image.decode();
      }
    });
    await page.evaluate(() => customElements.whenDefined('hy-drawer'));
  }
  expect(failed).toEqual([]);
  expect(errors).toEqual([]);
});

test('drawer navigation and browser history preserve page content', async ({ page }) => {
  await page.goto('/posts/');
  await page.evaluate(() => customElements.whenDefined('hy-drawer'));
  if (await page.locator('#_menu').isVisible()) await page.locator('#_menu').click();
  await page.locator('.sidebar-nav a[href="/publications/"]').click();
  await expect(page).toHaveURL(/\/publications\/$/);
  await expect(page.locator('h1').first()).toHaveText('Publications');
  await page.goBack();
  await expect(page.locator('h1').first()).toHaveText('Posts');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
});

test('math typesets with current, self-hosted MathJax and fonts', async ({ page }) => {
  const externalMath = [];
  const failed = [];
  page.on('response', response => {
    if (/mathjax|newcm/i.test(response.url()) && response.status() >= 400) failed.push(response.url());
  });
  page.on('request', request => {
    if (/mathjax|newcm/i.test(request.url()) && !request.url().startsWith('http://127.0.0.1:8765/')) externalMath.push(request.url());
  });
  await page.goto('/research/');
  await page.waitForFunction(() => window.MathJax?.typesetPromise);
  const math = await page.evaluate(async () => {
    await MathJax.startup.promise;
    const node = document.createElement('div');
    node.textContent = '\\[\\int_0^1 x^2\\,dx = \\frac{1}{3}, \\mathscr{ABC}, \\mathbb{R}\\]';
    document.querySelector('article').append(node);
    await MathJax.typesetPromise([node]);
    return { version: MathJax.version, rendered: Boolean(node.querySelector('mjx-container')), mathError: Boolean(node.querySelector('mjx-merror')) };
  });
  expect(math.version).toMatch(/^4\./);
  expect(math.rendered).toBe(true);
  expect(math.mathError).toBe(false);
  expect(failed).toEqual([]);
  expect(externalMath).toEqual([]);
});

test('dark mode can be toggled', async ({ page }) => {
  await page.goto('/posts/');
  const button = page.locator('#_dark-mode');
  await expect(button).toBeVisible();
  const previous = await page.locator('body').getAttribute('class');
  await button.click();
  await expect(page.locator('body')).not.toHaveAttribute('class', previous);
});

test('content and links remain available without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL });
  const page = await context.newPage();
  await page.goto('/posts/');
  await expect(page.locator('h1').first()).toHaveText('Posts');
  await page.locator('article a[href="/2022-06-26-I-found-a-bug-in-OneNote/"]').click();
  await expect(page.locator('h1').first()).toContainText('OneNote');
  await context.close();
});

test('source, drafts, and dependency manifests are absent from site output', async () => {
  for (const path of ['_theme', '_drafts', 'node_modules', 'Gemfile', 'Gemfile.lock', 'package.json', 'package-lock.json', 'MAINTENANCE.html', 'tests']) {
    await expect(stat(`_site/${path}`)).rejects.toThrow();
  }
  const sitemap = await readFile('_site/sitemap.xml', 'utf8');
  for (const path of pages) expect(sitemap).toContain(`https://photocyte.github.io${path}`);
});
