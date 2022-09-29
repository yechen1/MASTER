
import * as THREE from 'three';
import { createOrthographicCamera, createPerspectiveCamera, PerspectiveCameraProps } from './init/cameraInit';
import { DragControls } from "three/examples/jsm/controls/DragControls";

export default function drawLoader(props: object){
    initScene();
}

function initScene(){
    // 创建场景
    
    let scene =new THREE.Scene();
    // let fog = new THREE.FogExp2('0x000000');
    // scene.fog = fog;

    // 照相机
    let camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10000 );
    camera.position.set(-800, 550,200); //设置相机位置
    camera.lookAt(800,-550,-200); //设置相机方向(指向的场景对象)

    // let params: PerspectiveCameraProps ={
    //     w: window.innerWidth,
    //     h: window.innerHeight,
    //     point: { x: -800, y: 550, z: 200 },
    //     near: 0.1,
    //     far: 10000,
    // }
    // let camera = createPerspectiveCamera(params)
    //let camera = createOrthographicCamera(0,110,10)  // 正交相机

    // // 初始化一个监听
    // const audioListener = new THREE.AudioListener();

    // // 把监听添加到camera
    // camera.add( audioListener );

    // // 初始化音频对象
    // const oceanAmbientSound = new THREE.Audio( audioListener );

    // // 添加一个音频对象到场景中
    // scene.add( oceanAmbientSound );
    // // 初始化一个加载器
    // const loader = new THREE.AudioLoader();
    // loader.load(
    //     'y1066.mp3',
    //     (audioBuffer )=>{
    //         // 给一个加载器对象设置音频对象的缓存
    //         oceanAmbientSound.setBuffer( audioBuffer );

    //         // 播放音频
    //         oceanAmbientSound.play();
    //     },
    //     function(xhr) {
    //         console.log( xhr.loaded,xhr.total, (xhr.loaded / xhr.total * 100) + '% loaded' );
    //     },
    //     function(err) {
    //         console.log( 'An error happened' );
    //     },
    // )

    // 初始化一个加载器
    // const loader = new THREE.FileLoader();
    // THREE.Cache.enabled = true;
    // // 加载资源
    // loader.load(
    //     // 资源URL
    //     'file/demo.txt',

    //     // onLoad回调
    //     function ( data ) {
    //         console.log(data)
    //     },

    //     // onProgress回调
    //     function ( xhr ) {
    //         console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    //     },

    //     // onError回调
    //     function ( err ) {
    //         console.log( 'An error happened',err );
    //     }
    // );



   

    // 圆
    let ball = new THREE.DodecahedronGeometry(100,100);
    let material =new THREE.MeshLambertMaterial({
        color: 0x0077ff
    }); //材质对象Material
    // const texture = new THREE.TextureLoader().load( 'rain.png' );
    // material = new THREE.MeshBasicMaterial( { color: 0x0077ff, map: texture } );
    // 初始化一个加载器
    // const loader = new THREE.TextureLoader();

    // // 加载一个资源
    // loader.load(
    //     // 资源URL
    //     '../logo.svg',

    //     // onLoad回调
    //     function ( texture ) {
    //         // in this example we create the material when the texture is loaded
    //         material = new THREE.MeshLambertMaterial( {
    //             map: texture
    //         } );
    //     },

    //     // 目前暂不支持onProgress的回调
    //     undefined,

    //     // onError回调
    //     function ( err ) {
    //         console.error( 'An error happened.',err );
    //     }
    // );


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
    scene.add(mesh); //网格模型添加到场景中


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
    
    const dragControls = new DragControls([mesh,mesh1] , camera, renderer.domElement )
     // 鼠标略过事件
     dragControls.addEventListener('hoveron', function (event) {
        console.log("createDragControls hoveron");
        // 让变换控件对象和选中的对象绑定
    });

    // 开始拖拽
    dragControls.addEventListener('dragstart', function (event) {
        console.log("createDragControls dragstart");
    });

    // 拖拽过程
    dragControls.addEventListener('drag', function (event) {
        console.log("createDragControls drag");
    });

    // 拖拽结束
    dragControls.addEventListener('dragend', function (event) {
        console.log("createDragControls dragend");
    });

    
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