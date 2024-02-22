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
const sdn = () =>
    import ("@/views/product/sdn");
const sdnForm = () =>
    import ("@/components/sdnForm");
const vpn = () =>
    import ("@/views/product/vpn");
const myProfile = () =>
    import ("@/views/profile/index");
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
            path: '/sdn',
            name: 'SDN',
            component: sdn,
            meta: {
                keepAlive: true,
                title: 'Nebulablock SDN'
            }
        }, {
            path: '/sdn-form',
            name: 'SDNForm',
            component: sdnForm,
            meta: {
                keepAlive: true,
                title: 'SDN Form'
            }
        }, {
            path: '/vpn',
            name: 'VPN',
            component: vpn,
            meta: {
                keepAlive: true,
                title: 'Nebulablock VPN'
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