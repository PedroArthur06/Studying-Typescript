// Decorator que verifica se o parâmetro é positivo
function positivo(target: any, nomeMetodo: string, indiceParametro: number) {
  console.log(`✅ Parâmetro ${indiceParametro} do método ${nomeMetodo} será validado!`);
  
  // Guarda a validação para usar depois
  const validacoes = target.__validacoes || (target.__validacoes = {});
  validacoes[nomeMetodo] = validacoes[nomeMetodo] || [];
  validacoes[nomeMetodo][indiceParametro] = "positivo";
}

// Decorator que aplica as validações
function validar(target: any, nomeMetodo: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
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
  @validar
  dividir(
    @positivo a: number,
    @positivo b: number
  ) {
    return a / b;
  }
}

const calc = new Calculadora();
calc.dividir(10, 2);  // Funciona 
calc.dividir(5, -1);  // ERRO: "Parâmetro 1 deve ser positivo!" 