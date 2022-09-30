import DataPoint from "./DataPoint";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const resolution = 2;


const dataPoints: DataPoint[] = [];

for (let i = 0; i < 25; i++) {
  dataPoints.push(
    new DataPoint(
      Math.random() * width,
      Math.random() * height,
      Math.floor(Math.random() * 2)
    )
  );
}

const update = () => {
  dataPoints.forEach((s) => {
    s.update();
  });
};

const draw = () => {
  if (ctx === null) return;
  for (let x = 0; x < width; x += resolution) {
    for (let y = 0; y < height; y += resolution) {
      let smallestDist: number = Infinity;
      let col = "#000";

      for (let i = 0; i < dataPoints.length; i++) {
        const s = dataPoints[i];
        const dist = s.dist(x, y);
        if (dist < smallestDist) {
          smallestDist = dist;
          col = s.color;
        }
      }

      ctx.fillStyle = col;
      ctx.fillRect(x - (resolution/2), y - (resolution/2), resolution, resolution);
    }
  }
};

const clear = () => {
  ctx?.clearRect(0, 0, width, height);
};

const drawScene = () => {
  clear();
  draw();
  update();
  if (ctx != null) {
    dataPoints.forEach((s) => s.draw(ctx));
  }
};

const live = true;
if (live) {
  setInterval(() => {
    drawScene();
    update();
  }, 100);
} else {
  draw();
  if (ctx != null) {
    dataPoints.forEach((s) => s.draw(ctx));
  }
}
