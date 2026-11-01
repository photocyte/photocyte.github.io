// Small DOM helper used by the code-copy controls; text children stay text.
export function createElement(tag, attributes = {}, ...children) {
  const element = document.createElement(tag);
  for (const [name, value] of Object.entries(attributes)) {
    if (name.startsWith('on') && typeof value === 'function') {
      element.addEventListener(name.slice(2).toLowerCase(), value);
    } else if (value != null) {
      element.setAttribute(name, value);
    }
  }
  element.append(...children.flat().filter(child => child != null));
  return element;
}
