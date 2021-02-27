function newMensaje(){
  
    const url = 'https://api.chucknorris.io/jokes/random';

    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        let elemento = document.getElementById('contenedor');
        elemento.innerHTML = `<p>${data.value}</p>`;
        console.log(data);

        let arrayMensajes = new Array();
        arrayMensajes.push(data.value);
        showMensaje(arrayMensajes);
    })
    .catch(err => console.log(err))
}

function showMensaje(arrayMensajes){
    let show = document.getElementById('mostrarDatos');

    arrayMensajes.forEach(function (arrayMensajes) {
        show.innerHTML += '<div> <ul>' + '<li>' + arrayMensajes + '</li> </ul> </div>';
    });
}