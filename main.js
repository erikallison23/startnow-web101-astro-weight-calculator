
//planet variables with their ratio per 1 earth pound.
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

//function for the equation to determine your weight on other planets.
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
   o += s[i];
  return o}

//declaring the variables that display the input, select, submit button and output.
var input= document.getElementById("user-weight");
var selectL= document.getElementById("planets");
var submitEl = document.getElementById("calculate-button");
var output = document.getElementById("output");

//declares var for name, opt and selectL and sets attributes.
planets.forEach(function(item) {
  var name = item[0];
  var opt = document.createElement("option");
  var selectL= document.getElementById("planets");
  opt.setAttribute("value", name);
  opt.innerHTML = item[0];
  selectL.appendChild(opt);
 });

//submit button function
submitEl.onclick = function(e) {
  var userWeight = input.value;
  var userChoice = selectL.value;
  var weight = 0;

 planets.forEach( function(item) {
    var name = item[0];
    if (userChoice === name) {
      weight = item[1];
    }
  });

//results
 var result = weight * userWeight;
  output.innerHTML= "If you were on " + userChoice + ", you would weigh " + result +"lbs!";
  
}