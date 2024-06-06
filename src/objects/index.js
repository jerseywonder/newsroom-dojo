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

/**
 * Merges properties from the source object into the target object.
 * If a property in the target object is not an object, it is overwritten by the source object property.
 * If a property in the source object is an object, the function is called recursively.
 *
 * @param {Object} to - The target object.
 * @param {Object} from - The source object.
 * @returns {Object} - The merged object.
 */
export function merge(to, from) {
    for (const n in from) {
        if (typeof to[n] != 'object') {
            // Overwrite the target property if it's not an object
            to[n] = from[n];
        } else if (typeof from[n] == 'object') {
            // Recursively merge if the source property is an object
            to[n] = merge(to[n], from[n]);
        }
    }
    return to;
};