import { test, expect } from "vitest";
import TimeLimitedCache from "./2622-cache-with-time-limit";

test('', () => {
    return new Promise((resolve, reject) => {
        const timeLimitedCacheInstance = new TimeLimitedCache();

        expect(timeLimitedCacheInstance.set(1, 13, 50)).toBe(false);
        expect(timeLimitedCacheInstance.set(2, 14, 300)).toBe(false);

        setTimeout(() => {
            expect(timeLimitedCacheInstance.set(1, 15, 100)).toBe(true);
        }, 40)

        setTimeout(() => {
            expect(timeLimitedCacheInstance.get(2)).toBe(-1);
        }, 800)

        setTimeout(() => {
            expect(timeLimitedCacheInstance.count()).toBe(0);
            resolve()
        }, 850);
    })
})