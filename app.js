//Constntes de las expresiones regulares.
const NUMEROS = "[0-9]";
const LETRAS = "[a-zA-Z]";
const CHARS = "[a-zA-Z]{1}";

//
let numerosExpresion = new RegExp(NUMEROS + "(.?" + NUMEROS + "*)");
let cadenaExpresion = new RegExp("(" + LETRAS + "+" + NUMEROS + "*)+");

let caracter = new RegExp(CHARS);
let booleana = new RegExp("TRUE|FALSE|true|false");

let button = document.getElementById("button");
let inputText = document.getElementById("inputText");


let mensaje=document.getElementById('mensaje');

button.addEventListener("click", (e) => {
  let text = inputText.value;

  if (numerosExpresion.test(text)) {
    mensaje.innerText="Es de tipo numerico.\n"+
                        "Puedes hacer:\n"+
                        "Sumas\n"+
                        "Resta\n"+
                        "Multiplicacion\n"+
                        "Division\n"+
                        "Operaciones aritmeticas en general.";
    //
    return;
  }
  if (booleana.test(text)) {
    mensaje.innerText="Es de tipo booleana.\n"+
                        "Puedes hacer: \n"+
                        "Operaciones logicas.\n";
    return;
  }
  if (cadenaExpresion.test(text)) {
    mensaje.innerText="Es una Cadena:\n"+
                        "Puedes hacer.... \n"+
                        "Concatenaciones...\n";
    return;
  }
  if (caracter.test(text)) {
    mensaje.innerText="Es de tipo Caracter";

    return;
  }
});
