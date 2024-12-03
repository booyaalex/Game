"use strict";
const canvasWidth = 400;
const canvasHeight = 400;
class DrawingApp {
    constructor() {
        let canvas = document.getElementById('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        this.canvas = canvas;
        let gl = canvas.getContext("webgl2");
        this.gl = gl;
    }
}
window.onload = () => {
    new DrawingApp();
};
