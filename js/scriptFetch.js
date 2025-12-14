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


async function imprimirProductosEnHTML(){
    try{
        const response = await fetch("./../lista_productos.json")

        const data = await response.json() 

        //console.log(data)

        const contenedorProductos = document.getElementById("products-container");
        data.productos.forEach((producto) => {    
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
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${producto.nombre}`,
            text: "agregado al carrito",
            showConfirmButton: false,
            timer: 2000
            });

            //alert(`Has comprado: ${producto.nombre} por $${producto.precio}`);

            carrito.push({ id: producto.id, producto: producto.nombre, imagen: producto.imagen, precio: producto.precio });

            localStorage.setItem("carrito", JSON.stringify(carrito));

            imprimirCarrito(carrito);
            });
        });

    }catch(error)
    {
        console.error('error al obtener los datos ', error)
    }
}

function imprimirCarrito(carrito) {
    const contenedorCarrito = document.getElementById("cart-container");
    contenedorCarrito.innerHTML = "<h2>Carrito de Compras</h2>";

    carrito.forEach((item, index) => {
        contenedorCarrito.innerHTML += `
                <p>${index + 1}. ${item.producto} - $${item.precio}</p>
            `;
    });

    contenedorCarrito.innerHTML += `<h3>Total: $</h3>`;
}

// Ejecución del programa
imprimirProductosEnHTML();


const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

if (carrito.length > 0) {
  imprimirCarrito(carrito);
}

