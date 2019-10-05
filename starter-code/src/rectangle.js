/*
Create a class Rectangle with:
A property width
A property height
A method constructor(width,height)
A method calculatePerimeter()
A method calculateArea()
*/

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculatePerimeter() {
    return (this.width + this.height) * 2;
  }

  calculateArea() {
    return (this.width * this.height);
  }
}

var r1 = new Rectangle(6, 7)
console.log('Perimeter of r1 =', r1.calculatePerimeter()) // 26
console.log('Area of r1 =', r1.calculateArea()) // 42


/*
ITERATION 2
Create a class Square that extends Rectangle add with:
A property side (equals to the width and height)
A method constructor(side)
*/

class Square extends Rectangle {
  constructor(side){
  super(side, side) // because it's a square both sides are the same
  // it's all about matching the number of arguments
  }
 
}

let s1 = new Square(5)

console.log(s1.calculatePerimeter());
console.log(s1.calculateArea());

console.log(s1.width);
console.log(s1.height);
console.log('Perimeter of s1 =', s1.calculatePerimeter()) // 20
console.log('Area of s1 =', s1.calculateArea()) // 25

let s2 = new Square(10)
console.log('Perimeter of s2 =', s2.calculatePerimeter()) // 40
console.log('Area of s2 =', s2.calculateArea()) // 100
