const cellSize = 4;
const toCell = (str) => {
    const emptyCount = cellSize - `${str}`.length;
    return `${Array(emptyCount).fill(' ').join('')}${str}`;
}

const table = (n) => {
    const firstRow = [];
    for (let i = 1; i < n; i++) {
        firstRow.push(toCell(i));
    }
    console.log(`x | ${firstRow.join(' ')}`);
    const rowSum = [];
    const colSum = [];
    let totalSum = 0;
    for (let i = 1; i < n; ++i) {
        rowSum[i] = rowSum[i] || 0;
        const rowResult = [];
        for (let j = 1; j < n; ++j) {
            const cell = i * j;
            colSum[j] = colSum[j] || 0;
            colSum[j] = colSum[j] + cell;
            rowSum[i] = rowSum[i] + cell;
            totalSum = totalSum + cell;
            rowResult.push(toCell(cell));
        }
        console.log(`${i} | ${rowResult.join(' ')}`);
    }

    console.log('Sum of Rows', rowSum.join(' '));
    console.log('Sum of Columns', colSum.join(' '));
    console.log('Total Sum of Table', totalSum);
}

table(10);