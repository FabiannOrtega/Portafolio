document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgTarget");
    const closeBtn = document.querySelector(".close-modal");
    const projectImages = document.querySelectorAll(".project-image img");

    projectImages.forEach(img => {
        img.style.cursor = "zoom-in"; 
        
        img.addEventListener("click", function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            document.body.classList.add("no-scroll"); 
        });
    });

    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll"); 
    }

    // Eventos para cerrar
    closeBtn.addEventListener("click", closeModal);
    
    modal.addEventListener("click", function(e) {
        if (e.target !== modalImg) {
            closeModal();
        }
    });
});