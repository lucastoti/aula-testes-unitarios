import {projectName, soma, hojeEDia27, hojeEDia30} from "./index";

describe('Primeira bloco de testes', () => {
  beforeEach(() => {

  });
  
  afterEach(() => {
    
  });
  it('Testando a função projectName', () => {
    expect(projectName()).toEqual('unit-tests');
  });
});

describe('Segundo bloco de testes', () => {
  // beforeEach(() => {

  // });
  
  // afterEach(() => {
    
  // });
  it('Testando a função soma', () => {
    expect(soma(4, 5)).toEqual(9);
    expect(soma(10, 6)).toEqual(16);
    expect(soma(6, 9)).toEqual(15);
    expect(soma(4, '8')).toEqual(12);
    expect(soma('4', '8')).toEqual(12);
  });
});


describe('Terceiro bloco de testes', () => {
  // beforeEach(() => {

  // });
  
  // afterEach(() => {
    
  // });
  it('Testando a função data', () => {
    expect(hojeEDia27()).toBeTruthy();
    expect(hojeEDia30()).toBeFalsy();
  });
});




// npm
// yarn

// npm run test
// yarn test