import { test, expect } from "vitest";
import maxProfit from "./121-best-time-to-buy-and-sell-stock";

test('', () => {
    expect(maxProfit([7,1,5,3,6,4])).equal(5)
    expect(maxProfit([7,6,4,3,1])).equal(0)
})