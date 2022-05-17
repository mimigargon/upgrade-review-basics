const miArray = [
    "Caracol", 
    "Mosquito", 
    "Salamandra", 
    "Ajolote"
];

function findArrayIndex(array, text) {
    return array.indexOf(text) !== -1
      ? text + " esta en la posicion " + array.indexOf(text)
      : text + " no está en el array";
  }
  
  console.log(findArrayIndex(miArray, "Salamandra"));
  console.log(findArrayIndex(miArray, "Perro"));
  