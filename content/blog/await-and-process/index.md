---
title: Await An Async Function And Do Something With It In One Line of Javascript
date: "2020-08-23T22:12:04.284Z"
description: Learn how to await the result of an async function and then apply additional processing on it in one line of Javascript.
---

Have you ever wanted a one-liner that let's you `await` the result of a function and to some further processing?

Instead of:

```
const resp = await fetch('https://api.github.com/users/johnomarkid')
const body = await json()
```

You want a way to skip declaring a `resp` constant and get directly to the body.

Here's some syntactical sugar in Javascript that let's you do just that.

```
const body = (await fetch('https://api.github.com/users/johnomarkid')).json()
```
