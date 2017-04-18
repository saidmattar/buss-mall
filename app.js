'use strict';
function Photo(name, filename){
  this.name = name;
  this.filename = filename;
  this.clicksCunter =0;
  this.displayedTimes = 0;
}
var photos = [];
photos.push( new Photo('taravel bag', 'img/bag.jpg'));
photos.push( new Photo('banana chopper', 'img/banana.jpg'));
photos.push( new Photo('bathroom party', 'img/bathroom.jpg'));
photos.push( new Photo('rain boots', 'img/boots.jpg'));
photos.push( new Photo('breakfast machine','img/breakfast.jpg'));
photos.push( new Photo('meat ball bubblegum','img/bubblegum.jpg'));
photos.push( new Photo('blastic chair','img/chair.jpg'));
photos.push( new Photo('cthulhu','img/cthulhu.jpg'));
photos.push( new Photo('dog nose','img/dog-duck.jpg'));
photos.push( new Photo('dragon meat','img/dragon.jpg'));
photos.push( new Photo('pen caps','img/pen.jpg'));
photos.push( new Photo('pet sweep','img/pet-sweep.jpg'));
photos.push( new Photo('scissors holder','img/scissors.jpg'));
photos.push( new Photo('shark sleeping bag','img/shark.jpg'));
photos.push( new Photo('sweep mat','img/sweep.png'));
photos.push( new Photo('tautaun blanket','img/tauntaun.jpg'));
photos.push( new Photo('unicorn meat can','img/unicorn.jpg'));
photos.push( new Photo('usb container','img/usb.gif'));
photos.push( new Photo('water container','img/water-can.jpg'));
photos.push( new Photo('wine glass ','img/wine-glass.jpg'));
function getRandomIndex(list){
return Math.floor(Math.random() * list.length);
}




var mainDiv = document.getElementById('clickable-images');
var firstImage =document.createElement('img');
mainDiv.appendChild(firstImage);
firstImage.src =  photos[getRandomIndex(photos)].filename;
console.log(firstImage);
var secondImage =document.createElement('img');
mainDiv.appendChild(secondImage);
secondImage.src = photos[getRandomIndex(photos)].filename;
var thirdImage = document.createElement('img');
mainDiv.appendChild(thirdImage);
thirdImage.src = photos[getRandomIndex(photos)].filename;
























// var count = 0;
// var countClicks= document.getElementById('clicks-first');
// countClicks.textContent = count;
//
// function handleIncButtonClick(){
//   console.log('clicking!');
//   count++;
//   countClicks.textContent = count;
// }
// countClicks.addEventListener('click', handleIncButtonClick);





































































































// var photoData = [];
// var clicksCounter = 0;
// var displayCounter =0;
// // Photo constructor
// function Photo(name, filename){
//   this.name = name;
//   this.src = './img/' + filename;
//   this.clickCounter =0;
//   this.displayCounter =0;
// }
// //created an an embty array for photos displayed
// var photosOnScreen = [];
//
// //created an embty array of previous photos
// var photosOnPreviousScreen = [];
//
// //created an embty array of photos before previous photos
// var photosOnScreenBeforeLast =[];
//
// //created an array of photos
// var photos = [
//
//
// Photos.prototype.creatImage
//
// function getRandomIndex(list){
//   return Math.floor(Math.random() * list.lengh);
// }
// //get tree random images
// function selectThreeRandomPhotos(){
//   photos = photos.concat(photosOnScreenBeforeLast);
//
//   photosOnScreenBeforeLast = photosOnPreviousScreen;
//   photosOnPreviousScreen = photosOnScreen;
//   photosOnScreen =[];
//
//
//
//   var nextPhoto =photos.splice(getRandomIndex(photos), 1);
//   photosOnScreen = photosOnScreen.concat(nextPhoto);
//
//   nextPhoto = photos.splice(getRandomIndex(photos), 1);
//   photosOnScreen = photosOnScreen.concat(nextPhoto);
//   return photosOnScreen;
// }
//
// function handleeImageClick(event){
//   clicksCounter++;
//   if (clicksCounter<5){
//     var currentImage = event.target.id;
//     for (var i = 0; i < photoData.lengh, i){
//       if
//     }
//   }
// }



































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
