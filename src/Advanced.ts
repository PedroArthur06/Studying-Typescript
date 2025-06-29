// Define um tipo chamado DataSoure que aceita qualquer propriedade (chave) do tipo string,
// e o valor pode ser string, number ou boolean.
type DataSoure ={
  [prop: string]: string | number | boolean;
}

// Cria um objeto store do tipo DataSoure, inicialmente vazio.
let store : DataSoure = {};

// Adiciona uma propriedade 'id' ao objeto store, com valor numérico.
store.id = 1;

// Adiciona uma propriedade 'name' ao objeto store, com valor string.
store.name = 'Pedro';