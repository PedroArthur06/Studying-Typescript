var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Função decorator factory que retorna um decorator de classe.
// Exibe mensagens no console quando a classe é definida.
function Logger(logString) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// Função decorator factory para adicionar um template HTML ao DOM quando a classe é instanciada.
// Recebe o template e o id do elemento onde o template será inserido.
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    // O decorator retorna uma nova classe que estende a original.
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    // Substitui o conteúdo do <h1> pelo nome da instância.
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
// Aplica os decorators à classe Person.
// Logger roda primeiro (de baixo para cima), depois WithTemplate.
let Person = class Person {
    name = 'Max';
    constructor() {
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger('LOGGING'),
    WithTemplate('<h1>My Person Object</h1>', 'app')
], Person);
const pers = new Person();
console.log(pers);
// --- Exemplos de outros tipos de decorators ---
// Property decorator: executa quando a propriedade é definida na classe.
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
// Accessor decorator: executa quando um setter/getter é definido.
function Log2(target, name, descriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// Method decorator: executa quando um método é definido.
function Log3(target, name, descriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
// Parameter decorator: executa para cada parâmetro decorado de um método.
function Log4(target, name, position) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    title;
    _price;
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - should be positive!');
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log // Property decorator
], Product.prototype, "title", void 0);
__decorate([
    Log2 // Accessor decorator
], Product.prototype, "price", null);
__decorate([
    Log3 // Method decorator
    ,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);
// --- Decorator para autobind de métodos ---
// Decorator que faz o método sempre usar o 'this' correto ao ser chamado (útil para callbacks).
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer {
    message = 'This works!';
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind // Garante que 'this' sempre aponta para a instância de Printer
], Printer.prototype, "showMessage", null);
const p = new Printer();
p.showMessage(); // Chama diretamente
const button = document.querySelector('button');
// Mesmo passando o método como callback, o 'this' estará correto por causa do decorator.
button.addEventListener('click', p.showMessage);
export {};
