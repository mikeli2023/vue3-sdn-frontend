<template>
    <section id="login">
        <div class="login_body flex-row">
            <div class="bg-close" @click="beforeClose"></div>
            <div class="module-cont font-18">
                <loading-over v-if="createLoad" :listLoad="createLoad"></loading-over>
                <div class="module font-22">
                    <div class="logo-style">
                        <div class="button" @click="sliderDisplay=false" v-if="sliderDisplay">
                            <span class="width-icon minimum-small">
                                <Back />
                            </span>
                        </div>
                        <img :src="logoImg" class="img" @click="router.push({name: 'dashboard'})" />
                        <p class="font-22">NEBULA BLOCK</p>
                    </div>
                    <div class="login-area">
                        <div class="left" v-show="!sliderDisplay">
                            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                                <el-tab-pane name="LogIn">
                                    <template #label>
                                        <span class="font-20">Log In</span>
                                    </template>
                                </el-tab-pane>
                                <el-tab-pane name="SignUp">
                                    <template #label>
                                        <span class="font-20">Sign Up</span>
                                    </template>
                                </el-tab-pane>
                            </el-tabs>
                            <div class="tabs-cont">
                                <el-alert type="success" center v-show="activation" :closable="false">
                                    <template #title>
                                        <div class="font-18">activation successfully</div>
                                    </template>
                                </el-alert>
                                <!-- <div class="google flex-row font-20" @click="googleMethod">
                                    <div class="width-icon small">
                                        <svg t="1700727870857" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3359" width="64" height="64">
                                            <path d="M214.101333 512c0-32.512 5.546667-63.701333 15.36-92.928L57.173333 290.218667A491.861333 491.861333 0 0 0 4.693333 512c0 79.701333 18.858667 154.88 52.394667 221.610667l172.202667-129.066667A290.56 290.56 0 0 1 214.101333 512" fill="#FBBC05"
                                                p-id="3360"></path>
                                            <path d="M516.693333 216.192c72.106667 0 137.258667 25.002667 188.458667 65.962667L854.101333 136.533333C763.349333 59.178667 646.997333 11.392 516.693333 11.392c-202.325333 0-376.234667 113.28-459.52 278.826667l172.373334 128.853333c39.68-118.016 152.832-202.88 287.146666-202.88"
                                                fill="#EA4335" p-id="3361"></path>
                                            <path d="M516.693333 807.808c-134.357333 0-247.509333-84.864-287.232-202.88l-172.288 128.853333c83.242667 165.546667 257.152 278.826667 459.52 278.826667 124.842667 0 244.053333-43.392 333.568-124.757333l-163.584-123.818667c-46.122667 28.458667-104.234667 43.776-170.026666 43.776"
                                                fill="#34A853" p-id="3362"></path>
                                            <path d="M1005.397333 512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696 65.962667-51.072 116.650667-104.533333 149.632l163.541333 123.818667c93.994667-85.418667 155.136-212.650667 155.136-375.850667" fill="#4285F4"
                                                p-id="3363"></path>
                                        </svg>
                                    </div>
                                    <span>Sign in with Google</span>
                                </div> -->
                                <GoogleLogin :callback="callback" />
                                <GoogleSignInButton @success="handleLoginSuccess" @error="handleLoginError"></GoogleSignInButton>
                                <p>or</p>
                                <div v-show="activeName === 'LogIn'">
                                    <el-form ref="ruleLogInRef" :model="ruleForm" :rules="rules" class="demo-ruleForm font-20" status-icon @submit.native.prevent>
                                        <el-form-item prop="email">
                                            <label class="label" for="email">
                                                <div class="flex-row">
                                                    <el-input v-model="ruleForm.email" placeholder="yours@example.com">
                                                        <template #prepend>
                                                            <span class="width-icon minimum-small flex-row">
                                                                <svg aria-hidden="true" focusable="false" width="14px" height="13px" viewBox="0 0 32 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                        <g id="32px" transform="translate(-2155.000000, -2317.000000)" fill="#373A39">
                                                                            <g id="Group-856" transform="translate(1.000000, 1.000000)">
                                                                                <path id="Fill-419" d="M2184,2339 C2184,2339.55 2183.55,2340 2183,2340 L2157,2340 C2156.45,2340 2156,2339.55 2156,2339 L2156,2319 C2156,2318.45 2156.45,2318 2157,2318 L2183,2318 C2183.55,2318 2184,2318.45 2184,2319 L2184,2339 L2184,2339 Z M2184,2316 L2156,2316 C2154.89,2316 2154,2316.89 2154,2318 L2154,2340 C2154,2341.1 2154.89,2342 2156,2342 L2184,2342 C2185.1,2342 2186,2341.1 2186,2340 L2186,2318 C2186,2316.89 2185.1,2316 2184,2316 L2184,2316 Z M2176,2322 L2180,2322 L2180,2326 L2176,2326 L2176,2322 Z M2174,2328 L2182,2328 L2182,2320 L2174,2320 L2174,2328 Z M2158,2332 L2172,2332 L2172,2330 L2158,2330 L2158,2332 Z M2158,2336 L2172,2336 L2172,2334 L2158,2334 L2158,2336 Z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </template>
                                                    </el-input>
                                                </div>
                                            </label>
                                        </el-form-item>
                                        <el-form-item prop="password">
                                            <label class="label" for="password">
                                                <div class="flex-row">
                                                    <el-input v-model="ruleForm.password" placeholder="your password" type="password" show-password>
                                                        <template #prepend>
                                                            <span class="width-icon minimum-small flex-row">
                                                                <Lock />
                                                            </span>
                                                        </template>
                                                    </el-input>
                                                </div>
                                            </label>
                                        </el-form-item>
                                        <el-form-item prop="">
                                            <div class="forget font-18" @click="sliderMethod">Don't remember your password?</div>
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div v-show="activeName === 'SignUp'">
                                    <el-form ref="ruleRegisterRef" :model="ruleForm" :rules="rulesRegister" class="demo-ruleForm font-20" status-icon @submit.native.prevent>
                                        <!-- <el-form-item prop="name">
                                            <label class="label" for="name">
                                                <div class="flex-row">
                                                    <el-input v-model="ruleForm.name" placeholder="your name">
                                                        <template #prepend>
                                                            <span class="width-icon minimum-small flex-row">
                                                                <svg t="1700728518203" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4555" width="200" height="200">
                                                                    <path d="M511.88622222 598.016c-76.8 0-148.93511111-29.92355555-203.20711111-84.19555555-54.272-54.272-84.19555555-126.40711111-84.19555556-203.20711112s29.92355555-148.93511111 84.19555556-203.20711111 126.40711111-84.19555555 203.20711111-84.19555555 148.93511111 29.92355555 203.20711111 84.19555555c54.272 54.272 84.19555555 126.40711111 84.19555556 203.20711111s-29.92355555 148.93511111-84.19555556 203.20711112c-54.272 54.272-126.52088889 84.19555555-203.20711111 84.19555555z m0-501.87377778c-118.32888889 0-214.47111111 96.256-214.47111111 214.47111111 0 118.32888889 96.256 214.47111111 214.47111111 214.47111112 118.32888889 0 214.47111111-96.256 214.47111111-214.47111112s-96.256-214.47111111-214.47111111-214.47111111z"
                                                                        p-id="4556"></path>
                                                                    <path d="M909.76711111 997.376H114.00533333c-9.67111111 0-18.88711111-3.86844445-25.71377778-10.69511111s-10.69511111-16.04266667-10.6951111-25.71377778c0-58.59555555 11.49155555-115.48444445 34.2471111-168.96 21.84533333-51.65511111 53.248-98.07644445 93.07022223-138.01244444 39.82222222-39.82222222 86.35733333-71.11111111 138.01244444-93.07022222 53.58933333-22.64177778 110.36444445-34.13333333 169.07377778-34.13333334s115.48444445 11.49155555 169.07377778 34.13333334c51.65511111 21.84533333 98.19022222 53.13422222 138.01244444 93.07022222 39.82222222 39.82222222 71.22488889 86.24355555 93.07022223 138.01244444 22.64177778 53.58933333 34.13333333 110.36444445 34.2471111 168.96 0 9.67111111-3.86844445 18.88711111-10.6951111 25.71377778-7.05422222 6.82666667-16.27022222 10.69511111-25.94133334 10.69511111z m-757.53244444-72.81777778H871.53777778c-8.30577778-82.71644445-44.48711111-159.51644445-104.10666667-219.02222222-68.26666667-68.26666667-159.06133333-105.81333333-255.54488889-105.81333333-96.48355555 0-187.27822222 37.54666667-255.54488889 105.81333333-59.61955555 59.50577778-95.91466667 136.192-104.10666666 219.02222222z"
                                                                        p-id="4557"></path>
                                                                </svg>
                                                            </span>
                                                        </template>
                                                    </el-input>
                                                </div>
                                            </label>
                                        </el-form-item> -->
                                        <el-form-item prop="email">
                                            <label class="label" for="email">
                                                <div class="flex-row">
                                                    <el-input v-model="ruleForm.email" placeholder="yours@example.com">
                                                        <template #prepend>
                                                            <span class="width-icon minimum-small flex-row">
                                                                <svg aria-hidden="true" focusable="false" width="14px" height="13px" viewBox="0 0 32 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                        <g id="32px" transform="translate(-2155.000000, -2317.000000)" fill="#373A39">
                                                                            <g id="Group-856" transform="translate(1.000000, 1.000000)">
                                                                                <path id="Fill-419" d="M2184,2339 C2184,2339.55 2183.55,2340 2183,2340 L2157,2340 C2156.45,2340 2156,2339.55 2156,2339 L2156,2319 C2156,2318.45 2156.45,2318 2157,2318 L2183,2318 C2183.55,2318 2184,2318.45 2184,2319 L2184,2339 L2184,2339 Z M2184,2316 L2156,2316 C2154.89,2316 2154,2316.89 2154,2318 L2154,2340 C2154,2341.1 2154.89,2342 2156,2342 L2184,2342 C2185.1,2342 2186,2341.1 2186,2340 L2186,2318 C2186,2316.89 2185.1,2316 2184,2316 L2184,2316 Z M2176,2322 L2180,2322 L2180,2326 L2176,2326 L2176,2322 Z M2174,2328 L2182,2328 L2182,2320 L2174,2320 L2174,2328 Z M2158,2332 L2172,2332 L2172,2330 L2158,2330 L2158,2332 Z M2158,2336 L2172,2336 L2172,2334 L2158,2334 L2158,2336 Z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </template>
                                                    </el-input>
                                                </div>
                                            </label>
                                        </el-form-item>
                                        <el-form-item prop="password">
                                            <label class="label" for="password">
                                                <div class="flex-row">
                                                    <el-input v-model="ruleForm.password" placeholder="your password" type="password" show-password>
                                                        <template #prepend>
                                                            <span class="width-icon minimum-small flex-row">
                                                                <Lock />
                                                            </span>
                                                        </template>
                                                    </el-input>
                                                </div>
                                            </label>
                                        </el-form-item>
                                        <el-form-item prop="confirm_password">
                                            <label class="label" for="confirm_password">
                                                <div class="flex-row">
                                                    <el-input v-model="ruleForm.confirm_password" placeholder="confirm password" type="password" show-password>
                                                        <template #prepend>
                                                            <span class="width-icon minimum-small flex-row">
                                                                <Lock />
                                                            </span>
                                                        </template>
                                                    </el-input>
                                                </div>
                                            </label>
                                            <small class="error" v-show="ruleForm.email_err">Password inconsistency</small>
                                        </el-form-item>
                                    </el-form>
                                    <div class="flex-row center agreement-style font-18">
                                        <p>By clicking submit below, you consent to allow Nebula Block to store and process the personal information submitted above to provide you the content requested. Please review our
                                            <a class="agree" href="/" target="_blank">privacy policy</a> for more information.</p>
                                        <el-checkbox v-model="ruleForm.agreement" label="agreement">I agree to receive other communications from Nebula Block.
                                        </el-checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right" v-show="sliderDisplay">
                            <el-form v-if="resetPass" ref="ruleResetRef" :model="ruleForm" :rules="rulesReset" class="demo-ruleForm font-20" status-icon @submit.native.prevent>
                                <el-form-item prop="new_password">
                                    <label class="label" for="new_password">
                                        <div class="flex-row">
                                            <el-input v-model="ruleForm.new_password" placeholder="new password" type="password" show-password>
                                                <template #prepend>
                                                    <span class="width-icon minimum-small flex-row">
                                                        <Lock />
                                                    </span>
                                                </template>
                                            </el-input>
                                        </div>
                                    </label>
                                </el-form-item>
                                <el-form-item prop="confirm_password">
                                    <label class="label" for="confirm_password">
                                        <div class="flex-row">
                                            <el-input v-model="ruleForm.confirm_password" placeholder="confirm password" type="password" show-password>
                                                <template #prepend>
                                                    <span class="width-icon minimum-small flex-row">
                                                        <Lock />
                                                    </span>
                                                </template>
                                            </el-input>
                                        </div>
                                    </label>
                                    <small class="error" v-show="ruleForm.email_err">Password inconsistency</small>
                                </el-form-item>
                            </el-form>
                            <el-form v-else ref="ruleResetRef" :model="ruleForm" :rules="rulesResetEmail" class="demo-ruleForm font-20" status-icon @submit.native.prevent>
                                <el-form-item prop="email">
                                    <label class="label" for="email">
                                        <div class="flex flex-row">
                                            <el-input v-model="ruleForm.email" placeholder="yours@example.com">
                                                <template #prepend>
                                                    <span class="width-icon minimum-small flex-row">
                                                        <svg aria-hidden="true" focusable="false" width="14px" height="13px" viewBox="0 0 32 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <g id="32px" transform="translate(-2155.000000, -2317.000000)" fill="#373A39">
                                                                    <g id="Group-856" transform="translate(1.000000, 1.000000)">
                                                                        <path id="Fill-419" d="M2184,2339 C2184,2339.55 2183.55,2340 2183,2340 L2157,2340 C2156.45,2340 2156,2339.55 2156,2339 L2156,2319 C2156,2318.45 2156.45,2318 2157,2318 L2183,2318 C2183.55,2318 2184,2318.45 2184,2319 L2184,2339 L2184,2339 Z M2184,2316 L2156,2316 C2154.89,2316 2154,2316.89 2154,2318 L2154,2340 C2154,2341.1 2154.89,2342 2156,2342 L2184,2342 C2185.1,2342 2186,2341.1 2186,2340 L2186,2318 C2186,2316.89 2185.1,2316 2184,2316 L2184,2316 Z M2176,2322 L2180,2322 L2180,2326 L2176,2326 L2176,2322 Z M2174,2328 L2182,2328 L2182,2320 L2174,2320 L2174,2328 Z M2158,2332 L2172,2332 L2172,2330 L2158,2330 L2158,2332 Z M2158,2336 L2172,2336 L2172,2334 L2158,2334 L2158,2336 Z"></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </template>
                                            </el-input>
                                        </div>
                                    </label>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <el-button v-if="activeName === 'LogIn' && !sliderDisplay" size="large" @click="getLogIn('ruleLogInRef')">Log in &gt;</el-button>
                    <el-button v-else-if="activeName === 'SignUp' && !sliderDisplay" size="large" :disabled="!ruleForm.agreement" @click="getRegister('ruleRegisterRef')">Sign Up &gt;</el-button>
                    <el-button v-else-if="resetPass" @click="ResetPassword('ruleResetRef')">Reset password &gt;</el-button>
                    <el-button v-else @click="getReset('ruleResetRef')">Reset &gt;</el-button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { googleAuthCodeLogin } from "vue3-google-login"
import loadingOver from "@/components/loading"
import { defineComponent, computed, onMounted, onActivated, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { Lock, Back, Close } from '@element-plus/icons-vue'
import { ElButton, ElRow, ElCol, ElInput, ElForm, ElFormItem, ElTabs, ElTabPane, ElCheckbox, ElCheckboxGroup, ElAlert } from 'element-plus'
export default defineComponent({
    name: "Login",
    components: {
        loadingOver, Lock, Back, Close, ElButton, ElRow, ElCol, ElInput, ElForm, ElFormItem, ElTabs, ElTabPane, ElCheckbox, ElCheckboxGroup, ElAlert
    },
    setup (props, context) {
        const store = useStore()
        const system = getCurrentInstance().appContext.config.globalProperties
        const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
        const route = useRoute()
        const router = useRouter()
        const ruleForm = reactive({
            name: '',
            email: '',
            password: '',
            new_password: '',
            confirm_password: '',
            agreement: false,
            email_err: false
        })
        const validatePass = (rule, value, callback) => {
            if (!checkSpecialKey(value)) {
                callback(new Error("Only regular alphanumeric characters, '-', '.' and '_' supported"));
            } else {
                callback();
            }
        }
        const validateEmail = (rule, value, callback) => {
            if (!regEmail.test(value)) {
                callback(new Error("Please input correct email address"));
            } else {
                callback();
            }
        }
        const rules = reactive({
            email: [
                {
                    required: true,
                    message: 'Please input email address',
                    trigger: 'blur',
                },
                // { validator: validateEmail, trigger: "blur" }
                {
                    type: 'email',
                    message: 'Please input correct email address',
                    trigger: ['blur', 'change'],
                },
            ],
            password: [
                { required: true, message: 'This field is required.', trigger: 'blur' },
                // { validator: validatePass, trigger: "blur" }
            ]
        })
        const rulesRegister = reactive({
            email: [
                {
                    required: true,
                    message: 'Please input email address',
                    trigger: 'blur',
                },
                // { validator: validateEmail, trigger: "blur" }
                {
                    type: 'email',
                    message: 'Please input correct email address',
                    trigger: ['blur', 'change'],
                },
            ],
            password: [
                { required: true, message: 'This field is required.', trigger: 'blur' },
                // { validator: validatePass, trigger: "blur" }
            ],
            name: [
                { required: true, message: 'This field is required.', trigger: 'blur' },
                // { validator: validatePass, trigger: "blur" }
            ]
        })
        const rulesReset = reactive({
            new_password: [
                { required: true, message: 'This field is required.', trigger: 'blur' },
                // { validator: validatePass, trigger: "blur" }
            ],
            confirm_password: [
                { required: true, message: 'This field is required.', trigger: 'blur' },
                // { validator: validatePass, trigger: "blur" }
            ]
        })
        const rulesResetEmail = reactive({
            email: [
                {
                    required: true,
                    message: 'Please input email address',
                    trigger: 'blur',
                },
                // { validator: validateEmail, trigger: "blur" }
                {
                    type: 'email',
                    message: 'Please input correct email address',
                    trigger: ['blur', 'change'],
                },
            ]
        })
        const ruleLogInRef = ref(null)
        const ruleRegisterRef = ref(null)
        const ruleResetRef = ref(null)
        const createLoad = ref(false)
        const activeName = ref('LogIn')
        const sliderDisplay = ref(false)
        const resetPass = ref(false)
        const activation = ref(false)
        const logoImg = require("@/assets/images/logo-small.png")

        const handleClick = (tab, event) => {
            // console.log(tab.props.name)
            activeName.value = tab.props.name
            resetFields()
        }
        function checkSpecialKey (str) {
            let specialKey =
                "[~!#$^&*()=|{}':;'\\[\\],<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
            for (let i = 0; i < str.length; i++) {
                if (specialKey.indexOf(str.substr(i, 1)) != -1) {
                    return false;
                }
            }
            return true;
        }
        async function getRegister (formEl) {
            if (!formEl) return
            await ruleRegisterRef.value.validate(async (valid, fields) => {
                if (valid) {
                    if (ruleForm.password !== ruleForm.confirm_password) {
                        ruleForm.email_err = true
                        return
                    } else ruleForm.email_err = false

                    createLoad.value = true
                    const emailParams = {
                        // "name": ruleForm.name,
                        "email": ruleForm.email,
                        "password": ruleForm.password,
                        "confirm_password": ruleForm.confirm_password
                    }
                    const registerRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}api/v1/users/`, 'post', emailParams)
                    if (registerRes && registerRes.status === "success") await getSendMail(ruleForm.email, 'register')
                    else createLoad.value = false
                }
            })
        }
        async function getSendMail (email, type) {
            createLoad.value = true
            const emailParams = {
                "email": email
            }
            const urlLink = type === 'reset' ? 'api/v1/users/send-reset-password-link' : 'api/v1/send-activation-link'
            const sendRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}${urlLink}`, 'post', emailParams)
            if (sendRes && sendRes.status === "success") {
                system.$commonFun.messageTip('success', sendRes.message)
                activeName.value = 'LogIn'
                resetFields()
            }
            createLoad.value = false
        }
        async function getLogIn (formEl) {
            if (!formEl) return
            await ruleLogInRef.value.validate(async (valid, fields) => {
                if (valid) {
                    createLoad.value = true
                    const params = new URLSearchParams()
                    params.append('username', ruleForm.email)
                    params.append('password', ruleForm.password)
                    const userRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}api/v1/login`, 'post', params)
                    if (userRes && userRes.status === "success") {
                        store.dispatch('setAccessToken', userRes.data.jwtToken || '')
                        store.dispatch('setAccessID', userRes.data.id || -1)
                        store.dispatch('setAccessName', userRes.data.name || '')
                        store.dispatch('setEmailAddress', ruleForm.email)
                        beforeClose(1)
                    }
                    createLoad.value = false
                }
            })
        }
        async function getReset (formEl) {
            if (!formEl) return
            await ruleResetRef.value.validate(async (valid, fields) => {
                if (valid) {
                    createLoad.value = true
                    getSendMail(ruleForm.email, 'reset')
                }
            })
        }
        async function ResetPassword (formEl) {
            if (!formEl) return
            await ruleResetRef.value.validate(async (valid, fields) => {
                if (valid) {
                    if (ruleForm.new_password !== ruleForm.confirm_password) {
                        ruleForm.email_err = true
                        return
                    } else ruleForm.email_err = false

                    createLoad.value = true
                    const emailParams = {
                        "new_password": ruleForm.new_password,
                        "confirm_password": ruleForm.confirm_password
                    }
                    const resetRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}api/v1/users/reset-password-page?email=${decodeURIComponent(route.query.email)}&token=${decodeURIComponent(route.query.token)}`, 'post', emailParams)
                    if (resetRes && resetRes.status === "success") {
                        system.$commonFun.messageTip('success', resetRes.message)
                        activeName.value = 'LogIn'
                        sliderDisplay.value = false
                    } else if (resetRes.message) system.$commonFun.messageTip('error', resetRes.message)
                    createLoad.value = false
                }
            })
        }
        async function googleMethod () {
            googleAuthCodeLogin().then((response) => {
                console.log("Handle the response", response)
            })
        }
        async function googleResult (token) {
            createLoad.value = true
            const resultRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}api/v1/auth/${token}`, 'get')
            // const resultRes = { "data": { "id": 44, "name": "yiming", "email": "yiming.dev@gmail.com", "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ5aW1pbmcuZGV2QGdtYWlsLmNvbSIsInJvbGVzIjpbIkdVRVNUIl0sImV4cCI6MTcwMTIyODYxMSwic2NvcGVzIjpbIkdVRVNUIl19.QsqO9pmvvTj4Fgu_BNV0HaZL0BzipnEJF5WK5pMtsso" }, "message": "Login successful", "status": "success" }
            if (resultRes && resultRes.status === "success") {
                store.dispatch('setAccessToken', resultRes.data.jwtToken || '')
                store.dispatch('setEmailAddress', resultRes.data.email)
                beforeClose()
            } else if (resultRes.message) system.$commonFun.messageTip('error', resultRes.message)
            createLoad.value = false
        }
        function resetFields () {
            ruleLogInRef.value.resetFields()
            ruleRegisterRef.value.resetFields()
            ruleResetRef.value.resetFields()
            ruleForm.email_err = false
        }
        function sliderMethod () {
            resetFields()
            sliderDisplay.value = true
        }
        async function beforeClose (type) {
            const name = await route.name
            context.emit('handleLogin', false)
            router.push({ name: type ? '':name })
        }

        function onSignInSuccess (googleUser) {
            // Handle successful sign-in
            console.log('Signed in as: ' + googleUser.getBasicProfile().getName());
        }
        function onSignInFailure (error) {
            // Handle sign-in failure
            console.error('Sign-in failed:', error);
        }
        const callback = (response) => {
            console.log("Handle the response", response)
            const { credential } = response
            if (credential) googleResult(credential)
        }
        const handleLoginSuccess = (response) => {
            const { credential } = response;
            console.log("Access Token", credential);
        }
        const handleLoginError = () => {
            console.error("Login failed");
        };
        onMounted(async () => {
            resetFields()
            activeName.value = route.query.state === 'SignUp' ? 'SignUp' : 'LogIn'
            sliderDisplay.value = route.query.state === 'Reset' ? true : false
            resetPass.value = (route.query.email && route.query.email !== undefined) && (route.query.token && route.query.token !== undefined) ? true : false
            if (route.query.email && route.query.email !== undefined) {
                activation.value = true
                ruleForm.email = decodeURIComponent(route.query.email)
                await system.$commonFun.timeout(3000)
                activation.value = false
            }
        })
        return {
            route,
            router,
            logoImg,
            ruleLogInRef,
            ruleRegisterRef,
            ruleResetRef,
            ruleForm,
            rules,
            rulesRegister,
            rulesReset,
            rulesResetEmail,
            createLoad,
            system,
            activeName,
            sliderDisplay, resetPass, activation,
            beforeClose, getRegister, getLogIn, getReset, ResetPassword, handleClick, sliderMethod,
            googleMethod, onSignInSuccess, onSignInFailure, callback, handleLoginSuccess, handleLoginError
        }
    },
});
</script>

<style lang="less" scoped>
#login {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  color: @black-color;
  font-size: 18px;
  text-align: center;
  z-index: 40000;
  :deep(.login_body) {
    width: 100%;
    min-height: 100vh;
    margin: auto;
    .bg-close {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 5;
      background-color: @black-color-opacity1;
    }
    .module-cont {
      position: relative;
      margin: auto;
      .module {
        position: relative;
        width: 450px;
        margin: auto;
        background-color: @white-color;
        border-radius: 6px;
        z-index: 7;
        box-shadow: 0 3px 5px @black-color-opacity1;
        @media screen and (max-height: 660px) {
          max-height: 100vh;
          overflow-y: scroll;
        }
        @media screen and (max-width: 540px) {
          width: 300px;
        }
        &.load {
          overflow: hidden;
        }
        .logo-style {
          position: relative;
          padding: 20px 10px 10px;
          // background: url(../assets/images/background-image04.png) center repeat;
          // background-size: cover;
          text-align: center;
          .img {
            max-width: 60px;
            margin: 0 auto 10px;
          }
          .button {
            position: absolute;
            left: 10px;
            top: 10px;
            padding: 5px;
            background-color: @white-color;
            box-shadow: @black-color-opacity1 0px 1px 3px 0px;
            z-index: 9;
          }
        }
        .login-area {
          // width: 900px;
          transform: translateX(0px);
          transition: all 0.2s;
          overflow: hidden;
          @media screen and (max-width: 540px) {
            width: 600px;
          }
          &.slider {
            animation: mit-translate 0.2s linear 1 forwards;
            .right {
              height: auto;
            }
            //   .left {
            //     height: 100px;
            //   }
          }
          .left,
          .right {
            float: left;
            width: 450px;
            transition: all 0.2s;
            @media screen and (max-width: 540px) {
              width: 300px;
            }
          }
          .right {
            //   height: 100px;
            padding: 0 0 40px;
            transition: all 0.2s;
          }

          @-webkit-keyframes mit-translate {
            0% {
              transform: translateX(0px);
            }
            100% {
              transform: translateX(-450px);
            }
          }

          @keyframes mit-translate {
            0% {
              transform: translateX(0px);
            }
            100% {
              transform: translateX(-450px);
            }
          }

          @media screen and (max-width: 540px) {
            @-webkit-keyframes mit-translate {
              0% {
                transform: translateX(0px);
              }
              100% {
                transform: translateX(-300px);
              }
            }
            @keyframes mit-translate {
              0% {
                transform: translateX(0px);
              }
              100% {
                transform: translateX(-300px);
              }
            }
          }
          .demo-tabs {
            .el-tabs__header {
              margin: 0;
              .el-tabs__nav {
                width: 100%;
                .el-tabs__item {
                  width: 50%;
                  height: 50px;
                  padding: 0;
                  margin: 0;
                  color: @black-color-opacity1;
                  &.is-active {
                    color: @theme-color;
                  }
                }
              }
            }
            .el-tabs__content {
              display: none;
            }
          }
          .tabs-cont {
            position: relative;
            padding: 15px 0 0;
            .el-alert {
              width: calc(100% - 100px);
              padding: 12px 0;
              margin: 0 50px;
              text-transform: capitalize;
              line-height: 1;
              .el-icon {
                font-size: 16px;
              }
            }
          }
          .g-btn-wrapper {
            margin: 20px auto 20px;
          }
          .google {
            margin: 20px 50px 20px;
            border: 1px solid #dcdfe6;
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: #eee;
            }
            .width-icon {
              padding: 10px 12px;
            }
            span {
              padding: 0 10px;
            }
          }
          .demo-ruleForm {
            margin: 0 auto;
            padding: 6px 50px 0;
            .el-form-item {
              width: 100%;
              margin: 14px 0 0;
              font-size: inherit;
              --font-size: inherit;
              .el-form-item__content {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                justify-content: flex-start;
                font-size: inherit;
                text-align: left;
                .error {
                  color: red;
                }
                .label {
                  width: 100%;
                  text-align: left;
                  color: #606060;
                  font-size: inherit;
                  .flex-row {
                    flex-wrap: nowrap;
                    .el-select {
                      width: 100%;
                    }
                    .self-end {
                      width: 30px;
                      text-align: center;
                    }
                  }
                }
                .el-button {
                  width: 100%;
                  height: auto;
                  padding: 0.12rem 0 0.1rem;
                  background-color: @theme-color;
                  font-family: inherit;
                  cursor: pointer;
                  font-size: inherit;
                  border: 0;
                  border-radius: 4px;
                  line-height: 1;
                  span {
                    cursor: inherit;
                  }
                  &.el-code {
                    // width: 200px;
                    width: 70%;
                    height: 40px;
                    padding: 0 0.15rem;
                    margin-left: 0.1rem;
                  }
                  &.is-disabled {
                    background-color: @black-color-opacity1;
                    cursor: no-drop;
                  }
                }
                .el-radio-group {
                  width: 100%;
                  margin: 0.2rem 0 0;
                  border-top: 1px solid #eee;
                  border-bottom: 1px solid #eee;
                  .el-radio {
                    width: 100%;
                    height: auto;
                    margin: 0.2rem 0;
                    .el-radio__label {
                      h5,
                      p {
                        text-align: left;
                        font-size: 18px;
                        color: #333;
                        line-height: 1.5;
                        word-break: break-word;
                        white-space: normal;
                        @media screen and (max-width: 1600px) {
                          font-size: 17px;
                        }
                        @media screen and (max-width: 1440px) {
                          font-size: 16px;
                        }
                        @media screen and (max-width: 1024px) {
                          font-size: 14px;
                        }
                      }
                      p {
                        font-size: 15px;
                        font-weight: 100;
                        color: #7e7e7e;
                        line-height: 1.3;
                        @media screen and (max-width: 1600px) {
                          font-size: 14px;
                        }
                        @media screen and (max-width: 1440px) {
                          font-size: 13px;
                        }
                        @media screen and (max-width: 1024px) {
                          font-size: 12px;
                        }
                      }
                    }
                  }
                }
                .el-input {
                  font-size: inherit;
                  .el-input__suffix {
                    .el-input__suffix-inner {
                      margin-right: 5px;
                    }
                    .el-icon {
                      color: #828282;
                    }
                  }
                  .el-input__wrapper {
                    height: 40px;
                    padding: 0 14px;
                    font-size: inherit;
                    line-height: 40px;
                    .el-input__inner {
                      height: auto;
                      padding: 0;
                      font-size: inherit;
                    }
                  }
                  .el-input-group__append,
                  .el-input-group__prepend {
                    padding: 0 14px;
                    background-color: @white-color;
                    .flex-row {
                      display: flex;
                    }
                  }
                }
                .el-form-item__error {
                  display: none;
                }
                .forget {
                  width: 100%;
                  margin: 0 auto 20px;
                  text-align: center;
                  color: @black-color;
                  cursor: pointer;
                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
              .el-form-item__label {
                display: none;
              }
              &.flex_form {
                width: 50%;
                padding-bottom: 0;
                border-bottom: 0;
                .el-select {
                  width: calc(100% - 30px);
                }
              }
              &.is-error {
                .el-form-item__content {
                  .el-input {
                    .el-input__inner {
                      border-color: #239cfc;
                    }
                  }
                }
              }
            }
          }
          .agreement-style {
            margin: 32px 50px 0;
            background-color: @white-color;
            text-align: left;
            line-height: 1.2;
            a {
              color: @theme-color;
            }
            .el-checkbox {
              margin: 12px auto;
            }
          }
          .el-checkbox {
            align-items: flex-start;
            justify-content: center;
            height: auto;
            width: 100%;
            margin: 5px auto 20px;
            font-size: inherit;
            .el-checkbox__label {
              font-size: inherit;
              font-weight: normal;
              color: @black-color;
              white-space: initial;
              line-height: 1.1;
              text-align: left;
              a {
                color: @black-color;
              }
            }
          }
        }
        .el-button {
          width: 100%;
          height: 65px;
          padding: 0;
          background-color: @theme-color;
          border: 0;
          font-family: inherit;
          cursor: pointer;
          font-size: inherit;
          font-weight: normal;
          border-radius: 0;
          line-height: 1;
          color: @white-color;
          text-transform: uppercase;
          transition: all 0.2s;
          span {
            cursor: inherit;
            letter-spacing: 1px;
          }
          &.is-disabled {
            background-color: @black-color-opacity1;
            color: @white-color;
            cursor: no-drop;
          }
          &:hover {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.license_style {
  .el-select-dropdown__item {
    height: auto;
    padding: 8px 3%;
    line-height: 1;
    p {
      margin: 0 0 5px;
      font-size: 14px;
      color: #000;
      line-height: 1.2;
    }
    small {
      font-size: 13px;
      color: #979797;
      line-height: 1.2;
    }
  }
}
</style>
