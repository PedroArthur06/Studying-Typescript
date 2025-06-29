var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Define um decorator de classe chamado 'fogueteDecorador'.
// Decorators de classe recebem o construtor da classe como argumento.
// Aqui, ele adiciona duas propriedades ao protótipo da classe: 'combustivel' e 'decoradoEm'.
function fogueteDecorador(constructor) {
    constructor.prototype.combustivel = "Hidrazina"; // Adiciona a propriedade 'combustivel' ao protótipo
    constructor.prototype.decoradoEm = new Date(); // Adiciona a propriedade 'decoradoEm' ao protótipo
}
// Aplica o decorator 'fogueteDecorador' à classe Foguete.
// Isso faz com que as propriedades definidas no decorator sejam adicionadas à classe.
let Foguete = class Foguete {
    combustivel; // Propriedade que será sobrescrita pelo decorator
    decoradoEm; // Propriedade que será sobrescrita pelo decorator
    // O construtor inicializa as propriedades com valores padrão.
    // Esses valores podem ser sobrescritos pelo decorator.
    constructor() {
        this.combustivel = "Desconhecido";
        this.decoradoEm = new Date();
    }
};
Foguete = __decorate([
    fogueteDecorador
], Foguete);
// Cria uma instância da classe Foguete.
// As propriedades 'combustivel' e 'decoradoEm' terão os valores definidos pelo decorator.
const saturnoV = new Foguete();
console.log(saturnoV.combustivel); // Deve exibir "Hidrazina" por causa do
export {};
