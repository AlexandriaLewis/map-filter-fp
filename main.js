// code goes here :)

//ANSWER1
var priceArr = items.map(function(elem){
  return {
    price: elem.price,
    title: elem.title
  }
});

var sum = 0;
priceArr.forEach(function(elem){
  sum += elem.price;
});

var average = Math.ceil(sum / priceArr.length);

document.getElementById("answer1").innerHTML = average;

//ANSWER2
var filteredPrices = priceArr.filter(function(elem){
  return elem.price > 14 && elem.price < 18
});

var rangePrice = "";
filteredPrices.forEach(function(elem){
  rangePrice += "<li>" + elem.title + " :: $" + elem.price + "</li>";
});

document.getElementById("answer2").innerHTML = rangePrice;

//ANSWER3
var filteredGBP = items.filter(function(elem){
  return elem.currency_code === "GBP";
});

var gbpString = "<li>" + filteredGBP[0].title + " :: $" + filteredGBP[0].price + "</li>";

document.getElementById("answer3").innerHTML = gbpString;

//ANSWER4

var itsWood = items.filter(function(elem){
  return elem.materials.includes("wood");
});

var woodStr = "";
itsWood.forEach(function(elem){
  woodStr += "<li>" + elem.title + "</li>";
});

document.getElementById("answer4").innerHTML = woodStr;

// ---------------------------------------------------------
var listWood = items.filter(function(allElems) {
  return allElems.materials.indexOf("wood") > -1;
} ).map(function(justWoods) {
  return justWoods.title;} );
//checking all the indexes 0+ RETURNS truthy indexes
//creates copy array from truthy returns with justWoods.title
// ---------------------------------------------------------

//ANSWER5
var eightItems = items.filter(function(elem){
  return elem.materials.length >= 8;
});

var eightStr = "";
eightItems.forEach(function(elem){
  eightStr += "<li>" + "Title: " + elem.title + "</li>"
  eightStr += "<li>" + " - Number: " + elem.materials.length + "</li>";
  eightStr += "<li>" + " - Items: " + elem.materials + "</li>";
});

document.getElementById("answer5").innerHTML = eightStr;

//ANSWER6
var cellars = items.filter(function(elem){
  return elem.who_made === "i_did";
});

var sellerStr = "<h3>" + "Number of Items Made by Seller: " + cellars.length + "</h3>";

document.getElementById("answer6").innerHTML = sellerStr;
