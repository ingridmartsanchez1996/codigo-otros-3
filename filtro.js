// Tenemos un listado de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]
//Cambiar de getElementByName por querySelector y agregar #
const li = document.querySelector('#lista-de-productos');
//Cambiar el nombre de $i a 'input' y al llamar el elemento con el querySelecor, 
// se agregó el #
const input = document.querySelector('#input');



for (let i = 0; i < productos.length; i++) {
  //Cambiar 'd' por 'container'
  //Agregar ;
  let container = document.createElement("div");
  container.classList.add("producto");

  //Cambiar de 't' a 'titulo y de 'p' a 'productos' y agregar ;
  const titulo = document.createElement("productos");
  titulo.classList.add("titulo");
  titulo.textContent = productos[i].nombre
  
  let imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  //Cambiar 'd' por 'container'
  //Cambiar de 'ti' a 'tiulo'
  container.appendChild(titulo);
  container.appendChild(imagen);

  //Cambiar de 'd' a 'container
  //Agregar ;
  li.appendChild(container);
}

//Agregar ;
function displayProductos(productos) {
const botonDeFiltro = document.querySelector('#button');

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
}
  //Cambiar de '$i' a 'input'
  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
  
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    //Cambiar de 'd' a 'container
    //Agregar ;
    container.appendChild(titulo);
    contaner.appendChild(imagen);
  
    li.appendChild(container);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  