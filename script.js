function mostrarPantalla(id) {
    document.querySelectorAll(".pantalla").forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");
}

function comenzar() {
    mostrarPantalla("etapa1");
}

function siguiente(numero) {
    mostrarPantalla("etapa" + numero);
}

function final() {
    mostrarPantalla("final");
    crearConfeti();
}

function reiniciar() {
    location.reload();
}

function crearConfeti() {
    var contenedor = document.getElementById("confeti");

    var emojis = ["❤️", "🏎️", "🔥", "💕", "✨", "🏁"];

    for (var i = 0; i < 60; i++) {
        var elemento = document.createElement("div");

        elemento.classList.add("confeti");

        elemento.innerText =
            emojis[Math.floor(Math.random() * emojis.length)];

        elemento.style.left =
            Math.random() * 100 + "%";

        elemento.style.animationDelay =
            Math.random() * 2 + "s";

        elemento.style.fontSize =
            (15 + Math.random() * 20) + "px";

        contenedor.appendChild(elemento);
    }
}