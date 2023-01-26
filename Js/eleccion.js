let escama = document.getElementsByClassName("option-escama");
let piel = document.getElementsByClassName("option-piel");
let cuerno = document.getElementsByClassName("option-cuerno");
let opciones = document.querySelectorAll(".option")

let mostrarEscama = document.getElementsByClassName("escama");
let mostrarPiel = document.getElementsByClassName("piel");
let mostrarCuerno = document.getElementsByClassName("cuerno");
let principal = document.querySelectorAll(".principal")

opciones.forEach((e, index) =>{
    e.addEventListener("click", () => {
        removeActiveClass();
        e.classList.add("active");
        removeMostrarClass();
        principal[index].classList.add("mostrar");
    })
})

const removeActiveClass = () => {
    opciones.forEach(element => {
        element.classList.remove("active");
    })
}


const removeMostrarClass = () => {
    
    principal.forEach(element => {
        element.classList.remove("mostrar");
    })
}