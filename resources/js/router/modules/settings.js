/* Layouts */
const Layout = () => import("@/layout/index.vue");
/* Layouts */

/* Authenticated Component */
const Settings = () => import("@/views/settings/index.vue");
/* Authenticated Component */

export default [
    {
        path: "/",
        component: Layout,
        children: [
            {
                name: "settings",
                path: "settings",
                component: Settings,
                meta: { title: "Settings", elSvgIcon: "Fold", affix: true },
            },
        ],
    },
];
