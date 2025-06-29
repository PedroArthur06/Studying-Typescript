var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decorator que verifica se o parâmetro é positivo
function positivo(target, nomeMetodo, indiceParametro) {
    console.log(`✅ Parâmetro ${indiceParametro} do método ${nomeMetodo} será validado!`);
    // Guarda a validação para usar depois
    const validacoes = target.__validacoes || (target.__validacoes = {});
    validacoes[nomeMetodo] = validacoes[nomeMetodo] || [];
    validacoes[nomeMetodo][indiceParametro] = "positivo";
}
// Decorator que aplica as validações
function validar(target, nomeMetodo, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const validacoes = target.__validacoes?.[nomeMetodo];
        if (validacoes) {
            args.forEach((arg, index) => {
                if (validacoes[index] === "positivo" && arg <= 0) {
                    throw new Error(`Parâmetro ${index} deve ser positivo!`);
                }
            });
        }
        return metodoOriginal.apply(this, args);
    };
}
class Calculadora {
    dividir(a, b) {
        return a / b;
    }
}
__decorate([
    validar,
    __param(0, positivo),
    __param(1, positivo)
], Calculadora.prototype, "dividir", null);
const calc = new Calculadora();
calc.dividir(10, 2); // Funciona 
calc.dividir(5, -1); // ERRO: "Parâmetro 1 deve ser positivo!" 
export {};
