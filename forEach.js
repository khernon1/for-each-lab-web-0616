function iterativeLog(arr) {
  arr.forEach(element => {
    console.log(`${arr.indexOf(element)}: ${element}`) 
  })
}

function iterate(callback) {
  var arr = [1, 2, "kevin", 4, 5]
    arr.forEach(callback)
    return arr
}

function doToArray(arr, callback) {
  arr.forEach(callback)
}