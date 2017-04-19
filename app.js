'use strict';
//created the photos objects constructors
function Photo(name, filename){
  this.name = name;
  this.filename = filename;
  this.clicksCounter =0;
  this.displayedTimes = 0;
}

var totalClicksOnImages = 0;
//created 4 embty rrays to hold the set of photos
var photosOnSecondToLastScreen = [];
var photosOnPreviousScreen = [];
var photosOnScreen = [];
var photos = [];

//created the opjects and push them into the photos array
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

//getting a random number to choose a photo object out of the photos array
function getRandomIndex(list){
  return Math.floor(Math.random() * list.length);
}

//creating three elements and assigning them to variables
var mainDiv = document.getElementById('clickableImages');
var firstImage =document.createElement('img');
var secondImage = document.createElement('img');
var thirdImage = document.createElement('img');

newSetOfPhotos();

//createt a function to assign the three random photos out of the photos array to the elements by revoking the getThreeRandomPhotos function
function newSetOfPhotos() {
  getThreeRandomPhotos();
  firstImage.src = photosOnScreen[0].filename;
  photosOnScreen[0].displayedTimes++;
  secondImage.src = photosOnScreen[1].filename;
  photosOnScreen[1].displayedTimes++;
  thirdImage.src = photosOnScreen[2].filename;
  photosOnScreen[2].displayedTimes++;
  mainDiv.appendChild(firstImage);
  mainDiv.appendChild(secondImage);
  mainDiv.appendChild(thirdImage);
}


function getThreeRandomPhotos(){
  photos = photos.concat(photosOnSecondToLastScreen);
  photosOnSecondToLastScreen = photosOnPreviousScreen;
  photosOnPreviousScreen = photosOnScreen;
  photosOnScreen = [];

  // created a var nextPhoto to keep track of the next Photo we take out of photos
  // splice out an photo object (wich removes it from photos)
  var nextPhoto = photos.splice(getRandomIndex(photos), 1);
  // concat the array returned by splice onto photos onScreen
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  // repeat two more times to get three images
  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);

  return photosOnScreen;
}

//created an event handler function that increment the number of time the picture was clicked
function clicked(event){
  totalClicksOnImages++;
  if ( totalClicksOnImages < 25) {

    // assigning the targeted image to a variable
    var currentImage = event.target;

    //checking to see if the image element on the screen is one of the objects in the photos array
    if (currentImage.src.includes(photosOnScreen[0].filename)){
      photosOnScreen[0].clicksCounter++;
      console.log(photosOnScreen[0].clicksCounter);
    }
    if (currentImage.src.includes(photosOnScreen[1].filename)){
      photosOnScreen[1].clicksCounter++;
      console.log(photosOnScreen[1].clicksCounter);
    }
    if (currentImage.src.includes(photosOnScreen[2].filename)){
      photosOnScreen[2].clicksCounter++;
      console.log(photosOnScreen[2].clicksCounter);
    }

    setTimeout(newSetOfPhotos, 400);
  }
  else{
    firstImage.removeEventListener('click', clicked);
    secondImage.removeEventListener('click', clicked);
    thirdImage.removeEventListener('click', clicked);

    mainDiv.textContent = '';

    displayChart();
  }
}
firstImage.addEventListener('click', clicked);
secondImage.addEventListener('click', clicked);
thirdImage.addEventListener('click', clicked);

  //created the chart-canvas
function displayChart(){
    //refill photos array with the photo objects we took
    //during getThreeRandomPhotos
  photos = photos.concat(photosOnScreen);
  photos = photos.concat(photosOnPreviousScreen);    photos = photos.concat(photosOnSecondToLastScreen);

    // empty out the app div

  var canvas = document.createElement('canvas');
  canvas.width = mainDiv.clientWidth;    canvas.height = mainDiv.clientWidth;
  mainDiv.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  ctx.fillRect(0, 0, 50, 50);

    // create a data object to make a chart
  var data = {
    type: 'bar',
    labels: [ ],
    datasets: [
      {
        label: 'click count',
        data: [],
      },
      {
        label: 'display count',
        data: [],
      },
      {
        label: 'ratio click count displayc count',
        data: [],
      },
    ],
  };

  var currentPhoto;

  for(var i=0; i< photos.length; i++){
    currentPhoto = photos[i];
    data.labels.push(currentPhoto.name);
    data.datasets[0].data.push(currentPhoto.clicksCounter);
    data.datasets[1].data.push(currentPhoto.displayedTimes);
    data.datasets[2].data.push(currentPhoto.clicksCounter / currentPhoto.displayedTimes);

  }

  new Chart(ctx, {
    type: 'bar',
    data: data,
  });
}
