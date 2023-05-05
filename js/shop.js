let sneakerCarrito = JSON.parse(localStorage.getItem("sneakers-en-carrito"))


const carritoVacio = document.querySelector("#carrito-vacio")
const carritoSneakers = document.querySelector("#carrito-sneakers")
const carritoAcciones = document.querySelector("#carrito-acciones")
let eliminar = document.querySelectorAll(".carrito-producto-eliminar")
const eliminarCarritoBoton = document.querySelector("#carrito-acciones-vaciar")

function cargarSneakersCarrito() {
    if (sneakerCarrito) {
    carritoVacio.classList.add("disabled")
    carritoSneakers.classList.remove("disabled")
    carritoAcciones.classList.remove("disabled")  
    

    carritoSneakers.innerHTML = ""
    
    sneakerCarrito.forEach(sneaker => {
    const div = document.createElement("div")
    div.classList.add("carrito-producto")
    div.innerHTML = `     
           <img class="carrito-producto-imagen" src="${sneaker.imagen}" alt="">
    <div class="carrito-producto-titulo">
        <small>Nombre</small>
        <h3>${sneaker.nombre}</h3>
    </div>
    <div class="carrito-producto-cantidad">
        <small>Cantidad</small>
        <p>${sneaker.cantidad}</p>

    </div>
    <div class="carrito-producto-precio">
        <small>Precio</small>
        <p>$${sneaker.precio}</p>
    </div>
    <div class="carrito-producto-subtotal">
        <small>Subtotal</small>
        <p>$${sneaker.precio * sneaker.cantidad}</p>
    </div>
    <button class="carrito-producto-eliminar" id="${sneaker.id}"><i class="bi bi-trash-fill"></i></button>`

    carritoSneakers.append(div)

    });
    


} else{

    carritoVacio.classList.remove("disabled")
    carritoSneakers.classList.add("disabled")
    carritoAcciones.classList.add("disabled") 

}


botonEliminar()


}


cargarSneakersCarrito()



function botonEliminar() {
    eliminar = document.querySelectorAll(".carrito-producto-eliminar")

    eliminar.forEach(boton => {
        boton.addEventListener("click", eliminarSneaker)
    });
}



function eliminarSneaker(e) {
    const idBoton = e.currentTarget.id
    const findIndex = sneakerCarrito.findIndex(sneaker => sneaker.id == idBoton)
    sneakerCarrito.splice(findIndex, 1)
    cargarSneakersCarrito()

    localStorage.setItem("sneakers-en-carrito", JSON.stringify (sneakerCarrito))
}



eliminarCarritoBoton.addEventListener("click", eliminarCarrito)

function eliminarCarrito() {
    carritoSneakers.length = 0
    localStorage.setItem("sneakers-en-carrito", JSON.stringify(sneakerCarrito))
    cargarSneakersCarrito()
}

console.log(eliminarCarritoBoton)
