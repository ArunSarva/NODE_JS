var a="Hello World ";
var b="Welcome";
var c="Nodejs";
console.log(a)
console.log(b)
console.log(c)
console.log(a+b+" to "+c)
// Math.floor(Math.random() * 6) + 0 


// Task2
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log("Task2")
  console.log(Math.random());


  //Task3
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) ;
  }
  console.log("Task3")
  console.log(Math.random(1,2));


  //task4
var datetime = new Date().getDate();
console.log("Task4")
switch(datetime)
{
    case 0:
        {
            console.log("Sunday")
            break;
        }
    case 1:
        {
            console.log("monday")
            break;
        }
    case 2:
        {
            console.log("tuesday")
            break;
        }
    case 3:
        {
            console.log("wednesday")
            break;
        }
    case 4:
        {
            console.log("thrusday")
            break;
        }
    case 5:
        {
            console.log("friday")
            break;
        }
    case 6:
        {
            console.log("Saturday")
            break;
        }
        default:
        break;

}



// Task5

var datetime = "ARUN";
switch(datetime)
{
    case 'ABHI':
        {
            console.log("ABHI")
            break;
        }
    case 'SARVA':
        {
            console.log("SARVA")
            break;
        }
    case 'ARUN':
        {
            console.log("Task5")
            console.log("ARUN IS HERE")
            break;
        }
        default:
        break;

}



//task6
var item = 120;
var tax=7.5;
function taxcalculate(item,tax)
{
    var t=tax/100;
    var p=t*item;
    return(p+item)
}
console.log("Task6")
console.log(taxcalculate(item,tax))