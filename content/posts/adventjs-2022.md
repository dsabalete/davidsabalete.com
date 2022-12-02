---
title: AdventJs 2022
description:
img: /adventjs.png
alt: AdventJs 2022
createdAt: dec 1 2022
updatedAt: dec 2 2022
---

[AdventJs](https://adventjs.dev/) is another coding challenge for this Christmas. This time coming from [Midudev](https://midu.dev/)

I will be posting here my solutions.

# [Day 1](https://adventjs.dev/challenges/2022/1)

```js
function wrapping(gifts) {
    return gifts.map((gift) => {
        let w = "*".repeat(gift.length + 2)
        return `${w}\n*${gift}*\n${w}`
    })
}
```
