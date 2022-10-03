const formMark = document.getElementById("formMark");
const formColor = document.getElementById("formColor");
const card = document.getElementById("cards");
const selectTruck = document.getElementById("trucks");
const selectColor = document.getElementById("colors");

const truckArray = [
  {
    id: "1",
    marca: "Ford",
    color: ["red", "blue", "white"],
    precio: "$17.000.000",
  },
  {
    id: "2",
    marca: "Mercedes",
    color: ["red", "blue", "white"],
    precio: "$20.000.000",
  },
  {
    id: "3",
    marca: "Renault",
    color: ["red", "blue", "white", "black"],
    precio: "$15.000.000",
  },
];

const filterMark = () => {
  const trucks = truckArray.filter((id) => id.id === selectTruck.value);
  const marca = trucks.map((marca) => marca.marca);
  const price = trucks.map((precio) => precio.precio);
  const id = trucks.map((id) => id.id).toString();

  return `

       <div class="left-card"> 
         <h2>${marca}</h2> 
         <h4>${price}</h4> 
       </div>
       <img src=${renderMark(id)} class=${addClass(id)}  />
	`;
};

const addClass = (truckId) => {
  if (truckId === "1") {
    return "ford_img";
  } else if (truckId === "2") {
    return "mercedes_img";
  } else if (truckId === "3") {
    return "renault_img";
  }
};

const filterColor = () => {
  const arrayColores = truckArray.map((color) => color.color);
  const arrayConcat = arrayColores[0].concat(arrayColores[1], arrayColores[2]);
  const colores = Array.from(new Set(arrayConcat));
  const colorFilter = colores
    .filter((color) => color === selectColor.value)
    .toString();
  const markFilter = truckArray.filter((mark) => mark.id === selectTruck.value);
  const marca = markFilter.map((marca) => marca.marca);
  const price = markFilter.map((price) => price.precio);
  const id = markFilter.map((id) => id.id).toString();

  return `
       <div class="left-card"> 
           <h2>${marca}</h2>
           <h4>${price}</h4>
       </div>
       <img src=${renderColor(colorFilter, id)} class=${addClass(id)} />
	`;
};

const renderColor = (color, id) => {
  if (color === "red" && id === "1") {
    return "img/ford-rojo.png";
  } else if (color === "blue" && id === "1") {
    return "img/ford-azul.png";
  } else if (color === "white" && id === "1") {
    return "img/ford-blanco.png";
  } else if (color === "red" && id === "2") {
    return "img/mercedes-rojo.png";
  } else if (color === "white" && id === "2") {
    return "img/mercedes-blanco.png";
  } else if (color === "blue" && id === "2") {
    return "img/mercedes-azul.png";
  } else if (color === "red" && id === "3") {
    return "img/renault-rojo.png";
  } else if (color === "white" && id === "3") {
    return "img/renault-blanco.png";
  } else if (color === "black" && id === "3") {
    return "img/renault-negro.png";
  }
};

const renderMark = (trucks) => {
  if (trucks === "1") {
    return "img/ford-blanco.png";
  } else if (trucks === "2") {
    return "img/mercedes-blanco.png";
  } else if (trucks === "3") {
    return "img/renault-blanco.png";
  }
};

const renderCardMark = () => {
  card.innerHTML = filterMark();
};

const renderCardColor = () => {
  card.innerHTML = filterColor();
};

const submitFormMark = (e) => {
  e.preventDefault();

  if (isValidMark()) {
    // saveData();
    // saveToLocalStorage();
    renderCardMark();
    //
  }
};

const submitFormColor = (e) => {
  e.preventDefault();

  if (isValidColor()) {
    renderCardColor();
  }
};

const init = () => {
  formMark.addEventListener("submit", submitFormMark);
  formColor.addEventListener("submit", submitFormColor);
};

init();
