"use strict";
const canvasWidth = 400;
const canvasHeight = 400;
class DrawingApp {
    constructor() {
        let canvas = document.getElementById('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        this.canvas = canvas;
        let gl = canvas.getContext("webgl");
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
