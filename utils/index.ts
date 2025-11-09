export const formatDate = (date: string | Date | undefined): string => {
  if (!date) return "Unknown date"

  // Handle Date objects
  if (date instanceof Date) {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
    return date.toLocaleDateString("es", options)
  }

  // Handle string dates
  const dateStr = String(date).trim()

  // Try to parse common formats like "dec 1 2022" or "dec 7 2022"
  // Map month abbreviations (case insensitive)
  const monthMap: Record<string, string> = {
    jan: "01",
    feb: "02",
    mar: "03",
    apr: "04",
    may: "05",
    jun: "06",
    jul: "07",
    aug: "08",
    sep: "09",
    oct: "10",
    nov: "11",
    dec: "12"
  }

  // Try to parse format like "dec 1 2022"
  const customFormatMatch = dateStr.match(/^([a-z]+)\s+(\d+)\s+(\d+)$/i)
  if (customFormatMatch) {
    const [, monthAbbr, day, year] = customFormatMatch
    const month = monthMap[monthAbbr.toLowerCase()]
    if (month) {
      const isoDate = `${year}-${month}-${day.padStart(2, "0")}`
      const parsedDate = new Date(isoDate)
      if (!isNaN(parsedDate.getTime())) {
        const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
        return parsedDate.toLocaleDateString("es", options)
      }
    }
  }

  // Try standard Date parsing
  const parsedDate = new Date(dateStr)
  if (!isNaN(parsedDate.getTime())) {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
    return parsedDate.toLocaleDateString("es", options)
  }

  // If all parsing fails, return the original string
  return dateStr
}
