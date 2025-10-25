// script.js
const galleryGrid = document.getElementById("galleryGrid");
const catTitle = document.getElementById("catTitle");

// گرفتن نام دسته از URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category") || "nature";

// عنوان صفحه
const titles = {
  nature: "طبیعت",
  portrait: "پرتره",
  urban: "شهری"
};
if(catTitle) catTitle.textContent = titles[category] || "گالری";


// تعریف عکس‌ها (می‌تونی بعداً از Cloudinary URL بزاری)
const photos = {
  nature: [
    "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    "https://res.cloudinary.com/demo/image/upload/flower.jpg",
    <img src="assets/thumbs/export-0036.jpg" alt="export-0036" />
  ],
  portrait: [
    "https://res.cloudinary.com/demo/image/upload/man.jpg",
    "https://res.cloudinary.com/demo/image/upload/woman.jpg"
  ],
  urban: [
    "https://res.cloudinary.com/demo/image/upload/city.jpg",
    "https://res.cloudinary.com/demo/image/upload/street.jpg"
  ]
};

if(galleryGrid){
  (photos[category] || []).forEach(url => {
    const card = document.createElement("div");
    card.className = "cat";
    const img = document.createElement("img");
    img.src = url;
    const a = document.createElement("a");
    a.href = url;
    a.download = true;
    a.textContent = "دانلود عکس";
    a.className = "download-link";
    card.appendChild(img);
    card.appendChild(a);
    galleryGrid.appendChild(card);
  });
}

// Lightbox پیشرفته
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const prevBtn = document.querySelector(".lightbox .prev");
const nextBtn = document.querySelector(".lightbox .next");

let currentIndex = 0;
let currentImages = [];

// وقتی گالری ساخته میشه، لیست عکس‌ها رو ذخیره کن
function collectImages() {
  currentImages = Array.from(document.querySelectorAll(".cat img")).map(i => i.src);
}
collectImages();

document.addEventListener("click", e => {
  if (e.target.tagName === "IMG" && e.target.closest(".cat")) {
    collectImages();
    currentIndex = currentImages.indexOf(e.target.src);
    openLightbox(currentIndex);
  }
});

function openLightbox(i) {
  lightbox.style.display = "flex";
  lightboxImg.src = currentImages[i];
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function showNext() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  openLightbox(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  openLightbox(currentIndex);
}

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// بستن با کلیک روی زمینه
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});


// منوی موبایل
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
