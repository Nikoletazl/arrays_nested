function solve(nums) {
    const odd = nums.filter((x, i) => i % 2);
    const doubled = odd.map(x => x * 2);
    doubled.reverse()

    return doubled.join(" ");
}
solve([10, 15, 20, 25])