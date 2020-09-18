// Write your solution in this file!
/*

deleteFromDriverByKey() - this function should take in a driver Object
 and a key. It should delete the key/value pair for the key that was 
 passed in from the driver Object. This should all not actually mutate 
 the driver passed in.

destructivelyDeleteFromDriverByKey() - this function should work the 
same as deleteFromDriverByKey() 
*/

const driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver
}