/* ================================
   Caspian Photographer - script.js
   Author: AmirMahdi Zareei
   ================================ */

// حالت تاریک
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode") ? "on" : "off"
  );
}

// اعمال حالت ذخیره‌شده
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
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

// گالری دسته‌ها
function loadGallery() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "nature";

  const photos = {
    nature: [
      "assets/thumbs/nature1.jpg",
      "assets/thumbs/nature2.jpg",
      "assets/thumbs/nature3.jpg"
    ],
    portrait: [
      "assets/thumbs/portrait1.jpg",
      "assets/thumbs/portrait2.jpg",
      "assets/thumbs/portrait3.jpg"
    ],
    urban: [
      "assets/thumbs/urban1.jpg",
      "assets/thumbs/urban2.jpg",
      "assets/thumbs/urban3.jpg"
    ]
  };

  const gallerySection = document.getElementById("gallery");
  gallerySection.innerHTML = "";

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
    img.src = url;
    img.alt = category;
    img.onclick = () => openLightbox(img);
    div.appendChild(img);
    gallerySection.appendChild(div);
  });
}
