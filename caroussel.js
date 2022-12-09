// Lorsque je clique sur l'icone du menu burger, l'élément navbar-mobile apparait

const icon = document.querySelector(".fa-bars");
// const list = document.querySelector(".nav-list-mobile");
const list = document.querySelector(".menu");

icon.addEventListener("click", function () {
  list.classList.toggle("list-visible");
  console.log(list);
});

// carroussel de la page index.html

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));


// Lorsque je clique sur le menu galeries dans le menu burger, 
// le sous menu s'affiche

const galerie =document.querySelector(".a-mobile");
const sousMenu =document.querySelector(".ss-menu-burger");

galerie.addEventListener("click",() => {
  sousMenu.style.display = "block";
})


// Lorsque je clique sur un extrait de photo dans une galerie, la photo correspondante s'affiche en grand


const modal = document.querySelector("#myModal");

let smallsImgs = document.querySelectorAll(".smallImg");

const bigImg = document.querySelector(".modal-content img");

for (let i = 0; i < smallsImgs.length; i++) {
  smallsImgs[i].addEventListener("click", () => {
    let smallImgSrc = smallsImgs[i].src.split("/").pop();
    bigImg.src = `./assets/EntierEmprunt/${smallImgSrc}`;
    modal.style.display = "block";
  });
}

smallsImgs = [...smallsImgs];

smallsImgs.map((smallImg) => {
  smallImg.addEventListener("click", () => {
    let smallImgSrc = smallImg.src.split("/").pop();
    console.log(smallImgSrc);
    bigImg.src = `./assets/EntierEmprunt/${smallImgSrc}`;
    modal.style.display = "block";
  });
});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});