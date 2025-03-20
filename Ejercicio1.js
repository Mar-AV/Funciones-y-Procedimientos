/**BÚSQUEDA DE LA PALABRA MÁS LARGA */
function obtenerPalabraMasLarga(cadena) {
    const palabras = cadena.split(' ');
    let palabraMasLarga = '';
    let longitudMaxima = 0;

    for (const palabra of palabras) {
        if (palabra.length > longitudMaxima) {
            palabraMasLarga = palabra;
            longitudMaxima = palabra.length;
        }
    }

    console.log(palabraMasLarga); 
    return palabraMasLarga;
}

const cadena = "La programación es muy interesante";
obtenerPalabraMasLarga(cadena);