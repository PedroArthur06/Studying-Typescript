// Define uma função 'logar' que é um decorator factory (fábrica de decorators).
// Ela recebe uma mensagem e retorna um decorator de método.
// Decorator de método recebe: alvo (classe/protótipo), nome do método e descritor do método.
function logar(mensagem: string) {
  return function(alvo: any, metodo: string, descritor: PropertyDescriptor) {
    const original = descritor.value; // Guarda a função original

    // Substitui a função original por uma nova função que faz o log antes de executar o método.
    descritor.value = function(...args: any[]) {
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
  @logar("Cálculo executado")
  soma(a: number, b: number) {
    return a + b;
  }
}

// Cria uma instância da classe Calculadora.
const calc = new Calculadora();
// Chama o método 'soma', que agora exibe o log antes de retornar o