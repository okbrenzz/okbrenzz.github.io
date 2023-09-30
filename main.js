const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const salirads = document.querySelector(".cerrar-ads");
const ads2 = document.querySelector(".ads2");
const salirads3 = document.querySelector(".cerrar-ads3");
const ads3 = document.querySelector(".ads3");

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
})

salirads.addEventListener("click", () => {
    ads2.classList.add("hiden");
})

salirads3.addEventListener("click", () => {
    ads3.classList.add("hiden");
})