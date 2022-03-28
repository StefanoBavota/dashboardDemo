export function getYears(num: number, selected: boolean): string[] {
  const currentYear = new Date().getFullYear();
  let years = Array.from(Array(num).keys()).map(x => (currentYear - x).toString());
  if(!selected) years = ['-'].concat(years);
  return years;
}
