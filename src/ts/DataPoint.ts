export default class DataPoint {
  x: number;
  y: number;
  type: number = 0;
  color: string = "#000";
  v: { x: number; y: number };
  constructor(x: number, y: number, type: number) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.v = { x: Math.random() * 10 - 5, y: Math.random() * 10 - 5 };
    this.setColor();
  }

  setColor(): void {
    switch (this.type) {
      case 0:
        this.color = "#F00";
        break;
      case 1:
        this.color = "#0F0";
        break;
      case 2:
        this.color = "#00F";
        break;
      case 3:
        this.color = "#FF0";
        break;
      default:
        this.color = "#000";
        break;
    }
  }

  update(): void {
    this.x += this.v.x;
    this.y += this.v.y;
    if (this.x < 0 || this.x > 300) this.v.x *= -1;
    if (this.y < 0 || this.y > 300) this.v.y *= -1;
  }

  dist(x: number, y: number): number {
    const dX = Math.abs(x - this.x);
    const dY = Math.abs(y - this.y);
    return Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#000";
    ctx.fillRect(this.x - 2, this.y - 2, 4, 4);
  }
}
