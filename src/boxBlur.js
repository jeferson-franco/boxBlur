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
