
/*
  Hago uso de resize como evento para que al momeno de cambiar la pantalla
  de tamaño se muevan las 4 ultimas imagenes, para poder presentar la vista deseada.
*/

window.addEventListener('resize', function (e) {
    var actualWidth = window.innerWidth;
    if (actualWidth <=1333) {
      this.document.getElementById("secciones1").appendChild(this.document.getElementById("img9"));
      this.document.getElementById("secciones1").appendChild(this.document.getElementById("img10"));
      this.document.getElementById("secciones2").appendChild(this.document.getElementById("img11"));
      this.document.getElementById("secciones2").appendChild(this.document.getElementById("img12"));
    }

    else {
      this.document.getElementById("secciones3").appendChild(this.document.getElementById("img9"));
      this.document.getElementById("secciones3").appendChild(this.document.getElementById("img10"));
      this.document.getElementById("secciones3").appendChild(this.document.getElementById("img11"));
      this.document.getElementById("secciones3").appendChild(this.document.getElementById("img12"));
    }
  });

/*
  A través del ciclo for solicito los datos necesarios para:

  1. Agregar la URL de la imagen afectando el estilo.
  2. Creo la etiqueta b para el título del país.
  3. Creo la etiqueta p para el título de la ciudad.
*/

  for(let i=1; i<=12; i++){
    
        urlImagen = prompt(`Ingrese la URL de la imagen ${i}`)
        tituloPais =prompt(`Ingrese el nombre del país ${i}`)
        tituloCiuda =prompt(`Ingrese el título de la ciudad ${i}`)

        document.querySelector(`#img${i}`).style.backgroundImage = `url('${urlImagen}')`;
        let elemtoPais = document.createElement("b")
        elemtoPais.classList.add("pais")
        elemtoPais.innerHTML=tituloPais;

        let elemtoCiudad = document.createElement("p")
        elemtoCiudad.classList.add("ciudad")
        elemtoCiudad.innerHTML=tituloCiuda;

        document.querySelector(`#img${i} .texto-posicion`).appendChild(elemtoPais);
        document.querySelector(`#img${i} .texto-posicion`).appendChild(elemtoCiudad);
 
    
  }