function add(numbers) {
    if (numbers === '') return 0;
    const nums = numbers.split(',').map(num => parseInt(num));
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = add;