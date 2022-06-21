let secondArray = [1, 3, 2, 6, 9, 6, 1, 100, 122, 122, 100, 3];

function secBigestNumber(arr) {
  // use loop

  let biggestNumber = 0;
  let secondNumber = -1;

  // O(n)
  for (let value of arr) {
    // value ကြီးတဲ့ ကောင်
    if (value > biggestNumber) {
      biggestNumber = value; // f= 3, value = 3 , sec = 1
    }
    // value ထက်ကြီး biggest ထက် ငယ်
    else if (value < biggestNumber && value > secondNumber) {
      secondNumber = value;
    }
    console.log(value);
  }
  console.log("FIRST", firstNumber);
  console.log("FIRST", secondNumber);
}

secBigestNumber(secondArray);
