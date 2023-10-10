document.addEventListener("DOMContentLoaded", () => {

    const calculateButton = document.getElementById("Boton");
    const resultadoA = document.getElementById("ResultadoA");
    const resultadoP = document.getElementById("ResultadoP");

    calculateButton.addEventListener("click",  () => {
        // Obtenemos el "Largo" del rectángulo
        const largo = parseFloat(document.getElementById("Largo").value);
        // Obtenemos el "Ancho" del rectángulo
        const ancho = parseFloat(document.getElementById("Ancho").value);

        if (!isNaN(largo) && !isNaN(ancho)) {
            // Multiplicamos largo por ancho y obtenemos el área.
            const area = largo * ancho;
            // Sumamos todos sus lados para obtener la longitud
            const perimetro = (largo + largo) + (ancho + ancho);
            // Añadimos los mensajes de resultado a los dos resultados que tenemos en el html
            resultadoA.innerHTML = `El área del rectángulo es: ${area}`;
            resultadoP.innerHTML = `El perimetro del rectangulo es: ${perimetro}`;
            console.log(area);
            console.log(perimetro);
        } else {
            resultadoA.innerHTML = "Por favor, ingrese valores válidos.";
            resultadoP.innerHTML = ""; // Borra el contenido de longitud si los valores no son válidos
        }
    });
});
