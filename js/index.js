// let nombre = "Lety";
// console.log(nombre);

// let apellido = "Perez";
// console.log(apellido);

// const dirección = "Calle";
// console.log(dirección);

// console.log("Hola mi nombre es "+ nombre +", mi apellido es "+ apellido +
// " y mi dirección es "+ dirección);

// let edad = 40;

// let num1 = 20;
// let num2 = 15;
// let num3 = 55;

// let costoTotal = num1 + num2;
// console.log(costoTotal);

// if (costoTotal >= 30) {
//     console.log("Usted tiene envio gratis");
// } else {
//     console.log("El costo del envio es de $3.000");
// }

// //objeto literal
// let stickerSagi = {
//     tipo: "sticker",
//     precio: 1999
// }
// console.log(stickerSagi);
// //Notación de punto
// console.log(stickerSagi.precio);

// //Bucles for
// let productos = [
//     {nombre:'sticker', descuento:false}, 
//     {nombre:'tote', descuento:false}, 
//     {nombre:'remera', descuento:true}
// ];

// let mensaje = "";
// for (let i = 0; i < productos.length; i++) {
//     if (productos[i].descuento) {
//         mensaje += "¡" + productos[i].nombre + " está en oferta!\n";
//     } else {
//         { mensaje += " "+ productos[i].nombre + " a precio regular\n" ;
//     }}
// }
// if (mensaje) {
//     alert(mensaje);
// }

// function sumar(total){
//     return "Total " + total
// }
// console.log(sumar(num1 + num2));
// console.log(sumar(num3 + num2));

// //confirm()
// function crearProductos2() {
//     const productos2 = [
//         {nombre:'sticker', descuento:false}, 
//         {nombre:'tote', descuento:false}, 
//         {nombre:'remera', descuento:true}
//     ]
//     return productos2;
// }
// let resultado = crearProductos2();

// for (let i = 0; i < resultado.length; i++) {
//     const prod = resultado[i]
//     console.log("nombre " + prod.nombre);
//     console.log("descuento " + prod.descuento);
// }

// let listaProd = document.querySelector('article');
// console.log(listaProd);
// listaProd.innerText = 'xx';

//webStorage
// let productosJson = JSON.stringify(productos);
// localStorage.setItem('carrito', productosJson);
// console.log(localStorage);

// let recuperoStorage = localStorage.getItem('carrito');
// console.log(recuperoStorage);

// let carritoFinal = JSON.parse(recuperoStorage)

////
const productosContainer = document.querySelector(".seccion-productos");

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => {
    const productos = data.slice(5, 8);
    console.log(productos);
    productosContainer.innerHTML = productos
      .map(producto => `
        <div class="producto">
          <img src="${producto.image}" alt="${producto.title}" />
          <h3>${producto.title}</h3>
          <p><strong>$${producto.price}</strong></p>
        </div>
      `)
      .join("");
      let productosHTML = "";
      for (let i = 0; i < productos.length; i++){
        const prod = productos[i];
        productosHTML +=
        `<article class="producto">
                <h2>${prod.title}</h2>
                <img src="${prod.image}" alt="${prod.title}">
                <p>${prod.description}</p>
                <h3>${prod.price}</h3>
                <a href="./pages/productos.html" class="info">Más info</a>
                <a href="#" class="agregar" data-id="${prod.id}" data-title="${prod.title}" data-precio="${prod.price}" data-img="${prod.image}">
                Agregar al carrito</a>
        </article> 
        
        `
      }
    productosContainer.innerHTML = productosHTML;
  })
  .catch(error => console.log("Error:", error));

  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("agregar")) {
        e.preventDefault();
  
        const producto = {
            id: e.target.dataset.id,
            title: e.target.dataset.title,
            price: e.target.dataset.precio,
            image: e.target.dataset.img
        };
  
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
        carrito.push(producto);
  
        localStorage.setItem("carrito", JSON.stringify(carrito));
  
        alert("Producto agregado al carrito");
    }
  });
  
