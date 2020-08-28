// Write your solution in this file!

function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(colors, key, value){
    colors[key] = value;
return colors;
}
function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
  }

  function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
  
    return driver;
  }
  




