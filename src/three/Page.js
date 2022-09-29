import { useEffect, useRef } from "react";
import drawModel from "./drawModel";
import drawRain from "./drawRain";
import drawTest from "./drawTest";
import drawGHTest from "./drawGHTest";
import drawLightTest from "./drawLightTest";
import drawLoader from "./drawLoader";
import drawCamera from "./drawCamera";
import drawController from "./drawController";
import drawPlant from "./drawPlant";

const Page = (props) => {
    const canvasRef = useRef();
    useEffect(()=>{
        drawPlant();
    },[]);

    return(
        <div
            id='canvasThree'
            ref={canvasRef}
        >
            {/* <div id='controls' style={{position: 'absolute',backgroundColor:'gray',width:'30vh',height:'30vh',right:'0'}}></div> */}
        </div>
    );
}


export default Page;