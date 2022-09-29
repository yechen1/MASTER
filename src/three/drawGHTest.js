import { AxesHelper, BoxGeometry, Material, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import * as THREE from 'three';


export default function drawGHTest() {
    // 创建场景
    let scene =new Scene();

    // 照相机
    let camera = new PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10000 );
    camera.position.set(-800, 550,200); //设置相机位置
    camera.lookAt(800,-550,-200); //设置相机方向(指向的场景对象)

    //点光源
    let point = new THREE.PointLight(0xff0000);
    point.position.set(-200, 550, -800); //点光源位置
    scene.add(point); //点光源添加到场景中

    // 创建渲染器
    let renderer = new WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor(0x00ffff, 1); //设置背景颜色
    document.getElementById("canvasThree").appendChild(renderer.domElement)

    // 长方体
    // let geometry = new BoxGeometry( 100, 100, 1000 );
    // let material = new MeshBasicMaterial( { color: 0x00ff00 } );
    // let cube = new Mesh( geometry, material );
    // scene.add( cube );

    // 线条 三角形
    // let material = new THREE.LineBasicMaterial( { color: 0x000000 } );
    // console.log(material)
    // const points = [];
    // points.push( new THREE.Vector3( 0, 0, 0 ) );
    // points.push( new THREE.Vector3( 110, 400, 110 ) );
    // points.push( new THREE.Vector3( 500, 10, 0 ) );
    // points.push( new THREE.Vector3( 0, 0, 0  ) );

    // const geometry = new THREE.BufferGeometry().setFromPoints( points );
    // const line = new THREE.Line( geometry, material );
    // scene.add(line)

    // 圆柱体
    let geometry = new THREE.CylinderGeometry(250,250,400,128);
    let material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    let cylinder = new THREE.Mesh( geometry, material );

    scene.add(cylinder)

    // 盒子包裹
    const box = new THREE.BoxHelper( cylinder, 0x000000 );
    scene.add( box );

    

    // // 极坐标平面网格
    // const radius = 800;
    // const sectors = 360;
    // const rings = 30;
    // const divisions = 64;

    // const helper = new THREE.PolarGridHelper( radius, sectors, rings, divisions );
    // scene.add( helper );

   
    

    // // 平面网格
    // const size = 10000;
    // const divisions = 1000;

    // const gridHelper = new THREE.GridHelper( size, divisions );
    // scene.add( gridHelper );

    // // 辅助箭头
    // const dir = new THREE.Vector3( 100, 100, 0 );

    // //normalize the direction vector (convert to vector of length 1)
    // dir.normalize();

    // const origin = new THREE.Vector3( 0, 0, 0 );
    // const length = 700;
    // const hex = 0x000000;

    // const arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
    // scene.add( arrowHelper );

    // 坐标轴 红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴.
    let axesHelper = new THREE.AxesHelper(10000);
    scene.add(axesHelper);
    
    function animate() {
        requestAnimationFrame( animate );
        // updateMaterial(material);
        // cylinder.rotation.x += 0.01;
        // cylinder.rotation.y += 0.01;
        // console.log(renderer.info,"renderer info")
        renderer.render( scene, camera );
    };

    animate();
}

function updateMaterial(material) {
    if(!(material instanceof Material)){
        return;
    }
    material.needsUpdate = true
    // material.onBeforeRender=()=>{console.log("onBeforeRender")}
    material.color={
        b: Math.floor(Math.random()*255),
        g: Math.floor(Math.random()*255),
        r: Math.floor(Math.random()*255),
        isColor: true,
    }
}