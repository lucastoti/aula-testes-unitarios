export const projectName = () => {
  return 'unit-tests';
};

export const soma = (numA, numB) => {
  if (typeof numB == 'string') {
    numB = Number(numB);
  } 
  if (typeof numA == 'string') {
    numA = Number(numA);
  }

  let resultado = numA + numB;
  resultado = resultado - 1;
  resultado = resultado + 1;

  return numA + numB;
};

export const hojeEDia27 = () => {
  const data = new Date();
  const dia = data.getDate();

  if (dia == 17) {
    return true;
  } else {
    return false;
  }

  // return dia == 17 ? true : false;
};

export const hojeEDia30 = () => {
  const data = new Date();
  const dia = data.getDate();
  
  if (dia == 30) {
    return true;
  } else {
    return false;
  }

  // return dia == 17 ? true : false;
};



// git clone https://github.com/lucastoti/aula-testes-unitarios.git
// cd aula-testes-unitarios
// npm install
// npm run test



