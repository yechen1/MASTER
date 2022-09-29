import { Layout } from "antd";
import RouteContent from "./RouteContent";
import RouteMenu from "./RouteMenu";

const {Content, Sider} = Layout;

const CommonLayout = (props) => {
    return(
        <Layout className="fill-parent">
            <Sider style={{width: 20, background: "white", overflow: "auto"}}>
                <RouteMenu menuData={props.childrenRouteData || []}></RouteMenu>
            </Sider>
            <Content className="fill-space-h">
                {
                    <RouteContent
                    childRouteData={props.childrenRouteData}
                    defaultRouteIndex={0}
                />
                }
            </Content>
        </Layout>
    );
}

export default CommonLayout;