<template>
  <section id="container-main">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text">
          <h1 class="font-50 font-gilroy-bold">{{$t('product.gpuClusters.title')}}</h1>
          <p class="font-24" v-html="$t('product.gpuClusters.describe')"></p>
          <div class="learn-more font-30" @click="system.$commonFun.contactUsMethod()">{{$t('public.Contact-Us')}}</div>
        </div>
      </div>
    </div>

    <div class="less">
      <div class="title font-33 font-gilroy-bold">{{$t('product.gpuClusters.less.title')}}</div>
      <div class="subtit font-27">{{$t('product.gpuClusters.less.subtitle')}}</div>
      <div class="image flex-row center">
        <img :src="lessImg01" />
        <img :src="lessImg02" />
      </div>
    </div>

    <div class="pricing font-18">
      <!-- <loading-over v-if="createLoad" :listLoad="createLoad"></loading-over> -->
      <div class="title font-33 font-gilroy-bold">{{$t('product.gpuClusters.pricing.title')}}</div>
      <div class="pricing-cont lang-max font-18">
        <loading-over v-if="createLoad" :listLoad="createLoad"></loading-over>
        <div class="flex-row flex-start font-23" v-show="pricingData.length>0">
          <el-row class="row-bg" :gutter="34" justify="center">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" v-for="d in pricingDataList" :key="d">
              <div class="content">
                <p class="tit font-30 font-gilroy-bold flex-row">{{d.product_name}}</p>
                <p class="subtit font-18 flex-row">
                  <span class="font-38 font-gilroy-bold">${{d.total_price}}</span>/GPU/hour
                </p>
                <div class="learn-more font-18" @click="system.$commonFun.contactUsMethod()">{{$t('public.Reserve-Now')}}</div>
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
            </el-col>
          </el-row>
        </div>
        <div class="flex-row center font-23" v-show="pricingData.length===0">No Data</div>
      </div>
      <div class="flex-row center" v-show="pricingData.length>3">
        <div class="more" :class="{'put-away': pricingDataList.length > 3}" @click="moreMethod">
          <i class="width-icon small button">
            <ArrowDownBold />
          </i>
        </div>
      </div>
    </div>

    <div class="model">
      <div class="subtit font-30 font-gilroy-bold">{{$t('product.gpuClusters.model.title')}}</div>
      <div class="model-cont lang-max flex-row center">
        <el-row class="row-bg" :gutter="84" justify="space-between">
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="m in modelData" :key="m">
            <div class="content">
              <div class="image">
                <img :src="m.img" />
              </div>
              <p class="tit font-30 font-gilroy-bold">{{m.title}}</p>
              <p class="desc font-18 flex-row center">{{m.desc}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="choose">
      <div class="title font-33 font-gilroy-bold">{{$t('product.gpuClusters.choose.title')}}</div>
      <div class="choose-cont lang-max">
        <el-row class="row-bg" :gutter="20" justify="space-between">
          <el-col v-for="c in chooseData" :key="c">
            <div class="content">
              <div class="image">
                <img :src="c.img" />
              </div>
              <p class="tit font-18" v-html="c.title"></p>
            </div>
          </el-col>
        </el-row>
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
    loadingOver, CircleCheckFilled, ArrowDownBold,
    ElRow, ElCol, ElButton, ElSwitch, ElCarousel, ElCarouselItem
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const language = computed(() => (store.state.languageNB))
    const carouselHeight = ref(document.body.clientWidth >= 1600 ? '500px' : document.body.clientWidth <= 768 ? '250px' : '350px')
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const pricingValue = ref(false)
    const createLoad = ref(false)
    const pricingContent = reactive({
      list: [
        t('product.gpuClusters.pricing.list-1.describe-1'),
        t('product.gpuClusters.pricing.list-1.describe-2'),
        t('product.gpuClusters.pricing.list-1.describe-3')
      ]
    })
    const pricingData = ref([])
    const pricingDataList = ref([])
    const lessImg01 = require("@/assets/images/gpuClusters/less-01.png")
    const lessImg02 = require("@/assets/images/gpuClusters/less-02.png")
    const modelData = ref([
      {
        img: require("@/assets/images/gpuClusters/inference-01.png"),
        title: t('product.gpuClusters.model.title-1'),
        desc: t('product.gpuClusters.model.describe-1')
      },
      {
        img: require("@/assets/images/gpuClusters/inference-02.png"),
        title: t('product.gpuClusters.model.title-2'),
        desc: t('product.gpuClusters.model.describe-2')
      },
      {
        img: require("@/assets/images/gpuClusters/inference-03.png"),
        title: t('product.gpuClusters.model.title-3'),
        desc: t('product.gpuClusters.model.describe-3')
      }
    ])
    const chooseData = ref([
      {
        img: require("@/assets/images/gpuClusters/choose-01.png"),
        title: t('product.gpuClusters.choose.title-1')
      },
      {
        img: require("@/assets/images/gpuClusters/choose-02.png"),
        title: t('product.gpuClusters.choose.title-2')
      },
      {
        img: require("@/assets/images/gpuClusters/choose-03.png"),
        title: t('product.gpuClusters.choose.title-3')
      },
      {
        img: require("@/assets/images/gpuClusters/choose-04.png"),
        title: t('product.gpuClusters.choose.title-4')
      },
      {
        img: require("@/assets/images/gpuClusters/choose-05.png"),
        title: t('product.gpuClusters.choose.title-5')
      }
    ])

    async function init () {
      createLoad.value = true
      pricingData.value = await system.$commonFun.categoryMethod(7)
      pricingDataList.value = pricingData.value.slice(0, 3)
      createLoad.value = false
    }
    async function moreMethod () {
      pricingDataList.value = pricingDataList.value.length <= 3 ? pricingData.value : pricingData.value.slice(0, 3)
    }
    onMounted(() => { })
    onActivated(() => init())
    return {
      system,
      carouselHeight,
      bodyWidth,
      createLoad,
      pricingValue,
      pricingContent,
      pricingData,
      pricingDataList,
      lessImg01,
      lessImg02,
      modelData,
      chooseData,
      moreMethod
    }
  }
})
</script>

<style lang="less" scoped>
#container-main {
  padding: 0 0 100px;
  background: url(../../assets/images/background-image06.png) right 22%
    no-repeat;
  background-size: 8%;
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1.15;
  color: @theme-color;
  .title {
    display: inline-block;
    padding: 20px 50px;
    margin: 45px auto 60px;
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
      url(../../assets/images/bg-gpuClusters.png);
    background-position: 3% 25%, 80% bottom;
    background-size: 12%, auto 75%;
    background-repeat: no-repeat, no-repeat;
    @media screen and (min-width: 2160px) {
      padding: 90px 0 0;
    }
    @media screen and (max-width: 1440px) {
      padding: 115px 0 0;
    }
    @media screen and (max-width: 768px) {
      padding: 220px 0 100px;
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
  :deep(.less) {
    text-align: center;
    .subtit {
      margin-top: -70px;
      color: @theme-color;
    }
    .image {
      margin: 100px auto 0;
      img {
        margin: 20px 70px;
        &:nth-child(1) {
          height: 445px;
          @media screen and (max-width: 768px) {
            height: 670px;
          }
        }
        &:nth-child(2) {
          height: 340px;
          @media screen and (max-width: 768px) {
            height: 410px;
          }
        }
      }
    }
  }
  :deep(.model) {
    text-align: center;
    padding: 0 0 125px;
    .subtit {
      max-width: 950px;
      margin: 0 auto 70px;
      color: @theme-color;
      @media screen and (max-width: 768px) {
        max-width: 1430px;
      }
    }
    .model-cont {
      text-align: left;
      .el-row {
        .el-col {
          margin: 50px 0 0;
          .content {
            .image {
              height: 90px;
              @media screen and (max-width: 768px) {
                height: 135px;
              }
              @media screen and (max-width: 600px) {
                height: 180px;
              }
              img {
                height: 100%;
              }
            }
            .tit {
              min-height: 175px;
              margin: 30px 0 0;
              line-height: 35px;
              @media screen and (max-width: 768px) {
                margin: 60px 0 0;
                line-height: 1.15;
              }
            }
            .desc {
              color: @black-color;
              line-height: 1.4;
            }
          }
        }
      }
    }
  }
  :deep(.pricing) {
    position: relative;
    text-align: center;
    margin: 110px auto;
    padding: 0 0 60px;
    // .el-loading-mask{
    //   background-color: rgba(255,255,255,.3);
    // }
    .pricing-cont {
      position: relative;
      min-height: 80px;
      margin: 0 auto 50px;
      overflow: hidden;
      @media screen and (max-width: 768px) {
        min-height: 400px;
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
        @media screen and (max-width: 768px) {
          max-width: 1800px;
        }
        @media screen and (max-width: 767px) {
          height: calc(100% - 85px);
          padding: 50px 64px 30px;
          border-radius: 40px;
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
          max-width: 400px;
          min-height: 70px;
          margin: 0;
          line-height: 35px;
          @media screen and (max-width: 768px) {
            max-width: none;
            line-height: 1.15;
          }
        }
        .subtit {
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
          margin: 25px 0;
          border-radius: 150px;
          @media screen and (max-width: 600px) {
            padding: 24px 46px;
            margin: 50px 0;
          }
        }
        ul {
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
        max-width: 1260px;
        margin: 45px auto;
        overflow: inherit;
        @media screen and (max-width: 768px) {
          max-width: 1890px;
        }
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
            width: 90%;
            max-width: 400px;
            height: calc(100% - 45px);
            @media screen and (max-width: 768px) {
              max-width: 600px;
            }
            @media screen and (max-width: 767px) {
              max-width: 800px;
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
  :deep(.choose) {
    margin: 0 auto 120px;
    text-align: center;
    .choose-cont {
      margin: 0 auto 100px;
      .el-row {
        text-align: left;
        .el-col {
          margin: 40px auto 0;
          max-width: 20%;
          flex: 0 0 20%;
          @media screen and (max-width: 767px) {
            max-width: 33.333%;
            flex: 0 0 33.333%;
          }
          @media screen and (max-width: 600px) {
            max-width: 50%;
            flex: 0 0 50%;
          }
          &:nth-child(2n + 1) {
            .content {
              background-color: #739dd2;
            }
          }
          .content {
            height: calc(100% - 70px);
            padding: 35px 28px;
            background-color: @theme-color;
            border-radius: 30px;
            color: @white-color;
            @media screen and (max-width: 767px) {
              height: calc(100% - 140px);
              padding: 70px 56px;
              border-radius: 60px;
            }
            .image {
              height: 95px;
              @media screen and (max-width: 768px) {
                height: 140px;
              }
              @media screen and (max-width: 600px) {
                height: 190px;
              }
              img {
                height: 100%;
              }
            }
            .tit {
              margin: 30px 0 0;
              line-height: 1.5;
              @media screen and (max-width: 768px) {
                margin: 60px 0 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
