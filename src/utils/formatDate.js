export const formatDate = (dateString = new Date()) => {
  const locale = navigator.language || 'en-EN'
  const date = new Date(dateString)

  return date.toLocaleDateString(locale, {
    year: 'numeric',
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
}

export const formatDateWeekDay = (dateString) => {
  const locale = navigator.language || 'en-EN'
  const now = new Date(dateString)

  return now.toLocaleDateString(locale, {
    weekday: 'short',
  })
}
