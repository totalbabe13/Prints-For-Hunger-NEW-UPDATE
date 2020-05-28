// TABS
let blueTab  = document.getElementsByClassName('blue')[0];
let blueText = document.getElementsByClassName('blue-text')[0];
let greenTab = document.getElementsByClassName('green')[0];
let redTab   = document.getElementsByClassName('red')[0];
let homeTab  = document.getElementsByTagName('header')[0];
// let imagecells = document.getElementsByClassName('image-cell');

homeTab.onclick = function(){
  console.log('home');
  redTab.style.zIndex   = "3";
  blueTab.style.zIndex  = "1";
  greenTab.style.zIndex = "2";
}

// blueTab.onclick = function(){
//   console.log('blue');
  // redTab.style.zIndex   = "2";
  // blueTab.style.zIndex  = "3";
  // greenTab.style.zIndex = "1";
// }

blueTab.addEventListener('click',function(){
  console.log("blue tab event ");
  redTab.style.zIndex   = "2";
  blueTab.style.zIndex  = "3";
  greenTab.style.zIndex = "1";
})


greenTab.onclick = function(){
  console.log('green');
  redTab.style.zIndex   = "2";
  blueTab.style.zIndex  = "1";
  greenTab.style.zIndex = "3";
}

redTab.onclick =function(){
  console.log('red');
  redTab.style.zIndex   = "3";
  blueTab.style.zIndex  = "1";
  greenTab.style.zIndex = "2";
}
