export function getDateInputFormat(date: Date) {
  const year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
}
