
import * as THREE from 'three';

export default function drawLightTest(props: object){
    initScene();
}

function initScene(){
    // 创建场景
    let scene =new THREE.Scene();
    // 照相机
    let camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10000 );
    camera.position.set(-800, 550,200); //设置相机位置
    camera.lookAt(800,-550,-200); //设置相机方向(指向的场景对象)


    // 圆
    let ball = new THREE.DodecahedronGeometry(100,100);
    let material =new THREE.MeshLambertMaterial({
        color: 0x0077ff
    }); //材质对象Material
    let mesh1 = new THREE.Mesh(ball,material);
    mesh1.castShadow = true; //default is false
    mesh1.receiveShadow = false; //default
    scene.add(mesh1);

    let geometry1 = new THREE.BoxGeometry(200, 200, 200); //创建一个立方体几何对象Geometry
    let material1 = new THREE.MeshLambertMaterial({
        color: 0x0077ff
    }); //材质对象Material
    let mesh = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
    mesh.translateY(200).translateX(200).translateY(200).rotateZ(0.2).rotateY(-0.1);
    mesh.receiveShadow = true;
    scene.add(mesh); //网格模型添加到场景中



    // 环境光
    // const light = new THREE.AmbientLight( 0xffffff,0.4 ); // 强烈 white light
    // scene.add( light );

    // 环境光探针
    // const light = new THREE.AmbientLightProbe( 0xffffff,1 ); 
    // scene.add( light );
    
    // // 半球光  {天上光，地上光，强度} !!!!有阴影
    // const light = new THREE.HemisphereLight( 0xffffff, 0x000000, 1 );
    // scene.add( light );

    // // 聚光灯
    const spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 0, 740,110 );

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 0.5;
    spotLight.shadow.camera.far = 500;
    spotLight.shadow.focus = 1;   

    scene.add( spotLight );
    //Create a helper for the shadow camera (optional) 
    const helper = new THREE.CameraHelper( spotLight.shadow.camera );
    scene.add( helper );

    // 平面网格
    const size = 10000;
    const divisions = 1000;

    const gridHelper = new THREE.GridHelper( size, divisions );
    scene.add( gridHelper );

    // 创建渲染器
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor(0x007777, 1); //设置背景颜色
    renderer.shadowMap.enabled = true; // 渲染阴影
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    document.getElementById("canvasThree").appendChild(renderer.domElement)
    let axesHelper = new THREE.AxesHelper(10000);
    scene.add(axesHelper);
    function animate() {
        requestAnimationFrame( animate );
        // cylinder.rotation.x += 0.01;
        // cylinder.rotation.y += 0.01;
        renderer.render( scene, camera );
    };
    
    animate();
}