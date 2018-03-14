---
title: Lesson 1
lesson: Block Elements
author: the-wintersmith
date: 1/24/2018 15:00
template: article.jade

tags:
  html:
    label: html
    icon: fa fa-html5
    data : [p,h1,h2,h3,h4,h5,h6, br, blockquote, ol, ul, li, div, section, article, header, footer]

nav:
  Introduction: index.html
  Editors: editors.html
  HTML Template: template.html
  Block Elements: block.html
  Classwork: classwork.html
  Homework: homework.html

---

In this lesson we will be talking about block elements. A block element is any element that when rapping content is content will be displayed on his online.  Block elements are able to display padding on the top and the bottom, have a width set on them.

Block elements may also have additional styles based on the tag type.

## Paragraph

The `<p>` element (or HTML Paragraph Element) represents a paragraph of text. Paragraphs are usually represented in visual media as blocks of text that are separated from adjacent blocks by vertical blank space.  Paragraphs can contain one or more sentences of content.

### Example

<iframe height='265' scrolling='no' title='Paragraph' src='//codepen.io/danhahn/embed/xrwKMe/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/xrwKMe/'>Paragraph</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Headings

Heading elements implement six levels of document headings, `<h1>` is the most important and `<h6>` is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically( just like the fixed sider bar of this page on the right).

**Usage note:**

* Do not use lower levels to decrease heading font size: use the CSS font-size property instead.
* Avoid skipping heading levels: always start from `<h1>`, next use `<h2>` and so on.

### Example

<iframe height='265' scrolling='no' title='Headline' src='//codepen.io/danhahn/embed/KqdPrZ/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/KqdPrZ/'>Headline</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Usage

<iframe height='265' scrolling='no' title='Headline Example' src='//codepen.io/danhahn/embed/weKwbe/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/weKwbe/'>Headline Example</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Line break

The HTML element line break `<br>` produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.

Do not use `<br>` to increase the gap between lines of text; use the CSS `margin` property or the `<p>` element.

### Example

<iframe height='265' scrolling='no' title='Line Break' src='//codepen.io/danhahn/embed/JJYjEo/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/JJYjEo/'>Line Break</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

**Note:** `address` tag is a new block element used to define an address.

## Lists

The `<ol>` Element (or Ordered List) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets.

<iframe height='350' scrolling='no' title='Lists' src='//codepen.io/danhahn/embed/KqdKvG/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/KqdKvG/'>Lists</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

**Note:** This style of the bullets or numbers is not defined in the HTML description of the page, but in its associated CSS, using the `list-style-type` property.

The `<li>` element (List Item) is used to represent an item in a list.

There is no limitation to the depth and overlap of lists defined with the `<ol>` and `<ul>` elements.

<iframe height='280' scrolling='no' title='Nested List' src='//codepen.io/danhahn/embed/owjNoL/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/owjNoL/'>Nested List</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Blockquote

The `<blockquote>` Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation.

### Example

<iframe height='470' scrolling='no' title='Blockquote' src='//codepen.io/danhahn/embed/gRaOKo/?height=408&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/gRaOKo/'>Blockquote</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Page divisions

The `<div>` element (or Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as `<article>` or `<nav>`) is appropriate.

<iframe height='428' scrolling='no' title='Div' src='//codepen.io/danhahn/embed/bRVGxj/?height=428&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/bRVGxj/'>Div</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

**Note:** The `<div>` does not have any visual changes.  All changes will be applied in the css.

## Div like elements

With HTML 5 there are a number of new elements that are designed to help better semantically lay out the page. These tags act the same as the `<div>` tag but have better naming to help define sections within the page. Well these elements behave the same as a `<div>`  they make it easy for others to come in and understand the code.

### section

The `<section>` element represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading. Each `<section>` should be identified, typically by including a heading (`<h1>`-`<h6>` element) as a child of the `<section>` element.

```html
<section>
    <h1>Heading</h1>
    <p>Bunch of awesome content</p>
</section>
```

### header

The `<header>` element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.

```html
<header>
    <h1>Lorem ipsum.</h1>
</header>
```
### nav

The `<nav>` element  Navigation Element) represents a section of a page that links to other pages or to parts within the page: a section with navigation links.

```html
<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

### footer

The `<footer>` element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.

```html
<footer>
    <p>&copy; 2001 Some Website</p>
</footer>
```


### article

The `<article>` element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). This could be a forum post, a magazine or newspaper article, a blog entry, an object, or any other independent item of content. Each `<article>` should be identified, typically by including a heading (`<h1>`-`<h6>` element) as a child of the `<article>` element.

```html
<article>
	<h2>Lorem ipsum.</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, officiis?</p>
	<p>Deserunt, laudantium amet hic ex unde id rem cum nemo.</p>
</article>
```

### aside

The HTML `<aside>` element represents a section of the page with content connected tangentially to the rest, which could be considered separate from that content. These sections are often represented as sidebars or inserts. They often contain the definitions on the sidebars, such as definitions from the glossary; there may also be other types of information, such as related advertisements; the biography of the author; web applications; profile information.

```html
<section>
	<article>
		<h2>Lorem ipsum.</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, deserunt?</p>
		<p>Quod vitae laborum, perferendis praesentium vel neque nisi consequatur illum.</p>
	</article>
	<aside>
		<ul>
			<li>Lorem ipsum.</li>
			<li>Dicta, sed!</li>
			<li>Eaque, tempore.</li>
		</ul>
	</aside>
</section>
```

## Page Layout

You can mix and match the element in any way that works for your design.  Most of the visual changes will be handled with your CSS.

<iframe height='680' scrolling='no' title='Div Like Tags' src='//codepen.io/danhahn/embed/PjPwyv/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/danhahn/pen/PjPwyv/'>Div Like Tags</a> by Dan Hahn (<a href='https://codepen.io/danhahn'>@danhahn</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
