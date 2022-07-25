import * as THREE from 'three';
let render, camera, scene, cube, animationRequestId; 

const init = () => {
    scene = new THREE.Scene();

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 4, 2);
    directionalLight.position.set(0, -4, 2);
    scene.add(directionalLight);
    scene.add(directionalLight2)
    
    cube = new createCube(0xFFC0CB, {x: 0, y: 0, z: 0})
    cube.rotation.x += 0.5
    scene.add(cube);

    const fov = 60;
    const aspect = 640/480;
    const near = 0.1;
    const far = 100;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0,0,5);

    render = new THREE.WebGLRenderer( { antialias: true } );
    render.setSize(640, 480);
    render.render(scene,camera);

    animateCube(cube);
    return render.domElement;

}

const createCube = (hexColor,position) => {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({color: hexColor})

    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(position.x,position.y,position.z)

    return cube;
}

const animateCube = () => {
    animationRequestId = requestAnimationFrame(animateCube);
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;
    render.render(scene,camera);
}

class PinkThreeJS extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.appendChild(init());
        this.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('clickedCanvas'));
        })
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'animation'){
            cancelAnimationFrame(animationRequestId);
        }
    }
    static get observedAttributes(){
        return ['animation'];
    }
}

customElements.define('pink-threejs-cube', PinkThreeJS);