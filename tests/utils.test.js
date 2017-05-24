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

test('hyphenate returns same string', (t) => {
  const str = 'something';

  const newStr = Utils.hyphenate(str);
  t.equal(newStr, str);
  t.end();
});

test('hyphenate returns lowercased string with hyphens', (t) => {
  const str = 'Mr. and Mrs. Foo Bar';

  const newStr = Utils.hyphenate(str);

  t.equal(newStr, 'mr-and-mrs-foo-bar');
  t.end();
});

test('hyphenate returns lowercased string without trailing hyphens', (t) => {
  const str = "The string, that brings: both 1 + 2 = 3; together & decypher's code is brave! (@menacle).     ";

  const newStr = Utils.hyphenate(str);

  t.equal(newStr, 'the-string-that-brings-both-1-2-3-together-decyphers-code-is-brave-menacle');
  t.end();
});
