/* Layouts */
const Layout = () => import("@/layout/index.vue");
/* Layouts */

/* Authenticated Component */
const Billings = () => import("@/views/billings/index.vue");
/* Authenticated Component */

export default [
    {
        path: "/",
        component: Layout,
        children: [
            {
                name: "billings",
                path: "billings",
                component: Billings,
                meta: { title: "Billings", elSvgIcon: "Fold", affix: true },
            },
        ],
    },
];
