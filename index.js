// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(_driver, _key, _value) {
  return Object.assign({}, _driver, { [_key] : _value });
}

function destructivelyUpdateDriverWithKeyAndValue(_driver, _key, _value) {
  _driver[_key] = _value;
  return _driver;
}

function deleteFromDriverByKey(_driver, _key) {
  const result = Object.assign({}, _driver);
  delete result[_key];
  return result;
}

function destructivelyDeleteFromDriverByKey(_driver, _key) {
  delete _driver[_key];
  return _driver;
}