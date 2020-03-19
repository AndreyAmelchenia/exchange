function factorial(n)
{
let MIN = 0;
let MAX = 12;
let fact = 1;

if( n< MIN || n >MAX){
throw new RangeError('Параметр должен быть между ' + MIN + ' и ' + MAX);
}
else{
for (let i=n ; i>0 ; i--){

fact=fact*i;
}
}
return console.log(fact);
  // Calculate the factorial here
}
factorial(-1);
factorial(1);
factorial(2);
factorial(3);


module.exports = function repeater(str, opt) {
  arr = [];
  for(let i = 0; i < (opt.repeatTimes || 1); i++) {
      arr[i] = String(str);
      if(opt.hasOwnProperty('addition')) {
          addArr = [];
          for(let j = 0; j < (opt.additionRepeatTimes || 1); j++) {
              addArr[j] = String(opt.addition);
          }
          arr[i] += addArr.join(opt.additionSeparator || '|');
      }
  }
  
  return arr.join(opt.separator || "+");
};