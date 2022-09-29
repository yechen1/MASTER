import * as THREE from 'three';

export default function drawModel() {
    let scene = new THREE.Scene();

    let geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    let material = new THREE.MeshLambertMaterial({
        color: 0x007700
    }); //材质对象Material
    let mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    scene.add(mesh); //网格模型添加到场景中

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
    let camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(500, 500, 500); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    let axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);

    /**
     * 创建渲染器对象
     */
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);//设置渲染区域尺寸
    renderer.setClearColor(0x000000, 1); //设置背景颜色
    document.getElementById('canvasThree').appendChild(renderer.domElement); //body元素中插入canvas对象
    //执行渲染操作   指定场景、相机作为参数
    const animate = function animate() {
        mesh.rotation.x += 0.01; //mesh.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(animate)
    }
    animate();
}