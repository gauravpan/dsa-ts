//
//  Iterative Algorithms
//
//  1. GCD

export function GCD(a: number, b: number): number {
  if (a === 0) return b;
  else if (b === 0) return a;
  else {
    while (b !== 0) {
      let r: number = a % b;
      a = b;
      b = r;
    }
    return a;
  }
}
