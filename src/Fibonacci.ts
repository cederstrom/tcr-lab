export class Fibonacci {
  static gief(start: number): number {
    if (start <= 1) return start;
    return Fibonacci.gief(start - 1) + Fibonacci.gief(start - 2);
  }
}
