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
   console.log('labas vakaras');
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
});

slideMenuBackGround.addEventListener('click', function() {
   slideMenuBackGround.classList.remove('slideMenuBackGround');
   navBar.style.left = "0";
   slideMenu.style.left = "-280px";
   slideMenuBackGround.style.opacity = "0.4";
   main.style.left = "0";
});
//SIDE MENU ATSIRADIMO PABAIGA




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


//padaryti permatomas ikonas per viduri
