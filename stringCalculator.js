function add(numbers) {
    if (numbers === '') return 0;

    //only for comma
    // const nums = numbers.split(',').map(num => parseInt(num));

    //for comma and newline delimiter support
    const nums = numbers.split(/[,\n]/).map(num => parseInt(num));

    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = add;