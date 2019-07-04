var fs = require('fs');

fs.readFile('myfile.txt', 'utf8', function (err, data) {
  if (!err){
  console.log(data);
}
  console.log("somthing somthing")
  
});
