/* ================================
   Caspian Photographer - script.js
   Author: AmirMahdi Zareei
   ================================ */

/* 🎨 حالت تاریک / روشن */
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode") ? "on" : "off"
  );
}

// وقتی صفحه لود میشه، حالت ذخیره‌شده رو اعمال کن
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
  }

  // بررسی کنیم اگر صفحه گالری هست، گالری رو بسازیم
  if (document.getElementById("gallery")) {
    loadGallery();
  }
});

/* 💡 لایت‌باکس */
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (lightbox && lightboxImg) {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) lightbox.classList.remove("active");
}

/* 🖼️ گالری دسته‌ها */
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

  if (!photos[category] || photos[category].length === 0) {
    gallerySection.innerHTML = `
      <p style="text-align:center;color:#777;margin-top:40px">
        هیچ عکسی در این دسته وجود ندارد.
      </p>`;
    return;
  }

  // ساختن گالری
  photos[category].forEach(url => {
    const container = document.createElement("div");
    container.className = "category-image-container";
    const img = document.createElement("img");
    img.src = url;
    img.alt = category;
    img.onclick = () => openLightbox(img);
    container.appendChild(img);
    gallerySection.appendChild(container);
  });
}

/* 🌐 دکمه‌های منو (اسکرول نرم) */
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
