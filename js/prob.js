function count (string) { 
    this.str = string,
    this.a =  {
        a: 1,
        b: 2
    },
    this.col = function (){
      const arr = this.str.split('');
      if (this.a[a] === this.a['b']){
            this.a['b'] = this.a['b'] + 7
      console.log(this.a);}
      else{
          this.a['c'] = 1;
          console.log(this.a) 
      }
    } 
      // The function code should be here
       return this.col();
    }
    count("aba");