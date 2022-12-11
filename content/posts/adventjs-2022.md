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

# [Day 1](https://github.com/dsabalete/advent-js-2022/tree/main/day01)

```js
function wrapping(gifts) {
    return gifts.map((gift) => {
        let w = "*".repeat(gift.length + 2)
        return `${w}\n*${gift}*\n${w}`
    })
}
```

# [Day 2](https://github.com/dsabalete/advent-js-2022/tree/main/day02)

```js
function countHours(year, holidays) {
    return holidays
        .map((day) => new Date(`${year}/${day}`).getDay())
        .filter((day) => day > 0 && day < 6)
        .map((day) => 2)
        .reduce((acc, cur) => acc + cur, 0)
}
```

# [Day 3](https://github.com/dsabalete/advent-js-2022/tree/main/day03)

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

# [Day 4](https://github.com/dsabalete/advent-js-2022/tree/main/day04)

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

# [Day 5](https://github.com/dsabalete/advent-js-2022/tree/main/day05)

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

# [Day 6](https://github.com/dsabalete/advent-js-2022/tree/main/day06)

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

# [Day 7](https://github.com/dsabalete/advent-js-2022/tree/main/day07)

```js
function getGiftsToRefill(a1, a2, a3) {
    const allGifts = [...new Set([...a1, ...a2, ...a3])]
    return allGifts.filter(
        (gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) < 2
    )
}
```

# [Day 8](https://github.com/dsabalete/advent-js-2022/tree/main/day08)

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

# [Day 9](https://github.com/dsabalete/advent-js-2022/tree/main/day09)

```js
function countTime(leds) {
    const arr = leds.join("").split("1")
    arr[0] += arr.splice(-1)
    return Math.max(...arr.map((el) => el.length)) * 7
}
```

# [Day 10](https://github.com/dsabalete/advent-js-2022/tree/main/day10)

```js
function checkJump(heights) {
    const peak = Math.max(...heights)
    const peakIndex = heights.indexOf(peak)
    const left = heights.slice(0, peakIndex)
    const right = heights.slice(peakIndex + 1)
    const isGoingUp = left.slice(1).every((l, i) => l >= left[i])
    const isGoingDown = right.slice(1).every((r, i) => r <= right[i])
    return isGoingUp && isGoingDown && left.length !== 0 && right.length !== 0
}
```

# [Day 11](https://github.com/dsabalete/advent-js-2022/tree/main/day11)

```js
function getCompleted(part, total) {
    const partTime = part.split(":").map(Number)
    const totalTime = total.split(":").map(Number)
    const partSeconds = partTime[0] * 3600 + partTime[1] * 60 + partTime[2]
    const totalSeconds = totalTime[0] * 3600 + totalTime[1] * 60 + totalTime[2]
    let hcf
    for (let i = 1; i <= partSeconds && i <= totalSeconds; i++) {
        if (partSeconds % i == 0 && totalSeconds % i == 0) {
            hcf = i
        }
    }
    return `${partSeconds / hcf}/${totalSeconds / hcf}`
}
```

# [Day 12](https://github.com/dsabalete/advent-js-2022/tree/main/day12)

```js

```

# [Day 13](https://github.com/dsabalete/advent-js-2022/tree/main/day13)

```js

```

# [Day 14](https://github.com/dsabalete/advent-js-2022/tree/main/day14)

```js

```

# [Day 15](https://github.com/dsabalete/advent-js-2022/tree/main/day15)

```js

```

# [Day 16](https://github.com/dsabalete/advent-js-2022/tree/main/day16)

```js

```

# [Day 17](https://github.com/dsabalete/advent-js-2022/tree/main/day17)

```js

```

# [Day 18](https://github.com/dsabalete/advent-js-2022/tree/main/day18)

```js

```

# [Day 19](https://github.com/dsabalete/advent-js-2022/tree/main/day19)

```js

```

# [Day 20](https://github.com/dsabalete/advent-js-2022/tree/main/day20)

```js

```

# [Day 21](https://github.com/dsabalete/advent-js-2022/tree/main/day21)

```js

```

# [Day 22](https://github.com/dsabalete/advent-js-2022/tree/main/day22)

```js

```

# [Day 23](https://github.com/dsabalete/advent-js-2022/tree/main/day23)

```js

```

# [Day 24](https://github.com/dsabalete/advent-js-2022/tree/main/day24)

```js

```
