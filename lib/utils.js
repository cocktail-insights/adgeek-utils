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

module.exports = exports = {
  objectToQueryString: objectToQueryString,
  cloneObject: cloneObject,
  isMobile: isMobile,
};
