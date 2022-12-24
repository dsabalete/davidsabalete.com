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
    const getSeconds = (time) => time[0] * 3600 + time[1] * 60 + time[2]
    const getHCF = (a, b) => (b == 0 ? a : getHCF(b, a % b))
    const partTime = part.split(":").map(Number)
    const totalTime = total.split(":").map(Number)
    const partSeconds = getSeconds(partTime)
    const totalSeconds = getSeconds(totalTime)
    const hcf = getHCF(partSeconds, totalSeconds)
    return `${partSeconds / hcf}/${totalSeconds / hcf}`
}
```

# [Day 12](https://github.com/dsabalete/advent-js-2022/tree/main/day12)

```js
function selectSleigh(distance, sleighs) {
    const selection = sleighs.filter((s) => s.consumption * distance <= 20)
    return selection.length > 0 ? selection[selection.length - 1].name : null
}
```

# [Day 13](https://github.com/dsabalete/advent-js-2022/tree/main/day13)

```js
function getFilesToBackup(lastBackup, changes) {
    const result = new Set()
    changes
        .filter((change) => change[1] > lastBackup)
        .map((change) => change[0])
        .sort((a, b) => a - b)
        .forEach((file) => result.add(file))
    return [...result]
}
```

# [Day 14](https://github.com/dsabalete/advent-js-2022/tree/main/day14)

```js
function getOptimalPath(path) {
    let result = path.reduce((acc, value) => {
        let sliceStart = 0
        return acc
            .map((n) => {
                let tmp0 = value
                    .slice(sliceStart, sliceStart + 2)
                    .map((l) => l + n)
                sliceStart += 1
                return tmp0
            })
            .flat()
    })
    return Math.min(...result)
}
```

# [Day 15](https://github.com/dsabalete/advent-js-2022/tree/main/day15)

```js
function decorateTree(base) {
    const rules = {
        PP: "P",
        BB: "B",
        RR: "R",
        PB: "R",
        BP: "R",
        PR: "B",
        RP: "B",
        BR: "P",
        RB: "P"
    }
    const decorate = [base]
    base = base.split(" ")
    let height = base.length - 1
    for (let i = 0; i < height; i++) {
        const newBase = []
        for (let j = 0; j < base.length - 1; j++) {
            newBase.push(rules[base[j] + base[j + 1]])
        }
        base = newBase
        decorate.unshift(newBase.join(" "))
    }
    return decorate
}
```

# [Day 16](https://github.com/dsabalete/advent-js-2022/tree/main/day16)

```js
function fixLetter(letter) {
    return letter
        .trim()
        .replace(/,/g, ", ")
        .replace(/\s+\./g, ".")
        .replace(/\s+/g, " ")
        .replace(/[??]+/g, "?")
        .replace(/(\s+)([,.?!])+/g, (m, s1, s2) => s2)
        .replace(/^([A-z])/, (m, p) => p.toUpperCase())
        .replace(/([?.!])\s+(\w)/g, (m, s1, s2) => `${s1} ${s2.toUpperCase()}`)
        .replace(/santa claus/gi, "Santa Claus")
        .replace(/([A-z])$/, (m, s) => `${s}.`)
}
```

# [Day 17](https://github.com/dsabalete/advent-js-2022/tree/main/day17)

```js
function carryGifts(gifts, maxWeight) {
    if (gifts.some((gift) => gift.length > maxWeight)) {
        return []
    }
    const bags = []
    let tempBag = []
    let tempWeight = 0
    gifts.forEach((gift) => {
        const weight = gift.length
        // if the gift fits in the bag
        if (tempWeight + weight <= maxWeight) {
            tempBag.push(gift)
            tempWeight += weight
        } else {
            // if the gift does not fit in the bag
            bags.push(tempBag.join(" "))
            tempBag = [gift]
            tempWeight = weight
        }
    })
    if (tempBag.length > 0) {
        bags.push(tempBag.join(" "))
    }
    return bags
}
```

# [Day 18](https://github.com/dsabalete/advent-js-2022/tree/main/day18)

```js
function dryNumber(dry, numbers) {
    numbers = Array.from({ length: numbers }, (_, i) => i + 1)
    return numbers.reduce((acc, curr) => {
        if (curr.toString().includes(dry.toString())) {
            acc.push(curr)
        }
        return acc
    }, [])
}
```

# [Day 19](https://github.com/dsabalete/advent-js-2022/tree/main/day19)

```js
function sortToys(toys, positions) {
    let temp = []
    toys.forEach((toy, index) => {
        const position = positions[index]
        temp.push([position, toy])
    })
    return temp.sort((a, b) => a[0] - b[0]).map((el) => el[1])
}
```

# [Day 20](https://github.com/dsabalete/advent-js-2022/tree/main/day20)

```js
function howManyReindeers(reindeerTypes, gifts) {
    reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity)

    return gifts.map((gift) => {
        let cityWeight = gift.weight
        let reindeers = reindeerTypes.filter(
            (reindeer) => reindeer.weightCapacity < gift.weight
        )
        let team = {}
        while (cityWeight != 0) {
            reindeers.map((reindeerType) => {
                if (cityWeight - reindeerType.weightCapacity >= 0) {
                    team[reindeerType.type]
                        ? (team[reindeerType.type] += 1)
                        : (team[reindeerType.type] = 1)
                    cityWeight -= reindeerType.weightCapacity
                }
            })
        }
        return {
            country: gift.country,
            reindeers: reindeers
                .map((y) => {
                    return {
                        type: y.type,
                        num: team[y.type]
                    }
                })
                .reverse()
        }
    })
}
```

# [Day 21](https://github.com/dsabalete/advent-js-2022/tree/main/day21)

```js
function printTable(gifts) {
    const giftColumnWidths = gifts.map((gift) => gift.name.length)
    const quantityColumnWidths = gifts.map(
        (gift) => gift.quantity.toString().length
    )
    const maxGiftCol = Math.max(...giftColumnWidths, "Gift".length)
    const maxQuantityCol = Math.max(...quantityColumnWidths, "Quantity".length)

    const [header, footer] = ["+", "*"].map((char) =>
        char.repeat(maxGiftCol + maxQuantityCol + 7)
    )
    const title = `| Gift${" ".repeat(maxGiftCol - 3)}| Quantity${" ".repeat(
        maxQuantityCol - 7
    )}|`

    const separator = `| ${"-".repeat(maxGiftCol)} | ${"-".repeat(
        maxQuantityCol
    )} |`

    const content = gifts.map(
        (gift) =>
            `| ${gift.name}${" ".repeat(maxGiftCol - gift.name.length)} | ${
                gift.quantity
            }${" ".repeat(maxQuantityCol - gift.quantity.toString().length)} |`
    )

    return [header, title, separator, ...content, footer].join("\n")
}
```

# [Day 22](https://github.com/dsabalete/advent-js-2022/tree/main/day22)

```js
function checkStepNumbers(systemNames, stepNumbers) {
    const systems = {}
    systemNames.forEach((systemName, index) => {
        if (systems[systemName]) {
            systems[systemName].push(stepNumbers[index])
        } else {
            systems[systemName] = [stepNumbers[index]]
        }
    })
    for (const [key, value] of Object.entries(systems)) {
        for (let i = 0; i < value.length - 1; i++) {
            if (value[i] >= value[i + 1]) {
                return false
            }
        }
    }
    return true
}
```

# [Day 23](https://github.com/dsabalete/advent-js-2022/tree/main/day23)

```js
function executeCommands(commands) {
    const reg = [0, 0, 0, 0, 0, 0, 0, 0]

    const getInt = (arg) => {
        if (arg === undefined) {
            return undefined
        }
        if (arg.startsWith("V")) {
            return parseInt(arg.slice(-1))
        } else {
            return parseInt(arg, 10)
        }
    }

    let pointer = 0
    while (pointer < commands.length) {
        const command = commands[pointer]
        const [instruction, args] = command.split(" ")
        const [arg1, arg2] = args.split(",")
        const i1 = getInt(arg1)
        const i2 = getInt(arg2)

        switch (instruction) {
            case "MOV":
                if (arg1.startsWith("V") && arg2.startsWith("V")) {
                    reg[i2] = reg[i1]
                } else {
                    reg[i2] = i1
                }
                break
            case "ADD":
                reg[i1] += reg[i2]
                reg[i1] %= 256
                break
            case "DEC":
                if (reg[i1] === 0) {
                    reg[i1] = 255
                } else {
                    reg[i1] -= 1
                }
                break
            case "INC":
                if (reg[i1] === 255) {
                    reg[i1] = 0
                } else {
                    reg[i1] += 1
                }
                break
            case "JMP":
                if (reg[0] !== 0) {
                    pointer = i1 - 1
                }
                break
            // default:
            //   throw new Error(`Unknown instruction: ${instruction}`)
        }
        pointer += 1
    }

    return reg
}
```

# [Day 24](https://github.com/dsabalete/advent-js-2022/tree/main/day24)

```js
function canExit(maze) {
    // Get the starting position
    let start
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === "S") {
                start = [i, j]
                break
            }
        }
    }

    // Initialize the queue with the starting position
    const queue = [start]
    // Initialize a set to store the visited positions
    const visited = new Set()

    // Define the directions for the movements
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]

    // Iterate through the queue
    while (queue.length > 0) {
        // Get the first position from the queue
        const [x, y] = queue.shift()
        // If the position is the exit, return true
        if (maze[x][y] === "E") {
            return true
        }
        // Mark the position as visited
        visited.add(`${x},${y}`)
        // Iterate through the directions
        for (const [dx, dy] of directions) {
            // Calculate the next position
            const i = x + dx
            const j = y + dy
            // Check if the next position is valid
            if (
                i >= 0 &&
                i < maze.length &&
                j >= 0 &&
                j < maze[i].length &&
                maze[i][j] !== "W" &&
                !visited.has(`${i},${j}`)
            ) {
                // Add the next position to the queue
                queue.push([i, j])
            }
        }
    }

    // Return false if there is no exit
    return false
}
```
