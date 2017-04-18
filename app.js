'use strict';
var mainDiv = document.getElementById('clickable-images');
var firstImage =document.createElement('img');
mainDiv.appendChild(firstImage);
firstImage.src = 'img/bag.jpg';
console.log(firstImage);
var secondImage =document.createElement('img');
mainDiv.appendChild(secondImage);
secondImage.src ='img/banana.jpg';
var thirdImage = document.createElement('img');
mainDiv.appendChild(thirdImage);
thirdImage.src = 'img/chair.jpg';












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
