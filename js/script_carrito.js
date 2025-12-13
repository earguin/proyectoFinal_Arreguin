const tipoPokemones = [
    {
        "id":1,
        "tipo": "grass",
        "color": "verde"
    },
    {
        "id":2,
        "tipo":"poison",
        "color":"lila"
    },
    {
        "id":3,
        "tipo":"fire",
        "color":"naranja"
    },
    {
        "id":4,
        "tipo":"flying",
        "color":"azulclaro"
    },
    {
        "id":5,
        "tipo":"water",
        "color":"azul"
    },
    {
        "id":6,
        "tipo":"bug",
        "color":"amarrilloverde"
    },
    {
        "id":7,
        "tipo":"normal",
        "color":"gris"
    },
    {
        "id":8,
        "tipo":"electric",
        "color":"amarillo"
    },
    {
        "id":9,
        "tipo":"ground",
        "color":"cafe"
    },
    {
        "id":10,
        "tipo":"fairy",
        "color":"rosa"
    }
]

function imprimirProductosEnHTML(productos) {
  const contenedorProductos = document.getElementById("products-container");
  productos.forEach((producto) => {    
    let cardProducto = document.createElement("div");
    cardProducto.classList = "card-item";
    let clase = "";
    tipo = producto.tipos[0].toLowerCase();
    tipoPokemones.forEach((elemento) => {
        if(tipo === elemento.tipo)
        {
            clase = elemento.color;
        }                
    });       

    cardProducto.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <div class="precio">$${producto.precio}</div>
                <div class="imagen"> <img src="${producto.imagen}" /></div>
                <div class="nombre">${producto.nombre}</div>
            </div>
            <div class="card-back ${clase}">                
                <div class="tipo">${producto.tipos}</div>                
                <div class="descripcion">Descripción:<br/> ${producto.descripcion}</div>
                <div class="categoria">Categoría:<br/> ${producto.categoria}</div>      
                <button id="btnComprar${producto.id}" class="${clase}">Comprar</button>
            </div>                   
        </div>    
    `;

    contenedorProductos.appendChild(cardProducto);
    const botonComprar = document.getElementById(`btnComprar${producto.id}`);

    // Agrego producto al carrito
    botonComprar.addEventListener("click", () => {
      alert(`Has comprado: ${producto.nombre} por $${producto.precio}`);

      carrito.push({ producto: producto.nombre, precio: producto.precio });

      localStorage.setItem("carrito", JSON.stringify(carrito));

      imprimirCarrito(carrito);
    });
  });
}

function imprimirCarrito(carrito) {
    const contenedorCarrito = document.getElementById("cart-container");
    contenedorCarrito.innerHTML = '<h2>Carrito de Compras</h2>'
    /*
    let productoItem = document.createElement("div");
    productoItem.classList = "productoItem";
    */
    let total = 0;
    carrito.forEach((item, index) => 
        {       
        let productoItem = document.createElement("div");
        productoItem.classList = "productoItem";
        productoItem.innerHTML = `
            <div class="productoIndex">${index + 1}</div>
            <div class="productoImg"><img src="${item.imagen}" width="80px" height="80px" /></div> 
            <div class="productoNombre">  ${item.producto} </div> 
            <div class="productoPrecio"> $${item.precio}</div>    
            <button id="btnEliminar${item.id}" onclick="eliminarProducto(${item.id})">Quitar producto</button>            
            `;
            total += item.precio;
            
            contenedorCarrito.appendChild(productoItem);
            /*const botonEliminar = document.getElementById(`btnEliminar${item.id}`);
            //Eliminar producto del carrito
            botonEliminar.addEventListener("click", eliminarProducto(item.id))*/
         
    })
    let precioTotal = document.createElement("div");
    precioTotal.classList = "precioTotal";
    precioTotal.innerHTML = `<h3>Total: ${total}</h3>`;
    contenedorCarrito.appendChild(precioTotal)

}



function eliminarProducto(id)
{         
    const carritoRecuperado = JSON.parse(localStorage.getItem("carrito"));
    //console.log("carritoRecuperado:", carritoRecuperado)
    const carritoFiltrado = carritoRecuperado.filter(producto => producto.id !== id)  
    //localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carritoFiltrado))  
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];        
    console.log(carritoFiltrado)
    imprimirCarrito(carrito);
}

// Ejecución del programa
//imprimirProductosEnHTML(productos);

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if (carrito.length > 0) {
  imprimirCarrito(carrito);
}

