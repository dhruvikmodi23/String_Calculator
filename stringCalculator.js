function add(numbers) {
  if (numbers === "") return 0;

  //only for comma
  // const nums = numbers.split(',').map(num => parseInt(num));

  //for comma and newline delimiter support
  // const nums = numbers.split(/[,\n]/).map(num => parseInt(num));

  //custom delimiter
  // let delimiter = /[,\n]/;
  // if (numbers.startsWith("//")) {
  //   const delimiterEndIndex = numbers.indexOf("\n");
  //   delimiter = numbers.substring(2, delimiterEndIndex);
  //   numbers = numbers.substring(delimiterEndIndex + 1);
  // }
  // const nums = numbers.split(delimiter).map(num => parseInt(num));

  // //Add filter for negative number
  // const negatives = nums.filter(num => num < 0);
  
  // if (negatives.length > 0) {
  //   throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  // }

  // return nums.reduce((sum, num) => sum + num, 0);


  //Refactoring Code

  if (isEmpty(numbers)) return 0;

  const delimiter = getDelimiter(numbers);
  const numberString = getNumberString(numbers, delimiter);
  const nums = parseNumbers(numberString, delimiter);

  checkForNegatives(nums);

  return sumNumbers(nums);
}

//function check for empty numbers
function isEmpty(numbers) {
  return numbers === '';
}

//function returns delimiters
function getDelimiter(numbers) {
  // 1. Set default delimiters (comma or newline)
  const defaultDelimiter = /[,\n]/;

  // 2. Check if custom delimiter exists
  if (!numbers.startsWith('//')) return defaultDelimiter;
  
  // 3. Extract custom delimiter from string
  const delimiterEndIndex = numbers.indexOf('\n');
  return numbers.substring(2, delimiterEndIndex);
}

//function returns number string
function getNumberString(numbers, delimiter) {
  // If input doesn't start with "//", return original string (no custom delimiter)
  if (!numbers.startsWith('//')) return numbers;

  // Otherwise, extract the part after the first newline (\n)
  return numbers.substring(numbers.indexOf('\n') + 1);
}

//function for parse the numbers
function parseNumbers(numberString, delimiter) {
  return numberString.split(delimiter).map(num => parseInt(num));
}

//function for check negative numbers
function checkForNegatives(nums) {
  //filter out negative numbers
  const negatives = nums.filter(num => num < 0);

  //check the length of negatives array
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  }
}

//function for sum the numbers
function sumNumbers(nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
