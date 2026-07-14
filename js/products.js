/*==================================================
 NGEPAS PRODUCTS.JS
 Project : Ngepas
 Module  : Products
==================================================*/

/*==================================================
 PRODUCT CONTAINER
==================================================*/

const productContainer = document.getElementById("product-list");
const categoryContainer = document.getElementById("category-filter");
let allProducts = [];
let currentCategory = "all";

/*==================================================
 CREATE PRODUCT CARD
==================================================*/

function createProductCard(product) {

    return `

    <div class="product-card">

        <img
            src="${product.image}"
            alt="${product.title}">

        <h3>${product.title}</h3>

        <p class="price">
            Rp${product.price.toLocaleString("id-ID")}
        </p>

        <p>
            ⭐ ${product.rating} • ${product.sold} terjual
        </p>

        <a
            href="${product.affiliate}"
            target="_blank"
            class="buy-btn">

            🛒 Lihat di Shopee

        </a>

    </div>

    `;

}

/*==================================================
 RENDER PRODUCTS
==================================================*/

function renderProducts(products) {

    productContainer.innerHTML = "";

    products.forEach((product) => {

        productContainer.innerHTML += createProductCard(product);

    });

}

/*==================================================
 RENDER CATEGORIES
 Membuat tombol kategori secara otomatis
==================================================*/

function renderCategories() {

    categoryContainer.innerHTML = "";

    categories.forEach(category => {

        categoryContainer.innerHTML += `

            <button
                class="category-btn"
                data-category="${category.id}">

                ${category.title}

            </button>

        `;

    });

}

/*==================================================
 CATEGORY FILTER
 Filter produk berdasarkan kategori
==================================================*/

categoryContainer.addEventListener("click", (e) => {

    if (!e.target.classList.contains("category-btn")) return;

    currentCategory = e.target.dataset.category;

    loadProducts();

});

/*==================================================
 LOAD PRODUCT DATA
==================================================*/

async function loadProducts() {

    const response = await fetch("data/products.json");

    allProducts = await response.json();

    // Render tombol kategori
    renderCategories();

    if (currentCategory === "all") {

        renderProducts(allProducts);

    } else {

        const filtered = allProducts.filter(product => {

            return product.category === currentCategory;

        });

        renderProducts(filtered);

    }

}

/*==================================================
 START PRODUCT LOADER
==================================================*/

loadProducts();