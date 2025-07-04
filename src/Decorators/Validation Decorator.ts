function Obrigatorio(target: any, propriedade: string) {
  // Cria um esconderijo de regras na classe
  const regras = target.constructor.regras || (target.constructor.regras = []);
  
  regras.push({
    campo: propriedade,
    validar: (valor: any) => {
      if (!valor) throw new Error(`⚠️ ${propriedade} é obrigatório!`);
    }
  });
}

function EmailValido(target: any, propriedade: string) {
  const regras = target.constructor.regras || (target.constructor.regras = []);
  
  regras.push({
    campo: propriedade,
    validar: (valor: string) => {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
        throw new Error(`⚠️ ${propriedade} não é um email válido!`);
      }
    }
  });
}


type Regra<T> = { campo: keyof T; validar: (valor: any) => void };
class FormularioUsuario {

  static regras: Regra<FormularioUsuario>[] = [];

  @Obrigatorio
  nome: string;

  @Obrigatorio
  @EmailValido
  email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

  // Método que valida TODOS os campos
  validar() {
    const regras = (this.constructor as typeof FormularioUsuario).regras || [];
    
    for (const regra of regras) {
      regra.validar(this[regra.campo]);
    }
  }
}

// Teste 1
const form1 = new FormularioUsuario("Pedro", "pedro@email.com");
form1.validar(); 

// Teste 2
const form2 = new FormularioUsuario("João", "joaoemail.com");
form2.validar();  

// Teste 3
const form3 = new FormularioUsuario("", "maria@email.com");
form3.validar(); 