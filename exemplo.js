const fs = require('fs');

// Carregar dados do JSON
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const faturamento = data.faturamento_diario;

// Filtrando os dias com faturamento
const faturamentoFiltrado = faturamento.filter(x => x > 0);

const menorFaturamento = Math.min(...faturamentoFiltrado);
const maiorFaturamento = Math.max(...faturamentoFiltrado);
const mediaFaturamento = faturamentoFiltrado.reduce((a, b) => a + b, 0) / faturamentoFiltrado.length;

const diasAcimaDaMedia = faturamentoFiltrado.filter(x => x > mediaFaturamento).length;

console.log(`Menor faturamento: R$${menorFaturamento}`);
console.log(`Maior faturamento: R$${maiorFaturamento}`);
console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
