/**
 * Rounds a number to a specific numbers of decimals.
 *
 * See https://stackoverflow.com/questions/15762768/javascript-math-round-to-two-decimal-places/15762794
 */
export function roundTo(n: number, decimals: number) {
    let negative = false;
    if (decimals === undefined) {
        decimals = 0;
    }

    if (n < 0) {
        negative = true;
        n = n * -1;
    }
    const multiplicator = Math.pow(10, decimals);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = +(Math.round(n) / multiplicator).toFixed(2);

    if (negative) {
        n = +(n * -1).toFixed(2);
    }
    return n;
}
