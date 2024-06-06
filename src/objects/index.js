/**
 * Sorts an object's properties based on a specified order of keys.
 *
 * @param {Object} object - The object to sort.
 * @param {Array} keys - The array of keys specifying the order.
 * @returns {Object} - The sorted object.
 */
export function sortObjectByKey(object, keys) {
    const sortedObject = {};

    // Sort the keys in the order specified in the 'keys' array
    keys.forEach((key) => {
        if (object.hasOwnProperty(key)) {
            sortedObject[key] = object[key];
        }
    });

    // Include any remaining keys that are not in the 'keys' array
    for (const key in object) {
        if (!keys.includes(key)) {
            sortedObject[key] = object[key];
        }
    }

    return sortedObject;
}