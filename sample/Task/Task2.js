var fs = require('fs');
fs.readFile("text1.txt", (error1, data1) => {
    if (error1) {
      return;
    }
  
    fs.readFile("text2.txt", (error2, data2) => {
      if (error2) {
        return;
      }
  var b=data1 === data2
      
      if(data1 === data2)
      {
        console.log("both files are same");
      }
      else{
        console.log("both files are not same");
      }
    });
  });