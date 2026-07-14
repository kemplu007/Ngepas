/*==================================================
 NGEPAS SCRIPT.JS v1.0
 Project : Ngepas
 Version : 1.0
 Author  : Muhammad Abdul Chakim & ChatGPT
==================================================*/


/*==================================================
 HEADER EFFECT
 Header berubah saat halaman discroll
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(255,255,255,.97)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(247,244,238,.90)";
        header.style.boxShadow = "none";

    }

});


/*==================================================
 SCROLL ANIMATION
 Menampilkan card saat masuk layar
==================================================*/

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((element) => {

    observer.observe(element);

});


/*==================================================
 BUY BUTTON
 Menampilkan notifikasi sebelum menuju Shopee
==================================================*/

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach((button) => {

    button.addEventListener("click", () => {

        alert("Kamu akan diarahkan ke Shopee.");

    });

});


/*==================================================
 CATEGORY CARD
 Efek klik kategori
==================================================*/

const roomCards = document.querySelectorAll(".room");

roomCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(.98)";

        setTimeout(() => {

            card.style.transform = "";

        }, 120);

    });

});


/*==================================================
 FUTURE FEATURES
 Area untuk fitur berikutnya

- Produk otomatis dari produk.json
- Filter kategori
- Pencarian
- Dark mode
- Wishlist
==================================================*/

/*==================================================
 CHECKPOINT 2
 Dynamic Product Loader
==================================================*/

/*==================================================
 PRODUCT CONTAINER
 Mengambil tempat produk pada halaman
==================================================*/

const productContainer = document.getElementById("product-list");

/*==================================================
 CREATE PRODUCT CARD
 Membuat tampilan kartu produk
==================================================*/

function createProductCard(product){

    return `

    <div class="product-card">

        <img
            src="${product.image}"
            alt="${product.name}">

        <h3>${product.name}</h3>
<p class="price">
    Rp${product.price.toLocaleString("id-ID")}
</p>
        <p>

            ⭐ ${product.rating}

        </p>

        <a
            href="${product.link}"
            target="_blank"
            class="buy-btn">

            🛒 Lihat di Shopee

        </a>

    </div>

    `;

}

/*==================================================
 LOAD PRODUCT DATA
 Mengambil data dari file produk.json
==================================================*/

async function loadProducts() {

    const response = await fetch("data/products.json");

    const products = await response.json();

    productContainer.innerHTML = "";

    /*==========================================
    DEFAULT CATEGORY
    Menampilkan produk Bedroom saat website dibuka
    ==========================================*/

    const currentCategory = "bedroom";

    const filteredProducts = products.filter((product) => {

        return product.category === currentCategory;

    });

    filteredProducts.forEach((product) => {

        productContainer.innerHTML += createProductCard(product);

    });

}
/*==================================================
 START PRODUCT LOADER
 Menjalankan fungsi saat website dibuka
==================================================*/

loadProducts();