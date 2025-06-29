// Função decorator factory que retorna um decorator de classe.
// Exibe mensagens no console quando a classe é definida.
function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// Função decorator factory para adicionar um template HTML ao DOM quando a classe é instanciada.
// Recebe o template e o id do elemento onde o template será inserido.
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  // O decorator retorna uma nova classe que estende a original.
  return function<T extends { new (...args: any[]): {name: string} }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          // Substitui o conteúdo do <h1> pelo nome da instância.
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}

// Aplica os decorators à classe Person.
// Logger roda primeiro (de baixo para cima), depois WithTemplate.
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();
console.log(pers);

// --- Exemplos de outros tipos de decorators ---

// Property decorator: executa quando a propriedade é definida na classe.
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

// Accessor decorator: executa quando um setter/getter é definido.
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Method decorator: executa quando um método é definido.
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Parameter decorator: executa para cada parâmetro decorado de um método.
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log // Property decorator
  title: string;
  private _price: number;

  @Log2 // Accessor decorator
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3 // Method decorator
  getPriceWithTax(@Log4 tax: number) { // Parameter decorator
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);

// --- Decorator para autobind de métodos ---

// Decorator que faz o método sempre usar o 'this' correto ao ser chamado (útil para callbacks).
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
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

  @Autobind // Garante que 'this' sempre aponta para a instância de Printer
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
p.showMessage(); // Chama diretamente

const button = document.querySelector('button')!;
// Mesmo passando o método como callback, o 'this' estará correto por causa do decorator.
button.addEventListener('click', p.showMessage);