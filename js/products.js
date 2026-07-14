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
const productTitle = document.getElementById("product-title");

const productSubtitle = document.getElementById("product-subtitle");

/*==================================================
 UPDATE SECTION HEADER
 Mengubah judul dan deskripsi
 sesuai kategori yang dipilih
==================================================*/

function updateSectionTitle() {

    const titles = {

        all: {

            title: "✨ Semua Produk",

            subtitle: "Temukan produk pilihan terbaik untuk setiap ruangan di rumahmu."

        },

        bedroom: {

            title: "🛏️ Bedroom Picks",

            subtitle: "Inspirasi dan produk terbaik untuk kamar tidur yang nyaman."

        },

        kitchen: {

            title: "🍳 Kitchen Picks",

            subtitle: "Peralatan dan dekorasi dapur pilihan untuk aktivitas memasak."

        },

        livingroom: {

            title: "🛋️ Living Room Picks",

            subtitle: "Lengkapi ruang tamu agar terasa hangat dan nyaman."

        },

        bathroom: {

            title: "🛁 Bathroom Picks",

            subtitle: "Produk pilihan untuk kamar mandi yang bersih dan elegan."

        },

        coffee: {

            title: "☕ Coffee Corner Picks",

            subtitle: "Semua yang kamu butuhkan untuk sudut ngopi favoritmu."

        }

    };

    productTitle.textContent = titles[currentCategory].title;

    productSubtitle.textContent = titles[currentCategory].subtitle;

}

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
                class="category-btn ${currentCategory === category.id ? "active" : ""}"
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

  renderCategories();
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
  updateSectionTitle();

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