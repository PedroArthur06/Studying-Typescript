var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Obrigatorio(target, propriedade) {
    // Cria um esconderijo de regras na classe
    const regras = target.constructor.regras || (target.constructor.regras = []);
    regras.push({
        campo: propriedade,
        validar: (valor) => {
            if (!valor)
                throw new Error(`⚠️ ${propriedade} é obrigatório!`);
        }
    });
}
function EmailValido(target, propriedade) {
    const regras = target.constructor.regras || (target.constructor.regras = []);
    regras.push({
        campo: propriedade,
        validar: (valor) => {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
                throw new Error(`⚠️ ${propriedade} não é um email válido!`);
            }
        }
    });
}
class FormularioUsuario {
    static regras = [];
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    // Método que valida TODOS os campos
    validar() {
        const regras = this.constructor.regras || [];
        for (const regra of regras) {
            regra.validar(this[regra.campo]);
        }
    }
}
__decorate([
    Obrigatorio
], FormularioUsuario.prototype, "nome", void 0);
__decorate([
    Obrigatorio,
    EmailValido
], FormularioUsuario.prototype, "email", void 0);
// Teste 1
const form1 = new FormularioUsuario("Pedro", "pedro@email.com");
form1.validar();
// Teste 2
const form2 = new FormularioUsuario("João", "joaoemail.com");
form2.validar();
// Teste 3
const form3 = new FormularioUsuario("", "maria@email.com");
form3.validar();
export {};
