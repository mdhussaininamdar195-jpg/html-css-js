    const form = document.querySelector("form");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    if (form.checkValidity()) {
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000); 
    }
});