export interface PaginationButton {
  text: string,
  active: boolean,
  disabled: boolean,
  click: number
}

export function generateButtons(total: number, actual: number): PaginationButton[] {
  let buttons: PaginationButton[] = [];
  buttons = [
    {
      text: 'PREV',
      active: false,
      disabled: actual === 1,
      click: 1
    }
  ];

  let indexes: number[] = [];
  if(total <= 5) {
    indexes = [...Array(total).keys()]
  } else {
    if(actual < 4) {
      indexes = [1, 2, 3, 0, total];
    } else if (total - 2 < actual) {
      indexes = [1, 0, total-2, total-1, total];
    } else {
      indexes = [1, 0, actual, 0, total]
    }
  }

  buttons = buttons.concat(indexes.map(index => {
    return {
      text: index === 0 ? '...' : index.toString(),
      active: index === actual,
      disabled: index === 0 || index === actual,
      click: index
    }
  }));
  buttons = buttons.concat([
    {
      text: 'NEXT',
      active: false,
      disabled: actual === total,
      click: actual+1
    }
  ]);
  return buttons;

}
