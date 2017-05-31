window.onload = atzoominam;

var introColor = document.querySelector('#background-op');
var introImg = document.querySelector('figure');
var logoText = document.querySelector('#logoText');
var intro = document.querySelector('#intro');


function atzoominam() {
   introImg.style.transform = "scale(1)";
   introColor.style.opacity = "0";
   logoText.style.bottom = "0%";
}

intro.addEventListener('click', function() {
   intro.style.top = "-92%";
   logoText.style.backgroundColor = "white";
   introColor.style.opacity = "1";
   setTimeout(disableIntro, 1000);
});

//apears navBar
var navBar = document.querySelector('#navBar');

function disableIntro() {
   intro.style.display = "none";
   navBar.style.display = "block";
}

//apears slide menu

var menuButton = document.querySelector('.menu');
var slideMenu = document.querySelector('.slideMenu');
var slideMenuBackGround = document.querySelector('#background');


menuButton.addEventListener('click', function() {
   navBar.style.left = "280px";
   slideMenu.style.left = "0";
   slideMenuBackGround.classList.add('slideMenuBackGround');
   slideMenuBackGround.style.opacity = "0.6";
});

slideMenuBackGround.addEventListener('click', function() {
   slideMenuBackGround.classList.remove('slideMenuBackGround');
   navBar.style.left = "0";
   slideMenu.style.left = "-280px";
   slideMenuBackGround.style.opacity = "0.4";
});
