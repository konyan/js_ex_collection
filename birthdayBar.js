let choArray = [1, 3, 2, 4, 6, 8, 2, 2];
////////////////0, 1, 2, 3, 4, 5, 6, 7
// let pairValue = 4;
// let selectSeg = 2;

// (1,3)(3,2)(4,6)(6,8)(8,2)(2,2);
// let result = (1,3) (2,2) => 2

function birthdayBar(arr, pairValue, pairCount) {
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    // nextIndex = index+1
    let value = arr[index];

    if (index + (pairCount - 1) < arr.length) {
      for (let i = 1; i < pairCount; i++) {
        let nextIndex = index + i;
        value += arr[nextIndex];
      }
      if (value === pairValue) {
        result++;
      }
    }
  }
  return result;
}

const resultPair = birthdayBar(choArray, 4, 2);
console.log("RES", resultPair);
