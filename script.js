// ================= PRODUCT DATA =================
const products = [
  {
    name: "Iphone 17 Pro Max",
    image: "images/phone1.jpg",
    desc: "A high-performance smartphone with 5G, 108MP camera, and long-lasting battery."
  },
  {
    name: "iWatch",
    image: "images/watch1.jpg",
    desc: "Track your fitness, heart rate, and sleep with this stylish smartwatch."
  },
  {
    name: "Airpod Pro",
    image: "images/earbuds1.jpg",
    desc: "Noise-cancelling earbuds with 24-hour battery and premium sound quality."
  },
  {
    name: "Iphone 15",
    image: "images/phone2.webp",
    desc: "Affordable and sleek smartphone with excellent camera and fast performance."
  }
];

// ================ DISPLAY GALLERY ================
function displayGallery() {
  const gallery = document.getElementById("product-gallery");
  products.forEach((product, index) => {
    gallery.innerHTML += `
      <div class="col-md-3 col-6 mb-4">
        <div class="card product-card shadow-sm" onclick="showProduct(${index})">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body text-center">
            <h6 class="card-title">${product.name}</h6>
            <button class="btn btn-primary btn-sm">View Details</button>
          </div>
        </div>
      </div>`;
  });
}

// ================ SHOW PRODUCT MODAL ================
function showProduct(index) {
  const product = products[index];
  document.getElementById("productTitle").textContent = product.name;
  document.getElementById("productImage").src = product.image;
  document.getElementById("productDesc").textContent = product.desc;
  new bootstrap.Modal(document.getElementById("productModal")).show();
}

// Load products when page is ready
displayGallery();
