
import * as THREE from 'three';
import { createOrthographicCamera, createPerspectiveCamera, PerspectiveCameraProps } from './init/cameraInit';
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TrackballControls  } from "three/examples/jsm/controls/TrackballControls";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";
import createGui from './dat.gui/guiTool';

let tree = require('./map.jpg');


export default function drawController(props: object){
    initScene();
}

function initScene(){
    // 创建场景
    
    let scene =new THREE.Scene();

    // 照相机
    let camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 10000 );
    camera.position.set(-800, 550,200); //设置相机位置
    camera.lookAt(800,-550,-200); //设置相机方向(指向的场景对象)


    // 纹理加载器
    const textLoader = new THREE.TextureLoader();
    const tree1 = textLoader.load(tree)

    // 圆
    let ball = new THREE.DodecahedronGeometry(10,10);
    let material =new THREE.MeshStandardMaterial({
        color: 0x0077ff,
        map: tree1,
    }); //材质对象Material

    let mesh1 = new THREE.Mesh(ball,material);
    mesh1.castShadow = true; 
    scene.add(mesh1);

    let geometry1 = new THREE.BoxGeometry(200, 200, 200); //创建一个立方体几何对象Geometry
    let material1 = new THREE.MeshStandardMaterial({
        color: 0x0077ff,
    }); //材质对象Material
    let mesh = new THREE.Mesh(geometry1, material1); //网格模型对象Mesh
    mesh1.translateX(-200).translateZ(-200).translateY(10);
    mesh.castShadow = true;
    scene.add(mesh); //网格模型添加到场景中


    // // 直接光源
    const spotLight = new THREE.SpotLight( 0xffffff,1);
    spotLight.position.set( -400, 250,100 );

    spotLight.castShadow = true;
    spotLight.shadow.camera.near = 10;
    spotLight.shadow.camera.far = 4000;
    

    scene.add( spotLight );


    // 平面网格
    // const size = 10000;
    // const divisions = 1000;

    // const gridHelper = new THREE.GridHelper( size, divisions );
    // scene.add( gridHelper );

    let planeBufferGeo = new THREE.PlaneGeometry(1000,1000)
    let mater = new THREE.MeshStandardMaterial({
        color: 0xffffff,
    }); //材质对象Material
    const meshplane = new THREE.Mesh(planeBufferGeo,mater);
    meshplane.rotation.x = -Math.PI / 2;
    meshplane.position.y = -0;
    meshplane.receiveShadow = true; 
    scene.add(meshplane)
    // 创建渲染器
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor(0x007777, 1); //设置背景颜色
    renderer.shadowMap.enabled = true; // 渲染阴影
    renderer.shadowMap.needsUpdate = true;
    document.getElementById("canvasThree").appendChild(renderer.domElement)
    
//    // 点击触发 材质变动
//    const raycaster = new THREE.Raycaster();
//    const pointer = new THREE.Vector3();
//    function onPointerMove(event) {
//     pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
// 	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
//     raycaster.setFromCamera( pointer, camera );

//     const intersects = raycaster.intersectObjects(scene.children);
//     for ( let i = 0; i < intersects.length; i ++ ) {
//         // 材质复原？
//         //@ts-ignore
// 		intersects[ i ].object.material.color.set( 0xff0000 );

// 	}
//    }
   
//    window.addEventListener( 'click', onPointerMove );


    // const dragControls = new DragControls([mesh,mesh1] , camera, renderer.domElement )
    //  // 鼠标略过事件
    //  dragControls.addEventListener('hoveron', function (event) {
    //     console.log("createDragControls hoveron");
    //     // 让变换控件对象和选中的对象绑定
    //     // 显示虚拟界面
        
    // });

    // // 开始拖拽
    // dragControls.addEventListener('dragstart', function (event) {
    //     console.log("createDragControls dragstart");
    // });

    // // 拖拽过程
    // dragControls.addEventListener('drag', function (event) {
    //     console.log("createDragControls drag",event);
    // });

    // // 拖拽结束
    // dragControls.addEventListener('dragend', function (event) {
    //     console.log("createDragControls dragend");
    // });

    // 飞行控制器
    // let flyControls = new FlyControls(camera, renderer.domElement); 
    // let clock = new THREE.Clock()
    // flyControls.autoForward = true;
    // flyControls.movementSpeed =1
    // flyControls.rollSpeed = 0.1
    
    // // 轨道控制器

    // let orbitControls = new OrbitControls(camera,renderer.domElement);
    // orbitControls.autoRotate= true;
    // orbitControls.enableDamping =true;

    //轨迹球控制器
    let trackballControls = new TrackballControls(camera,renderer.domElement);

    // // 变换控制器
    // let transformControls = new TransformControls(camera,renderer.domElement);
    // transformControls.attach(mesh)
    // scene.add(transformControls)
    // transformControls.setMode('scale')

    

    // gui
    const gui = createGui();
    gui.add(mesh.position,'x').min(0).max(200).step(0.01).name('移动x轴');
    


    let axesHelper = new THREE.AxesHelper(10000);
    scene.add(axesHelper);

    const cameraHelper = new THREE.CameraHelper(spotLight.shadow.camera)
    scene.add(cameraHelper)

    function animate() {
        requestAnimationFrame( animate );
        mesh1.rotation.x += 0.01;
        mesh1.rotation.y += 0.01;
        // const delta = clock.getDelta() //获取自上次调用的时间差
        // flyControls.update(delta) //更新飞行控件
        trackballControls.update()
        renderer.render( scene, camera );
    };
    
    animate();
}


window.addEventListener('dblclick',()=>{
    if(!document.fullscreenElement){
        document.getElementById('controls').requestFullscreen();
    } else {
        document.exitFullscreen();
    }

})