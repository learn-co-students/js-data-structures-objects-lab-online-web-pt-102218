// Write your solution in this file!

const driver = {};

driver.name = 'Sam';

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {
    [key]: value
  });
}

const newDriver = updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = updateDriverWithKeyAndValue(driver, key);

  delete newDriver.key;

  return newDriver;

}

function destructivelyDeleteFromDriverByKey(driver, key) {
  let newDriver =  destructivelyUpdateDriverWithKeyAndValue(driver, key);

  delete newDriver.key;
  return newDriver;

}
