console.log('Hola, el archivo se vinculó correctamente');

// 1.  Hacer un programa que reciba 2 números del usuario y los sume.
// Es una secuencia

// Primero variables, despues funciones - procedimiento
// Declaración e inicialización de variables


/*let numero1 = 0;
let numero2 = 0;
let resultado = 0;

//Asignación de variables
//Nota: TODO LO QUE VIENE DE PROMPTS DEL USUARIO VIENEN COMO DATOS STRING OSEA TEXTO.

numero1 = prompt('Ingrese el primer número');
numero2 = prompt('Ingrese el segundo número');
resultado = parseFloat(numero1) + parseFloat(numero2);

//Para convertir el texto STRING en número. parseFloat (numeros con decimales) parseInt(para numeros enteros)

alert('El resultado de la suma de: ' + numero1 + ' + ' + numero2 + ' es ' + resultado);*/

// FIN PRIMER EJERCICIO____________________________________________________________________________________________________________




//2. Hacer un programa que reciba un nombre por parte del usuario, si se recibió nombre por parte del usuario, saludarlo con nombre, si no, sólo decir 'Hola'
// Es condicional

/*let nombreUsuario = prompt ('Por favor ingrese su nombre');
// Como trabajar condicioneles en JS -> if -> Si cumple una condicion haga / else -> sino se cumple haga otra cosa

// Con if solo se ejecuta cuando la condición se cumple -> cuando es verdadera
if(nombreUsuario){
    alert('Hola,' + ' ' + nombreUsuario);
    console.log('se cumple la condición');
}else {
    alert('Hola')
    console.log('no se cumple la condición');
}*/
//FIN SEGUNDO EJERCICIO______________________________________________________________________________________________________________





//3. Hacer un programa que pida al usuario un número entero y muestre los valores desde cero hasta el número ingresado.
//Es ciclico. Hay varios tipos: mas utilizados(for - foreach) los vemos despues(while - do while).

// let numero = parseInt(prompt('Digite un numero entero'));
// for(let contador = 0 ; contador <= numero ; contador++){
//     // alert(contador);
//     console.log(contador);
// }

//FIN DEL TERCER EJERCICIO_____________________________________________________________________________________________________________


//5. Hacer un programa que muestre los días de la semana.

/*let diasSemana = ['Lunes' , 'Martes' , 'Miercoles' , 'Jueves' , 'Viernes' , 'Sabado' , 'Domingo'];

console.log(diasSemana);*/

//Los arreglos cada elemento tiene un numero asignada, index, iniciando desde 0.
/*console.log(diasSemana[0]);
console.log(diasSemana[1]);
console.log(diasSemana[2]);
console.log(diasSemana[3]);
console.log(diasSemana[4]);
console.log(diasSemana[5]);
console.log(diasSemana[6]);*/

//Mismo ejercicio pero OPTIMIZADO CON CICLOS
//ForEach -> ES UN CICLO PARA RECORRER ARREGLOS DE DATOS.EJEMPLO:
//Para el ForEach primero va el arreglo y luego el metodo, sintaxis es como se enuncia acontinuación

// diasSemana.forEach(
//     //Funcion flecha -> FUNCIONES - Acciones que se deben ejecutar
//     (dia) => {
//         console.log(dia);
//     }
// )
//El ForEach termina cuando termine de leer todos los elementos del arreglo

//FIN DE EJERCICIO 5 _____________________________________________________________________________________

//4. Hacer un programa que solicite al usuario un texto, si el usuario no ingresa nada seguir solicitando hasta que lo haga.

// Declaración de variable que va a guardar la información ingresada por e usuario
/*let textoUsuario = "";
// Se inicializa variable asignandole el metodo de entrada prompt asegurando que se guarde en esta cajita la info ingresada por el usuario
textoUsuario = prompt("Ingrese un texto (Obligatorio)");
// Uso de while ya que el ejericico es ciclico, requiere que se repita la instrucción del metodo de entrada prompt hasta que el usuario ingrese información.

 while(textoUsuario == ""){
    textoUsuario = prompt("Porfavor, ingresa un texto (Obligatorio)");
    console.log('Usuario no ingreso texto')
 }
alert("Bien hecho, el texto ingresado es: " + textoUsuario);
console.log('Usuario ya ingreso texto')*/


//6. Hacer un programa que pida al usuario dos números, mostrar la suma y la resta del primer número y el segundo número.

// Declaración de variables donde se van a almacenar los números que va a ingresar el usuario
// let numero1 = prompt('Ingrese el primer numero');
// let numero2 = prompt('Ingrese el segundo numero');
// Declaración de variables donde se va a realizar la interacción entre las dos variables donde se almaceno la información ingresada por el usuario.
// let resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
// let resultadoResta = parseFloat(numero1) - parseFloat(numero2);

// Metodo alert para mostrarle al usuario los resultados obtenidos con los numeros ingresados

// alert('La resultado de la SUMA de sus números es' + ' ' + resultadoSuma + ' ' + 'y el resultado de la RESTA de sus números es' + ' ' + ' ' + resultadoResta );
// FIN EJERCICIO 6 ______________________________________________________________________________________________


