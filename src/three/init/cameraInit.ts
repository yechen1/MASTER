import * as THREE from "three";

// 正交相机
const ORTHOGRAPHIC_CAMERA_LEFT = window.innerWidth / -2
const ORTHOGRAPHIC_CAMERA_RIGHT = window.innerWidth / 2
const ORTHOGRAPHIC_CAMERA_TOP = window.innerHeight / 2
const ORTHOGRAPHIC_CAMERA_BOTTOM = window.innerHeight / -2
const ORTHOGRAPHIC_CAMERA_NEAR = 0 //近剪裁面
const ORTHOGRAPHIC_CAMERA_FAR = 11300  //远剪裁面

// 透视相机
const PERSPECTIVE_CAMERA_FOV = 45
const PERSPECTIVE_CAMERA_NEAR = 50
const PERSPECTIVE_CAMERA_FAR = 20000




export default function cameraInit() {

}

// 创建正交相机
export function createOrthographicCamera(x:number,y:number,z:number){
    const camera = new THREE.OrthographicCamera(
        ORTHOGRAPHIC_CAMERA_LEFT, 
        ORTHOGRAPHIC_CAMERA_RIGHT, 
        ORTHOGRAPHIC_CAMERA_TOP, 
        ORTHOGRAPHIC_CAMERA_BOTTOM, 
        ORTHOGRAPHIC_CAMERA_NEAR, 
        ORTHOGRAPHIC_CAMERA_FAR
    )
    camera.position.set(x, y, z)
    camera.lookAt(-x,-y,-z)
    return camera
}

interface point {
    x: number,
    y: number,
    z: number,
}

export interface PerspectiveCameraProps {
    w: number,
    h: number,
    point: point,
    near: number | null,
    far: number | null,
}

// 创建透视相机
export function createPerspectiveCamera (props: PerspectiveCameraProps) {
    const camera = new THREE.PerspectiveCamera(
        PERSPECTIVE_CAMERA_FOV,
        props.w / props.h,
        props.near || PERSPECTIVE_CAMERA_NEAR,
        props.far || PERSPECTIVE_CAMERA_FAR
    )
    camera.position.set(props.point.x,props.point.y,props.point.z);
    camera.lookAt(-props.point.x,-props.point.y,-props.point.z);
    return camera
  }
 