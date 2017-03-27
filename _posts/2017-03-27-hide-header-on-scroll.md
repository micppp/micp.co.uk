---
layout: post
title: Hide Header on Scroll
description: Demo of a header that hides/shows depending on the direction of scroll.

---

I was recently tasked with coming up with a solution for a problem we were having at work. A new client wanted a header which only was sticky when the user had scrolled the height of the viewport. 

We already had two sticky header solutions which we were using on clients. One was a simple fixed header that on scroll fixes to the top of the viewport. The second was a variation of this in which the items within the header shrunk on scroll as the header fixed.

I had a look around online for existing solutions to this problem and came across a few but as always. I decided to have a mess around myself and create something. 

<p data-height="500" data-theme-id="dark" data-slug-hash="OpZeXd" data-default-tab="html,result" data-user="micp" data-embed-version="2" data-pen-title="Full screen background, fixed, transparent header." class="codepen">See the Pen <a href="http://codepen.io/micp/pen/OpZeXd/">Full screen background, fixed, transparent header.</a> by Michael Pallister (<a href="http://codepen.io/micp">@micp</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Above is the result. The header disappears as you scroll down, but comes back if you scroll up which saves any user scrolling all the way back to the top of the page. Something I feel is good for UX.

The request of the client was that the header shows after you've scrolled the height of the viewport because they'd have a full screen promo unit which filled the viewport. In the demo above the header will become fixed as normal once you've scrolled the height of the viewport.  