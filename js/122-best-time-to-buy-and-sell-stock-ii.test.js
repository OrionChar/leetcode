import { test, expect } from "vitest";
import maxProfit from "./122-best-time-to-buy-and-sell-stock-ii";

test('', () => {
    expect(maxProfit([7,1,5,3,6,4])).equal(7)
    expect(maxProfit([1,2,3,4,5])).equal(4)
    expect(maxProfit([7,6,4,3,1])).equal(0)
})
