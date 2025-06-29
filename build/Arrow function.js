// se houver somente um retorno, não precisa de chaves
// se houver somente um retorno, não precisa de return
const add = (a, b) => a + b;
const printOutput = output => console.log(output);
// // Seleciona o primeiro elemento <button> do DOM.
const button = document.querySelector('button');
// Verifica se o botão existe antes de adicionar o event listener.
if (button) {
    // Adiciona um event listener para o evento de clique no botão.
    // Ao clicar, exibe uma mensagem no console junto com o evento.
    button.addEventListener('click', event => console.log(event));
}
printOutput(add(5, 2));
export {};
