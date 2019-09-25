// Reverse Array
console.log('--- Reverse Array ---');

let arrayToReverse = [1, 2, 3, 6, 4, 5];

function reverseArray(arr) {
  let n = arr.length;
  let revArr = [];

  for (let i = n - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }

  return revArr.join(' ');
}

console.log(reverseArray(arrayToReverse));

// ----------------------------------------------------------------------------
// Palindrome
console.log('--- Palindrome ---');

let testString = 'abut-1-tuba';

function checkForPalindrome(string) {
  let clearString = string.match(/[A-Z]/gi);
  let result = 'YES';

  if (clearString.length % 2 !== 0) {
    result = 'NO';
  } else {
    for (let i = 0; i < clearString.length; i++) {
      if (clearString[i] !== clearString[clearString.length - 1 - i]) {
        result = 'NO';
        break;
      }
    }
  }

  return result;
}

console.log(checkForPalindrome(testString));

// ----------------------------------------------------------------------------
// Permutation
console.log('--- Permutation ---');

let permArr1 = [1, 2, 3, 4, 5, 7];
let permArr2 = [5, 1, 3, 7, 2, 4];

function checkForPermutation(arr1, arr2) {
  let result = 'YES';

  if (arr1.length === arr2.length) {

    let a1 = arr1.sort((a, b) => a - b);
    let a2 = arr2.sort((a, b) => a - b);
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) {
        result = 'NO';
        break;
      }
    }

  } else {
    result = 'NO';
  }

  return result;
}

console.log(checkForPermutation(permArr1, permArr2));

// ----------------------------------------------------------------------------
// Existing powers of 2
console.log('--- Existing powers of 2 ---');

let bitArray = [1, 3, 4];

function findPowers(arr) {
  let powers = [];
  let dirtyResult = [];
  let niceResult;
  for (let i = 0; i < arr.length; i++) {
    var b = 1;

    while (b <= arr[i]) {
      if (b & arr[i]) {
        powers.push(b);
      }
      b <<= 1;
    }
  }

  if(powers.length === 0){
    niceResult = 'NA';
  } else {

    for (let i = 0; i < powers.length; i++) {
      if (dirtyResult.indexOf(powers[i]) === -1) {
        dirtyResult.push(powers[i]);
      }
    }
    
    niceResult = dirtyResult.sort((a,b)=>a-b).join(',');
  }

  return niceResult;
}

console.log(findPowers(bitArray));

// ----------------------------------------------------------------------------
// Finding primes
console.log('--- Finding primes ---');

let from = 100;
let to = 200;

function findPrimes(int1, int2) {
  let primes = 0;

  for (let i = int1; i <= int2; i++) {
    let isPrime = true;
    if (i > 1) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
    } else {
      isPrime = false;
    }
    isPrime === true ? primes++ : null;
  };

  return primes;
}

console.log(findPrimes(from, to));

// ----------------------------------------------------------------------------
// Optional Power
console.log('--- Optional Power ---');
console.log('result will appear in console after click event');

let inputNr = document.getElementById('numberInput');
let inputExp = document.getElementById('exponentInput');
let btn = document.getElementById('calculatePower');

function optionalPow(a, b) {
  let result = 0;

  function pow(nr1, nr2) {
    result = nr1;
    switch (true) {
      case nr1 == 0 && nr2 == 0:
        result = '0 to the power of 0 is a problem';
        break;
      case nr1 == 0:
        result = 0;
        break;
      case nr2 == 0:
        result = 1;
        break;
      case nr2 == 1:
        result = nr1;
        break;
      default:
        for (let i = 2; i <= nr2; i++) {
          result *= nr1;
        }
    }
  }

  if (a === '' || b === '' || a < 0 || b < 0) {
    alert('Give me better numbers');
    inputNr.value = '';
    inputExp.value = '';
  } else if (confirm("Where you a good person yesterday?")) {
    pow(a, b);
    inputNr.value = '';
    inputExp.value = '';
  } else {
    pow(b, a);
    inputNr.value = '';
    inputExp.value = '';
  }

  return result;
}

btn.addEventListener('click', () => {
  console.log(optionalPow(inputNr.value, inputExp.value));
});

// ----------------------------------------------------------------------------
// Fix age
console.log('--- Fix age ---');

let ageArray = [5, 15, 25, 78, 59, 45];

function fixage(arr) {
  let result;
  let fixedArr = arr.filter((age) => {
    return age >= 18 && age <= 60;
  })

  fixedArr.length > 0 ? result = fixedArr.join(',') : result = 'NA';
  return result;
}

console.log(fixage(ageArray));

// ----------------------------------------------------------------------------
// Common digit
console.log('--- Common digit ---');

let n = 4;
let arrString = '101 20 21 33444';

function calcDominantDigit(n, integers) {
  let result;
  let currentCount = 0; // integer

  for (let i = 0; i <= 9; i++) {
    let count = (integers.match(new RegExp(i, 'g')) || []).length;
    if (count > currentCount) {
      result = i;
      currentCount = count;
    } else if (count === currentCount && i > result) {
      result = i;
      currentCount = count;
    }
  }

  return result;
}

console.log(calcDominantDigit(n, arrString));

// ----------------------------------------------------------------------------
// Digit sum
console.log('--- Digit sum ---');

let length = 3;
let digitArr = [12, 217, 3331];

function BiggestSumOfDigits(n, arr) {
  let biggestSum = 0;
  let index;

  for (let i = 0; i < n; i++) {
    let deconstruction = arr[i].toString().split('');
    let sum = deconstruction.reduce((a, b) => Number(a) + Number(b));
    if (sum > biggestSum) {
      biggestSum = sum;
      index = i;
    } else if (biggestSum === sum && arr[i] > arr[index]) {
      biggestSum = sum;
      index = i;
    }
  }

  return index;
}

console.log(BiggestSumOfDigits(length, digitArr));