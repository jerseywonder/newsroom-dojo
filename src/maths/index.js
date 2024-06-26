//
// Calculating the average/mean
// https://www.sitepoint.com/community/t/calculating-the-average-mean/7302/3
//

/**
 * The "mean" is the "average" you're used to, where you add up all the numbers
 * and then divide by the number of numbers.
 *
 * For example, the "mean" of [3, 5, 4, 4, 1, 1, 2, 3] is 2.875.
 *
 * @param {Array} numbers An array of numbers.
 * @return {Number} The calculated average (or mean) value from the specified
 *     numbers.
 */
export function mean(numbers) {
    var total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
}

//
// alternative mean/average method (from https://www.30secondsofcode.org/snippet/average):
// const mean = (...numbers) => numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
//

/**
 * The "median" is the "middle" value in the list of numbers.
 *
 * @param {Array} numbers An array of numbers.
 * @return {Number} The calculated median value from the specified numbers.
 */
export function median(numbers) {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    var median = 0, numsLen = numbers.length;
    numbers.sort();

    if (
        numsLen % 2 === 0 // is even
    ) {
        // average of two middle numbers
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = numbers[(numsLen - 1) / 2];
    }

    return median;
}

/**
 * The "mode" is the number that is repeated most often.
 *
 * For example, the "mode" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 3, 4].
 *
 * @param {Array} numbers An array of numbers.
 * @return {Array} The mode of the specified numbers.
 */
export function mode(numbers) {
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array
    // mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
    var modes = [], count = [], i, number, maxIndex = 0;

    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
}

/**
 * The "range" of a list a numbers is the difference between the largest and
 * smallest values.
 *
 * For example, the "range" of [3, 5, 4, 4, 1, 1, 2, 3] is [1, 5].
 *
 * @param {Array} numbers An array of numbers.
 * @return {Array} The range of the specified numbers.
 */
export function range(numbers) {
    numbers.sort();
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Returns the minimum value in an array of numbers.
 *
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The minimum value in the array.
 */
export function getMinValue(numbers) {
    if (numbers.length === 0) {
        throw new Error("The array is empty.");
    }

    return Math.min(...numbers);
}

/**
 * Returns the minimum value in an array of numbers.
 *
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The minimum value in the array.
 */
export function getMaxValue(numbers) {
    if (numbers.length === 0) {
        throw new Error("The array is empty.");
    }

    return Math.max(...numbers);
}

