var fs = require('fs');

function run(gen) {
  var gen_obj = gen(resume);
  function resume() {
    gen_obj.next(arguments);
  }
  gen_obj.next();
}

run(function* gen(resume) {
  var ret, err, data;
  ret = yield fs.readFile('./test.txt', resume);
  err = ret[0];
  data = ret[1];
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
