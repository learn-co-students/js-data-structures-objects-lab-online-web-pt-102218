// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
   const out = Object.assign({}, driver, { [key]: value});
   return out
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const out = Object.assign({}, driver)
    delete out[key]
    return out
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}