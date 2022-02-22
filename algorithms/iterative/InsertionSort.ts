export function InsertionSort(_list: Array<number>): Array<number> {
  let list = [..._list];
  const n = list.length;

  for (let i = 0; i < n; i++) {
    let j = i - 1;
    let itemToInsert = list[i];

    while (j >= 0 && list[j] > itemToInsert) {
      list[j + 1] = list[j];
      j = j - 1;
    }
    list[j + 1] = itemToInsert;
  }

  return list;
}
