/********************************************************
 * Provides Methods for Local Storage
 * Every single localStorage utility would be used through
 * these methods
 *******************************************************/
let content = {};
let nonVolatile = {};

try {
    content = localStorage.content ? JSON.parse(localStorage.content) : {};
    nonVolatile = localStorage.nonVolatile ? JSON.parse(localStorage.nonVolatile) : {};
} catch (e) { }

const exports = module.exports;

/**
 * Sets item in localStorage under 'content' keyword
 * @param  {string} key
 * @param  {any} payload 
 */
exports.SetItem = function (key, payload) {
    // let convertedPayload = typeof payload == 'string' ? payload : JSON.stringify(payload);
    content[key] = payload;
    localStorage.content = JSON.stringify(content);
}

/**
 * Returns data for particular key
 * @param  {string} key 
 * @param  {boolean} nonVolatile - (optional)
 */
exports.GetItem = function (key, nonVolatile = false) {
    if (!key) {
        return null;
    }

    if (nonVolatile) {
        return nonVolatile[key];
    }
    return content[key];

}

/**
 * Same as SetItem, only difference is nonVolatile item is not wiped off even after logout
 * @param  {string} key
 * @param  {any} payload
 */
exports.SetNonVolatileItem = function (key, payload) {
    nonVolatile[key] = payload;
    localStorage.nonVolatile = JSON.stringify(nonVolatile);
}

/**
 * Removes localstorage value
 * based on parameter, can remove particular key or whole content or nonVolatile storage from localStorage
 * @param  {string} {key - (optional)
 * @param  {boolean} clearLocalStorage - (optional)
 * @param  {boolean} clearNonVolatileStorage} - (optional)
 */
exports.RemoveItem = function ({ key, clearLocalStorage, clearNonVolatileStorage }) {
    if (key) {
        localStorage.removeItem(key);
    } else if (clearLocalStorage) {
        localStorage.removeItem('content');
    } else if (clearNonVolatileStorage) {
        localStorage.removeItem('nonVolatile')
    }
}
