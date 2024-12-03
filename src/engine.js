"use strict";
const canvasWidth = 400;
const canvasHeight = 400;
class DrawingApp {
    constructor() {
        let canvas = document.getElementById('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        this.canvas = canvas;
        let gl = canvas.getContext("2d");
        this.gl = gl;
    }
}
window.onload = () => {
    const draw = new DrawingApp();
    draw.gl.fillStyle = "red";
    draw.gl.fillRect(0, 0, 10, 10);
};
