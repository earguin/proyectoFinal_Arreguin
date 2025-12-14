function imprimirCarrito(carrito) {
    const contenedorCarrito = document.getElementById("cart-container");
    contenedorCarrito.innerHTML = '<h2>Carrito de Compras</h2>'
    let total = 0;
    carrito.forEach((item, index) => 
        {       
        let productoItem = document.createElement("div");
        productoItem.classList = "productoItem";
        productoItem.innerHTML = `
            <div class="productoIndex">${index + 1}</div>
            <div class="productoImg"><img src="${item.imagen}" width="100px" height="100px" /></div> 
            <div class="productoNombre">  ${item.producto} </div> 
            <div class="productoPrecio"> $${item.precio}</div>    
            <button id="btnEliminar${item.id}" onclick="eliminarProducto(${item.id})">Quitar producto</button>            
            `;
            total += item.precio;
            
            contenedorCarrito.appendChild(productoItem);
            
    })
    let precioTotal = document.createElement("div");
    precioTotal.classList = "precioTotal";
    precioTotal.innerHTML = `<h3>Total: ${total}</h3>
    <button id="btnPagar">Pagar</button>    
    `;
    contenedorCarrito.appendChild(precioTotal)

    const botonPagar = document.getElementById("btnPagar");
    botonPagar.addEventListener("click", () => {
    Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Grcias por tu compra",
    showConfirmButton: false,
    timer: 2000
    });
        localStorage.removeItem("carrito")
        contenedorCarrito.innerHTML = "<h2>Carrito de compras</h2>"        
    });
}

function eliminarProducto(id)
{         
    const carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
    const carritoFiltrado = carritoRecuperado.filter(producto => producto.id !== id)  
    //localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carritoFiltrado))  
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];   
    imprimirCarrito(carrito);
}

function vaciarCarrito()
{
    localStorage.removeItem("carrito")
}

// Ejecución del programa
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if (carrito.length > 0) {
    imprimirCarrito(carrito);
}

