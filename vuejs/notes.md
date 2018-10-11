---
layout: post
title: vuejs notes on vueJS instance
permalink: /vuejs/notes.html
---

## Vue JS

* more than one instance of Vue is allowed
* no connection between instances
* if you need a connection => put them in one instance ...
* multiple instance of multiple tasks on a page
* variables can only be accessed via "this" !! so instances can not access other variables.
* example: calendar component has its own vueJs instance
* [demo more than one instance](https://jsfiddle.net/serajo/fknh9zpe/)

### accessing the vueJs instance from outside

### how vueJs handles data and changes ("proxying ...")

### $el
### $data holds data objects
### $refs can be access by javascript, but the DOM may be overwritten later by vueJS ...

* [VUE JS API !!!](http://vuejs.org/api)

### mounting a template

### using components  (reusable components ...)

### 2 versions of vueJS: one with compiler and one without
=> need to per compile code into javascript and only javascript code is deployed

### how vueJS updates the DOM
javascript is super fast but accessing the DOM is super slow !

instead vueJS has its own DOM: the ">VIRTUAL DOM"
a copy of the DOM represented in javascript code.

### vueJS instance lifecycle
* new Vue()
* beforeCreate()  init data & events
*
