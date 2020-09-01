// Write your solution in this file!

var driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}


// return Object.assign({}, obj, { [key]: value });
// }

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
    // delete wednesdayMenu.salad;
    const newObj = { ...driver };
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}