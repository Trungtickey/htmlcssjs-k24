const products = [
  {
    id: 1,
    name: "Laptop Dell XPS 15",
    price: 35990000,
    image:
      "https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=I1egGQdLPs2iTAA&pid=ImgRaw&r=0",
    description:
      "Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.",
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    price: 32990000,
    image:
      "https://th.bing.com/th/id/OIP.POBM88vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain",
    description:
      "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: 28990000,
    image:
      "https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNXjPAHaEK?rs=1&pid=ImgDetMain",
    description:
      "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM5",
    price: 7990000,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljv36f0uj8xuaf",
    description:
      "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 11990000,
    image:
      "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
    description:
      "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.",
  },
  {
    id: 6,
    name: "Loa JBL Charge 5",
    price: 3990000,
    image:
      "https://th.bing.com/th/id/OIP.Khp66Lw41nQJBWsxrdd5ZQHaHa?rs=1&pid=ImgDetMain",
    description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.",
  },
];
const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function saveProductsToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}
function loadProductsFromLocalStorage() {
  const storedProducts = localStorage.getItem("products");
  if (storedProducts) {
    return JSON.parse(storedProducts);
  }
  return products;
}
function renderProducts(productsToRender) {
  productContainer.innerHTML = "";

  productsToRender.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "col-md-4 mb-4";

    productCard.innerHTML = `
            <div class="product-card">
                <img src="${product.image}" alt="${
      product.name
    }" class="img-fluid product-image w-100">
                <h5 class="product-title">${product.name}</h5>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${formatPrice(product.price)} VND</p>
                <button class="btn btn-primary buy-btn">Buy</button>
            </div>
        `;

    productContainer.appendChild(productCard);
  });
}
function searchProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const storedProducts = loadProductsFromLocalStorage();

  if (searchTerm === "") {
    renderProducts(storedProducts);
    return;
  }

  const filteredProducts = storedProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
  );

  renderProducts(filteredProducts);
}
searchButton.addEventListener("click", searchProducts);
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchProducts();
  }
});
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("products")) {
    saveProductsToLocalStorage();
  }
  const storedProducts = loadProductsFromLocalStorage();
  renderProducts(storedProducts);
});
