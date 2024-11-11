        let indice = 0;
        const intervalTime = 3000; // Cambia cada 3 segundos

        function miFuncion(){
        const imagenes = document.getElementById('imagenes');

        const totalImagenes = imagenes.children.length;
            return totalImagenes;
        }

        function siguiente() {
            indice = (indice + 1) % miFuncion();
            actualizarCarrusel();
        }

        function anterior() {
            indice = (indice - 1 + miFuncion()) % miFuncion();
            actualizarCarrusel();
        }

        function actualizarCarrusel() {
            const desplazamiento = -indice * 100;
            imagenes.style.transform = `translateX(${desplazamiento}%)`;
        }

        function iniciarCarrusel() {
            setInterval(siguiente, 3000);
        }
        // Iniciar el carrusel automáticamente
        iniciarCarrusel();
    

 /*   function maestra(){
let indice = 0;
const intervalTime = 3000;
const imagenes = document.getElementById('imagenes');
const totalImagenes = imagenes.children.length;
    }

function actualizarCarrusel(){
 
    const desplazamiento = indice * 100;
    imagenes.style.transform = `translateX(${desplazamiento}%)`;

}

function iniciarCarrusel(){
    setInterval(siguiente,intervalTime);
}

iniciarCarrusel();

*/
