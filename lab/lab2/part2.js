/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

// week2-lab1-part2:
myArray = _.range(1, 101, 1);
_.each(myArray, function(value){
  if (value % 15 === 0){
    console.log("FizzBuzz");
  }
  else if (value % 3 === 0){
    console.log("Fizz");
  }
  else if (value % 5 === 0){
    console.log("Buzz");
  }
  else {
    console.log(value);
  }
});
// week2-lab2-part2:
console.log(bikeArrayDirty);
var data = bikeArrayDirty;
var dataFiltered = [];
var filterData = function(i){
  if (data[i].length > 3){
    var station = data[i][3];
    var sNumber = station.slice(0,2);
    if (Number(sNumber) > 20){
      dataFiltered.push(data[i]);
    }
  }
};

// change the for loop to _.each statement:
_.each(_.range(0,data.length,1),function(value){
  filterData(value);
});

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});

var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var cleanData = function(i){
  dataFiltered[i][1] = parseFloat(dataFiltered[i][1]);
  dataFiltered[i][0] = parseFloat(dataFiltered[i][0]);
};
var addMarker = function(i){
  L.marker([dataFiltered[i][1], dataFiltered[i][0]]).addTo(map);
};

// change the for loop to _.each statement:
_.each(_.range(0, dataFiltered.length,1),function(value){
  cleanData(value);
  addMarker(value);
});
