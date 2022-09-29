
import * as THREE from "three"

export default function drawTest() {
    

    // 场景
    let scene = new THREE.Scene();
    //创建一个缓冲类型的几何体对象
    var geo = new THREE.BufferGeometry();
    //类型数组创建顶点数据  数组中包含6个顶点的xyz坐标数据
    var verArr = new Float32Array([
    1, 2, 3,
    49, 2, 4,
    -1, 99, -1,
    1, 1, 9,
    6, 5, 108,
    48, 1, 3,
    ]);
    //三个为一组，表示一个顶点坐标
    var BufferAttribute = new THREE.BufferAttribute(verArr, 3);
    // 设置几何体的顶点位置数据
    geo.attributes.position = BufferAttribute;
    var material = new THREE.MeshPhongMaterial({
        color: 0x0000ff, //三角面颜色
        side: THREE.DoubleSide //两面可见
      });
      var mesh = new THREE.Mesh(geo, material);
    scene.add(mesh)


    /**
     * 光源设置
     */
    //点光源
    let point = new THREE.PointLight(0xffffff);
    point.position.set(200, 200, 400); //点光源位置
    scene.add(point); //点光源添加到场景中
    //环境光
    let ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient);
    /**
     * 相机设置
     */
    let width = window.innerWidth; //窗口宽度
    let height = window.innerHeight; //窗口高度
    let k = width / height; //窗口宽高比
    let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    // let camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    var camera = new THREE.PerspectiveCamera( 20, width / height, 1, 1000 );
    camera.position.set(500, 500, 500); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    let axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);
    
    // 渲染器
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render( scene, camera );
    renderer.setClearColor(0x00ffff, 1); //设置背景颜色
    document.getElementById('canvasThree').appendChild( renderer.domElement );
    
    
    const animate = function animateFunc() {
        // mesh.rotation.x += 0.01; mesh.rotation.y += 0.01;
        renderer.render(scene,camera)
        requestAnimationFrame(animateFunc);
    }
    animate();
}