let array = [1, 3, 12, 3, 14, 5, 6, 89, 5, 4, 3];
// static form
function reverseArray(arr) {
  let resultArray = new Array(arr.length); //[empty * 11];
  let resultIndex = 0;
  let index = arr.length - 1; // initial => 10
  while (index >= 0) {
    //conditional
    let lastValue = arr[index];
    resultArray[resultIndex] = lastValue;
    //increase
    index--;
    resultIndex++;
  }

  return resultArray;
}

// dynamics form
function reverse(arr) {
  let resultArray = [];
  let index = arr.length - 1;
  while (index >= 0) {
    let lastValue = arr[index];
    resultArray.push(lastValue);
    index--;
  }
  return resultArray;
}

let arr1 = reverseArray(array);
let arr2 = reverse(array);
console.log(arr1, arr2);
