// Write your solution in this file!
/*
updateDriverWithKeyAndValue()- this function should take in three 
arguments: a driver Object, a key and a value. This function should 
not mutate the driver and should return a new driver that has an 
updated value for the key passed in.

destructivelyUpdateDriverWithKeyAndValue() - this function should 
work the same as updateDriverWithKeyAndValue() but it should mutate 
the driver parameter passed in.

deleteFromDriverByKey() - this function should take in a driver Object
 and a key. It should delete the key/value pair for the key that was 
 passed in from the driver Object. This should all not actually mutate 
 the driver passed in.

destructivelyDeleteFromDriverByKey() - this function should work the 
same as deleteFromDriverByKey() 
*/


function updateDriverWithKeyAndValue(inputDriver, driverKey, driverValue){
    return Object.assign({}, inputDriver, {[driverKey]: driverValue})
}
