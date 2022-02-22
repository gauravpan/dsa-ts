import { swap } from "../utils";

export function BubbleSort(_list: Array<number>): Array<number> {
  let list = [..._list];
  const n = list.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (list[j] > list[j + 1]) swap(list, j, j + 1);
    }
  }
  return list;
}
