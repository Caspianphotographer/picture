// گرفتن المنت‌ها از صفحه
const galleryGrid = document.getElementById("galleryGrid");
const catTitle = document.getElementById("catTitle");

// گرفتن نام دسته از URL (مثلاً ?category=nature)
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// تنظیم عنوان صفحه
const titles = {
  nature: "طبیعت",
  portrait: "پرتره",
  urban: "شهری"
};
if (catTitle) catTitle.textContent = titles[category] || "گالری Caspian";

// لینک عکس‌ها (می‌تونی بعداً Cloudinary بذاری)
const photos = {
  nature: [
    "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    "https://res.cloudinary.com/demo/image/upload/flower.jpg"
  ],
  portrait: [
    "https://res.cloudinary.com/demo/image/upload/v1622298462/man.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1622298463/woman.jpg"
  ],
  urban: [
    "https://res.cloudinary.com/demo/image/upload/v1622298464/city.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1622298465/street.jpg"
  ]
};

// اگر گالری وجود داره، عکس‌ها رو بساز
if (galleryGrid && photos[category]) {
  photos[category].forEach(url => {
    const card = document.createElement("div");
    card.className = "cat";

    const img = document.createElement("img");
    img.src = url;
    img.alt = category;

    const link = document.createElement("a");
    link.href = url;
    link.download = true;
    link.textContent = "دانلود عکس";
    link.className = "download-link";

    card.appendChild(img);
    card.appendChild(link);
    galleryGrid.appendChild(card);
  });
} else if (galleryGrid) {
  galleryGrid.innerHTML = "<p>هیچ عکسی برای این دسته پیدا نشد 😕</p>";
}
