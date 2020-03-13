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