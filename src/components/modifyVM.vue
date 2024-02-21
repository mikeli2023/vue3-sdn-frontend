<template>
    <section id="modify">
        <div class="modify-cont flex-row">
            <div class="bg-close"></div>
            <div class="module-cont font-18">
                <loading-over v-if="createLoad" :listLoad="createLoad"></loading-over>
                <div class="module font-22">
                    <div class="cloud-cont">
                        <div class="flex-row center font-20">
                            <div class="tit font-23">Modify VM</div>
                            <el-form :model="formCloud" ref="form">
                                <el-form-item label="vCPU" class="flex-row">
                                    <div class="cont flex-row nowrap">
                                        <el-select v-model="formCloud.cpu_cores" class="m-2 font-20" popper-class="font-20" placeholder=" " @change="changeInput(2)">
                                            <el-option v-for="item in formCloud.cpu_cores_options" :key="item.value" :label="item.label" :value="item.value" />
                                        </el-select>

                                        <i class="width-icon min-small">
                                            <Bottom />
                                        </i>
                                    </div>
                                </el-form-item>
                                <el-form-item label="Memory(GB)" class="flex-row">
                                    <div class="cont flex-row nowrap">
                                        <el-select v-model="formCloud.ram" class="m-2 font-20" popper-class="font-20" placeholder=" " @change="changeInput(3)" :disabled="!formCloud.cpu_cores">
                                            <el-option v-for="item in formCloud.ram_options" :key="item.value" :label="item.label" :value="item.value" />
                                        </el-select>
                                        <i class="width-icon min-small">
                                            <Bottom />
                                        </i>
                                    </div>
                                </el-form-item>
                                <el-form-item label="Storage(GB)" class="flex-row">
                                    <div class="cont flex-row nowrap">
                                        <el-input-number v-model="formCloud.storage" placeholder="Range from 10 to 100" :precision="0" :step="1" :min="10" :max="100" controls-position="right" :disabled="!formCloud.ram" />
                                        <i class="width-icon min-small">
                                            <Bottom />
                                        </i>
                                    </div>
                                </el-form-item>
                            </el-form>
                            <p class="tip font-14">Range from 10 to 100.</p>
                            <div class="form-btn flex-row">
                                <el-button @click="ModifyVM" :disabled="!formCloud.cpu_cores || !formCloud.ram || !formCloud.storage">Modify VM</el-button>
                                <el-button @click="beforeClose">Close</el-button>
                            </div>
                        </div>
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
import { Bottom, Back, Close } from '@element-plus/icons-vue'
import { ElButton, ElRow, ElCol, ElInput, ElInputNumber, ElForm, ElFormItem, ElSelect, ElOption } from 'element-plus'
export default defineComponent({
    name: "Modify VM",
    components: {
        loadingOver, Bottom, Back, Close, ElButton, ElRow, ElCol, ElInput, ElInputNumber, ElForm, ElFormItem, ElSelect, ElOption
    },
    props: {
        vmCont: { type: Object, default: {} }
    },
    setup (props, context) {
        const store = useStore()
        const system = getCurrentInstance().appContext.config.globalProperties
        const route = useRoute()
        const router = useRouter()
        const formCloud = reactive({
            cpu_cores: 1,
            ram: "",
            storage: 10,
            cpu_cores_options: [
                {
                    value: 1,
                    label: 1,
                },
                {
                    value: 2,
                    label: 2,
                },
                {
                    value: 4,
                    label: 4,
                },
                {
                    value: 6,
                    label: 6,
                },
                {
                    value: 8,
                    label: 8,
                }
            ],
            ram_options: [
                {
                    value: 2,
                    label: 2,
                },
                {
                    value: 4,
                    label: 4,
                },
                {
                    value: 6,
                    label: 6,
                },
                {
                    value: 8,
                    label: 8,
                }
            ],
        })
        const createLoad = ref(false)

        function changeInput (type) {
            switch (type) {
                case 2:
                    formCloud.ram = ''
                    formCloud.storage = 10
                    break;
                case 3:
                    formCloud.storage = 10
                    break;
            }
        }
        async function ModifyVM () {
            console.log(props.vmCont)
            createLoad.value = true
            const params = {
                "vm_region": props.vmCont.value.datacenter,
                "public_ipv4": props.vmCont.value.public_ipv4,
                "cpu_cores": formCloud.cpu_cores,
                "ram": formCloud.ram,
                "disk_size": formCloud.storage
            }
            const modifyRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}api/v1/cloud/modify-vm`, 'post', params)
            if (modifyRes && modifyRes.status === "success") {
                system.$commonFun.messageTip('success', modifyRes.message)
                context.emit('handleModify', false, true)
            }
            createLoad.value = false
        }
        async function beforeClose () {
            context.emit('handleModify', false)
        }
        onMounted(async () => { })
        return {
            route,
            router,
            formCloud,
            createLoad,
            system,
            beforeClose, ModifyVM, changeInput
        }
    },
});
</script>

<style lang="less" scoped>
#modify {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  color: @black-color;
  font-size: 18px;
  text-align: center;
  z-index: 2001;
  :deep(.modify-cont) {
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
        width: 650px;
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
          width: 500px;
        }
        .cloud-cont {
          width: 90%;
          max-width: 1024px;
          min-height: 50px;
          margin: 0 auto;
          overflow: hidden;
          @media screen and (max-width: 768px) {
            max-width: 1536px;
          }
          .tit {
            width: 100%;
            padding: 24px 0 12px;
            text-align: left;
            line-height: 1.3;
            border-bottom: 1px solid #eee;
          }
          .el-form {
            width: 100%;
            padding: 8px 0 0;
            .el-form-item {
              margin: 30px 0;
              --font-size: inherit;
              @media screen and (max-width: 768px) {
                margin: 50px 0;
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
                      height: 40px;
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
            margin: 0 0 20px;
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
              padding: 10px 25px;
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
