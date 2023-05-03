const carrito = JSON.parse(localStorage.getItem("nuevo-carrito"))

const carritoVacio = document.querySelector("#carrito-vacio")
const contenedorProductos = document.querySelector("#carrito-sneakers")
const carritoAcciones = document.querySelector("#carrito-acciones")

if (carrito) {
    carritoVacio.classList.add("disabled")

    contenedorProductos.classList.remove("disabled")

    carritoAcciones.classList.remove("disabled")


}else {

}