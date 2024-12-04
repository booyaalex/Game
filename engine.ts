import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/* Load Sand */
const loader: GLTFLoader = new GLTFLoader();
loader.load(
'', 
function (glb) {
    glb.scene.scale.set(1, 1, 1);
    console.log(glb.scene);
    scene.add(glb.scene);
},
undefined,
function (error) {
    console.log("An error happened:", error);
}
);

class gameObject {
    private x: number;
    private y: number;
    private z: number;
    constructor(xPos: number, yPos: number, zPos: number) {
        this.x = xPos;
        this.y = xPos;
        this.z = xPos;
    }

    public getXPos(): number {
        return this.x
    }
    public setXPos(xPos: number): void {
        this.x = xPos;
    }
}

const cubeArray: THREE.Mesh[] = [];

/* Setup */
const scene: THREE.Scene = new THREE.Scene();
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer:THREE.WebGLRenderer = new THREE.WebGLRenderer( { antialias: false } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 5;
camera.position.y = 1;

/* Lighting */
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

/* Cube */
makeCube(1, 1, 0);
makeCube(-1, 1, 0);

function animate(): void {
    for (const cube of cubeArray) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.z += 0.01;
    }
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

function addCube(): THREE.Mesh {
    const geometry: THREE.BoxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    const cube: THREE.Mesh = new THREE.Mesh( geometry, material );
    scene.add( cube );
    return cube;
}

function makeCube(x:number, y:number, z:number): void {
    const cube = addCube();
    cube.position.set(x, y, z);
    cubeArray.push(cube);
}

let keys: boolean[] = []; 
window.document.addEventListener("keydown", (e) => {
    keys[e.keyCode] = true;
});
window.document.addEventListener("keyup", (e) => {
    keys[e.keyCode] = false;
});