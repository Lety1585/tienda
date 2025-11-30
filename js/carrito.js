let alertaLimpiar = document.getElementById("vaciar");
alertaLimpiar.addEventListener("click", function() {
    alert("¿Estás seguro que quieres vaciar el carrito?");
});

const listaCarrito = document.getElementById("lista-carrito");
const btnVaciar = document.getElementById("vaciar");

function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    listaCarrito.innerHTML = "";

    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${producto.image}" width="50">
            ${producto.title} - $${producto.price}
        `;
        listaCarrito.appendChild(li);
    });
}

btnVaciar.addEventListener("click", () => {
    if (confirm("¿Estás seguro de vaciar el carrito?")) {
        localStorage.removeItem("carrito");
        cargarCarrito();
    }
});

cargarCarrito();
