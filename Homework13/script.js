
const Shape = {
    width: 20,
    height: 10,
    set square(value) {
        if (!Array.isArray(value)) {
                throw new Error("Value should be array");
            }
            const [width, height] = value;
            this.width = width;
            this.height = height;
    },
    get squareSquare() {
        return `${this.width}`**2;
    },
    get squareRectangle() {
        return `${this.width}` * `${this.height}`;
    },
    get squareCircle() {
        return Math.floor(Math.PI * (`${this.width}`/2) **2);
    }
}

function Square(w) {
    this.height = this.width = w;
    Shape.square = [w];
    console.log(this.squareSquare);
}
Square.prototype = Shape;


function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    Shape.square = [w, h];
    console.log(this.squareRectangle);
}
Rectangle.prototype = Shape;

function Circle(d) {
    this.height = this.width = d;
    Shape.square = [d];
    console.log(this.squareCircle);
}
Circle.prototype = Shape;



let newSquare = new Square(40);
console.log(newSquare);

let newRectangle = new Rectangle(40,30);
console.log(newRectangle);

let newCircle = new Circle(30);
console.log(newCircle);
