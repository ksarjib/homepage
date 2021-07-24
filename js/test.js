function returnShortest(a,b,c) {
    if(a.length < b.length) {
       if(a.length < c.length) {
         return a;
       }
     } else if (b.length < c.length) {
         return b;
     } else {
        return c;
     }
   }

   console.log(returnShortest('asdf','ass','a'));