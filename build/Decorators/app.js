// 🧠 Conceito Básico:
// Decorators são funções especiais que:
// "Envolvem" outras classes/métodos/propriedades
// Adicionam comportamentos extras (como logs, validações, transformações)
// São declarados com @ antes do elemento a ser decorado
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Passo 1: Crie a função decorator
function congelar(alvo, // A classe que contém o método
nomeMetodo, // Nome do método que será decorado
descritor // "Controle remoto" do método
) {
    // Passo 2: Modifique o comportamento
    descritor.writable = false; // Torna o método imutável
    console.log(`❄️ Método ${nomeMetodo} congelado!`);
}
// Passo 3: Aplique o decorator
class Foguete {
    lancar() {
        console.log("🚀 3... 2... 1... Ignição!");
    }
}
__decorate([
    congelar
], Foguete.prototype, "lancar", null);
// Testando:
const apollo11 = new Foguete();
apollo11.lancar = () => console.log("Hackeado!"); // Erro! Método congelado
apollo11.lancar(); // Funciona normal: "🚀 3... 2... 1... Ignição!"
export {};
