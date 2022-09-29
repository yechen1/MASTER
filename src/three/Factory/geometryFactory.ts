import * as THREE from 'three';

function productGeometry(props: any) {
    // 圆
    let ball = new THREE.DodecahedronGeometry(100,100);
    return ball; 
}
export default productGeometry;