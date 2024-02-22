<template>
  <section id="container-main">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text">
          <h1 class="font-79 font-gilroy-black">{{$t('main.banner.title')}}</h1>
          <p class="font-23">{{$t('main.banner.describe')}}</p>
          <el-row :gutter="1">
            <el-col :span="10">
              <router-link :to="{name: 'SDN'}" class="learn-more font-20">{{$t('tools.sdn.title')}}</router-link>
            </el-col>
            <el-col :span="10">
              <router-link :to="{name: 'VPN'}" class="learn-more font-20">{{$t('menu.VPN')}}</router-link>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="map">
      <div class="lang-max">
        <div class="tit font-50 font-gilroy-bold">{{$t("main.map.title")}}</div>
        <img :src="mapImage" class="img" />
      </div>
    </div>

    <div class="clients">
      <div class="lang-max">
        <div class="tit font-50 font-gilroy-bold">{{$t("main.clients.title-1")}}</div>
        <CarouselContainer :slide-list="clientsData" :gutterValue="10"></CarouselContainer>
        <div class="tit font-50 font-gilroy-bold">{{$t("main.clients.title-2")}}</div>
        <CarouselContainer :slide-list="partnersData" :gutterValue="10"></CarouselContainer>
      </div>
    </div>

    <div class="slider">
      <div class="cont lang-max">
        <el-carousel :height="carouselHeight" indicator-position="none" arrow="always" :interval="20000">
          <el-carousel-item v-for="item in carouselData" :key="item">
            <div class="carousel">
              <div class="text font-33">{{item.title}}</div>
              <div class="person flex-row">
                <img :src="carouselImg" class="image" />
                <div class="">
                  <h3 class="font-46">{{item.name}}</h3>
                  <p class="font-30">{{item.desc}}</p>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="contactus">
      <div class="tit font-72 font-gilroy-black">{{$t("main.contactus.title")}}</div>
      <div class="learn-more font-30" @click="system.$commonFun.contactUsMethod()">{{$t('public.Contact-Us')}}</div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import { ElRow, ElCol, ElButton, ElDropdown, ElCarousel, ElCarouselItem } from 'element-plus'
import CarouselContainer from '@/components/CarouselContainer.vue'
export default defineComponent({
  components: {
    CarouselContainer,
    ElRow, ElCol, ElButton, ElDropdown, ElCarousel, ElCarouselItem
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const language = computed(() => (store.state.languageNB))
    const carouselHeight = ref(document.body.clientWidth >= 1600 ? '480px' : document.body.clientWidth <= 768 ? '280px' : '430px')
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const valueData = ref([])
    const mapImage = require("@/assets/images/dashboard/map.jpg")
    const clientsData = ref([
      {
        img: require(`@/assets/images/dashboard/clients/clients-01.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-02.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-03.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-04.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-05.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-06.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-07.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-08.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-09.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-10.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-11.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-12.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-13.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-14.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-15.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-16.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-17.png`)
      },
      {
        img: require(`@/assets/images/dashboard/clients/clients-18.png`)
      },
    ])
    const partnersData = ref([
      {
        img: require(`@/assets/images/dashboard/partners/partners-01.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-02.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-03.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-04.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-05.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-06.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-07.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-08.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-09.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-10.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-11.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-12.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-13.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-14.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-15.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-16.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-17.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-18.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-19.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-20.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-21.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-22.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-23.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-24.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-25.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-26.png`)
      },
      {
        img: require(`@/assets/images/dashboard/partners/partners-27.png`)
      },
    ])
    const carouselImg = require("@/assets/images/dashboard/person.png")
    const carouselData = ref([
      {
        title: t("main.carousel.title2"),
        name: 'Boz',
        desc: 'CTO, Akash Network'
      },
      {
        title: t("main.carousel.title"),
        name: 'Zhe',
        desc: 'CTO, Hashforest'
      },
      {
        title: t("main.carousel.title3"),
        name: 'Zack',
        desc: 'CEO, ExaBits'
      }
    ])

    async function productRoute (id) {
      switch (String(id)) {
        case '6':
          router.push({ name: 'SDN' })
          break;
        case '7':
          router.push({ name: 'VPN' })
          break;
      }
    }
    async function init () {
      const language_id = language.value === 'zh-cn' ? 26 : 36
      // const categoryRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_BASEAPI}api/v1/category/${language_id}`, 'get')
      // if (categoryRes && categoryRes.status === "success") valueData.value = categoryRes.data || []
      // else valueData.value = []
    }
    onMounted(() => init())
    return {
      system,
      bodyWidth,
      valueData,
      mapImage,
      clientsData,
      partnersData,
      carouselImg,
      carouselData,
      carouselHeight,
      productRoute
    }
  }
})
</script>

<style lang="less" scoped>
#container-main {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1.15;
  color: @theme-color;
  .banner {
    position: relative;
    padding: 255px 0 140px;
    background: #eff5fc url(../../assets/images/bg-main.jpg) center 90px
      no-repeat;
    background-size: cover;
    @media screen and (min-width: 2160px) {
      padding: 195px 0 125px;
    }
    @media screen and (max-width: 1440px) {
      padding: 260px 0 145px;
    }
    @media screen and (max-width: 768px) {
      padding: 360px 0 185px;
    }
    .content {
      .text {
        max-width: 680px;
        margin: 0 36px;
        color: @black-color;
        line-height: 1.13;
        @media screen and (max-width: 1260px) {
          max-width: 880px;
        }
        @media screen and (max-width: 600px) {
          max-width: none;
        }
        p {
          margin: 25px 0 35px;
          @media screen and (max-width: 600px) {
            margin: 50px 0 70px;
          }
        }
        .learn-more {
          display: inline-block;
          padding: 16px 40px;
          margin: 0;
          background-color: @theme-color;
          border: 1px solid @theme-color;
          border-radius: 8px;
          cursor: pointer;
          color: @white-color;
          line-height: 1;
          transition: all 0.2s;
          @media screen and (max-width: 600px) {
            padding: 32px 80px;
            border-radius: 16px;
          }
          &:hover {
            background-color: transparent;
            color: @theme-color;
          }
        }
      }
    }
  }
  :deep(.starting) {
    background: url(../../assets/images/background-image01.jpg) repeat center;
    background-size: 100%;
    .starting-cont {
      width: 80%;
      max-width: 1520px;
      padding: 0 0 80px;
      margin: auto;
      @media screen and (min-width: 2160px) {
        width: 100%;
        max-width: 1680px;
        padding: 0 0 50px;
      }
      @media screen and (min-width: 2664px) {
        max-width: 1920px;
      }
      @media screen and (min-width: 4090px) {
        max-width: 2140px;
      }
      @media screen and (min-width: 5120px) {
        max-width: 2380px;
      }
      @media screen and (max-width: 1200px) {
        width: calc(100% - 64px);
        padding: 160px 32px 0;
      }
      .el-row {
        position: relative;
        .el-col {
          // padding: 0 22px;
          margin: 0 0 24px;
          @media screen and (max-width: 768px) {
            margin: 0 0 48px;
          }
          @media screen and (max-width: 767px) {
            margin: 60px auto !important;
          }
          .content {
            position: relative;
            height: calc(100% - 150px);
            background-color: @white-color;
            padding: 40px 0 110px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0px 0px 13px rgba(153, 184, 243, 0.05),
              10px 10px 13px rgba(153, 184, 243, 0.9);
            line-height: 1.2;
            overflow: hidden;
            cursor: pointer;
            @media screen and (max-width: 767px) {
              height: calc(100% - 300px);
              padding: 80px 0 220px;
              border-radius: 40px;
            }
            .image {
              margin: 0 auto;
              height: 140px;
              @media screen and (min-width: 2160px) {
                height: 90px;
              }
              @media screen and (max-width: 768px) {
                height: 200px;
              }
              @media screen and (max-width: 540px) {
                height: 230px;
              }
              img {
                height: 100%;
                max-width: 205px;
                @media screen and (max-width: 768px) {
                  max-width: none;
                }
              }
            }
            .tit {
              align-items: end;
              width: 65%;
              min-height: 48px;
              padding: 25px 0 20px;
              margin: auto;
              line-height: 24px;
              text-align: center;
              @media screen and (min-width: 2160px) {
                padding: 15px 0 10px;
              }
              @media screen and (max-width: 600px) {
                padding: 50px 0 40px;
              }
            }
            .desc {
              width: 65%;
              margin: auto;
            }
            .price {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 30px;
              padding: 13px 0;
              margin: 0;
              background-color: @theme-color;
              color: @white-color;
              text-align: center;
              @media screen and (max-width: 767px) {
                bottom: 80px;
              }
              @media screen and (max-width: 600px) {
                padding: 26px 0;
                margin: 48px auto 0;
              }
            }
          }
        }
      }
    }
  }
  :deep(.map) {
    padding: 95px 0 60px;
    background-color: @white-color;
    .tit {
      margin: 0 0 70px;
      color: @theme-color;
    }
  }
  :deep(.clients) {
    padding: 15px 0 155px;
    background: url(../../assets/images/background-image01.jpg) repeat center;
    background-size: 100%;
    .tit {
      margin: 110px 0 70px;
      text-align: center;
    }
  }
  :deep(.slider) {
    background-color: @theme-color;
    .cont {
      .el-carousel {
        .el-carousel__arrow {
          bottom: 65px;
          top: auto;
          width: 70px;
          height: 70px;
          background-color: @theme-color;
          font-size: 38px;
          font-weight: 600;
          border: 1px solid @white-color;
          transition: all 0.2s;
          @media screen and (max-width: 768px) {
            width: 105px;
            height: 105px;
          }
          @media screen and (max-width: 600px) {
            width: 140px;
            height: 140px;
            font-size: 51px;
          }
          &.el-carousel__arrow--left {
            left: auto;
            right: 110px;
            @media screen and (max-width: 768px) {
              right: 165px;
            }
            @media screen and (max-width: 600px) {
              right: 220px;
            }
          }
          &:hover {
            background-color: @white-color;
            color: @theme-color;
          }
        }
        .el-carousel__item {
          display: flex;
          align-items: center;
        }
        .carousel {
          // padding: 45px 0 75px;
          line-height: 1.15;
          color: @white-color;
          .text {
            padding: 0 50px 0 120px;
            background: url(../../assets/images/text-bg.png) no-repeat 22px 0;
            background-size: 75px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            word-break: break-word;
          }
          .person {
            margin: 60px 0 0;
            @media screen and (max-width: 600px) {
              margin: 120px 0 0;
            }
            .image {
              width: 95px;
              height: 95px;
              margin: 0 32px 0 2px;
              background-color: @white-color;
              border-radius: 100px;
              border: 3px solid @white-color;
            }
          }
        }
      }
    }
  }
  :deep(.contactus) {
    padding: 100px 0 80px;
    background: url(../../assets/images/background-image01.jpg) repeat center;
    background-size: 100%;
    text-align: center;
    .tit {
      width: 100%;
      max-width: 900px;
      margin: auto;
      text-align: center;
      line-height: 1.3;
      @media screen and (max-width: 768px) {
        max-width: 1350px;
      }
    }
    .learn-more {
      display: inline-block;
      padding: 26px 65px;
      margin: 30px auto 0;
      background-color: @theme-color;
      border: 1px solid @theme-color;
      border-radius: 14px;
      cursor: pointer;
      color: @white-color;
      line-height: 1;
      transition: all 0.2s;
      @media screen and (max-width: 600px) {
        padding: 52px 130px;
        margin: 60px auto 0;
        border-radius: 28px;
      }
      &:hover {
        background-color: transparent;
        color: @theme-color;
      }
    }
  }
}
</style>
