let sneakerCarrito = JSON.parse(localStorage.getItem("sneakers-en-carrito"))


const carritoVacio = document.querySelector("#carrito-vacio")
const carritoSneakers = document.querySelector("#carrito-sneakers")
const carritoAcciones = document.querySelector("#carrito-acciones")
let eliminar = document.querySelectorAll(".sneaker-eliminar")
const eliminarCarritoBoton = document.querySelector("#eliminar-carrito")
const containerTotal = document.querySelector("#total")
const SneakerComprar = document.querySelector("#sneaker-comprar")

function cargarSneakersCarrito() {
    
    carritoVacio.classList.add("disabled")
    carritoSneakers.classList.remove("disabled")
    carritoAcciones.classList.remove("disabled")  
    
if (sneakerCarrito && sneakerCarrito.length > 0) {


    carritoSneakers.innerHTML = ""
    
    sneakerCarrito.forEach(sneaker => {
    const div = document.createElement("div")
    div.classList.add("carrito-sneaker")
    div.innerHTML = `     
           <img class="carrito-sneaker-imagen" src="${sneaker.imagen}" alt="">
    <div class="carrito-sneaker-titulo">
        <small>Nombre</small>
        <h3>${sneaker.nombre}</h3>
    </div>
    <div class="carrito-sneaker-cantidad">
        <small>Cantidad</small>
        <p>${sneaker.cantidad}</p>

    </div>
    <div class="carrito-sneaker-precio">
        <small>Precio</small>
        <p>$${sneaker.precio}</p>
    </div>
    <div class="carrito-sneaker-subtotal">
        <small>Subtotal</small>
        <p>$${sneaker.precio * sneaker.cantidad}</p>
    </div>
    <button class="sneaker-eliminar" id="${sneaker.id}"><i class="bi bi-trash-fill"></i></button>`

    carritoSneakers.append(div)

    });
    


} else{

    carritoVacio.classList.remove("disabled")
    carritoSneakers.classList.add("disabled")
    carritoAcciones.classList.add("disabled") 

}


botonEliminar()
totalActualizado()


}


cargarSneakersCarrito()

SneakerComprar.addEventListener("click", () =>{
     Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias por su compra, disfrute de sus sneakers',
        showConfirmButton: false,
        timer: 3000
      })
      eliminarCarrito()
})


function comprarCarrito() {
    sneakerCarrito.length = 0
    localStorage.setItem("sneakers-en-carrito", JSON.stringify(sneakerCarrito))
}




function totalActualizado() {
    const sneakerTotal = sneakerCarrito.reduce((acc, sneaker) => acc + (sneaker.precio * sneaker.cantidad), 0)
    total.innerText = `$${sneakerTotal}`
}



function botonEliminar() {
    eliminar = document.querySelectorAll(".sneaker-eliminar")

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
    sneakerCarrito.length = 0
    localStorage.setItem("sneakers-en-carrito", JSON.stringify(sneakerCarrito))
    cargarSneakersCarrito()
}