const precio = 400000
let cantidad = 1

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

totalValor = document.querySelector(".cantidad");
totalValor.innerHTML= cantidad;

valorTotal = document.querySelector(".valor-total");
valorTotal.innerHTML = Number(precio) * Number(cantidad);

