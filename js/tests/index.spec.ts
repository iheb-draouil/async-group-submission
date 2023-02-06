import { getLongestAscSs } from 'src/index';

test('Empty array', () => {
    expect(getLongestAscSs([])).toEqual([]);
});

test('Single element array 1', () => {
    expect(getLongestAscSs([1])).toEqual([1]);
});

test('Single element array 2', () => {
    expect(getLongestAscSs([2])).toEqual([2]);
});

test('The array is already sorted strictly ascendingly', () => {
    expect(getLongestAscSs([1, 2, 3])).toEqual([1, 2, 3]);
});

test('The array is non-strictly ascendingly sorted', () => {
    expect(getLongestAscSs([1, 2, 2, 3])).toEqual([2, 3]);
});

test('General Case 1', () => {
    expect(getLongestAscSs([1, 2, 1, 3])).toEqual([1, 3]);
});

test('General Case 2', () => {
    expect(getLongestAscSs([1, 2, 1, 3, 4])).toEqual([1, 3, 4]);
});

test('General Case 3', () => {
    expect(getLongestAscSs([2, 1, 1, 3, 4])).toEqual([1, 3, 4]);
});

test('General Case 4', () => {
    expect(getLongestAscSs([2, 2, 1, 3, 4])).toEqual([1, 3, 4]);
});

test('General Case 5', () => {
    expect(getLongestAscSs([2, 2])).toEqual([2]);
});

test('General Case 6', () => {
    expect(getLongestAscSs([1, 2, 1, 3, 2, 4])).toEqual([2, 4]);
});