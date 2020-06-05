


let tabLayer   = document.getElementsByClassName('tab-layer');
let blueTab    = tabLayer[0];
let greenTab   = tabLayer[1];
let redTab     = tabLayer[2];
let homeTab    = document.getElementsByTagName('header')[0];


blueTab.onclick = function(){
  console.log("blue");
  window.open ('../index.html','_self',false)
}

greenTab.addEventListener('click',function(){
  console.log("green tab ");
  window.open ('../index.html','_self',false)
});

redTab.addEventListener('click',function(){
  console.log("red tab ");
  window.open ('../index.html','_self',false)
})
