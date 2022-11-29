export class Vector2 {
    public x: number
    public y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    gradient_to(v: Vector2) {
        return (v.y - this.x) / (v.x - this.x)
    }
    dot(v: Vector2) {
        return this.x * v.x + this.y * v.y
    }
}