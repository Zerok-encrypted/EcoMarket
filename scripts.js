const productos = [
  { nombre: "Frutas Orgánicas", precio: 10.99, categoria: "Frutas", imagen: "img/_122514463_fr.jpg" },
  { nombre: "Arroz Integral", precio: 7.5, categoria: "Granos", imagen: "img/arroz.jpg" },
  { nombre: "Zanahorias", precio: 3.5, categoria: "Verduras", imagen: "img/zanahoria.jpg" },
  { nombre: "Leche de Almendras", precio: 12.0, categoria: "Lácteos", imagen: "img/leche.jpg" },
  { nombre: "Aceite de Oliva", precio: 22.0, categoria: "Aceites", imagen: "img/aceite.jpg" }
];

const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const contenedorProductos = document.getElementById("contenedor-productos");
const contadorCarrito = document.getElementById("carrito-contador");

function mostrarProductos() {
  contenedorProductos.innerHTML = "";
  productos.forEach(p => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card h-100">
        <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
        <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
          <p class="card-text">S/ ${p.precio.toFixed(2)} / kg</p>
          <small class="text-muted">${p.categoria}</small>
          <button class="btn btn-success w-100 mt-2" onclick="agregarAlCarrito('${p.nombre}', ${p.precio})">Agregar al carrito</button>
        </div>
      </div>`;
    contenedorProductos.appendChild(card);
  });
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarContador();
}

function actualizarContador() {
  contadorCarrito.textContent = carrito.length;
}

mostrarProductos();
actualizarContador();
