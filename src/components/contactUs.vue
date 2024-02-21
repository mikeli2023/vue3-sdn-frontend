<template>
  <section id="contact">
    <div class="contact_body flex-row">
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
            <p class="font-42 weight-6">We’d love to hear from you</p>
            <p class="font-18">A member from our team will be in touch.</p>
          </div>
          <div class="contact-area">
            <div class="left">
              <el-form ref="ruleContactRef" :model="ruleForm" :rules="rules" class="demo-ruleForm font-20" status-icon @submit.native.prevent>
                <el-form-item prop="name">
                  <label class="label" for="name">
                    <div class="flex-row">
                      <el-input v-model="ruleForm.name" placeholder="Name *" />
                    </div>
                  </label>
                </el-form-item>
                <el-form-item prop="email">
                  <label class="label" for="email">
                    <div class="flex-row">
                      <el-input v-model="ruleForm.email" placeholder="Email *" />
                    </div>
                  </label>
                </el-form-item>
                <el-form-item prop="phone">
                  <label class="label" for="phone">
                    <div class="flex-row">
                      <el-input v-model="ruleForm.phone" placeholder="Phone" />
                    </div>
                  </label>
                </el-form-item>
                <el-form-item prop="country">
                  <label class="label" for="country">
                    <div class="flex-row">
                      <el-input v-model="ruleForm.country" placeholder="Country, Company" />
                    </div>
                  </label>
                </el-form-item>
                <el-form-item prop="message">
                  <label class="label" for="message">
                    <div class="flex-row">
                      <el-input v-model="ruleForm.message" placeholder="Message" />
                    </div>
                  </label>
                </el-form-item>
              </el-form>
              <div class="flex-row center agreement-style font-20">
                <p>By clicking submit below, you consent to allow Nebula Block to store and process the personal information submitted above to provide you the content requested. Please review our
                  <a class="agree" href="/" target="_blank">privacy policy</a> for more information.</p>
                <el-checkbox v-model="ruleForm.agreement" label="agreement">I agree to receive other communications from Nebula Block.
                </el-checkbox>
              </div>
            </div>
          </div>
          <el-button size="large" :disabled="!ruleForm.agreement" @click="getContact('ruleContactRef')">{{$t('public.Contact-Us')}}</el-button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import loadingOver from "@/components/loading"
import { defineComponent, computed, onMounted, onActivated, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { Lock, Back, Close } from '@element-plus/icons-vue'
import { ElButton, ElRow, ElCol, ElInput, ElForm, ElFormItem, ElTabs, ElTabPane, ElCheckbox, ElCheckboxGroup } from 'element-plus'
export default defineComponent({
  name: "Contact Us",
  components: {
    loadingOver, Lock, Back, Close, ElButton, ElRow, ElCol, ElInput, ElForm, ElFormItem, ElTabs, ElTabPane, ElCheckbox, ElCheckboxGroup
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
      phone: '',
      country: '',
      message: '',
      agreement: false
    })
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
          message: 'Please enter a valid email address.',
          trigger: 'blur',
        },
        // { validator: validateEmail, trigger: "blur" }
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change'],
        }
      ],
      name: [
        { required: true, message: 'This field is required.', trigger: 'blur' },
      ]
    })
    const ruleContactRef = ref(null)
    const createLoad = ref(false)
    const sliderDisplay = ref(false)

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
    async function getContact (formEl, type) {
      if (!formEl) return
      await ruleContactRef.value.validate(async (valid, fields) => {
        if (valid) {
          createLoad.value = true
          const params = {
            "name": ruleForm.name,
            "email": ruleForm.email,
            "message": ruleForm.message
          }
          const contactRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}api/v1/users/contact-us/`, 'post', params)
          if (contactRes && contactRes.status === "success") {
            system.$commonFun.messageTip('success', contactRes.message)
            beforeClose()
          }
          createLoad.value = false
        }
      })
    }
    function resetFields () {
      ruleContactRef.value.resetFields()
    }
    function sliderMethod () {
      resetFields()
      sliderDisplay.value = true
    }
    function beforeClose () {
      store.dispatch('setContactUs', false)
      context.emit('handleLogin', false)
    }
    onMounted(async () => {
      resetFields()
    })
    return {
      router,
      ruleContactRef,
      ruleForm,
      rules,
      createLoad,
      system,
      sliderDisplay,
      beforeClose, getContact, sliderMethod
    }
  },
});
</script>

<style lang="less" scoped>
#contact {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  color: @black-color;
  text-align: center;
  z-index: 40000;
  :deep(.contact_body) {
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
        width: 90%;
        max-width: 500px;
        height: calc(100vh - 80px);
        padding: 40px;
        margin: auto;
        background-color: @white-color;
        overflow: hidden;
        z-index: 7;
        box-shadow: 0 3px 5px @black-color-opacity1;
        overflow-y: scroll;
        @media screen and (max-width: 1680px) {
          max-width: 450px;
        }
        @media screen and (max-width: 1200px) {
          max-width: 400px;
        }
        @media screen and (max-width: 992px) {
          max-width: 350px;
        }
        @media screen and (max-width: 540px) {
          max-width: 260px;
        }
        &.load {
          overflow: hidden;
        }
        .logo-style {
          position: relative;
          padding: 10px;
          background-color: @white-color;
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
          p {
            max-width: 380px;
            margin: 0 auto 20px;
            line-height: 1.25;
          }
        }
        .contact-area {
          // width: 900px;
          transform: translateX(0px);
          transition: all 0.2s;
          overflow: hidden;
          &.slider {
            animation: mit-translate 0.2s linear 1 forwards;
            .right {
              height: auto;
            }
            //   .left {
            //     height: 100px;
            //   }
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
          .demo-ruleForm {
            margin: 0 auto;
            padding: 0;
            .el-form-item {
              width: 100%;
              margin: 24px 0;
              font-size: inherit;
              --font-size: inherit;
              &.is-error {
                .el-form-item__content {
                  .el-input {
                    .el-input__wrapper {
                      box-shadow: none;
                      border-color: #f56c6c;
                    }
                  }
                }
              }
              .el-form-item__content {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                justify-content: flex-start;
                font-size: inherit;
                text-align: left;
                .label {
                  width: 100%;
                  text-align: left;
                  color: #606060;
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
                    position: relative;
                    height: 40px;
                    padding: 0;
                    font-size: inherit;
                    line-height: 40px;
                    box-shadow: none !important;
                    border-bottom: 2px solid @black-color-opacity1;
                    border-radius: 0;
                    .el-input__inner {
                      height: auto;
                      padding: 0;
                      @media screen and (min-width: 1800px) {
                        font-size: 16px;
                      }
                      @media screen and (max-width: 768px) {
                        font-size: 14px;
                      }
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
            margin: 40px 0;
            background-color: @white-color;
            text-align: left;
            line-height: 1.4;
            a {
              color: @theme-color;
            }
            .el-checkbox {
              margin: 32px 0 0;
            }
          }
          .el-checkbox {
            align-items: flex-start;
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
