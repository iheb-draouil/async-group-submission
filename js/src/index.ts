export function getLongestAscSs(l: number[]): number[] {

    if (l.length == 0 || l.length == 1) {
        return l.slice();
    }
    
    const resultCache = new Map<number, [number, number]>();

    let headIndex = 0;
    let tailIndex = 0;

    for (let i = 1; i < l.length; i++) {
        
        if (l[i] <= l[tailIndex]) {
            resultCache.set(tailIndex - headIndex + 1, [headIndex, tailIndex]);
            headIndex = i;
            tailIndex = i;
        }

        else {
            tailIndex = i;
        }

        if (i == l.length - 1) {
            resultCache.set(tailIndex - headIndex + 1, [headIndex, tailIndex]);
        }

    }

    const bounds = Array.from(resultCache.values()).pop()!;

    return l.slice(bounds[0], bounds[1] + 1);
}