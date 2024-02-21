<template>
  <section id="container-main">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text">
          <h1 class="font-50 font-gilroy-bold">{{$t('product.bareMetal.title')}}</h1>
          <p class="font-24">{{$t('product.bareMetal.describe')}}</p>
          <div class="learn-more font-30" @click="system.$commonFun.contactUsMethod()">{{$t('public.Contact-Us')}}</div>
        </div>
      </div>
    </div>

    <div class="amd">
      <div class="title font-33 font-gilroy-bold">
        <div class="flex-row center">
          {{$t('product.bareMetal.inter.title')}}
        </div>
      </div>
      <div class="amd-cont font-18">
        <loading-over v-if="amdLoad" :listLoad="amdLoad"></loading-over>
        <div class="flex-row flex-start font-23" v-show="computeList.length>0">
          <el-switch v-model="amdValue" size="large" style="--el-switch-on-color: #28479d; --el-switch-off-color: #28479d" :inactive-text="$t('product.bareMetal.Month-Plan')" :active-text="$t('product.bareMetal.Hour-Plan')" />
          <el-row class="row-bg" :gutter="34" justify="flex-start">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" v-for="(d, dIndex) in computeList" :key="dIndex">
              <div class="content flex-row">
                <div class="cont-area">
                  <p class="tit font-30 font-gilroy-bold flex-row">{{d.product_name}}</p>
                  <p class="subtit font-18 flex-row" v-if="amdValue">
                    <span class="font-38 font-gilroy-bold">${{system.$commonFun.hourMethod(d.total_price)}}</span>/ hour
                  </p>
                  <p class="subtit font-18 flex-row" v-else>
                    <span class="font-38 font-gilroy-bold">${{d.total_price}}</span>/ month
                  </p>
                  <div class="learn-more font-18" @click="system.$commonFun.contactUsMethod()">{{$t('public.Get-Started')}}</div>
                  <ul>
                    <li class="desc font-18 flex-row nowrap" v-for="c in d.cpu_options" :key="c" v-show="c.default_variant === 1">
                      <div class="width-icon min-small">
                        <CircleCheckFilled />
                      </div>
                      <span>{{c.variant_language_name}}</span>
                    </li>
                    <li class="desc font-18 flex-row nowrap" v-for="g in d.gpu_options" :key="g" v-show="g.default_variant === 1">
                      <div class="width-icon min-small">
                        <CircleCheckFilled />
                      </div>
                      <span>{{g.variant_language_name}}</span>
                    </li>
                    <li class="desc font-18 flex-row nowrap" v-for="h in d.hard_drive_options" :key="h" v-show="h.default_variant === 1">
                      <div class="width-icon min-small">
                        <CircleCheckFilled />
                      </div>
                      <span>{{h.variant_language_name}}</span>
                    </li>
                    <li class="desc font-18 flex-row nowrap" v-for="m in d.memory_options" :key="m" v-show="m.default_variant === 1">
                      <div class="width-icon min-small">
                        <CircleCheckFilled />
                      </div>
                      <span>{{m.variant_language_name}}</span>
                    </li>
                    <li class="desc font-18 flex-row nowrap" v-for="p in d.public_bandwidth_options" :key="p" v-show="p.default_variant === 1">
                      <div class="width-icon min-small">
                        <CircleCheckFilled />
                      </div>
                      <span>{{p.variant_language_name}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="flex-row center font-23" v-show="computeList.length===0">No Data</div>
      </div>
      <div class="flex-row center" v-show="amdData.data.compute.length>3">
        <div class="more" :class="{'put-away': computeList.length > 3}" @click="moreMethod('compute')">
          <i class="width-icon small button">
            <ArrowDownBold />
          </i>
        </div>
      </div>

      <div class="title font-33 font-gilroy-bold marginTop">
        <div class="flex-row center">
          Storage
        </div>
      </div>
      <div class="amd-cont font-18">
        <loading-over v-if="amdLoad" :listLoad="amdLoad"></loading-over>
        <div class="flex-row flex-start font-23" v-show="storageList.length>0">
          <el-switch v-model="amdValue" size="large" style="--el-switch-on-color: #28479d; --el-switch-off-color: #28479d" :inactive-text="$t('product.bareMetal.Month-Plan')" :active-text="$t('product.bareMetal.Hour-Plan')" />
          <el-row class="row-bg" :gutter="34" justify="flex-start">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" v-for="(d, dIndex) in storageList" :key="dIndex">
              <div class="content flex-row">
                <div class="cont-area">
                  <p class="tit font-30 font-gilroy-bold flex-row">{{d.product_name}}</p>
                  <p class="subtit font-18 flex-row" v-if="amdValue">
                    <span class="font-38 font-gilroy-bold">${{system.$commonFun.hourMethod(d.total_price)}}</span>/ hour
                  </p>
                  <p class="subtit font-18 flex-row" v-else>
                    <span class="font-38 font-gilroy-bold">${{d.total_price}}</span>/ month
                  </p>
                  <div class="learn-more font-18" @click="system.$commonFun.contactUsMethod()">{{$t('public.Get-Started')}}</div>
                  <ul>
                    <li class="desc font-18 flex-row nowrap" v-for="c in d.cpu_options" :key="c" v-show="c.default_variant === 1">
                      <div class="width-icon min-small">
                        <CircleCheckFilled />
                      </div>
                      <span>{{c.variant_language_name}}</span>
                    </li>
                    <li class="desc font-18 flex-row nowrap" v-for="g in d.gpu_options" :key="g" v-show="g.default_variant === 1">
                      <div class="width-icon min-small">
                        <CircleCheckFilled />
                      </div>
                      <span>{{g.variant_language_name}}</span>
                    </li>
                    <li class="desc font-18 flex-row nowrap" v-for="h in d.hard_drive_options" :key="h" v-show="h.default_variant === 1">
                      <div class="width-icon min-small">
                        <CircleCheckFilled />
                      </div>
                      <span>{{h.variant_language_name}}</span>
                    </li>
                    <li class="desc font-18 flex-row nowrap" v-for="m in d.memory_options" :key="m" v-show="m.default_variant === 1">
                      <div class="width-icon min-small">
                        <CircleCheckFilled />
                      </div>
                      <span>{{m.variant_language_name}}</span>
                    </li>
                    <li class="desc font-18 flex-row nowrap" v-for="p in d.public_bandwidth_options" :key="p" v-show="p.default_variant === 1">
                      <div class="width-icon min-small">
                        <CircleCheckFilled />
                      </div>
                      <span>{{p.variant_language_name}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="flex-row center font-23" v-show="storageList.length===0">No Data</div>
      </div>
      <div class="flex-row center" v-show="amdData.data.storage.length>3">
        <div class="more" :class="{'put-away': storageList.length > 3}" @click="moreMethod('storage')">
          <i class="width-icon small button">
            <ArrowDownBold />
          </i>
        </div>
      </div>
      <div class="learn-more font-30 font-gilroy-bold" @click="system.$commonFun.contactUsMethod()">{{$t('public.Contact-Us')}}</div>
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
  CircleCheckFilled, ArrowDownBold
} from '@element-plus/icons-vue'
import { ElRow, ElCol, ElButton, ElSwitch, ElCarousel, ElCarouselItem } from 'element-plus'
export default defineComponent({
  components: {
    CircleCheckFilled, ArrowDownBold, loadingOver,
    ElRow, ElCol, ElButton, ElSwitch, ElCarousel, ElCarouselItem
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const language = computed(() => (store.state.languageNB))
    const carouselHeight = ref(document.body.clientWidth >= 1600 ? '600px' : document.body.clientWidth <= 768 ? '300px' : '450px')
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const amdValue = ref(false)
    const amdData = reactive({
      data: {
        compute: [],
        storage: []
      }
    })
    const computeList = ref([])
    const storageList = ref([])
    const amdLoad = ref(false)

    async function listData (array) {
      let list = array || []
      let arr = {
        compute: [],
        storage: []
      }
      list.map(async element => {
        if (element.type === 'compute') arr.compute.push(element)
        else if (element.type === 'storage') arr.storage.push(element)
      })
      return arr
    }
    async function init () {
      amdLoad.value = true
      const arrayData = await system.$commonFun.categoryMethod(6)
      amdData.data = await listData(arrayData)
      computeList.value = amdData.data.compute.slice(0, 3)
      storageList.value = amdData.data.storage.slice(0, 3)
      amdLoad.value = false
    }
    async function moreMethod (type) {
      if (type === 'compute') computeList.value = computeList.value.length <= 3 ? amdData.data.compute : amdData.data.compute.slice(0, 3)
      else storageList.value = storageList.value.length <= 3 ? amdData.data.storage : amdData.data.storage.slice(0, 3)
    }
    onMounted(() => { })
    onActivated(() => init())
    return {
      system,
      carouselHeight,
      bodyWidth,
      amdValue,
      amdData,
      computeList,
      storageList,
      amdLoad,
      moreMethod
    }
  }
})
</script>

<style lang="less" scoped>
#container-main {
  padding: 0 0 100px;
  background-image: url(../../assets/images/background-image03.png);
  background-position: 0 75%;
  background-repeat: no-repeat;
  background-size: 10%;
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1.15;
  color: @theme-color;
  .title {
    display: inline-block;
    padding: 20px 50px;
    margin: 0 auto 60px;
    color: @theme-color;
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
    padding: 125px 0 0;
    background: url(../../assets/images/background-image02.png),
      url(../../assets/images/background-image05.png),
      url(../../assets/images/bg-bareMetal.png);
    background-position: 3% 25%, 40% 0%, 80% 125px;
    background-size: 12%, 17%, auto 80%;
    background-repeat: no-repeat, no-repeat, no-repeat;
    @media screen and (min-width: 2160px) {
      padding: 90px 0 0;
      background-position: 3% 25%, 40% 0%, 80% 90px;
    }
    @media screen and (max-width: 1440px) {
      padding: 115px 0 0;
      background-position: 3% 25%, 40% 0%, 80% 115px;
    }
    @media screen and (max-width: 768px) {
      padding: 220px 0 100px;
      background-position: 3% 25%, 40% 0%, 80% 220px;
    }
    .content {
      .text {
        max-width: 660px;
        padding: 80px 0;
        margin: 0;
        color: @black-color;
        line-height: 1.13;
        @media screen and (max-width: 1260px) {
          max-width: 980px;
        }
        @media screen and (max-width: 600px) {
          max-width: none;
          padding: 120px 0;
        }
        h1 {
          color: @theme-color;
        }
        p {
          margin: 25px 0;
          line-height: 1.3;
          @media screen and (max-width: 600px) {
            margin: 50px 0;
          }
        }
      }
    }
  }
  :deep(.inter),
  :deep(.amd) {
    margin: 0 auto 120px;
    text-align: center;
    .marginTop {
      margin-top: 150px;
    }
    .inter-cont,
    .amd-cont {
      position: relative;
      width: 90%;
      max-width: 1024px;
      min-height: 80px;
      margin: 40px auto 50px;
      overflow: hidden;
      @media screen and (max-width: 768px) {
        max-width: 1536px;
        min-height: 400px;
      }
      &.amd-cont {
        @media screen and (max-width: 768px) {
          max-width: none;
        }
        .el-carousel {
          .el-carousel__item {
            .content {
              height: auto;
            }
          }
        }
      }
      .el-switch {
        font-size: inherit;
        .el-switch__label {
          font-size: inherit;
          color: #aaaaaa;
          * {
            font-size: inherit;
          }
          &.is-active {
            color: @theme-color;
          }
        }
        .el-switch__core {
          @media screen and (max-width: 600px) {
            height: 20px;
          }
          .el-switch__action {
            @media screen and (max-width: 600px) {
              width: 16px;
              height: 16px;
            }
          }
        }
      }
      .el-row {
        width: calc(100% + 34px);
        position: relative;
        .el-col {
          position: relative;
          // padding: 0 22px;
          margin: 40px 0 0;
          @media screen and (max-width: 768px) {
            margin: 80px 0 0;
          }
        }
      }
      .content {
        align-items: flex-start;
        position: relative;
        max-width: 1200px;
        height: calc(100% - 45px);
        padding: 25px 32px 15px;
        margin: 0 auto;
        background-color: @white-color;
        border: 1px solid #96a6d1;
        border-radius: 20px;
        text-align: left;
        line-height: 1.2;
        overflow: hidden;
        z-index: 3;
        transition: all 0.2s;
        color: @black-color;
        @media screen and (max-width: 767px) {
          height: calc(100% - 87px);
          padding: 50px 64px 30px;
          border-radius: 40px;
          max-width: none;
        }
        &:hover {
          background-color: @theme-color;
          color: @white-color;
          .subtit {
            color: inherit;
            span {
              color: inherit;
            }
          }
          .learn-more {
            background-color: @white-color;
            color: @theme-color;
          }
          ul {
            li {
              .width-icon {
                fill: @white-color;
              }
            }
          }
        }
        .tit {
          width: 100%;
          min-height: 70px;
          margin: 0;
          line-height: 35px;
          @media screen and (max-width: 768px) {
            line-height: 1.15;
          }
        }
        .subtit {
          width: 100%;
          align-items: baseline;
          padding: 15px 0;
          color: @black-color;
          @media screen and (min-width: 2160px) {
            padding: 5px 0;
          }
          @media screen and (max-width: 600px) {
            padding: 30px 0;
          }
          span {
            color: @theme-color;
          }
        }
        .learn-more {
          padding: 12px 23px;
          margin: 15px 0 25px;
          border-radius: 150px;
          @media screen and (max-width: 600px) {
            padding: 24px 46px;
            margin: 30px 0 50px;
          }
        }
        ul {
          width: 100%;
          li {
            align-items: flex-start;
            padding: 12px 0;
            text-align: left;
            line-height: 1.3;
            color: inherit;
            .width-icon {
              margin: 0 10px 0 0;
              fill: #0da34a;
              svg,
              path {
                fill: inherit;
              }
            }
          }
        }
      }
      .el-carousel {
        width: 100%;
        margin: 45px auto;
        overflow: inherit;
        .el-carousel__item {
          display: flex;
          align-items: center;
          opacity: 0.3;
          border-radius: 15px;
          @media screen and (max-width: 767px) {
            border-radius: 30px;
          }
          &.is-active {
            opacity: 1;
            .content {
              background-color: @theme-color;
              color: @white-color;
              .subtit {
                color: inherit;
                span {
                  color: inherit;
                }
              }
              .learn-more {
                background-color: @white-color;
                color: @theme-color;
              }
              ul {
                li {
                  .width-icon {
                    fill: @white-color;
                  }
                }
              }
            }
          }
          .content {
            width: 100%;
            max-width: none;
            max-width: 400px;
            height: calc(100% - 45px);
            @media screen and (max-width: 768px) {
              max-width: none;
            }
          }
        }
        .el-carousel__indicators {
          display: none;
        }
        .el-carousel__arrow {
          display: none;
          width: 50px;
          height: 50px;
          background-color: @white-color;
          color: @theme-color;
          font-size: 32px;
          font-weight: 600;
          border: 1px solid @theme-color;
          transition: all 0.2s;
          &:hover {
            background-color: @theme-color;
            color: @white-color;
          }
        }
      }
    }
    .put-away {
      transform: rotate(180deg);
    }
  }
}
</style>
