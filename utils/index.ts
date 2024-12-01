export const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
  return new Date(date).toLocaleDateString("es", options)
}
