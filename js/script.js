const navbar = document.querySelector(".navbar-nav");
const hamburger = document.getElementById("hamburger-menu");
hamburger.addEventListener("click", function (e) {
  navbar.classList.toggle("active");
  e.preventDefault();
});

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function (e) {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
});

const shopCart = document.querySelector("#shopping-cart");
const shopItem = document.querySelector(".shopping-cart");

shopCart.addEventListener("click", function () {
  shopItem.classList.toggle("active");
});

document.addEventListener("click", function (event) {
  if (!hamburger.contains(event.target) && !navbar.contains(event.target)) {
    navbar.classList.remove("active");
  }
  if (!searchForm.contains(event.target) && !searchBtn.contains(event.target)) {
    searchForm.classList.remove("active");
  }
  if (!shopCart.contains(event.target) && !shopItem.contains(event.target)) {
    shopItem.classList.remove("active");
  }
});

const detailProduk = document.querySelectorAll(".detail-produk");
const modalBox = document.querySelector(".modal-box");

detailProduk.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    modalBox.style.display = "flex";
    e.preventDefault();
  });
});

window.addEventListener("click", function (e) {
  if (e.target === modalBox) {
    modalBox.style.display = "none";
  }
});

