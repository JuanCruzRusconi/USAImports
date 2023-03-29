//let nameUser = prompt("Éste sera el sitio web de USAImports, por favor díganos su nombre:");
//let welcomeUser = `Bienvenido ${nameUser} a USAImports`;

//alert(welcomeUser);

const lineaProducto0 = "Linea Stanley";
const lineaProducto1 = "Linea Apple";

class Producto{
    constructor(id, nombre, color, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.stock = stock
    }
}

const producto0 = new Producto (0,"Termos", "Verde", 25000, 20);
const producto1 = new Producto (1,"Botellas", "Blanco", 20000, 20);
const producto2 = new Producto (2,"Vasos", "Negro", 15000, 15);

const productosStanley = [producto0, producto1, producto2];

const producto10 = new Producto (10,"Iphone 14 Pro", "Gris espacial", 418000, 20);
const producto11 = new Producto (11,"Iphone 14 Pro Max", "Blanco", 456000, 20);
const producto12 = new Producto (12,"Iphone 14", "Amarillo", 342000, 20);
const producto13 = new Producto (13,"Iphone 14 Plus", "Amarillo", 380000, 20);
const producto14 = new Producto (14,"Airpods", "Blanco", 76000, 20);
const producto15 = new Producto (15,"Airpods Pro", "Blanco", 115000, 20);
const producto16 = new Producto (16,"AppleWatch SE", "Rojo", 105000, 15);
const producto17 = new Producto (17,"AppleWatch 8", "Azul", 190000, 15);
const producto18 = new Producto (18,"AppleWatch Ultra", "Negro", 342000, 15);
const producto20 = new Producto (20,"Mac", "Gris espacial", 700000, 10);

const productosApple = [producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto20];

const productosTodos = productosStanley.concat(productosApple)
console.log(productosTodos)
/*
const contenedorProductosStanley = document.getElementById("contenedorProductosStanley");
productosStanley.forEach(Producto => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 18rem;">
                             <img class="card-img-top" src="./images/(...)" alt="Card image cap">
                             <div class="card-body">
                               <h3 class="card-title">${Producto.nombre}</h3>
                               <p class="card-text">Disponible actualmente en color ${Producto.color}.</p>
                               <h5 class="card-title">$${Producto.precio}</h5>
                               <input type="button" onclick="agregarCarrito(${Producto.id})" class="btn btn-primary" value="Agregar al carrito">
                             </div>
                          </div>`
                     contenedorProductosStanley.appendChild(div);
})
*/
const contenedorProductosStanley = document.getElementById("contenedorProductosStanley");
productosStanley.forEach(Producto => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 18rem;">
                          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                          <div class="card-body">
                              <h5 class="card-title">${Producto.nombre}</h5>
                              <p class="card-text">Disponible actualmente en color ${Producto.color}.</p>
                              <h5 class="card-title">$${Producto.precio}</h5>
                              <input type="button" onclick="agregarCarrito(${Producto.id})" class="btn btn-primary" value="Agregar al carrito">
                          </div>
                       </div>`;
                      contenedorProductosStanley.appendChild(div);
})

const contenedorProductosApple = document.getElementById("contenedorProductosApple");
productosApple.forEach(Producto => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 18rem;">
                          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                          <div class="card-body">
                              <h5 class="card-title">${Producto.nombre}</h5>
                              <p class="card-text">Disponible actualmente en color ${Producto.color}.</p>
                              <h5 class="card-title">$${Producto.precio}</h5>
                              <input type="button" onclick="agregarCarrito(${Producto.id})" class="btn btn-primary" value="Agregar al carrito">
                          </div>
                       </div>`;
                      contenedorProductosApple.appendChild(div);
})


/*
const contenedorProductosStanley2 = (productosStanley) => {
    for(Producto of productosStanley){
        const card = document.createElement("div")
        card.innerHTML =  `<div class="card" style="width: 18rem;">
                             <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                             <div class="card-body">
                               <h5 class="card-title">${Producto.nombre}</h5>
                               <p class="card-text">Disponible actualmente en color ${Producto.color}.</p>
                               <a href="#" class="btn btn-primary">Go somewhere</a>
                               <input type="button" onclick="agregarCarrito(${Producto.id})" class="btn btn-primary" value="Agregar al carrito">
                             </div>
                           </div>`;
                          document.body.append(card);
    }
}
contenedorProductosStanley2(productosStanley);
*/
const arrayCarrito = [];

class objetosCarrito{
    constructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad
    }
    sumaCarrito(){
        this.cantidad = this.cantidad + 1
    }
}

function agregarCarrito(producto){
    const existeCarrito = arrayCarrito.find(e => e.producto == producto)
    if(existeCarrito != undefined){
        let posicion = arrayCarrito.findIndex(elem => elem.producto == existeCarrito.producto)
        arrayCarrito[posicion].sumaCarrito()
    } else{
        const alCarrito = new objetosCarrito(producto, 1)
        arrayCarrito.push(alCarrito)
//      console.table(arrayCarrito)
    }
}

               
/*
function verCarrito(){
    const contenedorCarrito = document.getElementById("contenedorCarrito");
    document.body.innerHTML = ``
    for(item of arrayCarrito){
        let div = document.createElement("div")
        let datosProductos = productosStanley.find(elem => elem.id == item.producto)  

        div.innerHTML = `<div class="card" style="width: 18rem;">
                             <img class="card-img-top" src="./images/${Producto.imagen}" alt="Card image cap">
                             <div class="card-body">
                               <h3 class="card-title">${datosProductos.nombre}</h3>
                               <p class="card-text">Disponible actualmente en color ${datosProductos.color}.</p>
                               <h5 class="card-title">$${datosProductos.precio}</h5>
                               <p class="card-text"> Te llevas ${item.cantidad}</p>
                             </div>
                          </div>`;
                          contenedorCarrito.appendChild(div);
    }
}
*/

// FUNCIONA
function verCarrito(){
//    const contenedorCarrito = document.getElementById("contenedorCarrito")
    const elementoABorrar = document.querySelector("main", ".contenedorProductosStanley");
    elementoABorrar.remove();
    for(item of arrayCarrito){
        let div = document.createElement("div");
        div.id = "contenedorCarrito";
        let datosProductos = productosTodos.find(elem => elem.id == item.producto)
        const totalCompraProducto = item.cantidad * datosProductos.precio;  
        div.innerHTML = `<p>Has seleccionado los siguientes productos:</p>
                         <div class="card" style="width: 18rem;">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                            <div class="card-body">
                                <h5 class="card-title">${datosProductos.nombre}</h5>
                                <p class="card-text">Disponible actualmente en color ${datosProductos.color}.</p>
                                <h5 class="card-title">$${datosProductos.precio}</h5>
                                <p class="card-text"> Te llevas ${item.cantidad} por un total de $${totalCompraProducto}.</p>
                            </div>
                         </div>`;
//                       contenedorCarrito.appendChild(div);
                        document.body.append(div);
    }
}


// CHATGPT
/*
function verCarrito(){
    const contenedorCarrito = document.getElementById("contenedorCarrito");
    document.body.innerHTML = ``;
    arrayCarrito.forEach(item => {
        let datosProductos = productosStanley.find(elem => elem.id == item.producto);
        const div = document.createElement("div");
        
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                            <div class="card-body">
                                <h5 class="card-title">${datosProductos.nombre}</h5>
                                <p class="card-text">Disponible actualmente en color ${datosProductos.color}.</p>
                                <h5 class="card-title">$${datosProductos.precio}</h5>
                                <p class="card-text"> Te llevas ${item.cantidad}</p>
                            </div>
                        </div>`;
                        contenedorCarrito.appendChild(div);
    });
}
*/
/*
function verCarrito(){
        const elementoABorrar = document.querySelector("main", ".contenedorProductosStanley");
        elementoABorrar.remove();
        const contenedorCarrito = document.getElementById("contenedorCarrito")
        for(item of arrayCarrito){
            let div = document.createElement("div");
            let datosProductos = productosStanley.find(elem => elem.id == item.producto)  
            div.innerHTML = `<p>Has seleccionado los siguientes productos:</p>
                             <div class="card" style="width: 18rem;">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                                <div class="card-body">
                                    <h5 class="card-title">${datosProductos.nombre}</h5>
                                    <p class="card-text">Disponible actualmente en color ${datosProductos.color}.</p>
                                    <h5 class="card-title">$${datosProductos.precio}</h5>
                                    <p class="card-text"> Te llevas ${item.cantidad}</p>
                                </div>
                             </div>`;
                           contenedorCarrito.appendChild(div);
        }
    }
*/


// ------- Boton para visualizar el carrito de compras ------- //

let botonVerCarrito = document.getElementById("verCarrito");
botonVerCarrito.addEventListener("click", botonRespuesta);

function botonRespuesta(){
    verCarrito()
    alert("Está siendo redirigido al carrito de compras")
    console.log("Función de visualizar carrito ejecutada correctamente")
}


// ------- Guardar en el Storage el carrito de compras del usuario ------- //

localStorage.setItem("Carrito de usuario", arrayCarrito);

let visualizarCarrito = localStorage.getItem("Carrito de usuario")
console.log(visualizarCarrito)


// ------- Almacenar en Storage el obejto "producto0" pasandolo a string meidante JSON ------- //

const producto0JSON = JSON.stringify(producto0);
console.log(producto0JSON);

localStorage.setItem("producto0", "producto0JSON");


// ------- Recuperar un JSON del localStorage y convertirlo a objeto nuevamente ------- //
 
const objetoJSON = localStorage.getItem("producto0");
const objeto = JSON.parse(objetoJSON);
console.log(objeto);