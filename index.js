// Write your solution in this file!
let driver = {name: 'James',
address: 'address'
}

function updateDriverWithKeyAndValue(object, key, value ) {
    return Object.assign({}, object, { [key]: value });

}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value ) {
    return Object.assign(object, { [key]: value });

}

function deleteFromDriverByKey(driver, key) {
  const newObject = Object.assign({}, driver);
    
    delete newObject[key];
return newObject
}

function destructivelyDeleteFromDriverByKey(driver, key) {
   
    delete driver[key]
    return driver


}