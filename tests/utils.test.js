const test = require('tape');

const Utils = require('../lib/utils');
const objectToQueryString = Utils.objectToQueryString;

test('objectToUrlString returns empty string for empty object', (t) => {
  const queryObject = {};

  const queryString = objectToQueryString(queryObject);

  t.equal(queryString, '');
  t.end();
});

test('objectToUrlString returns "Anded" key-value pair string', (t) => {
  const queryObject = {
    foo: 'bar',
    foo1: 'bar1',
  };

  const queryString = objectToQueryString(queryObject);
  t.equal(queryString, 'foo=bar&foo1=bar1');
  t.end();
});

