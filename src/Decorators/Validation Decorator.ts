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