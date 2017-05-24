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
      value = Array.isArray(value) ? JSON.stringify(value) : [value];
      var keyValuePair = key + '=' + value;
      return keyValuePair;
    })
    .join('&');
}


function cloneObject(obj) {
  let newObject = Object.create(obj);
  return Object.assign(newObject, obj);
};

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigation.userAgent);
}


/**
 * hyphenate
 * @description takes any string and generates a lowercased hyphenated version
 * @param {String} str
 * @return {String}
 */
function hyphenate(str) {
  var regex = /[\.\s,_]+/g // to cater for different types of strings literals
  return str.toLowerCase().replace(regex, '-');
}


module.exports = exports = {
  objectToQueryString: objectToQueryString,
  cloneObject: cloneObject,
  isMobile: isMobile,
  hyphenate: hyphenate,
};
