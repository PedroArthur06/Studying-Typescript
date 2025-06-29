var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator que transforma qualquer texto em emojis
function emojizar(target, nomePropriedade) {
    let valorOriginal;
    // Getter mágico (quando alguém LÊ a propriedade)
    const getter = () => {
        const emojis = {
            feliz: "😊",
            triste: "😢",
            raiva: "😠",
            normal: "😐"
        };
        return emojis[valorOriginal] || valorOriginal;
    };
    // Setter mágico (quando alguém ESCREVE na propriedade)
    const setter = (novoValor) => {
        valorOriginal = novoValor.toLowerCase();
    };
    // Aplica a magia na propriedade!
    Object.defineProperty(target, nomePropriedade, {
        get: getter,
        set: setter
    });
}
class Pessoa {
    humor = "feliz"; // Começa feliz
}
__decorate([
    emojizar
], Pessoa.prototype, "humor", void 0);
const maria = new Pessoa();
console.log(maria.humor); // 
maria.humor = "Raiva"; // Escrevendo (setter)
console.log(maria.humor); // (getter transforma em emoji!)
export {};
