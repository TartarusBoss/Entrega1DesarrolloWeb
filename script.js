const productos = [
  {
    id: 1,
    nombre: "Balón Oficial de Fútbol",
    categoria: "futbol",
    precio: 120000,
    descripcion: "Cosido a mano, alta durabilidad para césped sintético y natural.",
    imagen: "https://images.unsplash.com/photo-1614632537190-23e4146777db?w=400&q=80"
  },
  {
    id: 2,
    nombre: "Guantes de MMA 4oz",
    categoria: "mma",
    precio: 95000,
    descripcion: "Cuero sintético con acolchado de alta densidad para sparring.",
    imagen: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80"
  },
  {
    id: 3,
    nombre: "Balón de Básquetbol No. 7",
    categoria: "basket",
    precio: 110000,
    descripcion: "Agarre profesional antideslizante para canchas interiores y exteriores.",
    imagen: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&q=80"
  },
  {
    id: 4,
    nombre: "Guantes de Boxeo / MMA",
    categoria: "mma",
    precio: 130000,
    descripcion: "Protección muñeca doble agarre, ideal para entrenamiento pesado.",
    imagen: "https://images.unsplash.com/photo-1517649763962-0c623266010b?w=400&q=80"
  },
  {
    id: 5,
    nombre: "Camiseta de Entrenamiento Fútbol",
    categoria: "futbol",
    precio: 75000,
    descripcion: "Tela transpirable con tecnología de secado rápido.",
    imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&q=80"
  },
  {
    id: 6,
    nombre: "Aro de Básquetbol Portátil",
    categoria: "basket",
    precio: 350000,
    descripcion: "Ajustable en altura con base rellenable de agua o arena.",
    imagen: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80"
  }
];


const contenedorProductos = document.getElementById("contenedor-productos");
const botonesFiltro = document.querySelectorAll(".btn-filtro");


function mostrarProductos(lista) {
  contenedorProductos.innerHTML = ""; 

  lista.forEach(producto => {
    const card = document.createElement("article");
    card.classList.add("card-producto");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="card-body">
        <span class="categoria-tag">${producto.categoria}</span>
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p class="precio">$${producto.precio.toLocaleString("es-CO")}</p>
      </div>
    `;

    contenedorProductos.appendChild(card);
  });
}


botonesFiltro.forEach(boton => {
  boton.addEventListener("click", (e) => {

    botonesFiltro.forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");

    const categoria = e.target.dataset.categoria;

    if (categoria === "todos") {
      mostrarProductos(productos);
    } else {
      const productosFiltrados = productos.filter(p => p.categoria === categoria);
      mostrarProductos(productosFiltrados);
    }
  });
});


mostrarProductos(productos);


const formContacto = document.getElementById("form-contacto");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputMensaje = document.getElementById("mensaje");

const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorMensaje = document.getElementById("error-mensaje");
const mensajeExito = document.getElementById("mensaje-exito");

formContacto.addEventListener("submit", (e) => {
  e.preventDefault(); 

  let esValido = true;


  errorNombre.textContent = "";
  errorEmail.textContent = "";
  errorMensaje.textContent = "";
  mensajeExito.textContent = "";


  if (inputNombre.value.trim().length < 3) {
    errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
    esValido = false;
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(inputEmail.value.trim())) {
    errorEmail.textContent = "Ingresa un correo electrónico válido.";
    esValido = false;
  }


  if (inputMensaje.value.trim().length < 10) {
    errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
    esValido = false;
  }

  if (esValido) {
    mensajeExito.textContent = "¡Gracias! Tu mensaje ha sido enviado correctamente.";
    formContacto.reset();
  }
});