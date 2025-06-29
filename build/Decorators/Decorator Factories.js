// Modifica métodos. Recebe:
// target: Protótipo da classe (instância) ou construtor (estático)
// key: Nome do método
// descriptor: Descritor de propriedade (Object.defineProperty)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Define uma função 'logar' que é um decorator factory .
// Ela recebe uma mensagem e retorna um decorator de método.
// Decorator de método recebe: alvo (classe/protótipo), nome do método e descritor do método.
function logar(mensagem) {
    return function (alvo, metodo, descritor) {
        const original = descritor.value; // Guarda a função original
        // Substitui a função original por uma nova função que faz o log antes de executar o método.
        descritor.value = function (...args) {
            // Exibe a mensagem, o nome do método e os argumentos no console.
            console.log(`📝 ${mensagem}: ${metodo}(${args.join(", ")})`);
            // Executa o método original com os argumentos recebidos.
            return original.apply(this, args);
        };
    };
}
// Classe de exemplo para usar o decorator.
class Calculadora {
    // Aplica o decorator 'logar' ao método 'soma'.
    // Sempre que 'soma' for chamado, a mensagem será exibida no console.
    soma(a, b) {
        return a + b;
    }
}
__decorate([
    logar("Cálculo executado")
], Calculadora.prototype, "soma", null);
// Cria uma instância da classe Calculadora.
const calc = new Calculadora();
export {};
// Chama o método 'soma', que agora exibe o log antes de retornar o
