// 9) (TRUE) Programa una función que obtenga un numero aleatorio entre 501 y 600.

// let numeroAleatorio = (numeroMenor,numeroMayor) =>{
//   let res1 = Math.round(Math.random()*(numeroMenor - numeroMayor))+numeroMayor;
//   console.log(res1);
// }

// numeroAleatorio(500,600);

// let numeroRandom = () =>{
//   let resRandom = Math.random()*100;
//   let result = Math.round(resRandom)+500;
//   console.log(result); 
// }
// numeroRandom();

// ADQUIRIR MAS Y MAS CONOCIMIENTO 



// console.log(Math.sign(20-40))


// 10)(TRUE)Programa una función que reciba un número y evalúe si es capicúa o no que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
/* hola como estas todo bien yo queria decirte algo y que practica y veras que podras hacerlo */

// const capicua = (numero = 0) =>{
//   if(!numero){console.warn("No ingresaste ningun numero correctamente")};
//   if(typeof numero !== "number"){console.error(`Tu valor ingresado (${numero}) no es un numero`)};

//   numero = numero.toString();
//   let alReves = numero.split("").reverse().join("");

//   return (numero === alReves)   
//   ? console.log(`Si es capicua,el numero ingresado == ${numero} y el numero al reves ${alReves}`)
//   : console.log(`No es capicua,el numero ingresado == ${numero} y el numero al reves ${alReves}`);
// }

// capicua(504);


// 11) (TRUE) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

// const factorial = (numero = undefined) =>{
//   if(numero === undefined) return console.warn("No ingresaste ningun numero");
//   if(typeof (numero) !== "number") return console.error(`El valor ${numero} no es un numero`); 
//   if(numero === 0) return console.error(`El valor ${numero} no se puede factorizar`);
//   if(numero === 1) return console.error(`El valor ${numero} no se puede factorizar`);
//   if(Math.sign(numero) === -1) return console.error(`El valor numerico no puede ser negativo`);

//   let factorial = 1;

//   for(let i = numero; i > 1; i--){
//     factorial = factorial*i;
//   };

//   return console.log(`El factorial de ${numero} es ${factorial}`);
// }

// factorial(5);

// 12)(TRUE)Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

// const numberCousin = (numPrimo) =>{
//   if(!numPrimo) return console.warn("No ingresaste ningun numero");
//   if(typeof(numPrimo) === "string") return console.error(`El valor ${numPrimo} no es un numero`);
//   if(numPrimo === 0) return console.error(`El valor no puede ser 0`);
//   if(numPrimo === 1) return console.error(`El valor no puede ser 1`);
//   if(Math.sign(numPrimo) === -1) return console.error(`El valor no puede ser negativo`);

//   let divisible = false;

//   for(let i = 2; i < numPrimo; i++){
//     if((numPrimo % i) === 0){divisible = true; break;};
//   }

//   return (divisible)
//   ? console.log(`No es un numero primo el ${numPrimo}`) 
//   : console.log(`Si es un numero primo el ${numPrimo}`);
// }

// numberCousin(12);





// 13)(TRUE)Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

// const numerosPares = (numero = undefined) =>{

//   if(!numero) return console.warn(`No ingresaste ningun numero`);
//   if(typeof(numero) === "string") return console.error(`El valor ingresado ${numero} no es un numero`);
//   if(numero === 1) return console.error(`El valor ${numero} no se puede dividir`);
//   if(Math.sign(numero) === -1) return console.error(`El valor no puede ser negativo`);


//   return (numero % 2 === 0)
//   ? console.log(`Tu valor ingresado ${numero} es un numero par`)
//   : console.log(`Tu valor ingresado ${numero} es un numero impar`);
// }

// numerosPares(5);








// 14)(TRUE)Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

// const convertirGrados = (grados = undefined , unidad = undefined) => {
//   if(!grados) return console.warn(`The value is not a ingress`);
//   if(Math.sign(grados) === -1) return console.error(`Not accept value negatives`);
//   if(typeof(grados) === "string") return console.error(`The value ingress is not a number`);

//   if(unidad === "C"){console.log(`Tu resultado celcius (${grados}°C == ${Math.round(grados * 9/5 + 32)}°F)`)};

//   if(unidad === "F"){console.log(`Tu resultado en farenheit (${grados}°F == ${Math.round(grados - 32 * 5/9)}°C)`)}
//   else{console.error(`Los valores no son admitidos`)};
// }

// convertirGrados(2,"C");
// convertirGrados(4,"F");

// 15) Programa una función para convertir números de bases binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 bases 10.

// const convertirNumerosbases = (numero = undefined , bases = undefined) =>{
//   if(numero === undefined) return console.warn(`No pusiste ningun valo numerico hasta el momento`);
//   if(typeof numero !== "number") return console.error(`El valor ${numero} no es un numero`);
  
//   if(bases  === undefined) return console.warn(`No pusiste ningun valor base hasta el momento`);
//   if(typeof bases !== "number") return console.error(`La bases ${bases} no es una bases`);

//   // if(Math.sign(numero) === -1) return console.error(`El valor ${numero} no puede ser negativo`);

//   if(bases === 2){
//     console.log(`El valor ${numero} base ${bases} y su base ${parseInt(numero,bases)} bases 10`);
//   };
// };

// convertirNumerosbases(1110011,2);
  








// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.


// const montoFinal = (monto = undefined) => {
//   if(monto === undefined) return console.warn(`No tiene monto porque no tiene compras`);
//   if(typeof monto !== "number") return console.error(`¿Me esta queriendo pagar con texto?`);
  
//   let descuento = 200;
//   if(descuento % monto){
//     console.log(`Tu compras son $${monto} pero como estamos descuentando, te descontare 20% que seria en total ${monto - descuento}`)
//   }
// }
// montoFinal(1000);


// const montoFinal = (monto = undefined,descuento = undefined) =>{
//   if(!monto) return console.warn(`No se ha puesto ningun valor numerico`);
//   if(typeof monto !== "number") return console.error(`El valor ${monto} no es un numero`);
//   if(monto === 0) return console.error(`Lo siento pero no aceptamos valor 0`);

//   if(!descuento) return console.warn(`No se ha puesto ningun valor de descuento`);
//   if(typeof descuento !== "number") return console.error(`El valor de descuento ${descuento} no es un numero`);
//   if(Math.sign(descuento) === -1) return console.error(`El descuento ${descuento} no puede ser negativo`);


//   return console.log(`$${monto} - ${descuento}% = ${monto - (monto * descuento) / 100} `)
// }

// montoFinal(1000,20);




// 17) (TRUE) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// const fechaValida = (fecha = undefined) => {
//   if(!fecha) return console.warn(`No pusiste una fecha`);
  
//   let fechaActual = new Date().getFullYear();
//   let resultado = fechaActual - fecha.getFullYear();

//   return (Math.sign(resultado) === 1)
//   ? console.log(`han pasado ${Math.abs(resultado)} años desde el año ${fecha.getFullYear()} hasta el ${fechaActual}`)
//   : (Math.sign(resultado) === -1)

//   ? console.log(`Tendrian que pasar ${Math.abs(resultado)} años para llegar al año ${fecha.getFullYear()}`)
//   : console.log(`No podes poner el mismo año`);
// }

// fechaValida(new Date(2025,03,03));





// 18)(TRUE) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.


// console.group("vocales y consonantes");

// const cadena = (palabras = undefined) => {
//   if(!palabras) return console.warn(`No pusiste texto para validar vocales o consonantes`);
//   if(typeof palabras !== "string") return console.error(`Los valores ${palabras} no son textos`);
//   if(!palabras) return console.warn(`No pusiste texto para validar consonantes`);

//   let vocalesRegExp = /[aeiouAEIOU]/;
//   let correoInvalido = /[@*.{}?¡!]/i;
//   let consonantesRegExp = /[bcdfghjklmnñpqrstwxyzBCDFGHJKLMNÑPQRSTWXYZ]/;

//   let vocales = 0;
//   let consonantes = 0;

//   for(palabra of palabras){
//     if(vocalesRegExp.test(palabra)){vocales++};
//     if(consonantesRegExp.test(palabra)){consonantes++};
//   } 

//   for(correo of palabras){
//     if(correoInvalido.test(correo)){console.error(`No adminimos los simbolos ${correoInvalido} de correos electronicos`)};
//   }



//   console.info(`La cadena ${palabras} tiene ${vocales} vocales y ${consonantes} consonantes.`);

// }

// cadena();
// cadena(232193);
// cadena("hola como estas");
// cadena("franciscoreynolds12@gmail.com");


// console.groupEnd("vocales y consonantes");


 // (vocalesRegExp.test(palabras))
  // ? console.log(`${palabras} + vocales == ${vocales.vocalesRegExp.test(palabras)}`)
  // : (consonantesRegExp.test(palabras))

  // ? console.log(`${palabras} + consonantes == ${consonantesRegExp.test(palabras)}`)
  // : console.warn(`Ten cuidado amigo`);




















// 19) (TRUE) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

// const nombreValido = (nombre = "") => {
//   if(!nombre) return console.warn(`No has puesto nada en la cadena`);
//   if(typeof nombre !== "string") return console.error(`El valor ${nombre} no es un texto`);

//   let regExp = /^[A-Za-zÑñaeiouAEIOU\s] + $/g.test(nombre);

//   return (regExp)
//   ? console.log(`El valor ${nombre} es un nombre valido`)
//   : console.warn(`El valor ${nombre} no es un nombre valido`);
// }

// nombreValido("francisco");


























// 20)(TRUE) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.



// const correoValido = (correo = "") => {
//   if(!correo) return console.warn(`El correo esta vacio`)
//   if(typeof correo !== "string") return console.error(`El valor ${correo} no es un correo`);

//   let regExp = /[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);

//   return (regExp)
//   ? console.log(`El correo ${correo} es valido`)
//   : console.warn(`El correo ${correo} no es valido`);
// }

// correoValido();
// correoValido(231);
// correoValido("franciscoreynolds12@gmail.com");
// correoValido("franciscoreynolds12gmail.com");


// /[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test


// En el video 40 te daré mi solución, antes de verlo trata de resolver los ejercicios, y comparte tus resultados en alguna plataforma como GitHub o CodePen y comparte el enlace de tus soluciones en los comentarios de este video. 











// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

// const arrayNumerico = (array = undefined) =>{
//   if(!array) return console.warn(`No pusiste contenido`);
//   if(!(array instanceof Array)) return console.error(`El valor ingresado no es un array`);

//   for(let num of array){
//     if(typeof num !== "number") return console.warn(`No pasaste ningun numero`); 
//   }

//   const newArrr = array.map(el => el * el);

//   return console.info(`El array original es ${array} y el array elevado al cuadrado es ${newArrr}`);
// }

// arrayNumerico();
// arrayNumerico(21);
// arrayNumerico([10,230,120]);



// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// Nada profundo sucede en tu vida cuando permaneces en tu zona de confort











// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.








// La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i









// Operaciones básicas, Tipos de datos, Prompt y Alert

//24)(TRUE) Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.

// let pregunta1 = parseInt(prompt(`Dime el primer numero`));
// let pregunta2 = parseInt(prompt(`Dime el segundo numero`));


// const suma = () => {
//   if(!pregunta1) return console.warn(`No pusiste el primer dato`);
//   if(typeof pregunta1 !== "number") return console.error(`Este dato ${pregunta1} no es un numero`);
  
//   if(!pregunta2) return console.warn(`No pusiste el segundo dato`);
//   if(typeof pregunta2 !== "number") return console.error(`Este dato ${pregunta2} no es un numero`);
  
//   let resultado = pregunta1 + pregunta2;

//   return(resultado)
//   ? console.log(`${pregunta1} y ${pregunta2} = ${resultado}`)
//   : console.warn(`No se cumplio la condicion`);
// } 

// suma();














//25) Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit.




















//26)(TRUE) Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5

// let pregunta = parseInt(prompt(`Dime un numero y te lo dividire por 10`));

// const numeroDividido = (numero = undefined) => {
//   if(!pregunta) return console.warn(`No pusiste datos`);
//   if(typeof pregunta !== "number") return console.error(`Los datos ${pregunta} no son numeros`);

//   let resultado = numero;
//   let result = resultado = 10;
//   let resultadoFinal = pregunta / result;

//   return (resultadoFinal)
//   ? console.log(`${pregunta} / ${result} == ${resultadoFinal}`)
//   : console.warn(`La condicion no se cumplio`);
// }

// numeroDividido();








// If and else

//27) Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

// let pregunta = parseInt(prompt(`Poneme cualquier numero y te dire si es par o impar`));

// const numeros = (numero = undefined) => {
//   if(!pregunta) return console.warn(`El dato no se ha puesto`);
//   if(typeof pregunta !== "number") return console.error(`El dato ${pregunta} no es un numero`);

//   let number = numero = 2;
//   let resultado = pregunta % number;

//   return (pregunta % number)
//   ? console.log(`${pregunta} / ${number} == ${pregunta / number} || resto ${resultado} es par `)
//   : console.log(`${pregunta} / ${number} == ${pregunta / number} || ${resultado} es impar`);

// }

// numeros();























//28)(TRUE) Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log

// let pregunta = parseInt(prompt(`Dime cualquier numero y te lo dividire por 5`));

// const numeroDivisible = (numero = undefined) => {
//   if(!pregunta) return console.warn(`El dato no has puesto`);
//   if(typeof pregunta !== "number") return console.error(`El valor ${pregunta} no es un numero`);

//   numero = 5;
//   let resultado = pregunta / numero;

//   return (Math.sign(pregunta / numero) === 0 || (pregunta % numero) === 0)
//   ? console.warn(`Este ${numero} es divisible por ${pregunta} ya que ${pregunta} / ${numero} === ${resultado} || resto ${pregunta % numero}`)
//   : console.warn(`Este ${numero} no es divisible ya que ${pregunta} / ${numero} === ${resultado} === ${pregunta % numero}`);

// }

// numeroDivisible();








//29) (TRUE) Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log

// try{
  
//   let pregunta1 = parseInt(prompt(`Dime el primero numero y te dire si es divisible con 11`))
//   let pregunta2 = parseInt(prompt(`Dime el primero numero y te dire si es divisible con 5`))
  
  
  
//   const numerosDivisibles = (numero1 = undefined , numero2 = undefined) => {
//     if(!pregunta1) return console.warn(`El primer dato no fue respondido`);
//     if(typeof pregunta1 !== "number") return console.error(`El valor ${pregunta1} no es un numero`);
    
//     if(!pregunta2) return console.warn(`El segundo dato no fue respondido`);
//     if(typeof pregunta2 !== "number") return console.error(`El valor ${pregunta2} no es un numero`);


//     numero1 = 11;
//     numero2 = 5; 
    

//     if((pregunta1 / numero1) === 0 || (pregunta1 % numero1) === 0){
//       console.log(`Es ${numero1} divisible ya que ${pregunta1} / ${numero1} === ${pregunta1 / numero1} || resto ${pregunta1 % numero1}`)
//     }
//     else{
//       console.warn(`No es divisible ya que ${pregunta1} / ${numero1} === ${pregunta1 / numero1} || resto ${pregunta1 % numero1}`)
//     }
//     if((pregunta2 / numero2) === 0 || (pregunta2 % numero2) === 0){
//       console.log(`Es ${numero2} divisible ya que ${pregunta2} / ${numero2} === ${pregunta2 / numero2} || resto ${pregunta2 % numero2}`)
//     } 
//     else{
//       console.warn(`No es divisible con ${numero2} ya que ${pregunta2} / ${numero2} === ${pregunta2 / numero2} || resto ${pregunta2 % numero2}`)
//     }
//   }
  
//   numerosDivisibles();
  
  
// }catch(error){
//   console.error(`Hay un error en tu codigo amigo`);
// }













// 30) (TRUE) Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.



// let numeroDelUsuario1 = parseInt(prompt(`Dame el primer numero para comparar`));
// let numeroDelUsuario2 = parseInt(prompt(`Dame el segundo numero para comparar`));

// const numeroMayor = () => {

//   if(!numeroDelUsuario1) return console.warn(`No me diste el primer numero`);
//   if(typeof numeroDelUsuario1 !== "number") return console.error(`El dato ${numeroDelUsuario1} no es un numero`);

//   if(!numeroDelUsuario2) return console.warn(`No me diste el segundo numero`);
//   if(typeof numeroDelUsuario2 !== "number") return console.error(`El dato ${numeroDelUsuario2} no es un numero`);

  
//   if(Math.max(numeroDelUsuario1,numeroDelUsuario2)){
//     console.log(`El numero mayor es ${Math.max(numeroDelUsuario1,numeroDelUsuario2)}`)
//   }
  
//   if(Math.min(numeroDelUsuario1,numeroDelUsuario2)){
//     console.log(`El numero menor es ${Math.min(numeroDelUsuario1,numeroDelUsuario2)}`)
//   }  
  
//   let resultado1 = parseInt(numeroDelUsuario1);
//   let resultado2 = parseInt(numeroDelUsuario2);

//   return((resultado1 === resultado2))
//   ? console.warn(`No podes comparar el primer dato ${resultado1} y el segundo dato ${resultado2} ya que son iguales`)
//   : console.warn(`Esta es una advertencia de que dejaron de ser iguales y eso nos sirve para comparar los numeros del primer dato y segundo dato`);
// }

// numeroMayor();




















//31) (TRUE) Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.

// let numeroDelUsuario1 = parseInt(prompt(`Dime el primer numero`));
// let numeroDelUsuario2 = parseInt(prompt(`Dime el segundo numero`));

 
// const validarNumeros = () => {
//   // Si el usuario no pone nada 
//   if(!numeroDelUsuario1){console.warn(`No pusiste el primer dato`)};
//   if(typeof numeroDelUsuario1 !== "number"){console.error(`El primer dato ${numeroDelUsuario1} no es un numero`)};
//   if(!numeroDelUsuario2){console.warn(`No pusiste el segundo dato`)};
//   if(typeof numeroDelUsuario2 !== "number"){console.error(`El segundo dato ${numeroDelUsuario2} no es un numero`)};

//   // Si el usuario compara los numeros
//   let resultadoMayor = Math.max(numeroDelUsuario1,numeroDelUsuario2);
//   let resultadoMenor = Math.min(numeroDelUsuario1,numeroDelUsuario2);

//   if(Math.max(numeroDelUsuario1,numeroDelUsuario2) && Math.min(numeroDelUsuario1,numeroDelUsuario2)){
//     console.log(`El numero mayor es ${resultadoMayor}`);
//     console.log(`El numero menor es ${resultadoMenor}`);
//   }
// }

// validarNumeros();


















//32) (NO HECHO AL MOMENTO)Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.

// const detectarCadena = (textoDelUsuario = undefined) => {
//   if(textoDelUsuario === undefined){console.warn(`No completaste el campo de texto`)};    
//   if(textoDelUsuario === 0){console.error(`No podes ejecutar 0 para el campo de texto`)};
  
//   let regExp = /[abcdefghijklmnñopqrslwxyz]/.test(textoDelUsuario);
  
//   if(typeof textoDelUsuario !== "string" && isNaN(textoDelUsuario)){
//     console.log(`El dato ${textoDelUsuario} es un numero autentico`)
//   }else{
//     console.warn(`El dato ${textoDelUsuario} es un numero en cadena`)
//   }

//   return(typeof textoDelUsuario !== "string" ==+ regExp)
//   ? console.log(`El valor ${textoDelUsuario} es una cadena con caracteres`)
//   : console.warn(`El valor es un numero pero en cadena de texto`);
// }

// detectarCadena(2002);






//33) Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.













//34) (TERMINALO PORQUE FALTA) Determinar si una palabra empieza con mayúscula o no.


// const verificarPalabra = (palabras = "") => {

//   if(!palabras) return console.warn(`El dato no se ha definido`);
//   if(typeof palabras !== "string") return console.error(`El dato ${palabras} se ha definido pero de forma incorrecta`);
  


//   let caracteres = palabras.split("");

//   for(let i = 0; i < caracteres.length; i++){
//     if(caracteres === caracteres.toString().toUpperCase()){
//       let resultado = caracteres = [i][0]; 
//       console.log(caracteres)
//     }    
//   }

// }
// verificarPalabra("Hola");





// 34.5)(TRUE) Verificar en una funcion si las palabras puestas son mayusculas o no

// const palabrasPuestas = (palabras = "") => {
//   if(!palabras) return console.warn(`El dato no se ha puesto`);
//   if(typeof palabras !== "string") return console.error(`Èl dato ${palabras} no es una cadena`)


//   return(palabras === palabras.toUpperCase())
//   ? console.log(`La palabra "${palabras}" empiezan con mayusculas`)
//   : console.log(`La palabra "${palabras}" no empiezan con mayusculas`)
// }

// palabrasPuestas("Hola como estas");
// palabrasPuestas("HOLA COMO ESTAS");













//35) Determinar si un año dado es bisiesto.





// Loops
// ### While

// (TRUE) Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.

// let pregunta = parseInt(prompt(`Dame un numero random del 0 al 50 y te dare un conteo`));

// const conteoNumeros = () => {
//   if(!pregunta) return console.warn(`El valor no se completo`);
//   if(typeof pregunta !== "number") return console.error(`El valor ${pregunta} no es un numero`);

//   let numero = 50;
  
//   if(pregunta >= numero) return console.error(`El valor ${pregunta} no puede ser mayor a ${numero}`);

//   while(pregunta <= numero){
//     console.log(pregunta++) 
//   }
// } 
// conteoNumeros();



// Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.


let pregunta = parseInt(prompt(`Dame culquier numero desde N hasta 50 y te devolvere un conteo de 2 en 2`));
let numero = 0;

const numeroConteo = () => {
  if(!pregunta) return console.warn(`El campo ${pregunta} no se ha completado`)
  if(typeof pregunta !== "number") return console.error(`El dato ${pregunta} no es un numero`);

  if(pregunta === 50){console.error(`El dato ${pregunta} no puede ser mayor a ${numero}`)};

  while(pregunta >= numero){
    console.log(numero++);    
  }


}

numeroConteo();


// Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.




// Escribir utilizando console.log la tabla del 9 hasta 9x10.






// Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.


















// Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

















// Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.














// Realizar el factorial de los primeros N números.










// Ejercicios de divisores con while (o for)
// Encontrar todos los divisores de un número.













// Determinar si un número ingresado por el usuario en un loop es primo o no, validar que el número ingresado sea mayor o igual a dos.














// Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)











// ### Doble loop

// Generar los primeros N números primos, donde n es ingresado por el usuario.

// Generar los primeros N números perfectos.



