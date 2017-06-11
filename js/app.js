//IVYKIAI UZKROVUS PUSLAPI


window.onload = function() {
   atzoominam(); //iskvieciame funkcija, kuri atzoomina paveiksleli uzkrovus puslapi
   /*?????*/
   $(document).scrollTop(); // KAZKODEL NEVEIKIA?????????
   /*?????*/
   // body.classList.add('disableScroll'); // tada neveikia event listeneris
};

var body = document.querySelector('body');
var introImg = document.querySelector('figure'); //imigas
var introColor = document.querySelector('#background-op'); //spalva,kuri atrodo kaip rukas
var logoText = document.querySelector('#logoText'); //tekstas kuris uzkyla

function atzoominam() {
   introImg.style.transform = "scale(1)";
   introColor.style.opacity = "0";
   logoText.style.bottom = "0%";
}
//IVYKIAI UZKROVUS PUSLAPI BAIGIASI


//IVYKIAI PASKROLINUS ARBA PASPAUDUS CLICK ANT IMIGO
var intro = document.querySelector('#intro');

//paspaudus ant intro sekcijos nutinka taip
intro.addEventListener('click', function() {
   intro.style.top = "-92%"; //visa sekcija nuvaziuoja i virsu
   logoText.style.backgroundColor = "white"; //texto background pasidaro baltas,
   //prisitaikytu prie nav bar backgroundo
   introColor.style.opacity = "1";
   setTimeout(disableIntro, 1000); //visiskai isjungiu intro sekcija,
   //kuomet textas pasiekia headerio pozicija
});

//scrolinimo eventas
setTimeout(function() {
   window.addEventListener('scroll', skrolinimas);
}, 50);

function skrolinimas() {
   intro.style.top = "-92%";
   logoText.style.backgroundColor = "white";
   introColor.style.opacity = "1";
   setTimeout(disableIntro, 1000);
}

//apears navBar
var navBar = document.querySelector('#navBar');


function disableIntro() {
   intro.style.display = "none";
   navBar.style.display = "block";
   window.removeEventListener('scroll', skrolinimas);
   body.classList.remove('invisible-scrollbar');
}

//IVYKIAI PASKROLINUS ARBA PASPAUDUS CLICK ANT IMIGO BAIGIASI



//SIDE MENU ATSIRADIMAS
var menuButton = document.querySelector('.menu');
var slideMenu = document.querySelector('.slideMenu');
var slideMenuBackGround = document.querySelector('#background');
var main = document.querySelector('main');


menuButton.addEventListener('click', function() {

   navBar.style.left = "280px";
   slideMenu.style.left = "0";
   slideMenuBackGround.classList.add('slideMenuBackGround');
   slideMenuBackGround.style.opacity = "0.6";
   main.style.left = "280px";
   body.classList.add('disableScroll');
});

slideMenuBackGround.addEventListener('click', function() {

   slideMenuBackGround.classList.remove('slideMenuBackGround');
   navBar.style.left = "0";
   slideMenu.style.left = "-280px";
   slideMenuBackGround.style.opacity = "0.4";
   main.style.left = "0";
   body.classList.remove('disableScroll');
});
//SIDE MENU ATSIRADIMO PABAIGA



//sudeda visas nutraukas
for (i = 1; i <= 24; i++) {
   var div = document.createElement("div");
   div.classList.add(`box`);
   div.classList.add(`box${i}`);
   var img = document.createElement('img');
   img.src = `img/asset ${i}.jpeg`;
   div.appendChild(img);
   var PicsContainer = document.querySelector('.PicsContainer');
   PicsContainer.appendChild(div);
}

//display keitimas
var images = document.querySelectorAll(`.box img`);
var twoPartsButton = document.querySelector('#intoTwoParts');
var onePartButton = document.querySelector('#intoOnePart');
var fourPartButton = document.querySelector('#intoFourParts');
var container = document.querySelector('.PicsContainer');
var aukstis = "800px";


twoPartsButton.addEventListener('click', function() {
   $(document).scrollTop('0');
   container.classList.add('addOpacity');
   setTimeout(twoPartsDisplay, 800);


});

function twoPartsDisplay() {
   container.classList.remove('PicsContainerCentered');
   for (i = 0; i < images.length; i++) {
      images[i].classList.add('padalintiPoDu');
      images[i].classList.remove('padalintiPoViena');
      images[i].classList.remove('padalintiPoKeturis');
   }
   var pazymetas = document.querySelector('.chosenOne');
   pazymetas.classList.add('menuMainDisplay');
   pazymetas.classList.remove('chosenOne');
   twoPartsButton.classList.add('chosenOne');
   twoPartsButton.classList.remove('menuMainDisplay');
   container.classList.remove('addOpacity');
   container.style.top = aukstis;
   container.classList.add('notransition');
   setTimeout(comeUp, 600);
}

onePartButton.addEventListener('click', function() {
   $(document).scrollTop('0');
   container.classList.add('addOpacity');
   setTimeout(onePartsDisplay, 800);

});

function onePartsDisplay() {
   container.classList.remove('padalintiPoDu');
   container.classList.add('PicsContainerCentered');
   for (i = 0; i < images.length; i++) {
      images[i].classList.add('padalintiPoViena');
      images[i].classList.remove('padalintiPoDu');
      images[i].classList.remove('padalintiPoKeturis');
   }
   var pazymetas = document.querySelector('.chosenOne');
   pazymetas.classList.add('menuMainDisplay');
   pazymetas.classList.remove('chosenOne');
   onePartButton.classList.add('chosenOne');
   onePartButton.classList.remove('menuMainDisplay');
   container.classList.remove('addOpacity');
   container.style.top = aukstis;
   container.classList.add('notransition');
   setTimeout(comeUp, 600);

}


fourPartButton.addEventListener('click', function() {

   $(document).scrollTop('0');
   container.classList.add('addOpacity');
   setTimeout(fourPartsDisplay, 800);
});

function fourPartsDisplay() {
   container.classList.remove('PicsContainerCentered');
   for (i = 0; i < images.length; i++) {
      images[i].classList.remove('padalintiPoDu');
      images[i].classList.remove('padalintiPoViena');
      images[i].classList.add('padalintiPoKeturis');
   }

   var pazymetas = document.querySelector('.chosenOne');
   pazymetas.classList.add('menuMainDisplay');
   pazymetas.classList.remove('chosenOne');
   fourPartButton.classList.add('chosenOne');
   fourPartButton.classList.remove('menuMainDisplay');
   container.classList.remove('addOpacity');
   container.style.top = aukstis;
   container.classList.add('notransition');
   setTimeout(comeUp, 600);
}


function comeUp() {
   container.classList.remove('notransition');
   container.style.top = "0px";

}
