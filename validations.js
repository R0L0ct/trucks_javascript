const showError = (select, message) => {
  const selectField = select.parentElement;
  selectField.classList.add("error");
  const error = selectField.querySelector("small");
  error.textContent = message;
};

const isEmpty = (valor) => (valor == 0 || valor == "" ? true : false);

const clearError = (select) => {
  const selectField = select.parentElement;
  selectField.classList.remove("error");
  const error = selectField.querySelector("small");
  error.textContent = "";
};

const checkMark = (select) => {
  let valid = false;
  const content = select.value.toString();

  if (isEmpty(content)) {
    showError(select, "Selecciona la marca");
  } else {
    clearError(select);
    valid = true;
  }

  return valid;
};

const checkColor = (select) => {
  let valid = false;
  const content = select.value.toString();

  if (isEmpty(content)) {
    showError(select, "Selecciona el color");
  } else {
    clearError(select);
    valid = true;
  }

  return valid;
};

const checkMarkAndColor = (select1, select2) => {
  let valid = false;

  const selectMark = select1.value;
  const selectColor = select2.value;

  if ((selectMark === "1" || selectMark === "2") && selectColor === "black") {
    showError(select1, "Disponibe en Renault");
  } else if (selectMark === "3" && selectColor === "blue") {
    showError(select1, "No disponible en Renault");
  } else {
    clearError(select1);
    valid = true;
  }

  return valid;
};

const isValidMark = () => {
  const isValidMark = checkMark(selectTruck);

  return isValidMark;
};

const isValidColor = () => {
  const isValidColor = checkColor(selectColor);
  const isValidColorBlack = checkMarkAndColor(selectTruck, selectColor);

  return isValidColor && isValidColorBlack;
};
