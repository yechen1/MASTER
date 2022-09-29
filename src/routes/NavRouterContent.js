import { useCallback, useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import CommonLayout from "./CommonLayout";


function DefaultContent() {
    return <div> 未配置 </div>;
}
// 一级导航栏
function NavRouterContent(props) {
    const navigate = new useNavigate();
    // 获取所有的路由
    const getRoutes = (routeData = [], parentPath = "") => {
        if ("/" === parentPath) {
            parentPath = "";
        }
         
        let routes = [];
        routeData.forEach((item) => {
            let path = parentPath + item.path;
            if (item.IsComponent) {
                routes.push(
                    <Route
                        key={path}
                        path={path}
                        element={<CommonLayout {...props} childrenRouteData={item.children} />}
                    />
                );
            } else {
                routes.push(
                    <Route
                        key={path}
                        path={path}
                        element={item.component ? item.component : DefaultContent()}
                    />
                );
            }
        });
        return routes;
    }
    // 获取所有的路由地址
    const getRoutePaths = (routeData = [], parentPath = "") => {
        let routePaths = [];
        if (routeData && routeData.length > 0) {
            routeData.forEach((item) => {
                let path = parentPath + item.path;
                routePaths.push(path);
            });
        }
        return routePaths;
    }
    let defaultRoutePath = getRoutePaths(props.routeData,'')[props.defaultRouteIndex || 0];
    
    // 默认跳转
    useEffect(()=>{
        navigate(defaultRoutePath);
    }, [])
    
    return(
        <Routes>
            {/*整颗路由树*/}
            {getRoutes(props.routeData, "")}
        </Routes>
    );
}

export default NavRouterContent;