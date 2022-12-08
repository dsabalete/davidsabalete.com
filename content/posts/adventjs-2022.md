---
title: AdventJs 2022
description:
img: /adventjs.png
alt: AdventJs 2022
createdAt: dec 1 2022
updatedAt: dec 7 2022
---

[AdventJs](https://adventjs.dev/) is another coding challenge for this Christmas. This time coming from [Midudev](https://midu.dev/)

I will be posting the solutions in this same post and in a [Github repo](https://github.com/dsabalete/advent-js-2022)

# [Day 1](https://adventjs.dev/challenges/2022/1)

```js
function wrapping(gifts) {
    return gifts.map((gift) => {
        let w = "*".repeat(gift.length + 2)
        return `${w}\n*${gift}*\n${w}`
    })
}
```

# [Day 2](https://adventjs.dev/challenges/2022/2)

```js
function countHours(year, holidays) {
    return holidays
        .map((day) => new Date(`${year}/${day}`).getDay())
        .filter((day) => day > 0 && day < 6)
        .map((day) => 2)
        .reduce((acc, cur) => acc + cur, 0)
}
```

# [Day 3](https://adventjs.dev/challenges/2022/3)

```js
function distributeGifts(packOfGifts, reindeers) {
    return Math.floor(
        reindeers.reduce((acc, cur) => {
            return acc + cur.length * 2
        }, 0) /
            packOfGifts.reduce((acc, cur) => {
                return acc + cur.length
            }, 0)
    )
}
```

# [Day 4](https://adventjs.dev/challenges/2022/4)

```js
function fitsInOneBox(boxes) {
    return boxes
        .sort((a, b) => a.l - b.l)
        .every((box, i) => {
            if (i === 0) return true
            const prevBox = boxes[i - 1]
            return box.l > prevBox.l && box.w > prevBox.w && box.h > prevBox.h
        })
}
```

# [Day 5](https://adventjs.dev/challenges/2022/5)

```js
function getMaxGifts(giftsCities, maxGifts, maxCities) {
    if (maxCities === 0) return 0
    const allGifts = giftsCities.reduce((acc, cur) => acc + cur, 0)
    return giftsCities.reduce((acc, giftsCity, idx) => {
        if (giftsCity > maxGifts) return acc
        const giftsCitiesClone = [...giftsCities]
        giftsCitiesClone.splice(idx, 1)
        const res =
            getMaxGifts(giftsCitiesClone, maxGifts - giftsCity, maxCities - 1) +
            giftsCity
        if (allGifts === res) {
            giftsCities.splice(1)
        }
        return res > acc ? res : acc
    }, 0)
}
```

# [Day 6](https://adventjs.dev/challenges/2022/6)

```js
function createCube(size) {
    let figure = ""
    for (let i = 1; i <= size; i++) {
        figure +=
            " ".repeat(size - i) + `\/\\`.repeat(i) + `_\\`.repeat(size) + "\n"
    }
    for (let i = size; i > 0; i--) {
        figure +=
            " ".repeat(size - i) + `\\\/`.repeat(i) + `_\/`.repeat(size) + "\n"
    }
    return figure.slice(0, -1)
}
```

# [Day 7](https://adventjs.dev/challenges/2022/7)

```js
function getGiftsToRefill(a1, a2, a3) {
    const allGifts = [...new Set([...a1, ...a2, ...a3])]
    return allGifts.filter(
        (gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) < 2
    )
}
```

# [Day 8](https://adventjs.dev/challenges/2022/8)

```js
function checkPart(part) {
    if (part === [...part].reverse().join("")) {
        return true
    }

    for (let i = 0; i < [...part].length; i++) {
        const candidate = [...part]
        candidate.splice(i, 1)
        if (candidate.join("") === candidate.reverse().join("")) {
            return true
        }
    }
    return false
}
```

# [Day 9](https://adventjs.dev/challenges/2022/9)

```js

```

# [Day 10](https://adventjs.dev/challenges/2022/10)

```js

```

# [Day 11](https://adventjs.dev/challenges/2022/11)

```js

```

# [Day 12](https://adventjs.dev/challenges/2022/12)

```js

```

# [Day 13](https://adventjs.dev/challenges/2022/13)

```js

```

# [Day 14](https://adventjs.dev/challenges/2022/14)

```js

```

# [Day 15](https://adventjs.dev/challenges/2022/15)

```js

```

# [Day 16](https://adventjs.dev/challenges/2022/16)

```js

```

# [Day 17](https://adventjs.dev/challenges/2022/17)

```js

```

# [Day 18](https://adventjs.dev/challenges/2022/18)

```js

```

# [Day 19](https://adventjs.dev/challenges/2022/19)

```js

```

# [Day 20](https://adventjs.dev/challenges/2022/20)

```js

```

# [Day 21](https://adventjs.dev/challenges/2022/21)

```js

```

# [Day 22](https://adventjs.dev/challenges/2022/22)

```js

```

# [Day 23](https://adventjs.dev/challenges/2022/23)

```js

```

# [Day 24](https://adventjs.dev/challenges/2022/24)

```js

```
