// "B", "D", "E", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Z
let sequencia = process.argv[2].toUpperCase();
let letraA = "A";
let letraT = "T";
let letraC = "C";
let letraG = "G";
let quantidadeA = 0;
let quantidadeT = 0;
let quantidadeC = 0;
let quantidadeG = 0;
let array = sequencia.split('');
console.log(array)
function verificar(letracerta){
if (array.indexOf(letracerta) > -1){
    return true;
    } else {
    return false;
}}

if (verificar(letraA) == false){
    return console.log("Sequência inválida")
}

if (!array.includes("A", "T", "C", "G")) {
    return console.log("Sequência inválida.")
}
for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i] == letraA) {
      quantidadeA++
    }
  }
for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i] == letraT) {
      quantidadeT++
    }
  }
  for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i] == letraC) {
      quantidadeC++
    }
  }
  for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i] == letraG) {
      quantidadeG++
    }
  }

console.log(quantidadeA, quantidadeT, quantidadeC, quantidadeG)