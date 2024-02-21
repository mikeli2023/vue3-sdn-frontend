<template>
  <section id="container-profile">
    <loading-over v-if="logLoad" :listLoad="logLoad"></loading-over>
    <div class="banner">
      <div class="content lang-max flex-row"></div>
    </div>

    <el-tabs v-model="tabsValue" @tab-click="handleClick" tab-position="left" class="demo-tabs lang-max flex-row nowrap">
      <el-tab-pane name="profile">
        <template #label>
          <span class="font-23">Profile</span>
        </template>
        <div class="demo-ruleForm profile font-18">
          <loading-over v-if="creatLoad" :listLoad="creatLoad"></loading-over>
          <p class="name font-18">{{accessName || emailAddress || '-'}}</p>
          <div class="tip custom-block flex-row font-20">
            <p class="weight-7">Welcome to the everywhere cloud. </p>
            <router-link :to="{name: 'welcome'}">Continue setting up your account.</router-link>
          </div>
          <div class="form">
            <div class="tit-form font-27 font-gilroy-bold">update name</div>
            <el-form ref="ruleResetRef" :model="ruleForm" :rules="rulesReset" class="font-20" status-icon @submit.native.prevent>
              <el-form-item prop="new_name">
                <label class="label" for="new_name">
                  <div class="flex-row">
                    <el-input v-model="ruleForm.new_name" placeholder="New Name" />
                  </div>
                </label>
              </el-form-item>
            </el-form>
            <el-button class="learn-more font-gilroy-bold" @click="getReset('ruleResetRef')">Update Profile</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane name="mySDN">
        <template #label>
          <span class="font-23">My SDN</span>
        </template>
        <div class="profile">
          <div class="flex-row flex-end font-18 padding-16 font-gilroy-bold">
            <router-link :to="{ name: 'SDN' }" class="learn-more">Nebulablock SDN</router-link>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane name="logout">
        <template #label>
          <span class="font-23">Logout</span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
import loadingOver from "@/components/loading"
import { defineComponent, computed, onMounted, onActivated, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import {
  Bottom
} from '@element-plus/icons-vue'
import { ElForm, ElFormItem, ElInput, ElInputNumber, ElButton, ElSelect, ElOption, ElTable, ElTableColumn, ElTabs, ElTabPane, ElPopconfirm } from 'element-plus'
export default defineComponent({
  components: {
    Bottom, loadingOver, modifyVm,
    ElForm, ElFormItem, ElInput, ElInputNumber, ElButton, ElSelect, ElOption, ElTable, ElTableColumn, ElTabs, ElTabPane, ElPopconfirm
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const language = computed(() => (store.state.languageNB))
    const emailAddress = computed(() => (store.state.emailAddress))
    const accessID = computed(() => (store.state.accessID))
    const accessName = computed(() => (store.state.accessName))
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const creatLoad = ref(false)
    const logLoad = ref(false)
    const vmData = ref([])
    const tabsValue = ref('profile')
    const modifyShow = ref(false)
    const vmCont = reactive({})
    const ruleResetRef = ref(null)
    const ruleForm = reactive({
      new_name: '',
      email_err: false
    })
    const rulesReset = reactive({
      new_name: [
        { required: true, message: 'This field is required.', trigger: 'blur' },
        // { validator: validatePass, trigger: "blur" }
      ]
    })

    async function getReset (formEl) {
      if (!formEl) return
      await ruleResetRef.value.validate(async (valid, fields) => {
        if (valid) {
          if (ruleForm.password !== ruleForm.confirm_password) {
            ruleForm.email_err = true
            return
          } else ruleForm.email_err = false

          creatLoad.value = true
          const emailParams = {
            // "user_id": accessID.value,
            "new_name": ruleForm.new_name
          }
          const resetRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}api/v1/users/user-update-name`, 'post', emailParams)
          if (resetRes && resetRes.status === "success" && resetRes.message) {
            store.dispatch('setAccessName', ruleForm.new_name || accessName.value || '')
            system.$commonFun.messageTip('success', resetRes.message)
            // await system.$commonFun.signOut()
            // await system.$commonFun.timeout(500)
            // router.push({ name: 'dashboard', query: { state: 'LogIn' } })
          }
          creatLoad.value = false
        }
      })
    }

    const handleClick = (tab, event) => {
      if (tab.props.name !== 'logout') return
      logLoad.value = true
      system.$commonFun.signOut()
    }
    onMounted(() => { })
    onActivated(() => {
      tabsValue.value = route.params.tabs || 'profile'
      listMethod()
    })
    watch(emailAddress, () => {
      if (!emailAddress.value) router.push({ name: 'dashboard' })
    })
    return {
      system,
      accessName,
      emailAddress,
      bodyWidth,
      creatLoad,
      logLoad,
      tabsValue,
      modifyShow,
      ruleForm,
      rulesReset,
      ruleResetRef,handleModify, getReset, handleClick
    }
  }
})
</script>

<style lang="less" scoped>
#container-profile {
  position: relative;
  min-height: 500px;
  background-image: url(../../assets/images/background-image03.png);
  background-position: 0 75%;
  background-repeat: no-repeat;
  background-size: 5%;
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1.15;
  color: @theme-color;
  .title {
    display: inline-block;
    padding: 20px 50px;
    margin: 0 auto 60px;
    background-color: @theme-color;
    color: @white-color;
    border-radius: 100px;
    @media screen and (max-width: 768px) {
      padding: 30px 75px;
    }
    @media screen and (max-width: 600px) {
      padding: 40px 100px;
    }
    .icon {
      width: 90px;
      margin: 0 20px 0 0;
    }
  }
  .learn-more {
    display: inline-block;
    padding: 26px 60px;
    margin: 0;
    background-color: @theme-color;
    border: 1px solid @theme-color;
    border-radius: 12px;
    cursor: pointer;
    color: @white-color;
    line-height: 1;
    transition: all 0.2s;
    @media screen and (max-width: 768px) {
      border-radius: 24px;
    }
    @media screen and (max-width: 600px) {
      padding: 52px 120px;
      border-radius: 36px;
    }
    &:hover {
      background-color: transparent;
      color: @theme-color;
    }
  }
  .banner {
    position: relative;
    padding: 145px 0 0;
    background: url(../../assets/images/background-image05.png);
    background-position: 50% 0%;
    background-size: 10%;
    background-repeat: no-repeat, no-repeat;
    @media screen and (min-width: 2160px) {
      padding: 140px 0 0;
    }
    @media screen and (max-width: 1440px) {
      padding: 185px 0 0;
    }
    @media screen and (max-width: 768px) {
      padding: 290px 0 0;
    }
    .content {
      .text {
        max-width: 560px;
        padding: 60px 0 220px;
        margin: 0;
        color: @black-color;
        line-height: 1.13;
        @media screen and (max-width: 1260px) {
          max-width: 880px;
        }
        @media screen and (max-width: 600px) {
          max-width: none;
        }
        h1 {
          color: @theme-color;
        }
        p {
          margin: 45px 0 70px;
          line-height: 1.6;
          @media screen and (max-width: 600px) {
            margin: 90px 0 140px;
          }
        }
      }
    }
  }
  :deep(.demo-tabs) {
    align-items: stretch;
    @media screen and (max-width: 992px) {
      flex-wrap: wrap;
    }
    .el-tabs__header {
      width: 160px;
      margin-right: 16px;
      @media screen and (max-width: 992px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 50px;
      }
      .el-tabs__nav {
        width: 100%;
        @media screen and (max-width: 992px) {
          display: flex;
          flex-wrap: nowrap;
          flex-direction: inherit;
          overflow-x: scroll;
        }
        .el-tabs__active-bar {
          background-color: @theme-color;
          @media screen and (max-width: 992px) {
            left: 0;
            right: 0;
            top: auto;
            bottom: 0;
            width: 100%;
            height: 2px !important;
          }
          @media screen and (max-width: 768px) {
            height: 4px !important;
          }
          @media screen and (max-width: 600px) {
            height: 6px !important;
          }
        }
        .el-tabs__item {
          justify-content: flex-start;
          height: auto;
          padding: 12px 16px;
          text-align: left;
          color: @black-color;
          &.is-active {
            color: @theme-color;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .el-tabs--left .el-tabs__nav-wrap.is-left::after {
        @media screen and (max-width: 992px) {
          width: 0;
        }
      }
    }
    .el-tabs__content {
      width: 100%;
      .profile {
        position: relative;
        text-align: center;
        margin: 0 auto 100px;
        .learn-more {
          padding: 16px 24px;
          color: @white-color;
          text-transform: uppercase;
          &:hover {
            color: @theme-color;
          }
        }
        .profile-table {
          position: relative;
          box-sizing: content-box;
          margin: 35px auto;
          border: 1px solid @theme-color;
          border-radius: 8px;
          overflow: hidden;
          text-align: left;
          // @media screen and (max-width: 768px) {
          //   min-height: 400px;
          // }
          .el-table {
            font-size: inherit;
            .el-table__empty-text {
              line-height: 2;
            }
            tr {
              th,
              td {
                font-size: inherit;
                border-color: @theme-color;
                color: @black-color;
                &:last-child {
                  border-right: 0;
                }
                .cell {
                  padding: 2px 4px;
                  color: inherit;
                  line-height: 1.15;
                  text-align: center;
                  word-break: break-word;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: normal;
                  display: -webkit-box;
                  -webkit-line-clamp: 1;
                  -webkit-box-orient: vertical;
                  @media screen and (max-width: 768px) {
                    padding: 10px 30px;
                  }
                  .m {
                    display: block;
                    padding: 4px 3px 2px;
                    margin: 0 3px;
                    background-color: @theme-color;
                    border: 1px solid @theme-color;
                    border-radius: 4px;
                    color: @white-color;
                    cursor: pointer;
                    transition: all 0.2s;
                    &:hover {
                      background-color: transparent;
                      color: @theme-color;
                    }
                    &.delete {
                      background-color: @theme-color-opacity1;
                      border-color: @theme-color-opacity1;
                    }
                  }
                }
              }
              th {
                padding: 12px 0;
                background-color: @theme-color;
                color: @white-color;
                text-transform: uppercase;
              }
              &:nth-child(2n + 1) {
                td {
                  background-color: #f0f6fc;
                }
              }
            }
          }
        }
        &.demo-ruleForm {
          position: relative;
          margin: 0;
          padding: 15px 50px 30px;
          text-align: left;
          .name {
            padding: 10px 0;
            color: @black-color;
          }
          .custom-block {
            padding: 16px;
            margin: 32px 0 64px;
            background-color: @white-color;
            border-radius: 4px;
            border-left: 5px solid @theme-color;
            a {
              margin: 0 0 0 5px;
              color: inherit;
              text-decoration: underline;
            }
          }
          .form {
            max-width: 550px;
            padding: 32px;
            background-color: @white-color;
            color: @black-color;
            border-radius: 20px;
            box-shadow: 0 3px 5px rgba(77, 135, 253, 0.2);
            .tit-form {
              margin: 0 0 24px;
              text-transform: capitalize;
            }
            .el-form {
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
                      height: 55px;
                      padding: 0 14px;
                      font-size: inherit;
                      line-height: 55px;
                      background-color: transparent;
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
            .el-button {
              height: auto;
              margin: 46px 0 0;
              font-size: inherit;
              text-transform: capitalize;
            }
          }
        }
      }
    }
  }
}
</style>
