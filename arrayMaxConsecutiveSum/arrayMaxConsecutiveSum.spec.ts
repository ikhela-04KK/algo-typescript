import { MaxConsecutiveSum } from './arrayMaxConsecutiveSum';
import { test, expect } from "vitest"

test('arrayMaxConsecutive () ', () => {
    const data = [2, 3, 5, 1, 6];
    const count = 2;

    expect( MaxConsecutiveSum(data, count)).toBe(8)
});
