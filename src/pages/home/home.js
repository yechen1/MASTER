import { Button } from "antd";
import { useEffect } from "react";
import { senAction } from "../../action";
import store from "../../store";


export const Home = (props) => {
    console.log(props)
    const handleClick = () => {
        console.log("handleClick")
        const action = senAction();
        // 发送一个action 利用store
        store.dispatch(action);
    }
    useEffect(()=>{
        store.subscribe(()=>{
            console.log(store.getState(),"getState");
        })
    },[]);
    return (
        <div>
            <Button type="primary" onClick={handleClick}>Button</Button>
        </div>
    );
}