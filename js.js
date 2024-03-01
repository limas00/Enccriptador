let ingresoTexto = document.getElementById("ingresoTexto");
let mensajeFinal = document.getElementById("mensajeFinal");
let botonEncriptar = document.getElementById("botonEncriptar");
let botonDesencriptar = document.getElementById("botonDesencriptar");
let botonCopiar = document.getElementById("botonCopiar");
let muneco = document.getElementById("muneco");
let parrafo_informacion = document.getElementById("parrafo_informacion");
let right = document.getElementById("right");


let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
]

let sustituir = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;

    muneco.style.display = "none";
    parrafo_informacion.style.display = "none";
    
    botonCopiar.style.display = "block";

    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");

    ingresoTexto.value = "";

    console.log(encriptar(texto));
}

botonEncriptar.addEventListener("click", () => {
    let texto = ingresoTexto.value.toLowerCase();

    function encriptar(nuevoTexto) {
        for(let i = 0; i < remplazar.length; i++) {
            if (nuevoTexto.includes(remplazar[i][0])) {
                nuevoTexto = nuevoTexto.replaceAll(remplazar[i][0], remplazar[i][1]);
            }
        }

        return nuevoTexto
    }

    sustituir(encriptar(texto));
})

botonDesencriptar.addEventListener("click", () => {
    let texto = ingresoTexto.value.toLowerCase();

    function desencriptar(nuevoTexto) {
        for (let i = 0; i < remplazar.length; i++) {
            if (nuevoTexto.includes(remplazar[i][1])) {
                nuevoTexto = nuevoTexto.replaceAll(remplazar[i][1], remplazar[i][0]);
            }
        }
        return nuevoTexto;
    }
    let textoDesencriptado = desencriptar(texto);
    sustituir(desencriptar(texto));
})

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value);

    mensajeFinal.innerHTML = "";

    muneco.style.display = "block";
    parrafo_informacion.style.display = "block";
    botonCopiar.style.display = "none";

    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");

    ingresoTexto.focus();
})
