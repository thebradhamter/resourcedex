window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        const logos = document.querySelectorAll('#logo');
        logos.forEach((logo) => {
            const icon = document.createElement("img");
            icon.src = "https://thebradhamter.github.io/resourcedex/icon.png";
            icon.alt = "ResourceDex icon";
            icon.height = "246";
            icon.width = "246";
            logo.parentNode.replaceChild(icon, logo);
        });
    }
});