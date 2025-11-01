/* ================================
   Caspian Photographer - script.js
   Author: AmirMahdi Zareei
   ================================ */

// حالت تاریک
function toggleDarkMode() {
  const body = document.body;
  const toggleBtn = document.querySelector(".dark-mode-toggle");

  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");

  // ذخیره در localStorage
  localStorage.setItem("darkMode", isDark ? "on" : "off");

  // تغییر آیکون با افکت چرخش
  toggleBtn.classList.add("rotating");
  toggleBtn.textContent = isDark ? "🌙" : "☀️";

  setTimeout(() => toggleBtn.classList.remove("rotating"), 400);
}


// باز و بسته کردن منوی موبایل
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}

// اعمال حالت ذخیره‌شده
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".dark-mode-toggle");

  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "🌙";
  } else {
    toggleBtn.textContent = "☀️";
  }

  // اگر صفحه گالری هست
  if (document.getElementById("gallery")) {
    loadGallery();
  }
});


// لایت‌باکس
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.classList.add("active");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}

// کنترل عکس فعلی
let currentImages = [];
let currentIndex = 0;

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // همه‌ی عکس‌های گالری فعلی رو ذخیره کن
  currentImages = Array.from(document.querySelectorAll(".category-image-container img"));
  currentIndex = currentImages.indexOf(img);

  lightboxImg.src = img.src;
  lightbox.classList.add("active");
  lightboxImg.classList.add("fade-in");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
}

function closeLightboxOnBg(e) {
  // فقط اگه روی فضای خالی کلیک شد (نه روی عکس یا دکمه‌ها)
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
}

function showImage(index) {
  const lightboxImg = document.getElementById("lightbox-img");
  if (index < 0) index = currentImages.length - 1;
  if (index >= currentImages.length) index = 0;
  currentIndex = index;

  // شروع محو شدن
  lightboxImg.classList.remove("fade-in");
  lightboxImg.classList.add("fade-out");

  // بعد از نیم ثانیه، عکس جدید لود و افکت محو شدن برعکس اجرا میشه
  setTimeout(() => {
    lightboxImg.src = currentImages[currentIndex].src;
    lightboxImg.classList.remove("fade-out");
    lightboxImg.classList.add("fade-in");
  }, 250); // نصف زمان ترنزیشن برای هماهنگی بهتر
}


function nextImage(e) {
  e.stopPropagation(); // جلوگیری از بسته شدن لایت‌باکس
  showImage(currentIndex + 1);
}

function prevImage(e) {
  e.stopPropagation();
  showImage(currentIndex - 1);
}

document.addEventListener("keydown", (e) => {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox.classList.contains("active")) return;

  if (e.key === "ArrowRight") nextImage(e);
  if (e.key === "ArrowLeft") prevImage(e);
  if (e.key === "Escape") closeLightbox();
});

// گالری دسته‌ها
function loadGallery() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "fajr1";

  const categoryInfo = {
    fajr1: "برد پرگل فجر — ثبت احساسات تیم و اقتدار 11 بر 1 در مقابل ستاره ساز آبیک",
    fajr3: "نبرد جنجالی فجر و شمس آذر در مستطیل سبز",
    urban: "نمایی از شهرها و خیابان‌ها، در هم‌زیستی نظم و بی‌نظمی مدرن.",
    fajr2: "فوتبال میان غبار — روایت نبردی میان غبار شهر الوند "
  };

  const photos = {
    fajr1: [
      "assets/thumbs/fajr-1.jpg",
      "assets/thumbs/fajr-2.jpg",
      "assets/thumbs/fajr-3.jpg",
      "assets/thumbs/fajr-4.jpg",
      "assets/thumbs/fajr-5.jpg",
      "assets/thumbs/fajr-6.jpg",
      "assets/thumbs/fajr-7.jpg",
      "assets/thumbs/fajr-8.jpg",
      "assets/thumbs/fajr-9.jpg",
      "assets/thumbs/fajr-10.jpg",
      "assets/thumbs/fajr-11.jpg",
      "assets/thumbs/fajr-12.jpg",
      "assets/thumbs/fajr-13.jpg",
      "assets/thumbs/fajr-14.jpg",
      "assets/thumbs/fajr-15.jpg",
      "assets/thumbs/fajr-16.jpg",
      "assets/thumbs/fajr-17.jpg",
      "assets/thumbs/fajr-18.jpg",
      "assets/thumbs/fajr-19.jpg",
      "assets/thumbs/fajr-20.jpg",
      "assets/thumbs/fajr-21.jpg",
      "assets/thumbs/fajr-22.jpg",
      "assets/thumbs/fajr-23.jpg",
      "assets/thumbs/fajr-24.jpg",
      "assets/thumbs/fajr-25.jpg",
      "assets/thumbs/fajr-26.jpg",
      "assets/thumbs/fajr-27.jpg",
      "assets/thumbs/fajr-28.jpg",
      "assets/thumbs/fajr-29.jpg",
      "assets/thumbs/fajr-30.jpg",
      "assets/thumbs/fajr-31.jpg",
      "assets/thumbs/fajr-32.jpg",
      "assets/thumbs/fajr-33.jpg",
      "assets/thumbs/fajr-34.jpg",
      "assets/thumbs/fajr-35.jpg"
    ],
    fajr3: [
      "assets/thumbs/fajr3-1.jpg",
      "assets/thumbs/fajr3-2.jpg",
      "assets/thumbs/fajr3-3.jpg",
      "assets/thumbs/fajr3-4.jpg",
      "assets/thumbs/fajr3-5.jpg",
      "assets/thumbs/fajr3-6.jpg",
      "assets/thumbs/fajr3-7.jpg",
      "assets/thumbs/fajr3-8.jpg",
      "assets/thumbs/fajr3-9.jpg",
      "assets/thumbs/fajr3-10.jpg",
      "assets/thumbs/fajr3-11.jpg",
      "assets/thumbs/fajr3-12.jpg",
      "assets/thumbs/fajr3-13.jpg",
      "assets/thumbs/fajr3-14.jpg",
      "assets/thumbs/fajr3-15.jpg",
      "assets/thumbs/fajr3-16.jpg",
      "assets/thumbs/fajr3-17.jpg",
      "assets/thumbs/fajr3-18.jpg",
      "assets/thumbs/fajr3-19.jpg",
      "assets/thumbs/fajr3-20.jpg",
      "assets/thumbs/fajr3-21.jpg",
      "assets/thumbs/fajr3-22.jpg",
      "assets/thumbs/fajr3-23.jpg",
      "assets/thumbs/fajr3-24.jpg",
      "assets/thumbs/fajr3-25.jpg",
      "assets/thumbs/fajr3-26.jpg",
      "assets/thumbs/fajr3-27.jpg",
      "assets/thumbs/fajr3-28.jpg",
      "assets/thumbs/fajr3-29.jpg",
      "assets/thumbs/fajr3-30.jpg",
      "assets/thumbs/fajr3-31.jpg",
      "assets/thumbs/fajr3-32.jpg",
      "assets/thumbs/fajr3-33.jpg",
      "assets/thumbs/fajr3-34.jpg",
      "assets/thumbs/fajr3-35.jpg",
      "assets/thumbs/fajr3-36.jpg",
      "assets/thumbs/fajr3-37.jpg",
      "assets/thumbs/fajr3-38.jpg",
      "assets/thumbs/fajr3-39.jpg",
      "assets/thumbs/fajr3-40.jpg",
      "assets/thumbs/fajr3-41.jpg",
      "assets/thumbs/fajr3-42.jpg"
    ],
    urban: [
      "assets/thumbs/urban1.jpg",
      "assets/thumbs/urban2.jpg",
      "assets/thumbs/urban3.jpg"
    ],
    fajr2: [
      "assets/thumbs/fajr2-4.jpg",
      "assets/thumbs/fajr2-5.jpg",
      "assets/thumbs/fajr2-6.jpg",
      "assets/thumbs/fajr2-7.jpg",
      "assets/thumbs/fajr2-8.jpg",
      "assets/thumbs/fajr2-9.jpg",
      "assets/thumbs/fajr2-10.jpg",
      "assets/thumbs/fajr2-11.jpg",
      "assets/thumbs/fajr2-12.jpg",
      "assets/thumbs/fajr2-13.jpg",
      "assets/thumbs/fajr2-14.jpg",
      "assets/thumbs/fajr2-15.jpg",
      "assets/thumbs/fajr2-16.jpg",
      "assets/thumbs/fajr2-17.jpg",
      "assets/thumbs/fajr2-18.jpg",
      "assets/thumbs/fajr2-19.jpg",
      "assets/thumbs/fajr2-20.jpg",
      "assets/thumbs/fajr2-21.jpg",
      "assets/thumbs/fajr2-22.jpg",
      "assets/thumbs/fajr2-23.jpg",
      "assets/thumbs/fajr2-24.jpg",
      "assets/thumbs/fajr2-25.jpg",
      "assets/thumbs/fajr2-26.jpg",
      "assets/thumbs/fajr2-27.jpg",
      "assets/thumbs/fajr2-28.jpg",
      "assets/thumbs/fajr2-29.jpg",
      "assets/thumbs/fajr2-30.jpg",
      "assets/thumbs/fajr2-31.jpg",
      "assets/thumbs/fajr2-32.jpg",
      "assets/thumbs/fajr2-33.jpg",
      "assets/thumbs/fajr2-34.jpg",
      "assets/thumbs/fajr2-35.jpg",
      "assets/thumbs/fajr2-36.jpg",
      "assets/thumbs/fajr2-37.jpg",
      "assets/thumbs/fajr2-38.jpg",
      "assets/thumbs/fajr2-39.jpg",
      "assets/thumbs/fajr2-40.jpg",
      "assets/thumbs/fajr2-41.jpg",
      "assets/thumbs/fajr2-42.jpg",
      "assets/thumbs/fajr2-43.jpg",
      "assets/thumbs/fajr2-44.jpg",
      "assets/thumbs/fajr2-45.jpg",
      "assets/thumbs/fajr2-46.jpg",
      "assets/thumbs/fajr2-47.jpg",
      "assets/thumbs/fajr2-1.jpg",
      "assets/thumbs/fajr2-2.jpg",
      "assets/thumbs/fajr2-3.jpg"
    ],
  };

  const gallerySection = document.getElementById("gallery");
  gallerySection.innerHTML = "";

  const infoText = document.createElement("p");
  infoText.className = "category-info";
  infoText.textContent = categoryInfo[category] || "";
  gallerySection.before(infoText);

  const selected = photos[category] || [];

  if (selected.length === 0) {
    gallerySection.innerHTML =
      "<p style='text-align:center;color:#777'>هیچ عکسی در این دسته وجود ندارد.</p>";
    return;
  }

  selected.forEach(url => {
    const div = document.createElement("div");
    div.className = "category-image-container";
    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = url;
    img.alt = category;
    img.onclick = () => openLightbox(img);
    div.appendChild(img);
    gallerySection.appendChild(div);
  });
}
