class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}



let point: Point;

console.log(point!.x + ' ' + point!.y);
