// 🧠 Conceito Básico:
// Decorators são funções especiais que:
// "Envolvem" outras classes/métodos/propriedades
// Adicionam comportamentos extras (como logs, validações, transformações)
// São declarados com @ antes do elemento a ser decorado

// Passo 1: Crie a função decorator
function congelar(
  alvo: any,           // A classe que contém o método
  nomeMetodo: string,  // Nome do método que será decorado
  descritor: PropertyDescriptor // "Controle remoto" do método
) {
  // Passo 2: Modifique o comportamento
  descritor.writable = false; // Torna o método imutável
  console.log(`❄️ Método ${nomeMetodo} congelado!`);
}

// Passo 3: Aplique o decorator
class Foguete {
  @congelar
  lancar() {
    console.log("🚀 3... 2... 1... Ignição!");
  }
}

// Testando:
const apollo11 = new Foguete();
apollo11.lancar = () => console.log("Hackeado!"); // Erro! Método congelado
apollo11.lancar(); // Funciona normal: "🚀 3... 2... 1... Ignição!"