import { Fibonacci } from "src/Fibonacci";

test("0", () => expect(Fibonacci.gief(0)).toBe(0));
test("1", () => expect(Fibonacci.gief(1)).toBe(1));
test("2", () => expect(Fibonacci.gief(2)).toBe(1));
test("3", () => expect(Fibonacci.gief(3)).toBe(2));
test("4", () => expect(Fibonacci.gief(4)).toBe(3));
test("5", () => expect(Fibonacci.gief(5)).toBe(5));
