export const formatDate = () => {
  const locale = navigator.language || 'en-EN'
  const now = new Date()

  return now.toLocaleDateString(locale, {
    year: 'numeric',
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })
}
