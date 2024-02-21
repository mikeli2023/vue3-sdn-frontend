import {
    createRouter,
    createWebHistory,
    createWebHashHistory
} from 'vue-router'
import writer from '@/utils/router'
const home = () =>
    import ("@/components/Home");
const dashboard = () =>
    import ("@/views/index");
const main = () =>
    import ("@/views/main/index");
const colocation = () =>
    import ("@/views/product/colocation");
const bareMetal = () =>
    import ("@/views/product/bareMetal");
const blockchainHosting = () =>
    import ("@/views/product/blockchainHosting");
const gpuClusters = () =>
    import ("@/views/product/gpuClusters");
const myProfile = () =>
    import ("@/views/profile/index");
const cloud = () =>
    import ("@/views/product/cloud");
const creatVM = () =>
    import ("@/components/CreateVM");
const aboutUs = () =>
    import ("@/views/about/index");
const welcome = () =>
    import ("@/views/welcome/index");

const routes = [{
        path: '/',
        component: home,
        children: [{
            path: '/',
            name: 'dashboard',
            component: main,
            meta: {
                keepAlive: true,
                title: 'Nebula Block'
            }
        }, {
            path: '/colocation',
            name: 'colocation',
            component: colocation,
            meta: {
                keepAlive: true,
                title: 'Colocation'
            }
        }, {
            path: '/bare-metal',
            name: 'bareMetal',
            component: bareMetal,
            meta: {
                keepAlive: true,
                title: 'BARE METAL'
            }
        }, {
            path: '/blockchain-hosting',
            name: 'blockchainHosting',
            component: blockchainHosting,
            meta: {
                keepAlive: true,
                title: 'Blockchain Hosting'
            }
        }, {
            path: '/GPU-Clusters',
            name: 'gpuClusters',
            component: gpuClusters,
            meta: {
                keepAlive: true,
                title: 'GPU Clusters'
            }
        }, {
            path: '/public-cloud',
            name: 'cloud',
            component: cloud,
            meta: {
                keepAlive: true,
                title: 'Public Cloud'
            }
        }, {
            path: '/create-vm',
            name: 'creatVM',
            component: creatVM,
            meta: {
                keepAlive: true,
                title: 'Create VM'
            },
            beforeEnter: (to, from, next) => {
                if (!sessionStorage.getItem('email_address_nebulaBlock')) {
                    next({
                        name: 'dashboard'
                    })
                } else {
                    next()
                }
            }
        }, {
            path: '/my-dashboard/:tab',
            name: 'myProfile',
            component: myProfile,
            meta: {
                keepAlive: true,
                title: 'My Profile'
            },
            beforeEnter: (to, from, next) => {
                if (!sessionStorage.getItem('email_address_nebulaBlock')) {
                    next({
                        name: 'dashboard'
                    })
                } else {
                    next()
                }
            }
        }, {
            path: '/about-us',
            name: 'aboutUs',
            component: aboutUs,
            meta: {
                keepAlive: true,
                title: 'About Us'
            }
        }, {
            path: '/welcome',
            name: 'welcome',
            component: welcome,
            meta: {
                keepAlive: true,
                title: 'Welcome'
            },
            beforeEnter: (to, from, next) => {
                if (!sessionStorage.getItem('email_address_nebulaBlock')) {
                    next({
                        name: 'dashboard'
                    })
                } else {
                    next()
                }
            }
        }]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: process.env.NODE_ENV === 'testnet' ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
    // history: createWebHistory(process.env.BASE_URL),
    // history: createWebHashHistory(process.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     writer(to);
//     next();
// })

export default router