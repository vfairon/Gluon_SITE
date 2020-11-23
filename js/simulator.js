// Declaration
var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var o1 = document.getElementById("o1");
var o2 = document.getElementById("o2");
var o3 = document.getElementById("o3");
var led1 = document.getElementById("l1")
var led2 = document.getElementById("l2")
var led3 = document.getElementById("l3")
var btnMoov = document.getElementById("movementBtn");
var mvsensor = document.getElementById("i1")
var x = 0;
var inOutPuts = [i2,i3,o2,o3];
var slider = document.getElementById("myRange");
var slider2 = document.getElementById("myRange2");
var slider3  = document.getElementById("myRange3");
var count = 0
var ledOnPath = "../res/img/ledOn.png";
var ledOffPath = "../res/img/led.png";
var arrLeds  = [led1,led2,led3]
var i1OptionValue = document.getElementById("i1OptionValue");
var i2OptionValue = document.getElementById("i2OptionValue");
var i3OptionValue = document.getElementById("i3OptionValue");
var i1OptionInput = document.getElementById("i1OptionInput");
var i2OptionInput = document.getElementById("i2OptionInput");
var i3OptionInput = document.getElementById("i3OptionInput");
var i1Submit = document.getElementById("i1Submit");
var i2Submit= document.getElementById("i2Submit");
var i3Submit = document.getElementById("i3Submit");
var i1Description = document.getElementById("i1Description");
var i2Description = document.getElementById("i2Description");
var i3Description = document.getElementById("i3Description");

var mvDescription = document.getElementById("mvDescription");
var lightDescription = document.getElementById("lightDescription");
var tempDescription = document.getElementById("tempDescription");
var isHidden = true;

var options = Array.from($(".optionss"))

  inOutPuts.forEach(element=>{
     console.log(element)
 element.setAttribute("connected","false")
 })
