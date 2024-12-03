const canvasWidth: number = 400;
const canvasHeight: number = 400;

class DrawingApp {
    private canvas: HTMLCanvasElement;
    public gl: CanvasRenderingContext2D;

    constructor() {
        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        this.canvas = canvas;

        let gl = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.gl = gl;
    }
}

window.onload = () => {
    const draw = new DrawingApp(); 
    draw.gl.fillStyle = "red";
    draw.gl.fillRect(0, 0, 10, 10);
};
