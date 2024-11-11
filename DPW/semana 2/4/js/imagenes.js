function cambiarImagen(){
    //menu desplegable
    const select = document.getElementById('images');
    //division para mostrar la imagen
    const backGroundBox = document.getElementById('backGroundBox ');
    //obtenemos la imagen seleccionada
    const selectImagen = select.ariaValueMax;
    if(selectImagen)
        backGroundBox.style.backgroundImage = ùrl('$selectImagen');
    else
        backGroundBox.style.backgroundImage = 'none';

}