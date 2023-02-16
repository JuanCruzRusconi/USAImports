let nameUser = prompt("Éste sera el sitio web de USAImports, por favor díganos su nombre:");
let welcomeUser = `Bienvenido ${nameUser} a USAImports`;

alert(welcomeUser);

let product1 = "Línea Stanley";
let product2 = "Línea Apple";
let product3 = "Línea MX";

alert(`Actualmente tenemos stock de las siguientes secciones de productos:\n 1: ${product1}.(SOLO FUNCIONA ESTE)\n 2: ${product2}.\n 3: ${product3}.\n Por favor, escriba el numero correspondiente al producto que desea ver.`);

let productUser = parseInt(prompt("Que línea de productos está interesado en ver?"));

/*
// Caso de producto elegido con IF
if(productUser == 1){
    alert("Actualmente contamos con termos, botellas y herramientas.");
}
 else if(productUser == 2){
    alert("Actualmente tenemos stock de Iphone, Airpods, AppleWatch y Mac.");
 }
 else if(productUser == 3){
    alert("Actualmente tenemos stock de cascos, equipos, guantes y botas.");
 }
 else {
    alert("Usted ingreso un caracter invalido")
 };
 */

 /*
 // Caso de producto elegido con FOR + IF + || en un mismo mensaje
 for(i=0; i<2; i++){
    if(productUser === 1 || productUser === 2 || productUser === 3){
        alert("Actualmente contamos con termos, botellas y herramientas; Actualmente tenemos stock de Iphone, Airpods, AppleWatch y Mac; Actualmente tenemos stock de repuestos, cascos, equipos, cuellos, pecheras y botas ");
        let productUserCantidad = prompt("Cuantos productos esta ineresado en comprar?")
        break;
    }
    else{
        productUser = parseInt(prompt("Por favor, ingrese un caracter valido como el 1, 2 o 3."));
    }    
 }
 */
 
 // Caso de producto elegido con FOR + IF
 for (i = 0; i <= 3; i++) {
     if (productUser === 1) {
         alert("Actualmente contamos con termos, botellas y herramientas.");
         break;
     } else if (productUser === 2) {
         alert("Actualmente tenemos stock de Iphone, Airpods, AppleWatch y Mac.");
         break;
     } else if (productUser === 3) {
         alert("Actualmente tenemos stock de repuestos, cascos, equipos, cuellos, pecheras y botas.");
         break;
     } else {
         productUser = parseInt(prompt("Por favor, ingrese un caracter valido como el 1, 2 o 3."));
     }
 }

// Caso de producto elegido con SWITCH
/*
switch(productUser){
    case 1:
        alert("Actualmente contamos con termos, botellas y herramientas.");
        break;

    case 2:
        alert("Actualmente tenemos stock de Iphone, Airpods, AppleWatch y Mac.");
        break;   

    case 3:
        alert("Actualmente tenemos stock de repuestos, cascos, equipos, cuellos, pecheras y botas.");
        break;
        
    default:
        //alert("Por el momento unicamente tenemos stock de los productos mencionados");
        productUser = parseInt(prompt("Por favor, ingrese un caracter valido como el 1, 2 o 3."));
            
}
*/

// COMPRA PRODUCTOS LINEA STANLEY

let typeProductUser

if (productUser === 1) {
    typeProductUser = prompt("Mencione que producto desea comprar:");
    for (i = 0; i <= 2; i++) {
        if (typeProductUser === "botellas") {
            alert(`Usted ha seleccionado ${typeProductUser}.`);
            break;
        } else if (typeProductUser === "termos") {
            alert(`Usted ha seleccionado ${typeProductUser}.`);
            break;
        } else if (typeProductUser === "herramientas") {
            alert(`Usted ha seleccionado ${typeProductUser}.`);
            break;
        } else {
            typeProductUser = prompt("Por favor, ingrese un producto de los mencionados anteriormente.");
        }
    }
}

let segundoProducto 
let typeProductUser2 

if (productUser === 1) {
    segundoProducto = prompt("Desea comprar otro producto? Responda si, de lo contrario apriete enter:")
    if (segundoProducto === "si") {
        typeProductUser2 = prompt(" Mencione que otro producto desea comprar:");
        for (i = 0; i <= 2; i++) {
            if (typeProductUser2 === "botellas") {
                alert(`Usted ha seleccionado ${typeProductUser2}.`);
                break;
            } else if (typeProductUser2 === "termos") {
                alert(`Usted ha seleccionado ${typeProductUser2}.`);
                break;
            } else if (typeProductUser2 === "herramientas") {
                alert(`Usted ha seleccionado ${typeProductUser2}.`);
                break;
            } else {
                typeProductUser2 = prompt("Por favor, ingrese un producto de los mencionados anteriormente.");
            }
        }
        alert(`Usted ha seleccionado ${typeProductUser} y ${typeProductUser2}. El precio de estos productos es de $20000 c/u.`);
    } else {
        alert(`Usted ha seleccionado ${typeProductUser}. El precio de estos productos es de $20000 c/u.`)

    }
}

let productUserCantidad
let productUserCantidad2
let precioLineaStanley = 20000;
let totalProductosStanley
let resultadoSumarProductos
let totalProductoStanley

if (productUser === 1) {
    productUserCantidad = parseInt(prompt(`Cuantos productos esta ineresado en comprar de ${typeProductUser}?`));
    if (segundoProducto === "si") {
        productUserCantidad2 = parseInt(prompt(`Cuantos productos esta ineresado en comprar de ${typeProductUser2} ?`));

        function sumarProductos(_productUserCantidad, _productUserCantidad2) {
            return productUserCantidad + productUserCantidad2;
        }
        resultadoSumarProductos = sumarProductos(productUserCantidad, productUserCantidad2);
        alert(`Usted ha elegido: ${resultadoSumarProductos} productos; ${productUserCantidad} ${typeProductUser} y ${productUserCantidad2} ${typeProductUser2}.`);

        function multiplicarProductos(_resultadoSumarProductos, _precioLineaStanley) {
            return resultadoSumarProductos * precioLineaStanley;
        }
        totalProductosStanley = multiplicarProductos(resultadoSumarProductos, precioLineaStanley);
        alert(`El total es de ${totalProductosStanley} pesos.`);
    } else {
        alert(`Usted ha elegido: ${productUserCantidad} ${typeProductUser}.`);

        function multiplicarProducto(_productUserCantidad, _precioLineaStanley) {
            return productUserCantidad * precioLineaStanley;
        }
        totalProductoStanley = multiplicarProducto(productUserCantidad, precioLineaStanley);
        alert(`El total es de ${totalProductoStanley} pesos.`)
    }    
}

