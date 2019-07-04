var fs = require('fs');
 
fs.readFile('demo.html', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');