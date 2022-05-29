function solve(matrix) {
    let biggestNum = 0
    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[row].length; col++){
            currNum = matrix[row][col]
            if (Number(currNum) > biggestNum){
                biggestNum = Number(currNum)
            }
        }
    }
    return biggestNum
}
console.log(solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]))