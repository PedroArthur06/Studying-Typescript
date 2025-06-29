// --- Array  Destructuring ---//
// Array original
const frutas = ["Maçã", "Banana", "Laranja"];
// Destructuring básico
const [primeira, segunda, terceira] = frutas;
console.log(segunda); // "Banana"
// Ignorando elementos
const [primeiraFruta, , terceiraFruta] = frutas;
console.log(terceiraFruta); // "Laranja"
// Rest operator (...)
const [fruta1, ...restante] = frutas;
console.log(restante); // ["Banana", "Laranja"]
// Valores padrão
const numeros = [10];
const [a = 0, b = 0] = numeros;
console.log(b); // 0 (valor padrão)
const usuario = {
    nome: "Ana",
    idade: 30,
    email: "ana@exemplo.com"
};
// Destructuring básico
const { nome, idade } = usuario;
console.log(idade); // 30
// Renomeando variáveis
const { email: userEmail } = usuario;
console.log(userEmail); // "ana@exemplo.com"
// Valores padrão
const { cidade = "São Paulo" } = usuario;
console.log(cidade); // "São Paulo"
// Rest operator em objetos
const { nome: userName, ...resto } = usuario;
console.log(resto); // { idade: 30, email: "ana@exemplo.com" }
export {};
// Object Destructuring ---/\
