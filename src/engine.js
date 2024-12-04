import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const loader = new GLTFLoader();
loader.load('assets/ImageToStl.com_ground080_8k-jpg_displacement.glb', function (glb) {
    glb.scene.scale.set(1, 1, 1);
    console.log(glb.scene);
    scene.add(glb.scene);
}, undefined, function (error) {
    console.log("An error happened:", error);
});
class gameObject {
    constructor(xPos, yPos, zPos) {
        this.x = xPos;
        this.y = xPos;
        this.z = xPos;
    }
    getXPos() {
        return this.x;
    }
    setXPos(xPos) {
        this.x = xPos;
    }
}
const cubeArray = [];
/* Setup */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;
camera.position.y = 1;
/* Lighting */
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
/* const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight); */
/* Cube */
makeCube(1, 1, 0);
makeCube(-1, 1, 0);
function animate() {
    for (const cube of cubeArray) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.z += 0.01;
    }
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
function addCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    return cube;
}
function makeCube(x, y, z) {
    const cube = addCube();
    cube.position.set(x, y, z);
    cubeArray.push(cube);
}
let keys = [];
window.document.addEventListener("keydown", (e) => {
    keys[e.keyCode] = true;
});
window.document.addEventListener("keyup", (e) => {
    keys[e.keyCode] = false;
});
