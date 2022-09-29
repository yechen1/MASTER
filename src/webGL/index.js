import { useEffect, useRef } from "react";
import drawdemo1 from "./drawTool/drawdemo1";



const Main = () => {
    let canvasRef = useRef(null);

    useEffect(()=>{
        drawdemo1(canvasRef.current)
    },[])


    return (
        <div style={{width:'100%',height:'100%',backgroundColor:'gray'}}>
            <canvas 
                style={{width:'100%',height:'100%'}} 
                ref={canvasRef} 
            />
        </div>
    );
}

export default Main;