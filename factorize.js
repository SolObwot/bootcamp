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


