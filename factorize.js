// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Please enter a number to calculate it\s factorial?'),num =>{
//   if (isNaN(num)) {
//     console.log('Enter a number')
//   } else {
//     console.log(`The factorial of ${num} is ${factorialize(num)}`)
//   }
//   readline.close();
// }
// const factorialize = function(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorialize(num - 1);
// };


function factorialize(num){
    if (num === 0 || num === 1)
    { return 1; }
    let val = num;
    for (let i = num -1 ; i > 1; i--) {
      val *= i;
    }
    console.log(val);
    return val;
}
factorialize(4);

module.exports = factorialize;


