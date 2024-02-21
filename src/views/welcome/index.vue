<template>
  <section id="container-welcome">
    <loading-over v-if="logLoad" :listLoad="logLoad"></loading-over>
    <div class="welcome-area lang-max">
      <el-row :gutter="30" class="row-bg" justify="space-between">
        <el-col :xs="24" :sm="16" :md="18" :lg="18" :xl="18">
          <div class="left flex-row center">
            <div class="w">
              <img :src="nebulaLogo" class="logo-img" alt='Nebula Block' />
              <p class="font-42 weight-4">Welcome to the</p>
              <h4 class="font-72 weight-5">NEBULA BLOCK</h4>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="6" :lg="6" :xl="6">
          <div class="right">
            <div class="content">
              <div class="abo font-64 flex-row center font-gilroy-bold">{{nameInitial}}</div>
              <div class="top">
                <div class="title font-20">Standard Support</div>
                <p class="font-18">{{accessName || emailAddress || '-'}}</p>
                <div class="title-center font-16">Logged in to the administrato...</div>
                <div class="nebula font-16">
                  Nebula Al
                  <br /> Notification: {{emailAddress || '-'}}
                </div>
              </div>
              <div class="logout font-18 font-gilroy-bold" @click="logoutMethod">Log out</div>
            </div>
            <div class="middle flex-row center nowrap">
              <div class="t font-16">
                <p>Payment method</p>
                <p>No payment method</p>
              </div>
              <div class="icon-right"></div>
            </div>
            <div class="bottom">
              <div class="tit font-18 font-gilroy-bold">Shortcuts</div>
              <el-row :gutter="15" justify="space-between">
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" v-for="l in shortList" :key="l">
                  <div class="list font-16">
                    <div class="parent">
                      <img :src="l.img" />
                    </div>
                    <span>{{l.text}}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import loadingOver from "@/components/loading"
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import {
  CircleCheckFilled
} from '@element-plus/icons-vue'
import { ElRow, ElCol, ElButton } from 'element-plus'
export default defineComponent({
  components: {
    CircleCheckFilled, loadingOver,
    ElRow, ElCol, ElButton
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const system = getCurrentInstance().appContext.config.globalProperties
    const emailAddress = computed(() => (store.state.emailAddress))
    const accessName = computed(() => (store.state.accessName))
    const route = useRoute()
    const router = useRouter()
    const nameInitial = ref('A')
    const logLoad = ref(false)
    const nebulaLogo = require("@/assets/images/logo.png")
    const shortList = ref([
      {
        img: require("@/assets/images/welcome/service-01.png"),
        text: 'Products and services'
      },
      {
        img: require("@/assets/images/welcome/service-02.png"),
        text: 'Invoices'
      },
      {
        img: require("@/assets/images/welcome/service-03.png"),
        text: 'Support level'
      },
      {
        img: require("@/assets/images/welcome/service-04.png"),
        text: 'Product catalogue'
      },
      {
        img: require("@/assets/images/welcome/service-05.png"),
        text: 'Service emails'
      },
      {
        img: require("@/assets/images/welcome/service-06.png"),
        text: 'Contact management'
      }
    ])

    async function logoutMethod () {
      logLoad.value = true
      await system.$commonFun.signOut()
      await system.$commonFun.timeout(100)
      router.push({ name: 'dashboard' })
      logLoad.value = false
    }
    function init () {
      logLoad.value = false
      if (accessName.value) nameInitial.value = system.$commonFun.hiddAddress(accessName.value)
      else if (emailAddress.value) nameInitial.value = system.$commonFun.hiddAddress(emailAddress.value)
      else nameInitial.value = 'A'
    }
    onMounted(() => init())
    return {
      system,
      emailAddress,
      accessName,
      nebulaLogo,
      nameInitial,
      logLoad,
      shortList,
      logoutMethod
    }
  }
})
</script>

<style lang="less" scoped>
#container-welcome {
  position: relative;
  min-height: calc(100vh - 190px);
  padding: 130px 0 60px;
  background: url(../../assets/images/background-image02.png),
    url(../../assets/images/background-image05.png),
    url(../../assets/images/background-image07.png);
  background-position: 3% 25%, 40% 0%, 48% bottom;
  background-size: 12%, 17%, 20%;
  background-repeat: no-repeat, no-repeat, no-repeat;
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  color: @theme-color;
  .title {
    display: inline-block;
    padding: 7px 20px;
    margin: 0 auto;
    background-color: #b1d2fe;
    color: @theme-color;
    border-radius: 100px;
    text-transform: capitalize;
    text-align: center;
    @media screen and (max-width: 768px) {
      padding: 15px 30px;
    }
    @media screen and (max-width: 600px) {
      padding: 20px 40px;
    }
    .icon {
      width: 90px;
      margin: 0 20px 0 0;
    }
  }
  .title-center {
    display: inline-block;
    max-width: calc(94% - 40px);
    padding: 5px 20px;
    margin: auto;
    background-color: #ddecff;
    color: @theme-color;
    border-radius: 100px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
  :deep(.welcome-area) {
    position: relative;
    min-height: 100%;
    .el-row {
      min-height: 100%;
      align-content: stretch;
      .el-col {
        .left {
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 1.3;
          .w {
            .logo-img {
              height: 140px;
              margin-bottom: 15px;
            }
          }
        }
        .right {
          height: calc(100% - 50px);
          padding: 25px 10%;
          background-color: #9dbffa;
          border-radius: 35px;
          line-height: 1;
          .content {
            position: relative;
            margin: 55px auto 30px;
            background-color: @white-color;
            border-radius: 10px;
            .abo {
              position: absolute;
              top: -45px;
              left: 50%;
              margin-left: -45px;
              width: 90px;
              height: 90px;
              background-color: @theme-color;
              border-radius: 100px;
              color: @white-color;
            }
            .top {
              width: 90%;
              padding: 65px 0 30px;
              margin: auto;
              text-align: center;
              p {
                padding: 16px 0 12px;
              }
              .nebula {
                margin: 30px 0 0;
                color: #606060;
                line-height: 1.5;
              }
            }
            .logout {
              padding: 20px;
              border-top: 2px solid #8592c4;
              cursor: pointer;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          .middle {
            padding: 20px 5%;
            background-color: #28479d;
            border-radius: 10px;
            cursor: no-drop;
            .t {
              padding: 0 10px 0 35px;
              background: url(../../assets/images/welcome/icon-01.png) no-repeat;
              background-size: 25px;
              p {
                color: @white-color;
                line-height: 1.4;
                &:last-child {
                  opacity: 0.5;
                }
              }
            }
            .icon-right {
              width: 25px;
              height: 25px;
              background: url(../../assets/images/welcome/icon-02.png) no-repeat;
              background-size: 100%;
            }
          }
          .bottom {
            .tit {
              padding: 25px 0 13px;
            }
            .list {
              margin: 12px 0 0;
              text-align: center;
              .parent {
                width: 100%;
                padding: 12px 0;
                margin: 0 0 7px;
                background-color: @white-color;
                border-radius: 10px;
                text-align: center;
                img {
                  height: 36px;
                  @media screen and (min-width: 2160px) {
                    height: 18px;
                  }
                  @media screen and (max-width: 768px) {
                    height: 72px;
                  }
                  @media screen and (max-width: 600px) {
                    height: 100px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
