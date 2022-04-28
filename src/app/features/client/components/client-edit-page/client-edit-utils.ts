export function getDateInputFormat(date: Date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  console.log('data', `${day < 10 ? '0' + day : day}`);
  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
}
