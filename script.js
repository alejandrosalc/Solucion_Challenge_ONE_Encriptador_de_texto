const textArea = document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";

}


function encriptar(stringEncriptado){

    let matrixCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (var i = 0; i<matrixCodigo.length ; i++){
        if(stringEncriptado.includes(matrixCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrixCodigo[i][0],matrixCodigo[i][1]);
        }

    }

    return stringEncriptado;

}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";

}

function desencriptar(stringDesencriptado){

    let matrixCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (var i = 0; i<matrixCodigo.length ; i++){
        if(stringDesencriptado.includes(matrixCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrixCodigo[i][1],matrixCodigo[i][0]);
        }

    }

    return stringDesencriptado;

}

function btnCopiar(){
    copiarTexto(mensaje.value);
}

function copiarTexto(texto) {
    // Crea un elemento de input temporal
    var inputTemp = document.createElement("input");
    console.log(inputTemp);
    // Asigna el texto que deseas copiar al valor del input
    inputTemp.value = texto;
    // Agrega el elemento al documento
    document.body.appendChild(inputTemp);
    // Selecciona el contenido del input
    inputTemp.select();
    // Ejecuta el comando de copiar
    document.execCommand("copy");
    // Elimina el elemento del documento
    document.body.removeChild(inputTemp);
  }