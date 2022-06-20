const parseDateDMY = (dateString) => {
  const parts = dateString.split('-')
  parts[1] -= 1 // months are 0-indexed
  return new Date(...parts.reverse())
}

module.exports = {
  parseDateDMY: parseDateDMY
}
