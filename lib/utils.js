'use strict'

/**
 * objectToUrlString
 * @description object to url query string
 * @param {Object} obj
 * @return {String} stringified query object
 */
function objectToUrlString(obj) {
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

module.export = exports = {
  objectToUrlString: objectToUrlString,
};
