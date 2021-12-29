export const showNormalDate = (date) => {
  return `${new Date(date).getUTCDate()}/${
    new Date(date).getUTCMonth() + 1
  }/${new Date(date).getUTCFullYear()}`
}

export const datesAreValid = (from, to) => {
  let today = new Date()
  today.setUTCHours(24, 0, 0)
  let todayUnix = today.getTime()
  let valid = false
  if (from < to && to < todayUnix) {
    valid = true
  }

  return valid
}
