import sharp from "sharp"
import { globSync } from "glob"
import { basename, dirname, join } from "path"

const files = globSync("public/**/*.png", {
  ignore: ["public/**/favicon*.png", "public/**/apple-touch-icon*.png"]
})

console.log(`Converting ${files.length} PNGs to WebP...`)

let totalSaved = 0

for (const file of files) {
  const dir = dirname(file)
  const name = basename(file, ".png")
  const outPath = join(dir, `${name}.webp`)

  const inputStat = await sharp(file).metadata()
  const output = await sharp(file).webp({ quality: 85 }).toBuffer()
  await sharp(output).toFile(outPath)

  const saved = inputStat.size - output.length
  totalSaved += saved
  const pct = ((1 - output.length / inputStat.size) * 100).toFixed(1)
  console.log(`  ${name}.png → ${name}.webp  (${pct}% reduction, ${(saved / 1024).toFixed(0)}KB saved)`)
}

console.log(`\nDone. Total savings: ${(totalSaved / 1024 / 1024).toFixed(1)}MB`)
