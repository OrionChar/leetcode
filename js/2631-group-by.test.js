import { test, expect } from "vitest";
import initGroupBy from "./2631-group-by";

initGroupBy()

test('', () => {
    expect([1, 2, 3].groupBy(String)).toEqual({ "1": [1], "2": [2], "3": [3] })

    expect([
        { "id": "1" },
        { "id": "1" },
        { "id": "2" }
    ].groupBy((item) => item.id)).toEqual({
        "1": [{ "id": "1" }, { "id": "1" }],
        "2": [{ "id": "2" }]
    })

    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy((n) => String(n > 5))).toEqual(
        {
            "true": [6, 7, 8, 9, 10],
            "false": [1, 2, 3, 4, 5]
        }
    )
})