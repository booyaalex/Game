const canvasWidth: number = 400;
const canvasHeight: number = 400;

class DrawingApp {
    private canvas: HTMLCanvasElement;
    public gl: WebGL2RenderingContext;

    constructor() {
        let canvas = document.getElementById('canvas') as HTMLCanvasElement;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        this.canvas = canvas;

        let gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
        this.gl = gl;
    }
}

window.onload = () => {
    new DrawingApp(); 
};
