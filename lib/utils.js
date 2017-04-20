'use strict'

/**
 * objectToUrlString
 * @description object to url query string
 * @param {Object} obj
 * @return {String} stringified query object
 */
function objectToQueryString(obj) {
  return Object.keys(obj)
    .sort()
    .map(function mapObjectToKeyValuePairString(key) {
      var value = obj[key];
      value = Array.isArray(value) ? value : [value];
      var keyValuePair = key + '=' + value;
      return keyValuePair;
    })
    .join('&');
}


function cloneObject(obj) {
  let newObject = Object.create(obj);
  return Object.assign(newObject, obj);
};

module.exports = exports = {
  objectToQueryString: objectToQueryString,
  cloneObject: cloneObject,
};
