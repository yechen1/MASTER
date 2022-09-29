import * as THREE from "three";
import { Mesh } from "three";
let earthPic = require('../../image/sun.png')

export default function Sun(scene: THREE.Scene) : THREE.Mesh{

    // 太阳模型

    const texture = new THREE.TextureLoader().load(earthPic);
    texture.wrapS = THREE.RepeatWrapping; 

    const sunGeometry = new THREE.SphereGeometry(50,128,128);
    const sunMesh = new THREE.MeshPhongMaterial({
        map: texture,
    });
    const mesh = new THREE.Mesh(sunGeometry,sunMesh);
    scene.add(mesh);
    return mesh;
}