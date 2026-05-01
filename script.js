// Mensaje del botón
function saludo() {
    alert("¡Gracias por tu interés! Pronto nos pondremos en contacto 🚀");
}

// Validación básica del formulario
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Formulario enviado correctamente ✅");
});
