import {useLocation} from "react-router-dom";
import React from "react";

// export default class RouteContent extends React.Component {
    

//     _routePaths = [];

//     constructor(props) {
//         super(props);
//         const {childRouteData = [], match: {path = ""}} = props;
//         this._routePaths = this.getRoutePaths(childRouteData, path);
//         this.state = {
//             routeNode: this.getRoutes(childRouteData, path)
//         };
//     }

//     componentWillReceiveProps(nextProps, nextContext) {
//         let {childRouteData = [], match: {path = ""}} = this.props;
//         let {childRouteData: nextChildRouteData, match: {path: nextPath = ""}} = nextProps;
//         if (childRouteData.length !== nextChildRouteData.length && path !== nextPath) {
//             this._routePaths = this.getRoutePaths(childRouteData, path);
//             this.setState({
//                 routeNode: this.getRoutes(childRouteData, path)
//             });
//         }
//     }

//     // 获取所有的路由
//     getRoutes(routeData = [], parentPath = "") {
//         if (parentPath === "/") {
//             parentPath = "";
//         }
//         let routes = [];
//         routeData.forEach((item) => {
//             let path = parentPath + item.path;
//             if (item.children && item.children.length > 0) {
//                 routes.push(
//                     <Route
//                         key={path}
//                         path={path}
//                         element={props =>
//                             <RouteContent
//                                 {...props}
//                                 defaultRouteIndex={0}
//                                 childRouteData={item.children}
//                             />
//                         }
//                     />
//                 );
//                 // routes.push(...this.getRoutes(item.children, path));
//             } else {
//                 routes.push(
//                     <Route
//                         key={path}
//                         path={path}
//                         element={item.component}
//                     />
//                 );
//             }
//         });
//         return routes;
//     }

//     // 获取所有的路由地址
//     getRoutePaths(routeData = [], parentPath = "") {
//         if (parentPath === "/") {
//             parentPath = "";
//         }
//         let routePaths = [];
//         if (routeData && routeData.length > 0) {
//             routeData.forEach((item) => {
//                 let path = parentPath + item.path;
//                 if (item.children && item.children.length > 0) {
//                     routePaths.push(...this.getRoutePaths(item.children, path));
//                 } else {
//                     routePaths.push(path);
//                 }
//             });
//         }
//         return routePaths;
//     }

//     render() {
//         let {defaultRouteIndex = 0} = this.props;
//         let defaultRoutePath = this._routePaths[defaultRouteIndex];
//         return (
//             <Routes>
//                 {
//                     this.state.routeNode
//                 }
//                 {defaultRoutePath && <Navigate to={defaultRoutePath}/>}
//             </Routes>
//         );
//     }


// }


const RouteContent = (props) => {
    const useHref = useLocation();
    console.log(useHref,"useHref")
    return(
        <div>11</div>
    );
}

export default RouteContent;