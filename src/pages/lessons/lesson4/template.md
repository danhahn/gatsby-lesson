---
title: Lesson 1
lesson: Building a HTML template
date: 1/24/2018 15:00
template: article.jade
tags:
  html:
    label: html
    icon: fa fa-html5
    data : [html,head,title,body]

nav:
  Introduction: index.html
  Editors: editors.html
  HTML Template: template.html
  Block Elements: block.html
  Classwork: classwork.html
  Homework: homework.html

---

We want to build a template to once so we do not have to write it every time.  

## Saving

To create any `html` file you need to `save as` `.html` to make the file in to an html file.

### Steps

1. `File` > `New File`
2. `File` > `Save As...`
3. Enter `template.html` in the `Save As` box.
3. Select location to save (in our case **Documents/your_name**).
4. Add the code below.
5. Click `Save` Button

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title></title>
</head>
<body>

</body>
</html>
```
We will use this as our starting point for all `html` files that we need to create going forward.  

## Using the template

Now what we have the template created we just need to save a copy of it.

### Steps

1. `File` > `Open...`
2. `File` > `Save As...`
3. Enter a name for your file in the `Save As` box.  
4. Ensure that the name has no spaces, is all lowercase and has `.html` as an extension.
5. Select location to save.
6. Click `Save` button

## Parts of the template

### DOCTYPE

`<!DOCTYPE>` informs the browser which version of HTML you used to write the document. Doctype is a declaration, not a tag.

### html

The `<html>` element (or HTML root element) represents the root of an HTML document. All other elements must be descendants of this element.

It may have an attribute of `lang="en"` to define the language that is used on the page. In our case we are sending it to english.

### head

The `<head>` element provides general information (metadata) about the document, including its title and links to/definitions of scripts and style sheets. The `<head>` is a child of `<html>`.

### body

The `<body>` element represents the content of an HTML document. There can be only one <body> element in a document. The `<body>` is a child of `<html>`.

### title

The `<title>` element defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text, and any contained tags are ignored.  The `<title>` is a child of `<head>`.


[Download a copy of the template](template.txt)
