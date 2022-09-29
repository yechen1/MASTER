import { Menu } from "antd";


function RouteMenu(props) {
    console.log(props,"RouteMenu")
    const getMenu = (item) => {
        let result = [];
        item.map(item=>{
            if(item.children){
                result.push({label:item.name, key:item.path, children: getMenu(item.children)});
            } else {
                result.push({
                    label:item.name, key:item.path
                })
            }
        })
        return result;
    }
    return(
        <Menu
            {...props}
            style={{ height: 256 }}
            items={getMenu(props.menuData)}
        >
        </Menu>
    );
}

export default RouteMenu;