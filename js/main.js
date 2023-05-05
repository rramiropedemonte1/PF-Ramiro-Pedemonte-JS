const contenedorSneakers = document.querySelector("#container-items")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numero = document.querySelector("#numero")





function mostrarProductos() {
    sneakers.forEach(sneaker => {
        const div = document.createElement("div")
        div.classList.add("item")
        div.innerHTML = `
        <img class="destacados" src="${sneaker.imagen}" alt="${sneaker.nombre}">
            <div class="info-product">
                <h4>${sneaker.nombre}</h4>
                <p class="price">$${sneaker.precio}</p>
                <button class="producto-agregar" id="${sneaker.id}">Añadir al carrito</button>
            
            </div> `

            contenedorSneakers.append(div)
            

    })
    
    actualizarBotones()

}

mostrarProductos(sneakers)


function actualizarBotones() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}


let carrito
let sneakerCarritoLS = JSON.parse(localStorage.getItem("sneakers-en-carrito"))

if (sneakerCarritoLS) {
    carrito = sneakerCarritoLS
    numerosube()
}else {
   carrito = []
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id
    const sneakerAgregado = sneakers.find(sneaker=>sneaker.id == idBoton)

    if (carrito.some(sneaker => sneaker.id == idBoton)){
        const findIndex = carrito.findIndex(sneaker => sneaker.id == idBoton)
        carrito[findIndex].cantidad++
    }else{
        sneakerAgregado.cantidad = 1
        carrito.push(sneakerAgregado)
    }
    numerosube()
    console.log(carrito)

    localStorage.setItem("sneakers-en-carrito", JSON.stringify(carrito))
    

}


function numerosube() {
    let number = carrito.reduce((acc, sneaker) => acc + sneaker.cantidad, 0)
    numero.innerText = number
}