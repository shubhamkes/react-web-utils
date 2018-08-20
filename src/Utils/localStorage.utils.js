// /********************************************************
//  * Provides Methods for Local Storage
//  * Every single localStorage utility would be used through
//  * these methods
//  *******************************************************/
// let volatile = {};
// let nonVolatile = {};

// try {
//     volatile = localStorage.volatile ? JSON.parse(localStorage.volatile) : {};
//     nonVolatile = localStorage.nonVolatile ? JSON.parse(localStorage.nonVolatile) : {};
// } catch (e) { }

// const exports = module.exports;

// setDefault();

// async function setDefault() {
//     Promise.all([AsyncStorage.getItem(resolveKey('volatile')), AsyncStorage.getItem(resolveKey('nonVolatile'))])
//         .then(res => {
//             try {
//                 volatile = res[0] ? JSON.parse(res[0]) : {};
//                 nonVolatile = res[1] ? JSON.parse(res[1]) : {};
//             } catch (e) {
//                 // console.log(e);
//             }
//         });
// }


// /**
//  * Sets item in localStorage under 'volatile' keyword
//  * @param  {string} key
//  * @param  {any} payload 
//  */
// exports.SetItem = function (key, payload) {
//     // let convertedPayload = typeof payload == 'string' ? payload : JSON.stringify(payload);
//     volatile[key] = payload;
//     localStorage.volatile = JSON.stringify(volatile);
// }

// /**
//  * Returns data for particular key
//  * @param  {string} key 
//  * @param  {boolean} nonVolatile - (optional)
//  */
// exports.GetItem = function (key, nonVolatile = false) {
//     if (!key) {
//         return null;
//     }

//     if (nonVolatile) {
//         return nonVolatile[key];
//     }
//     return volatile[key];

// }

// /**
//  * Same as SetItem, only difference is nonVolatile item is not wiped off even after logout
//  * @param  {string} key
//  * @param  {any} payload
//  */
// exports.SetNonVolatileItem = function (key, payload) {
//     nonVolatile[key] = payload;
//     localStorage.nonVolatile = JSON.stringify(nonVolatile);
// }

// /**
//  * Removes localstorage value
//  * based on parameter, can remove particular key or whole volatile or nonVolatile storage from localStorage
//  * @param  {string} {key - (optional)
//  * @param  {boolean} clearLocalStorage - (optional)
//  * @param  {boolean} clearNonVolatileStorage} - (optional)
//  */
// exports.RemoveItem = function ({ key, clearLocalStorage, clearNonVolatileStorage }) {
//     if (key) {
//         localStorage.removeItem(key);
//     } else if (clearLocalStorage) {
//         localStorage.removeItem('volatile');
//     } else if (clearNonVolatileStorage) {
//         localStorage.removeItem('nonVolatile')
//     }
// }
