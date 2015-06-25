 var fs = require('fs');

 

 function run(gen) {

   var gen_obj = gen(resume);

   function resume() {

     var err = arguments[0];

     if (err && err instanceof Error) {

       return gen_obj.throw(err);

     }

     var data = arguments[1];

     gen_obj.next(data);

   }

   gen_obj.next();

 }

 

 run(function* gen(resume) {

   var ret;

   try {

     ret = yield fs.readFile('./test.txt', resume);

     console.log(ret);

   } catch (e) {

     console.log(e);

   } finally {

     console.log('finally');

   }

 });
