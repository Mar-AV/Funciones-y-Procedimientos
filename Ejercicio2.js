/** GENERACIÓN DE UN NÚMERO ALEATORIO */
function generarNumeroAleatorio(min, max) {
    const numeroAleatorio = Math.random();
  
    const numeroEscalado = numeroAleatorio * (max - min) + min;
  
    const numeroEntero = Math.round(numeroEscalado);
  
    console.log(numeroEntero);
  
    return numeroEntero;
  }
  
  generarNumeroAleatorio(1, 10); 