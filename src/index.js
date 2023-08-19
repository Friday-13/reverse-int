module.exports = function reverse(n) {
    let reversedN = 0;
    n = Math.abs(n);
    while (n > 0) {
        reversedN = reversedN * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return reversedN;
}
