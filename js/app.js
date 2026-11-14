// Año automático

document.getElementById("year").textContent =
    new Date().getFullYear();



// Animaciones al hacer scroll

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold:0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});



// Navbar al hacer scroll

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.boxShadow =
            "0 16px 48px rgba(100,88,74,.16)";

    }else{

        navbar.style.boxShadow =
            "0 12px 40px rgba(100,88,74,.10)";

    }

});


// Vista ampliada de la galería

const gallery = document.querySelector(".gallery-grid");
const galleryViewer = document.querySelector(".gallery-viewer");

if (gallery && typeof galleryViewer?.showModal === "function") {
    const photos = Array.from(gallery.querySelectorAll(".gallery-item"));
    const viewerImage = galleryViewer.querySelector("img");
    const caption = galleryViewer.querySelector("#gallery-caption");
    const inquiry = galleryViewer.querySelector(".gallery-inquiry");
    let activePhoto = 0;

    function showPhoto(index) {
        activePhoto = (index + photos.length) % photos.length;
        const photo = photos[activePhoto];
        const description = photo.querySelector("img").alt;
        const product = photo.dataset.product;
        const message = `¡Hola, D'CLAU! 🎄 ¿Tienen disponibilidad de «${product}»?`;

        viewerImage.alt = description;
        viewerImage.src = photo.href;
        caption.textContent = `${product} · ${activePhoto + 1} de ${photos.length}`;
        inquiry.href = `https://wa.me/573122407104?text=${encodeURIComponent(message)}`;
    }

    gallery.addEventListener("click", event => {
        const link = event.target.closest(".gallery-item");
        if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        event.preventDefault();
        showPhoto(photos.indexOf(link));
        galleryViewer.showModal();
    });

    galleryViewer.querySelector(".gallery-prev").addEventListener("click", () => showPhoto(activePhoto - 1));
    galleryViewer.querySelector(".gallery-next").addEventListener("click", () => showPhoto(activePhoto + 1));

    galleryViewer.addEventListener("keydown", event => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            showPhoto(activePhoto + (event.key === "ArrowLeft" ? -1 : 1));
        }
    });
}
