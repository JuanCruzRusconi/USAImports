// SINTAXIS Y VARIABLES
/*
let nameUser = prompt("Decime tu nombre");
let surnameUser = prompt("Decime tu apellido");
let dataUser = "Bienvenido " + nameUser + " " + surnameUser;
let dataUserr = `Bienvenido ${nameUser} ${surnameUser}`; 

alert(dataUser);
alert(dataUserr);

const year = 2023
let yearUser = prompt("Decime en que ano naciste")
let ageUser = year - yearUser

alert("Tu edad es de " + ageUser + " anios");


// CONTROL DE FLUJOS

if(ageUser >= 18){
    alert("Bienvenido al sitio web")
}
   else{
    alert("No es bienvenido al sitio web")
   }
*/
   
   // CICLOS, BUCLES E ITERACIONES 
   //CICLOS POR CONTEO (FOR) 
   // for (desde; hasta; actualizacion){ codigo de ejecucuion}

   for( let i=0; i<=20; i++){
    console.log(i)
   }
   
   
   
   // CICLOS CONDICIONALES (WHILE, DO)



   // FUNCIONES
   
   // 1. DECLARAR LA FUNCION:
   // function nombreDeLaFuncion(){ bloque de codigo alert("  "); }
   //2. LLAMAR LA FUNCION POR SU NOMBRE:
   // nombreDeLaFuncion();

   //FUNCION QUE RETORNAN UN DATO
   // function retornarNumero15(){return 15;}
   // let numeroQuince = retornarNumero15();
   // console.log(numeroQuince);
   // Se declara la funcion con el dato, se guarda el dato que se quiere devolver en la variable creada abajo y luego se muestra en el console.log

   //FUNCION CON PARAMETROS: son datos que se declaran entre () 


function algo(valorA, valorB){
   return valorA + valorB
}

let resultadoSuma= algo(100,5000)
console.log(resultadoSuma)

function sumar(valorC,valorD){
   return valorC + valorD
}
console.log(sumar(800,700))










