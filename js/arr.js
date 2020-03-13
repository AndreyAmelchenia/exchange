function multiplyAll(arr) {
    console.log(arr);
    
        function multiply_all(y) {
        console.log(y);
          for (let i = 0; i< arr.length   ; i++){
          
            let j = arr[i]*y;
              arr.splice(i, 1 , j);
             
              }
          
          console.log(arr);
          return arr;
        }
        return multiply_all;
      }
      multiplyAll([1974, 546, 3192, 2604])(42)(23)