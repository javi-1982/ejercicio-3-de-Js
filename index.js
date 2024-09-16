const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const input = document.getElementById('pizza-id');
const buscarBtn = document.getElementById('buscar-btn');
const resultContainer = document.getElementById('result-container');

// Función para renderizar la pizza //
function renderPizza(pizza) {
    const card = `
        <div class="card">
            <h2>${pizza.nombre}</h2>
            <img src="${pizza.imagen}" alt="${pizza.nombre}">
            <p id=precio><u>Precio:</u> $${pizza.precio}</p>
            <p id=ingredientes><u>Ingredientes:</u> ${pizza.ingredientes}.</p>
        </div>
    `;
    resultContainer.innerHTML = card;
}

// Función para renderizar un mensaje de error//
function renderError(message) {
    resultContainer.innerHTML = `<p class="error">${message}</p>`;
}

// Buscar pizza en el array//
function buscarPizza() {
    const pizzaId = parseInt(input.value);
    
    if (isNaN(pizzaId)) {
        renderError('Por favor, ingrese un número válido.');
        return;
    }

    const pizza = pizzas.find(pizza => pizza.id === pizzaId);

    if (pizza) {
        renderPizza(pizza);
        localStorage.setItem('ultimaPizza', JSON.stringify(pizza));
    } else {
        renderError('Item no valido, escoja otro numero.');
    }
}

// Evento de búsqueda//
buscarBtn.addEventListener('click', buscarPizza);

// Cargar la última pizza buscada al cargar la página//
window.addEventListener('load', () => {
    const ultimaPizza = localStorage.getItem('ultimaPizza');
    if (ultimaPizza) {
        renderPizza(JSON.parse(ultimaPizza));
    }
});