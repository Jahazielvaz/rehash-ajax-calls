var myRequest = new XMLHttpRequest();

var animalDump = document.getElementById('animal-dump');
// var button = document.querySelector('#animal-button');

myRequest.open('GET', "https://learnwebcode.github.io/json-example/animals-1.json");

myRequest.onload = function(){
  var myData = JSON.parse(myRequest.responseText);
  console.log(myData[0]);
};


// document.getElementById("animal-button").addEventListener('click', function(){
//     animalDump.innerHTML = myRequest.responseText;
// });





myRequest.send();
