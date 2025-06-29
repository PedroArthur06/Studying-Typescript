// Recebe o construtor da classe como parâmetro.

// Define um decorator de classe chamado 'fogueteDecorador'.
// Decorators de classe recebem o construtor da classe como argumento.
// Aqui, ele adiciona duas propriedades ao protótipo da classe: 'combustivel' e 'decoradoEm'.
function fogueteDecorador(constructor: Function) {
  constructor.prototype.combustivel = "Hidrazina"; // Adiciona a propriedade 'combustivel' ao protótipo
  constructor.prototype.decoradoEm = new Date();   // Adiciona a propriedade 'decoradoEm' ao protótipo
}

// Aplica o decorator 'fogueteDecorador' à classe Foguete.
// Isso faz com que as propriedades definidas no decorator sejam adicionadas à classe.
@fogueteDecorador
class Foguete {
  combustivel: string; // Propriedade que será sobrescrita pelo decorator
  decoradoEm: Date;    // Propriedade que será sobrescrita pelo decorator

  // O construtor inicializa as propriedades com valores padrão.
  // Esses valores podem ser sobrescritos pelo decorator.
  constructor() {
    this.combustivel = "Desconhecido";
    this.decoradoEm = new Date();
  }
}

// Cria uma instância da classe Foguete.
// As propriedades 'combustivel' e 'decoradoEm' terão os valores definidos pelo decorator.
const saturnoV = new Foguete();
console.log(saturnoV.combustivel); // Deve exibir "Hidrazina" por causa do