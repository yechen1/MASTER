import * as THREE from 'three';

export default function drawRain(){
    let scene = new THREE.Scene();

    let textureTree = new THREE.TextureLoader().load("./rain.png");
    // 批量创建表示雨滴的精灵模型
    for (let i = 0; i < 400; i++) {
      var spriteMaterial = new THREE.SpriteMaterial({
        map:textureTree,//设置精灵纹理贴图
      });
      // 创建精灵模型对象
      var sprite = new THREE.Sprite(spriteMaterial);
      scene.add(sprite);
      // 控制精灵大小,
      sprite.scale.set(8, 10, 1); //// 只需要设置x、y两个分量就可以
      var k1 = Math.random() - 0.5;
      var k2 = Math.random() - 0.5;
      var k3 = Math.random() - 0.5;
      // 设置精灵模型位置，在整个空间上上随机分布
      sprite.position.set(200 * k1, 200*k3, 200 * k2)
    }

    let geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    let material = new THREE.MeshLambertMaterial({
        color: 0x0077ff
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
    let ambient = new THREE.AmbientLight(0x444444);
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
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    document.getElementById('canvasThree').appendChild(renderer.domElement); //body元素中插入canvas对象
    //执行渲染操作   指定场景、相机作为参数
    const animate = function animate() {
        mesh.rotation.x += 0.01; //mesh.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(animate)
    }
    animate();
}
