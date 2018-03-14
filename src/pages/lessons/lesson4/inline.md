---
title: Lesson 1
lesson: Inline Elements
date: 1/24/2018 15:00
template: article.jade

nav:
  Introduction: index.html
  Editors: editors.html
  HTML Template: template.html
  Block Elements: block.html
  Classwork: classwork.html
  Homework: homework.html

---

An inline element is an element that when the content is wrapped with that tag does not display on its own line.

Inline elements must be wrapped with a block element or can not be a child of another inline elements.

<iframe height='265' scrolling='no' title='Inline' src='//codepen.io/danhahn/embed/ZybGpX/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/ZybGpX/'>Inline</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## strong

The HTML Strong Element `<strong>` gives text strong importance, and is typically displayed in bold.

### Example

```html
<p>A <strong>polar vortex</strong> also known as a polar cyclone, polar low, or a circumpolar whirl.</p>
```

<p>A <strong>polar vortex</strong> also known as a polar cyclone, polar low, or a circumpolar whirl.</p>

## em

The HTML element emphasis  `<em>` marks text that has stress emphasis.

### Example

```html
<p>In HTML 5, what was previously called <em>block-level</em> content is now called <em>flow</em> content.</p>
```

<p>In HTML 5, what was previously called <em>block-level</em> content is now called <em>flow</em> content.</p>

## code

The HTML Code Element (`<code>`) represents a fragment of computer code. By default, it is displayed in the browser's default monospace font.

```html
<p>This is how we would show an <code>&lt;html&gt;</code> tag to a reader of this article.</p>
```

<p>This is how we would show an <code>&lt;html&gt;</code> tag to a reader of this article.</p>

## span

The HTML `<span>` element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. `<span>` is very much like a `<div>` element, but `<div>` is a block-level element whereas a `<span>` is an inline element.

```html
<p>We can use a <span>span to wrap</span> text</p>
```

<p>We can use a <span>span to wrap</span> text</p>
