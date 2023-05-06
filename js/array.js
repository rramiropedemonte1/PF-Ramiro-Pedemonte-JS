let sneakers = []


fetch("./js/sneakers.json")
.then(response => response.json())
.then(data => {
    sneakers = data
    mostrarProductos(sneakers)
})
