
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
    }
}

function Square(w) {
    Shape.square = [w];
    this.squareSquare = function () {
        return `${this.width}`**2;
    }
}
Square.prototype = Shape;


function Rectangle(w, h) {
    Shape.square = [w, h];
    this.squareRectangle = function() {
        return `${this.width}` * `${this.height}`;
    }
}
Rectangle.prototype = Shape;

function Circle(d) {
    Shape.square = [d];
    this.squareCircle = function() {
        return Math.floor(Math.PI * (`${this.width}`/2) **2);
    }
}
Circle.prototype = Shape;



let newSquare = new Square(40);
console.log(newSquare.squareSquare());

let newRectangle = new Rectangle(50,20);
console.log(newRectangle.squareRectangle());

let newCircle = new Circle(30);
console.log(newCircle.squareCircle());
