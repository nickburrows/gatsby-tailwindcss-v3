const formatDate = (date) => {
  const now = new Date(date)

  return `${now.getFullYear()} / ${now.getMonth() + 1} / ${now.getDate()}`
}

export default formatDate
