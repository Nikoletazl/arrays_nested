function solve(matrix){
    let primary = 0
    let secondary = 0
    let result = []
    for (i = 0; i < matrix.length; i++){
        primary += matrix[i][i];
        secondary += matrix[matrix.length -1 -i][i]
    }
    result.push(primary)
    result.push(secondary)
    console.log(result.join(' '))
}
solve([[20, 40], [10, 60]])