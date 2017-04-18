'use strict';

console.log('works');
// photo constructor
function Photo(name, filename){
  this.name = name;
  this.src = './img/' + filename;
  this.clickCount =0;
  this.display =0;
}
//created an array for photos displayed
var photosOnScreen = [];

//created array of previous photos
var photosOnPreviousScreen = [];


//created an array of pics
var photos = [
  new Photo('bag head', 'bag.jpg'),
  new Photo('banana chopper', 'banana.jpg'),
  new Photo('bathroom party', 'bathroom.jpg'),
  //do this for the rest of the pics
  new Photo('rain boots', 'boots.jpg'),
  new Photo('breakfast', 'bbreakfast.jpg'),
  new Photo('bubblegum', 'bubblegum.jpg'),
  new Photo('chair', 'chair.jpg'),

  new Photo('cthulhu', 'cthulhu.jpg'),
  new Photo('pen', 'pen.jpg'),
  new Photo('pet sweep', 'pet-sweep.jpg'),
  new Photo('scissors', 'scissors.jpg'),
  new Photo('shark', 'shark.jpg'),
  new Photo('sweep', 'sweep.jpg'),

  new Photo('tauntaun', 'tautaun.jpg'),
  new Photo('unicorn', 'unicorn.jpg'),
  new Photo('usb', 'usb.jpg'),
  new Photo('water', 'water.jpg'),

  new Photo('wine', 'wine.jpg'),
  new Photo('banana', 'banana.jpg'),
  new Photo('banana', 'banana.jpg'),
];







































// var mainDiv = document.getElementById('clickable-images');
// var firstImage =document.createElement('img');
// mainDiv.appendChild(firstImage);
// firstImage.src = 'img/bag.jpg';
// console.log(firstImage);
// var secondImage =document.createElement('img');
// mainDiv.appendChild(secondImage);
// secondImage.src ='img/banana.jpg';
// var thirdImage = document.createElement('img');
// mainDiv.appendChild(thirdImage);
// thirdImage.src = 'img/chair.jpg';












//var count = 0;
// var countClicks= document.getElementById('clicks-first');
// countClicks.textContent = count;
//
// function handleIncButtonClick(){
//   console.log('clicking!');
//   count++;
//   countClicks.textContent = count;
// }
// countClicks.addEventListener('click', handleIncButtonClick);
