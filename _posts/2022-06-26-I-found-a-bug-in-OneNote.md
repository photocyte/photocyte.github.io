---
layout: post
title: I found a bug in OneNote!
description: >
  Copy pasting, how does it work?
tags: [blog,tech,software]
comments: true
---
I am an extremely heavy user of [Microsoft OneMote](https://en.wikipedia.org/wiki/Microsoft_OneNote), both on MacOS and iOS. I've been using it as my electronic lab notebook (ELN), for over 10 years at this point, and I've learned a couple tricks.

One of the nicest things about OneNote, is that it has never lost my scientific content - despite my using it on a daily basis, generally abusing it & force quitting it if it hangs, for over a decade. (It has semi-lost some of my personal content, where I was posting tons of very large photos into a single page, and the syncing got permanently broken between my phone and laptop - technically the content wasn't lost, but it was too much work to carefully copy & resync my phone and laptop OneNote copies, & I had to throw away the photos on my phones version). 

In short, OneNote is properly developed "industrial grade" software, whose stability & development cycle & longterm support I have been quite happy with.

That is why I was so happy today to find a reproducible bug in OneNote on MacOS, where I could make it crash on command (it still didn't lose any of my data though!)

![A meme, with Dark Vader saying "When I left you, I was the learner, now I am the master!](/images/onenote_bug/onenote_meme.jpg)

Details below:

```
How to reproduce issue from scratch:

1) This is on MacOS 12.4 Monterey, OneNote Version 16.62 (22061100) - Desktop app
2) You have to make a .html file with a png image encoded as a base64 encoded HTML5 data URI. 
- The Zotero webpage snapshot functionality can do this, and the SingleFile addon for Chrome can do this. 
- HTML files/encoded images made from either Zotero or SingleFile will crash OneNote. 
- Note: This bug does not happen if a jpg is substituted for a png.
3) In MacOS Safari (Version 15.5 17613.2.7.1.8), right click the data URI encoded image and select the "Copy paste" from the dropdown menu. 
- Note: This bug does not happen if Safari is substituted for Google Chrome (Version 102.0.5005.115)
3) In OneNote, make a new table
4) Add a row to the table, 
5) In the newly made row, type "file://" , using shift & the left arrow keys after typing, select the file:// text. 
6) Hit Command-K to open the link editing dialog
7) Click the address dialog box, and paste the image. 
- It should show up at the base64 encoded data URI. 
- In the case of a Google Chrome copied image, nothing is added to the text field. 
- In the case of a copied JPG, in both Google Chrome & Safari, an http URL is pasted rather than an encoded data URI.
8) Hit command-Z to undo. OneNote immediately crashes.
```

In testing this bug, I was fascinated to trace it back to strange copy paste behavior - you have to copy a encoded PNG from specifically Safari. A JPG, or Chrome, doesn't work. I think this goes to show, copy paste is a bit of a black box of user interface & user experience, and when bugs happen, then can be pretty subtle! The fact that the bug also involves  undo functionality is interesting - that is another area of the software that seems ripe for all sorts of unexpected edge cases. Hope this helps Microsoft!