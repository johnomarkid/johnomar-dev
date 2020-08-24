---
title: Set Dynamic Object Keys In ES6 Javascript
date: "2020-08-24T22:12:04.284Z"
description: Object keys in Javascript can be set dynamically with variables. ES6 gives you a way to set the dynamic key in one expression rather than two.
---

## The "old" way

```
const name = 'John'

const ageMap = {
  'Fred': '20',
  'Matt': '34'
}

ageMap[name] = 40
```

That would create a key in the object with the value of the variable `name` and set it to 40.

## The ES6 way

```
const name = 'John'

const ageMap = {
  'Fred': '20',
  'Matt': '34',
  [name]: 40
}
```

All you do is wrap the variable in square brackets: `[name]`.
