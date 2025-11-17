document.addEventListener("DOMContentLoaded", () => {
    console.log("EcoLiving cargado correctamente 🌿");
    activarScrollSuave();
    activarHeaderScroll();
});

function activarScrollSuave() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const destino = document.querySelector(this.getAttribute("href"));
            if (destino) {
                e.preventDefault();
                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

function activarHeaderScroll() {
    const header = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.style.boxShadow = "0 4px 14px rgba(0,0,0,0.12)";
        } else {
            header.style.boxShadow = "none";
        }
    });
}

function mostrarAlerta() {
    alert("¡Gracias por usar EcoLiving! 🌿");
}
