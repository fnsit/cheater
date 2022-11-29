export class Fraction {
    public nominator: number
    public denominator: number
    constructor(nominator: number, denominator: number) {
        [this.nominator, this.denominator] = [nominator, denominator]
    }

    public simplify() {
        const gcd = GCD(this.nominator, this.denominator)
        return new Fraction(this.nominator / gcd, this.denominator / gcd)
    }
}

export class Vector2 {
    public x: number
    public y: number

    constructor(x = 0, y = 0) {
        [this.x, this.y] = [x, y]
    }

    public gradient_to(vec: Vector2) {
        return (vec.y - this.y) / (vec.x - this.x)
    }
}

export function GCD(n: number, d: number) {
    let [a, b] = [n, d]
    if (a === 0) return b
    if (b === 0) return a
    let k: number;
    for (k = 0; ((a | b) & 1) === 0; k++) {
        a >>= 1
        b >>= 1
    }

    while ((a & 1) === 0) a >>= 1

    do {
        while ((b & 1) === 0) b >>= 1
        if (a > b) [a, b] = [b, a]
        b -= a
    } while (b !== 0)

    return a << k
}