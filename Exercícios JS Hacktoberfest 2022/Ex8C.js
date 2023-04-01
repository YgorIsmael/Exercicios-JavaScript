
function frequencia(sequencia) {
  const map = new Map();
  for (let letra of sequencia) {
    let contagem = map.get(letra) || 0;
    map.set(letra, contagem+1);
  }
  return map;
}
const resultado = frequencia(process.argv[2]);
for (let [letra, total] of resultado) {
  console.log(`'${letra}': ${total}`);
}