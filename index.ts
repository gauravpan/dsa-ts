import { GCD } from "./algorithms/iterative/GCD";
import { BubbleSort } from "./algorithms/iterative/BubbleSort";
import { SelectionSort } from "./algorithms/iterative/SelectionSort";
import { InsertionSort } from "./algorithms/iterative/InsertionSort";
const log = console.log;
const list = [55, 1, 82, 53, 64, 4, 34, 67, 434, 345, 54, 33];

//
// -------------- Iterative Algorithms --------
//
log(`GCD(12, 18) =`, GCD(12, 18));
log(list.join(" → "), `BubbleSort:`, BubbleSort(list).join(" → "));
log(list.join(" → "), `SelectionSort:`, SelectionSort(list).join(" → "));
log(list.join(" → "), `InsertionSort:`, InsertionSort(list).join(" → "));

//
// -------------- Divide and Conquer Algorithms --------
//
