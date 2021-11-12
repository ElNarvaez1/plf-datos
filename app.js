//Constntes de las expresiones regulares.
const NUMEROS = "[0-9]";
const LETRAS = "[a-zA-Z]";
const CHARS = "[a-zA-Z]{1}";

//Expresiones regulares.
let numerosExpresion = new RegExp(NUMEROS + "(.?" + NUMEROS + "*)");
let cadenaExpresion = new RegExp(NUMEROS+"+("+LETRAS+"+)|(" + LETRAS + "+" + NUMEROS + "*)+");

let caracter = new RegExp(CHARS);
let booleana = new RegExp("TRUE|FALSE|true|false");


//Elementos del DOM
let button = document.getElementById("button");
let inputText = document.getElementById("inputText");
let mensaje = document.getElementById("mensaje");


button.addEventListener("click", (e) => {
  let text = inputText.value;

  
  if (booleana.test(text)) {
    mensaje.innerText =
      "Es de tipo booleana.\n" + "Puedes hacer: \n" + "Operaciones logicas.\n"+
      "Ejmplo de uso: true && "+text;
    return;
  }
  if (cadenaExpresion.test(text)) {
    mensaje.innerText =
      "Es una Cadena:\n" + "Puedes hacer, concatenaciones\n"+
      "Ejemplo de uso: "+text+" + "+ text +" = "+text+text;
    return;
  }
  if (numerosExpresion.test(text)) {
    mensaje.innerText =
      "Es de tipo NUMERICO.\n" +
      "Puedes hacer:\n" +
      "Sumas, Restas, Multiplicacion, Division\n" +
      "Operaciones aritmeticas en general.\n"+
      "Ejmplo de uso: "+text+" + 4 = " + (Number(text)+4);
    //
    return;
  }
  if (caracter.test(text)) {
    mensaje.innerText = "Es de tipo Caracter";
    return;
  }
});
