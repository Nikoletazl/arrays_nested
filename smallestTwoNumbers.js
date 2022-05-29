function solve(array) {
    let newArray = array.map(Number)
    let filtered = newArray.sort((a, b) => a - b)
    let result = []
    for (i = 0; i < 2; i++){
        currEl = filtered[i]
        result.push(currEl)
    }
    console.log(result)
    
}
solve([30, 15, 50, 5])