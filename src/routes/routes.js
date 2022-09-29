

// 路由

const safe = {
    path: "safe",
    IsComponent: true,
    name: "设置模块",
    functionCode: "SYS_MODULE",
    children: [
        {
            path: "/systemsetting",
            component: null,
            name: "系统设置1",
            functionCode: "SYSTEM_SETTING",
            children: [
                {
                    path: "/dictsetting",
                    component: null,
                    name: "字典设置",
                    functionCode: "DICT_SETTING"
                }
            ]
        },
        {
            path: "/usersafe",
            component: <div>321</div>,
            name: "用户权限",
            functionCode: "USER_PERMISSION",
            children: [
                {
                    path: "/user",
                    component: null,
                    name: "用户",
                    functionCode: "USER"
                },
                {
                    path: "/role",
                    component: null,
                    name: "角色",
                    functionCode: "ROLE"

                },
                {
                    path: "/fun",
                    component: null,
                    name: "功能",
                    functionCode: "FUNCTION"
                },
                {
                    path: "/org",
                    component: null,
                    name: "组织机构",
                    functionCode: "ORG"
                }
            ]
        },
    ]
};

const main = {
    path: "main",
    IsComponent: true,
    name: "首页",
    functionCode: "SYS_MODULE",
    children: [
        {
            path: "map",
            component: null,
            name: "地图",
            functionCode: "Map",
            children: [
                {
                    path: "site",
                    component: null,
                    name: "站点",
                    functionCode: "Site"
                }
            ]
        },
    ]
};

const about = {
    path: "about",
    component: <div>关于</div>,
    name: "关于",
    functionCode: "SYS_MODULE",
}

export default [about, main,  safe];