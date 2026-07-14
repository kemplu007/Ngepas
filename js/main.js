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

