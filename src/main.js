import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/theme-chalk/index.css'
import en from 'element-plus/es/locale/lang/en'
import commonFun from '@/utils/common'
import 'amfe-flexible'
import vue3GoogleLogin from 'vue3-google-login'
// import GoogleSignInPlugin from "vue3-google-signin"

var routed = '';
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }

    //回到顶部
    if (to.path != routed) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0
    }
    routed = to.path
    next()
})

const app = createApp(App)
app.config.globalProperties.$commonFun = commonFun
app
    // .use(ElementPlus, {
    //         locale: en,
    //     })
    .use(vue3GoogleLogin, {
        clientId: process.env.VUE_APP_GOOGLE_CLIENTID
    })
    // .use(GoogleSignInPlugin, {
    //     clientId: '308153043074-gci30ndabv5pfkt6tlr6ter7ueqjmda1.apps.googleusercontent.com',
    // })
    .use(i18n)
    .use(store)
    .use(router)
app.mount('#app')