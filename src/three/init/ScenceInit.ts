import * as THREE from "three";
import { Scene } from "three";


interface ScenceProps {
    background: THREE.Texture | THREE.Color | null,
    environment: THREE.Texture | null,
    fog: THREE.Fog | null,
    isScene: Boolean,
    overrideMaterial: THREE.Material | null,

}


export default function ScenceInit(props: ScenceProps) {
    // 场景初始化
    let scene = new THREE.Scene();
    if(props) {
        scene.background = props.background || null;
        scene.environment = props.environment || null;
        scene.fog = props.fog || null;
        scene.overrideMaterial =  props.overrideMaterial || null;
    }
    return scene;
}