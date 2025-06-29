// Decorator que transforma qualquer texto em emojis
function emojizar(target: any, nomePropriedade: string) {
  let valorOriginal: string;

  // Getter mágico (quando alguém LÊ a propriedade)
  const getter = () => {
    const emojis: Record<string, string> = {
      feliz: "😊",
      triste: "😢",
      raiva: "😠",
      normal: "😐"
    };
    return emojis[valorOriginal] || valorOriginal;
  };

  // Setter mágico (quando alguém ESCREVE na propriedade)
  const setter = (novoValor: string) => {
    valorOriginal = novoValor.toLowerCase();
  };

  // Aplica a magia na propriedade!
  Object.defineProperty(target, nomePropriedade, {
    get: getter,
    set: setter
  });
}

class Pessoa {
  @emojizar
  humor: string = "feliz"; // Começa feliz
}

const maria = new Pessoa();
console.log(maria.humor); // 

maria.humor = "Raiva";    // Escrevendo (setter)
console.log(maria.humor); // (getter transforma em emoji!)