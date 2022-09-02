function solution(image) {
    let result = [];
    for (let i = 0; i < image.length - 2; i++) {
        let row = [];
        for (let j = 0; j < image[i].length - 2; j++) {
            let sum = 0;
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    sum += image[i + k][j + l];
                }
            }
            row.push(Math.floor(sum / 9));
        }
        result.push(row);
    }
    return result;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test boxBlur

// alternative solution
// solution = (I) => {
//     let B = I.slice(1, -1).map((e) => e.slice(1, -1));
//     return B.map((row, i) =>
//         row.map((elem, j) => {
//             let sum = 0;
//             for (let x = 0; x < 3; ++x) for (let y = 0; y < 3; ++y) sum += I[i + x][j + y];
//             return (sum / 9) | 0;
//         })
//     );
// };

// alternative solution
// function solution(image) {
//     let answer = [];
//     for (let x = 1; x < image.length - 1; x++) {
//         let line = [];
//         for (let y = 1; y < image[0].length - 1; y++) {
//             let sum = 0;
//             for (let dx = -1; dx <= 1; dx++) {
//                 for (let dy = -1; dy <= 1; dy++) {
//                     sum += image[x + dx][y + dy];
//                 }
//             }
//             line.push(Math.floor(sum / 9));
//         }
//         answer.push(line);
//     }
//     return answer;
// }

// alternative solution
// rowSum = (a, b) => a.map((x, i) => x + (b[i] || 0));
// rowDiff = (a, b) => a.map((x, i) => x - (b[i] || 0));
// blurRow = (blurred, x, i, arr) => ((i -= 2), i <= 0 ? (blurred[0] = x + (blurred[0] || 0)) : (blurred[i] = x + blurred[i - 1] - arr[i - 1]), blurred);
// blurRows = (blurred, x, i, arr) => (
//     (i -= 2), i <= 0 ? (blurred[0] = rowSum(x, blurred[0] || [])) : (blurred[i] = rowDiff(rowSum(blurred[i - 1], x), arr[i - 1])), blurred
// );
// solution = (image) =>
//     image
//         .map((x) => x.reduce(blurRow, []))
//         .reduce(blurRows, [])
//         .map((x) => x.map((x) => Math.floor(x / 9)));
