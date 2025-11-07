import { test, expect } from "vitest";
import compose from "./2629-function-composition";

test('', () => {
    expect(compose([x => x + 1, x => x * x, x => 2 * x])(4)).toBe(65)
    expect(compose([x => 10 * x, x => 10 * x, x => 10 * x])(1)).toBe(1000)
    expect(compose([])(42)).toBe(42)
})