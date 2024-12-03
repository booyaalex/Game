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

        let gl = canvas.getContext("webgl") as WebGL2RenderingContext;
        this.gl = gl;
    }
}

window.onload = () => {
    const draw = new DrawingApp(); 
    // Set clear color to black, fully opaque
    draw.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    draw.gl.clear(draw.gl.COLOR_BUFFER_BIT);
};
