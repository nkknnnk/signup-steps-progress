const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".submit");
const progressText = document.querySelector(".step p");
const progressCheck = document.querySelector(".step .check");
const bullet = document.querySelector(".step .bullet");



firstNextBtn.addEventListener("click", function(){
    let max = 4;
    let current = 1;
    slidePage.style.marginLeft = "-25%"
    bullet[current-1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%"
});
nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-75%"
});


prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%"
});
prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%"
});
prevBtnFourth.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%"
});

