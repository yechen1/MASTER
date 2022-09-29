
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import Sun from './plant/sun';
const universe = require('../image/universe.hdr')


export default function drawPlant(props: object){
    initScene();
}

function initScene(){
    // 创建场景
    let scene =new THREE.Scene();
    let rgbeloader = new RGBELoader();
    rgbeloader.loadAsync(universe).then((texture)=>{
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
    },(event)=>{
        console.log(event)
    })
    // 照相机
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 4000 );
    camera.position.set(-1000, 10,1000); //设置相机位置
    camera.lookAt(0,0,0); //设置相机方向(指向的场景对象)

    // 太阳
    const sun = Sun(scene);


    // let planeBufferGeo = new THREE.PlaneGeometry(1000,1000)
    // let mater = new THREE.MeshStandardMaterial({
    //     color: 0xffffff,
    // }); //材质对象Material
    // const meshplane = new THREE.Mesh(planeBufferGeo,mater);
    // meshplane.rotation.x = -Math.PI / 2;
    // meshplane.position.y = -0;
    // meshplane.receiveShadow = true; 
    // scene.add(meshplane)

    // // 直接光源
    const spotLight = new THREE.SpotLight( 0xffffff,1);
    spotLight.position.set( -400, 250,100 );

    spotLight.castShadow = true;
    spotLight.shadow.camera.near = 10;
    spotLight.shadow.camera.far = 5000;
    scene.add(spotLight)

    // 创建渲染器
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor(0x007777, 1); //设置背景颜色
    renderer.shadowMap.enabled = true; // 渲染阴影
    renderer.shadowMap.needsUpdate = true;
    document.getElementById("canvasThree").appendChild(renderer.domElement)
    
    let orbitControls = new OrbitControls(camera,renderer.domElement);
    orbitControls.autoRotate= true;
    orbitControls.enableDamping =true;

    let axesHelper = new THREE.AxesHelper(10000);
    scene.add(axesHelper);

    // const cameraHelper = new THREE.CameraHelper(spotLight.shadow.camera)
    // scene.add(cameraHelper)

    function animate() {
        requestAnimationFrame( animate );
        // sun.rotation.x += 0.01;
        renderer.render( scene, camera );
    };
    
    animate();
}

