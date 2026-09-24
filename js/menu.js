function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("menu").classList.remove("active");
    });
});