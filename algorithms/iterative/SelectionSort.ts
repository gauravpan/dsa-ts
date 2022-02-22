import { swap } from "../utils";

export function SelectionSort(_list: Array<number>): Array<number> {
  let list = [..._list];
  const n = list.length;

  for (let i = 0; i < n; i++) {
    let small = list[i];
    let smallIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (list[j] < small) {
        small = list[j];
        smallIndex = j;
      }
    }
    swap(list, i, smallIndex);
  }
  return list;
}
