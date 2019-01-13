"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timestamp = timestamp;
exports.dateDaysAgo = dateDaysAgo;
exports.randomNum = randomNum;
exports.cloneObject = cloneObject;
exports.getObjectByKey = getObjectByKey;
exports.addToArrayOfObjects = addToArrayOfObjects;
exports.getClientAccess = getClientAccess;
exports.hasProp = hasProp;
function timestamp() {
    return new Date().toISOString().slice(0, 22) + "Z";
    //   return new Date().toISOString().slice(0, 19).replace("T", " ")+"Z";
}

function dateDaysAgo() {
    var since = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var today = new Date();
    today.setDate(today.getDate() - since);
    return today.toISOString();
}

function randomNum() {
    return Math.floor(Math.random() * 1000000);
}

function cloneObject() {
    var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var source = arguments[1];

    return Object.assign(model, source);
}

/**
 * @description getObjectByKey returns the object from an Array of
 * Objects that has the key with a given value or undefined!
 * @param {Array} arrayObject Array of Objects
 * @param {String} key Object key could be a String or Integer
 * @param {String} value Object value could be a String or Integer
 */
function getObjectByKey(arrayObject, key, value) {
    return arrayObject.find(function (obj) {
        return obj[key] === value;
    });
}

/**
 * @description addToArrayOfObjects add a new object item to an array of objects
 * @param {Object} arrayOfObjects the array of object
 * @param {Number} limit maximum number of objects the array should not exceed
 * @param {Object} newObjectElement the new item to be added to the array of objects
 * @returns {Object} the new array of Objects
 */
function addToArrayOfObjects(arrayOfObjects, limit, newObjectElement) {
    var size = Object.keys(arrayOfObjects).length;
    if (size < limit) {
        arrayOfObjects.push(newObjectElement);
    } else {
        // arr.splice(indexToRemove, numToRemove)
        arrayOfObjects.splice(0, 1);
        arrayOfObjects.push(newObjectElement);
    }
    return arrayOfObjects;
}

/**
 * @description getClientAccess get the Ip Address and TimeSTamp of a request object.
 * @param {String} req the request object
 * @returns {Object} { accessDate, ipAddress } access date and the ip address
 */
function getClientAccess(req) {
    var ipAddress = req.ip || req._remoteAddress;
    // const lang = req.get("accept-language");
    var accessDate = req._startTime || "";
    return { accessDate: accessDate, ipAddress: ipAddress };
}

function hasProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
//# sourceMappingURL=helpers.js.map