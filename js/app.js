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