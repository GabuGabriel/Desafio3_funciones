{/* <div id="ele1"> hello </div>
<script>
function pintar(){
ele = document.getElementById("ele1")
ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
</script> */}

/* 3.1. Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función (1 Punto). Para
obtener el puntaje debes entregar el 3 pintar.html válido funcionando en
conjunto con el código modificado.

 */

idh2 = document.querySelector('#idh2');

function getColor() {
    idh2.style.color = color;
}

// Ejercicio 3.2 Definir el color verde por defecto

function setColor(color = "green") {
    idh2.style.color = color;
}

// Llamar la función para mostrar el color por defecto

setColor();

// Click para cambiar el color a amarillo

idh2.addEventListener("click", () => {
    setColor('yellow');
})