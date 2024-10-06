/*// No deben haber espacios entre el documente, el punto y el metodo
// _____________________________________________________________________
// 7. Hacer una función que reciba un nombre, si existe nombre saludar por nombre de otra manera saludar 'Hola, desconocido' con Manejo de DOM.

// 1. Creamos variables con las clases e id del html / SELECCIONAMIENTO DE ELEMENTOS DEL DOM.

// nombrar variable de nombre de usuario
// getElementById -> s traer un elemento del HTML por su ID. Tdodo metodo ejecuta accions y se abre parentesis
let nameImput = document.getElementById('nombre');
console.log(nameImput);

// 2.Traernos en variable del HTML el mensaje de saludo
// Segunda opción para traer del HTML, querySelector me trae cualquier tipo de selector -> etiqueta, id, clase
let saludoP = document.querySelector('.mostrarSaludo');
console.log(saludoP);

// Acceder al contenido de nuestras variables se usa el value:
let name = nameImput.value;
// ___________________________________________________________________
// 2. FUNCIONES -> SON BLOQUES QUE ENCAPSULAN CODIGO Y EJECUTAN ACCIONES
// Como se crean FUNCIONES: (son dos tipos)=

function saludarUsuario() {
    // Acceder al contenido de nuestras variables:
    let name = nameImput.value;
    // Dentro de las llaves siempre va el codigo de la logica a ejecutar
    // Para esta función se modifica el HTML, dentro de la etiqueta button se coloca atributo onClick para que se ejecute la función cuando se de click al boton de saludar
    console.log(name);
    let mensaje = '';
    if(name){
        mensaje = 'Hola' +  ' ' + name;
        // text content me permite cambiar el texto dentro de etiquetas
        saludoP.textContent = mensaje;
    }else {
        mensaje = 'Hola Desconocido'
        saludoP.textContent = mensaje;
    }
}*/