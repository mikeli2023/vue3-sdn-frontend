<template>
    <section id="container-cloud">
      <div class="banner">
        <div class="content lang-max flex-row"></div>
      </div>
  
      <div class="cloud font-18">
        <loading-over v-if="creatLoad" :listLoad="creatLoad"></loading-over>
        <div class="font-33 font-gilroy-bold">
          <div class="flex-row center">
            {{$t("tools.sdn.title")}}
          </div>
        </div>
        <div class="cloud-cont">
          <div class="flex-row center font-23">
            <el-form :model="formCloud">
              <el-form-item label="Region" class="flex-row">
                <div class="cont flex-row nowrap">
                  <el-select v-model="formCloud.region" class="m-2 font-23" popper-class="font-23" placeholder=" ">
                    <el-option v-for="item in formCloud.region_options" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                  <i class="width-icon small">
                    <Bottom />
                  </i>
                </div>
              </el-form-item>
              <el-form-item label="DC" class="flex-row">
                <div class="cont flex-row nowrap">
                  <el-select v-model="formCloud.DC" class="m-2 font-23" popper-class="font-23" placeholder=" ">
                    <el-option v-for="item in formCloud.DC_options" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                  <i class="width-icon small">
                    <Bottom />
                  </i>
                </div>
              </el-form-item>
              <el-form-item label="Group" class="flex-row">
                <div class="cont flex-row nowrap">
                  <el-input v-model="formCloud.group" placeholder="Customer Company name or Group name" :precision="0" :step="1" :min="10" :max="100" controls-position="right" :disabled="!formCloud.DC" />
                  <i class="width-icon small">
                    <Bottom />
                  </i>
                </div>
              </el-form-item>
              <el-form-item label="Public IPv4" class="flex-row">
                <div class="cont flex-row nowrap">
                  <el-input v-model="formCloud.public_ipv4" placeholder="Public IPv4 address"  controls-position="right" :disabled="!formCloud.DC" />
                  <i class="width-icon small">
                    <Bottom />
                  </i>
                </div>
              </el-form-item>
              <el-form-item label="Public Port" class="flex-row">
                <div class="cont flex-row nowrap">
                  <el-input-number v-model="formCloud.public_port" placeholder="Public Port number" :precision="0" :step="1" :min="0" :max="65535" controls-position="right" :disabled="!formCloud.public_ipv4" />
                  <i class="width-icon small">
                    <Bottom />
                  </i>
                </div>
              </el-form-item>
              <el-form-item label="LAN IPv4" class="flex-row">
                <div class="cont flex-row nowrap">
                  <el-input v-model="formCloud.lan_ipv4" placeholder="LAN IPv4 address"  controls-position="right" :disabled="!formCloud.DC" />
                  <i class="width-icon small">
                    <Bottom />
                  </i>
                </div>
              </el-form-item>
              <el-form-item label="LAN Port" class="flex-row">
                <div class="cont flex-row nowrap">
                  <el-input-number v-model="formCloud.lan_port" placeholder="LAN Port number" :precision="0" :step="1" :min="1" :max="65535" controls-position="right" :disabled="!formCloud.lan_ipv4" />
                  <i class="width-icon small">
                    <Bottom />
                  </i>
                </div>
              </el-form-item>
              <el-form-item label="Protocol" class="flex-row">
                <div class="cont flex-row nowrap">
                  <el-select v-model="formCloud.protocol" class="m-2 font-23" popper-class="font-23" placeholder=" ">
                    <el-option v-for="item in formCloud.protocol_options" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                  <i class="width-icon small">
                    <Bottom />
                  </i>
                </div>
              </el-form-item>
            </el-form>
            <div class="form-btn flex-row">
              <el-button @click="createVM" :disabled="!formCloud.region || !formCloud.DC  || !formCloud.public_ipv4 || !formCloud.lan_ipv4">APPLY</el-button>
            </div>
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
  import { useI18n } from "vue-i18n"
  import {
    Bottom
  } from '@element-plus/icons-vue'
  import { ElForm, ElFormItem, ElInput, ElInputNumber, ElButton, ElSelect, ElOption, ElTable, ElTableColumn } from 'element-plus'
  export default defineComponent({
    components: {
      Bottom, loadingOver,
      ElForm, ElFormItem, ElInput, ElInputNumber, ElButton, ElSelect, ElOption, ElTable, ElTableColumn
    },
    setup () {
      const store = useStore()
      const { t, locale } = useI18n()
      const language = computed(() => (store.state.languageNB))
      const emailAddress = computed(() => (store.state.emailAddress))
      const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
      const system = getCurrentInstance().appContext.config.globalProperties
      const route = useRoute()
      const router = useRouter()
      const creatLoad = ref(false)
      const formCloud = reactive({
        region: "CA",
        DC: "MTL3",
        group: "nebulablock",
        public_ipv4: "",
        public_port: null,
        lan_ipv4: "",
        lan_port: null,
        protocol: "",
        region_options: [
          {
            value: 'CA',
            label: 'CA'
          },
          {
            value: 'US',
            label: 'US'
          },
        ],
        DC_options: [
          {
            value: 'MTL3',
            label: 'MTL3'
          },
          {
            value: 'TP',
            label: 'TP'
          },
        ],
        protocol_options: [
          { 
            value: '',
            label: ''
          },
          {
            value: 'TCP',
            label: 'TCP'
          },
          {
            value: 'UDP',
            label: 'UDP'
          }
        ],
      })
  
      function changeInput (type) {
        switch (type) {
          case 0:
            formCloud.region = ''
            formCloud.DC = ''
            formCloud.group = ''
            formCloud.public_port = 10
            break;
          case 1:
            formCloud.DC = ''
            formCloud.group = ''
            formCloud.public_port = 10
            break;
          case 2:
            formCloud.group = ''
            formCloud.public_port = 10
            break;
          case 3:
            formCloud.public_port = 10
            break;
        }
      }
      async function createVM () {
        const public_port_str = ""
        creatLoad.value = true

        const params = {
          "region": formCloud.region,
          "DC": formCloud.DC,
          "group": formCloud.group,
          "public_ipv4": formCloud.public_ipv4,
          "public_port": formCloud.public_port,
          "lan_ipv4": formCloud.lan_ipv4,
          "lan_port": formCloud.lan_port,
          "protocol": formCloud.protocol,
        }
        const createRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}api/v1/sdn/nat-all`, 'post', params)
        if (createRes && createRes.status === "success") {
          system.$commonFun.messageTip('success', createRes.message)
          // router.push({ name: 'myProfile', params: { tab: 'vm' } })
        }
        creatLoad.value = false
      }
      async function init () {
        // creatLoad.value = true
        // const allRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}api/v1/cloud/all-datacenters`, 'get')
        // formCloud.region_options = allRes && allRes.data ? allRes.data : []
        // creatLoad.value = false
        formCloud.region_options = region_options
      }
      onMounted(() => { })
      onActivated(() => {
        init()
      })
      watch(emailAddress, () => {
        if (!emailAddress.value) router.push({ name: 'dashboard' })
      })
      return {
        system,
        bodyWidth,
        creatLoad,
        formCloud,
        changeInput, createVM
      }
    }
  })
  </script>
  
  <style lang="less" scoped>
  #container-cloud {
    background-image: url(../assets/images/background-image03.png);
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
      padding: 195px 0 0;
      background: url(../assets/images/background-image05.png);
      background-position: 40% 0%;
      background-size: 17%;
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
    :deep(.cloud) {
      position: relative;
      text-align: center;
      padding: 100px 0 0;
      margin: 0 auto;
      .cloud-cont {
        width: 90%;
        max-width: 1024px;
        min-height: 50px;
        margin: 0 auto;
        overflow: hidden;
        @media screen and (max-width: 768px) {
          max-width: 1536px;
        }
        .el-form {
          width: 100%;
          .el-form-item {
            margin: 40px 0;
            --font-size: inherit;
            @media screen and (max-width: 768px) {
              margin: 60px 0;
            }
            &:last-child {
              margin-bottom: 10px;
            }
            .el-form-item__label {
              width: 160px;
              padding: 0 20px 0 0;
              font-size: inherit;
              color: @black-color;
              text-transform: capitalize;
              @media screen and (max-width: 768px) {
                width: 300px;
              }
              @media screen and (max-width: 600px) {
                width: 100%;
                line-height: 1.5;
                height: auto;
                text-align: left;
                justify-content: flex-start;
              }
            }
            .el-form-item__content {
              @media screen and (max-width: 768px) {
                width: 100%;
              }
              @media screen and (max-width: 600px) {
                width: 100%;
                flex: auto;
              }
              .cont {
                width: 100%;
                .el-input {
                  font-size: inherit;
                  .el-select__caret {
                    @media screen and (max-width: 768px) {
                      font-size: inherit;
                    }
                  }
                  .el-input__wrapper {
                    height: 50px;
                    background-color: transparent;
                    font-size: inherit;
                    box-shadow: none;
                    border: 1px solid @theme-color;
                    @media screen and (max-width: 768px) {
                      height: 80px;
                    }
                    @media screen and (max-width: 767px) {
                      height: 100px;
                    }
                    .el-input__inner {
                      height: 100%;
                      line-height: 1;
                    }
                  }
                  &.is-disabled {
                    .el-input__wrapper {
                      border-color: #dcdfe6;
                    }
                  }
                }
                .el-select,
                .el-input-number {
                  width: 100%;
                  .el-input-number__decrease,
                  .el-input-number__increase {
                    display: none;
                  }
                  .el-input__inner {
                    text-align: left;
                  }
                }
                .width-icon {
                  margin: 0 0.1rem;
                  fill: @theme-color;
                  svg,
                  path {
                    fill: inherit;
                  }
                }
                .is-disabled + .width-icon,
                .el-select--disabled + .width-icon {
                  fill: #dcdfe6;
                }
              }
            }
          }
        }
        .tip {
          width: calc(100% - 160px);
          padding: 0 0 0 160px;
          margin: 0 0 40px;
          color: @theme-color;
          text-align: left;
          @media screen and (max-width: 768px) {
            width: calc(100% - 300px);
            padding: 0 0 0 300px;
          }
          @media screen and (max-width: 600px) {
            width: 100%;
            padding: 0;
          }
        }
        .form-btn {
          .btn,
          .el-button {
            height: auto;
            padding: 15px 25px;
            margin: 40px 15px;
            background-color: transparent;
            font-family: inherit;
            font-size: inherit;
            border-color: @theme-color;
            border-radius: 0.05rem;
            color: @theme-color;
            line-height: 1.3;
            text-transform: capitalize;
            transition: all 0.2s;
            &.is-disabled {
              background-color: #dcdfe6;
              border-color: #dcdfe6;
              opacity: 0.4;
            }
            &.btn {
              text-decoration: underline;
            }
            &:hover {
              background-color: @theme-color;
              color: @white-color;
            }
          }
        }
      }
    }
  }
  </style>
  