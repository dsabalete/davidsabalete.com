import { execSync } from "node:child_process"
import { copyFileSync, existsSync, unlinkSync } from "node:fs"
import { resolve } from "node:path"

const rootDir = resolve(import.meta.dirname, "..")
const cvPath = resolve(rootDir, "cv.md")

if (!existsSync(cvPath)) {
  console.error(`CV file not found at ${cvPath}`)
  process.exit(1)
}

try {
  execSync(`npx --yes md-to-pdf "${cvPath}"`, { stdio: "inherit" })

  const pdfPath = resolve(rootDir, "cv.pdf")
  const publicPdfPath = resolve(rootDir, "public", "cv.pdf")

  copyFileSync(pdfPath, publicPdfPath)
  unlinkSync(pdfPath)

  console.log(`CV PDF copied to ${publicPdfPath}`)
} catch {
  process.exit(1)
}
