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
    "https://res.cloudinary.com/demo/image/upload/flower.jpg"
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
