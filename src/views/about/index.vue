<template>
  <section id="container-about">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text">
          <h1 class="font-50 font-gilroy-bold">{{$t('about.title')}}</h1>
          <p class="font-24" v-html="$t('about.describe')"></p>
          <div class="learn-more font-30" @click="system.$commonFun.contactUsMethod()">{{$t('public.Contact-Us')}}</div>
        </div>
      </div>
    </div>

    <div class="nebula-about lang-max">
      <div class="content flex-row">
        <div class="text">
          <h1 class="font-33 weight-4 font-gilroy-bold">{{$t('nebulaBlock.about.title')}}</h1>
          <p class="font-20">{{$t('nebulaBlock.about.describe')}}</p>
        </div>
      </div>
    </div>

    <div class="What-We-Have lang-max">
      <div class="title font-33 font-gilroy-bold">{{$t('nebulaBlock.WhatWeHave.title')}}</div>
      <el-row class="row-bg">
        <el-col v-for="we in wehaveData" :key="we">
          <div class="content">
            <p class="tit font-33 font-gilroy-bold">{{we.title}}</p>
            <p class="desc font-22">{{we.desc}}</p>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="What-We-Do lang-max">
      <div class="tit-center font-30 font-gilroy-bold">{{$t('nebulaBlock.portfolio.title')}}</div>
      <div class="carousel-container">
        <el-row class="row-bg" justify="space-between">
          <el-col :xs="24" :sm="8" :md="12" :lg="12" :xl="12" class="flex-row">
            <div class="content">
              <p class="headline font-30" v-html="$t('nebulaBlock.portfolio.describe')"></p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="15" :md="12" :lg="12" :xl="12">
            <el-carousel :height="carouselHeight" trigger="click" :interval="10000" :direction="bodyWidth" type="card" :autoplay="true">
              <el-carousel-item v-for="d in weDoData" :key="d">
                <div class="content">
                  <p class="tit font-24">{{d.title}}</p>
                  <p class="desc font-18">{{d.desc}}</p>
                </div>
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="our-value lang-max">
      <div class="title font-33 font-gilroy-bold">{{$t('nebulaBlock.ourValues.title')}}</div>
      <div class="tit-center font-27">{{$t('nebulaBlock.ourValues.describe')}}</div>
      <el-row class="row-bg" :gutter="35" justify="space-between">
        <el-col v-for="value in ourValueData" :key="value">
          <div class="content">
            <img :src="value.img" class="image" />
            <p class="tit font-24 font-gilroy-bold">{{value.title}}</p>
            <p class="desc font-16">{{value.desc}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import {
  CircleCheckFilled
} from '@element-plus/icons-vue'
import { ElRow, ElCol, ElButton, ElSwitch, ElCarousel, ElCarouselItem } from 'element-plus'
export default defineComponent({
  components: {
    CircleCheckFilled,
    ElRow, ElCol, ElButton, ElSwitch, ElCarousel, ElCarouselItem
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth > 768 ? 'vertical' : 'horizontal')
    const carouselHeight = ref(document.body.clientWidth >= 1600 ? '550px' : document.body.clientWidth <= 768 ? '300px' : '400px')
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const wehaveData = ref([
      {
        title: '4',
        desc: t('nebulaBlock.WhatWeHave.Data-Centers')
      },
      {
        title: '75 million',
        desc: t('nebulaBlock.WhatWeHave.Asset-management')
      },
      {
        title: '800+',
        desc: t('nebulaBlock.WhatWeHave.GPUs')
      },
      {
        title: '3000+',
        desc: t('nebulaBlock.WhatWeHave.Servers')
      },
      {
        title: '500+',
        desc: t('nebulaBlock.WhatWeHave.Cabinets')
      },
      {
        title: '70+',
        desc: t('nebulaBlock.WhatWeHave.Countries-supply-chain')
      },
      {
        title: '6+',
        desc: t('nebulaBlock.WhatWeHave.Language')
      },
      {
        title: '10+',
        desc: t('nebulaBlock.WhatWeHave.Blockchains')
      },
      {
        title: '8MWs',
        desc: t('nebulaBlock.WhatWeHave.Power')
      },
      {
        title: '700+',
        desc: t('nebulaBlock.WhatWeHave.PB-Storage')
      },
    ])
    const weDoData = ref([
      {
        title: t('nebulaBlock.portfolio.carousel.Decentralized-Computing'),
        desc: t('nebulaBlock.portfolio.carousel.Decentralized-Computing-describe')
      },
      {
        title: t('nebulaBlock.portfolio.carousel.Data-Center-Services'),
        desc: t('nebulaBlock.portfolio.carousel.Data-Center-Services-describe')
      },
      {
        title: t('nebulaBlock.portfolio.carousel.RPC-Node-Services'),
        desc: t('nebulaBlock.portfolio.carousel.RPC-Node-Services-describe')
      }
    ])
    const ourValueData = ref([
      {
        img: require(`@/assets/images/about/value-04.png`),
        title: t('nebulaBlock.ourValues.data.Security'),
        desc: t('nebulaBlock.ourValues.data.Security-describe')
      },
      {
        img: require(`@/assets/images/about/value-02.png`),
        title: t('nebulaBlock.ourValues.data.Customer-Centric'),
        desc: t('nebulaBlock.ourValues.data.Customer-Centric-describe')
      },
      {
        img: require(`@/assets/images/about/value-03.png`),
        title: t('nebulaBlock.ourValues.data.Best-Economics'),
        desc: t('nebulaBlock.ourValues.data.Best-Economics-describe')
      },
      {
        img: require(`@/assets/images/about/value-01.png`),
        title: t('nebulaBlock.ourValues.data.Innovation'),
        desc: t('nebulaBlock.ourValues.data.Innovation-describe')
      },
      {
        img: require(`@/assets/images/about/value-05.png`),
        title: t('nebulaBlock.ourValues.data.Collaboration'),
        desc: t('nebulaBlock.ourValues.data.Collaboration-describe')
      }
    ])

    onMounted(() => { })
    return {
      system,
      carouselHeight,
      bodyWidth,
      wehaveData,
      weDoData,
      ourValueData
    }
  }
})
</script>

<style lang="less" scoped>
#container-about {
  padding: 0 0 100px;
  background: url(../../assets/images/background-image06.png) right 20%
    no-repeat;
  background-size: 10%;
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
    text-transform: uppercase;
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
  .tit-center {
    max-width: 1100px;
    padding: 15px 0 20px;
    margin: auto;
    line-height: 1.3;
    text-align: center;
    @media screen and (max-width: 1260px) {
      max-width: 1300px;
    }
    @media screen and (max-width: 600px) {
      max-width: none;
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
      url(../../assets/images/bg-about.png);
    background-position: 3% 25%, 85% bottom;
    background-size: 12%, auto 70%;
    background-repeat: no-repeat, no-repeat;
    @media screen and (min-width: 2160px) {
      padding: 90px 0 0;
    }
    @media screen and (max-width: 1440px) {
      padding: 115px 0 0;
    }
    @media screen and (max-width: 768px) {
      padding: 220px 0 0;
    }
    .content {
      .text {
        max-width: 560px;
        padding: 80px 0;
        margin: 0;
        color: @black-color;
        line-height: 1.13;
        @media screen and (max-width: 1260px) {
          max-width: 880px;
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
  :deep(.nebula-about) {
    padding: 120px 0 130px;
    line-height: 1.1;
    @media screen and (min-width: 2160px) {
      padding: 80px 0 100px;
    }
    @media screen and (max-width: 600px) {
      padding: 300 0 260px;
    }
    .content {
      margin: 0 55px;
      padding: 60px 75px 20px;
      background: url(../../assets/images/about/about-bg01.jpg) center no-repeat;
      background-size: cover;
      @media screen and (min-width: 2160px) {
        padding: 30px 35px 10px;
      }
      @media screen and (max-width: 600px) {
        padding: 120px 150px 40px;
      }
      .text {
        max-width: 660px;
        color: @white-color;
        line-height: 1.23;
        @media screen and (max-width: 1260px) {
          max-width: 860px;
        }
        @media screen and (max-width: 600px) {
          max-width: none;
        }
        h1 {
          padding: 0;
          @media screen and (max-width: 600px) {
            line-height: 1.1;
          }
        }
        p {
          margin: 20px 0 35px;
          line-height: 1.5;
          @media screen and (max-width: 600px) {
            margin: 40px 0 70px;
          }
        }
      }
    }
  }
  :deep(.What-We-Have) {
    padding: 0;
    text-align: center;
    .el-row {
      width: calc(100% + 26px);
      padding: 30px 0 0;
      margin-left: -13px;
      .el-col {
        max-width: 20%;
        flex: 0 0 20%;
        padding: 0 13px;
        margin: 0 0 23px;
        @media screen and (max-width: 768px) {
          max-width: 25%;
          flex: 0 0 25%;
          margin: 0 0 46px;
        }
        @media screen and (max-width: 600px) {
          max-width: 33.33%;
          flex: 0 0 33.33%;
        }
        @media screen and (max-width: 540px) {
          max-width: 50%;
          flex: 0 0 50%;
        }
        .content {
          position: relative;
          height: calc(100% - 30px);
          padding: 25px 10px 5px;
          background-color: @white-color;
          border: 1px solid #7f92c6;
          border-radius: 10px;
          text-align: center;
          // box-shadow: 0px 0px 13px rgba(71, 153, 185, 0.05),
          //   10px 10px 13px rgba(71, 153, 185, 0.1);
          @media screen and (min-width: 2160px) {
            height: calc(100% - 20px);
            padding: 15px 5px 5px;
          }
          @media screen and (max-width: 767px) {
            height: calc(100% - 60px);
            padding: 50px 20px 1px;
            border-radius: 20px;
          }
          &::before {
            position: absolute;
            content: "";
            right: -10px;
            top: 20px;
            bottom: 20px;
            width: 10px;
            background-color: #739dd2;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            @media screen and (max-width: 600px) {
              right: -16px;
              top: 20px;
              bottom: 20px;
              width: 15px;
              border-top-right-radius: 8px;
              border-bottom-right-radius: 8px;
            }
          }
          .tit {
            padding: 0 0 10px;
            line-height: 1.1;
            color: @theme-color;
            @media screen and (max-width: 600px) {
              padding: 0 0 20px;
            }
          }
          .desc {
            min-height: 44px;
            line-height: 1;
            color: #606060;
            text-transform: capitalize;
            @media screen and (min-width: 2160px) {
              min-height: 22px;
            }
            @media screen and (max-width: 600px) {
              min-height: 66px;
            }
            @media screen and (max-width: 540px) {
              min-height: 88px;
            }
          }
        }
      }
    }
  }
  :deep(.What-We-Do) {
    padding: 180px 0 15px;
    @media screen and (min-width: 2160px) {
      padding: 140px 0 10px;
    }
    @media screen and (max-width: 600px) {
      padding: 80px 0 30px;
    }
    .carousel-container {
      padding: 150px 0 40px;
      text-align: left;
      .el-row {
        padding: 0 55px 0 20px;
        .el-col {
          &.flex-row {
            display: flex;
          }
          .el-carousel {
            overflow: inherit;
            @media screen and (max-width: 767px) {
              padding-top: 400px;
            }
            .el-carousel__item {
              display: flex;
              align-items: center;
              background-color: @theme-color;
              color: @white-color;
              opacity: 0.3;
              border-radius: 15px;
              @media screen and (max-width: 767px) {
                border-radius: 30px;
              }
              &.is-active {
                opacity: 1;
              }
            }
            .el-carousel__indicators {
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
              top: 50%;
              bottom: auto;
              right: 115%;
              left: auto;
              width: 125px;
              height: 254px;
              transform: translateY(-50%);
              background: url(../../assets/images/about/background-image02.png)
                no-repeat center right;
              background-size: 100%;
              @media screen and (min-width: 2160px) {
                width: 100px;
                height: 202px;
              }
              @media screen and (max-width: 1024px) {
                width: 155px;
                height: 314px;
                right: 102%;
              }
              @media screen and (max-width: 992px) {
                right: 105%;
              }
              @media screen and (max-width: 767px) {
                width: 230px;
                height: 465px;
                margin-right: -115px;
                right: 50%;
                top: -3%;
                transform: rotate(90deg);
              }
              @media screen and (max-width: 600px) {
                width: 300px;
                height: 607px;
                margin-right: -150px;
                top: -5%;
              }
              li {
                position: relative;
                width: 100%;
                flex: 0 33.33%;
                padding: 0;
                .el-carousel__button {
                  display: none;
                }
                &::before {
                  position: absolute;
                  content: "A";
                  color: @white-color;
                  font-size: 30px;
                  z-index: 9;
                  @media screen and (max-width: 767px) {
                    transform: rotate(-90deg);
                    font-size: 45px;
                  }
                  @media screen and (max-width: 600px) {
                    font-size: 60px;
                  }
                }
                // &.is-active {
                //   &::before {
                //     color: @white-color;
                //   }
                // }
                &:nth-child(1) {
                  &::before {
                    content: "A";
                    left: 28%;
                    top: 32%;
                  }
                }
                &:nth-child(2) {
                  &::before {
                    content: "B";
                    right: 15%;
                    top: 35%;
                  }
                }
                &:nth-child(3) {
                  &::before {
                    content: "C";
                    left: 28%;
                    bottom: 23%;
                  }
                }
              }
            }
          }
          .content {
            padding: 0 35px;
            @media screen and (min-width: 2160px) {
              padding: 0 10px;
            }
            .tit {
              position: relative;
              padding: 0 0 10px 21px;
              line-height: 1.1;
              @media screen and (min-width: 2160px) {
                padding: 0 0 10px 16px;
              }
              @media screen and (max-width: 768px) {
                padding: 0 0 20px 42px;
              }
              @media screen and (max-width: 600px) {
                padding: 0 0 20px 62px;
              }
              &::before {
                position: absolute;
                content: "";
                left: 0;
                top: 6px;
                width: 6px;
                height: 6px;
                border: 4px solid @white-color;
                border-radius: 20px;
                @media screen and (min-width: 2160px) {
                  top: 0;
                  width: 4px;
                  height: 4px;
                }
                @media screen and (max-width: 768px) {
                  top: 12px;
                  width: 12px;
                  height: 12px;
                  border: 6px solid @white-color;
                }
                @media screen and (max-width: 600px) {
                  top: 14px;
                  width: 20px;
                  height: 20px;
                  border: 12px solid @white-color;
                }
              }
            }
            .headline {
              padding: 0 140px 0 0;
              text-align: left;
              line-height: 1.1;
              @media screen and (min-width: 2160px) {
                padding: 0 100px 0 0;
              }
            }
            .desc {
              text-align: left;
              line-height: 1.25;
            }
          }
        }
      }
    }
  }
  :deep(.our-value) {
    padding: 140px 0;
    text-align: center;
    @media screen and (min-width: 2160px) {
      padding: 70px 0;
    }
    @media screen and (max-width: 600px) {
      padding: 280px 0;
    }
    .title {
      margin-bottom: 0;
    }
    .tit-center {
      max-width: 1000px;
      padding-top: 0;
      @media screen and (max-width: 1260px) {
        max-width: 1200px;
      }
    }
    .el-row {
      position: relative;
      padding: 100px 0 0;
      @media screen and (min-width: 2160px) {
        padding: 55px 0 0;
      }
      @media screen and (max-width: 600px) {
        padding: 200px 0 0;
      }
      .el-col {
        max-width: 20%;
        flex: 0 0 20%;
        padding: 0 22px;
        margin: 0 0 23px;
        @media screen and (min-width: 2160px) {
          padding: 0 11px;
          margin: 0 0 13px;
        }
        @media screen and (max-width: 768px) {
          max-width: 25%;
          flex: 0 0 25%;
          margin: 0 0 46px;
        }
        @media screen and (max-width: 767px) {
          margin: 60px auto !important;
        }
        @media screen and (max-width: 600px) {
          max-width: 33.33%;
          flex: 0 0 33.33%;
        }
        @media screen and (max-width: 540px) {
          max-width: 50%;
          flex: 0 0 50%;
        }
        &:nth-child(2n + 1) {
          margin-top: 75px;
          @media screen and (min-width: 2160px) {
            margin-top: 35px;
          }
          @media screen and (max-width: 600px) {
            margin-top: 150px;
          }
          .content {
            background-color: @theme-color;
            border: 1px solid @theme-color;
          }
        }
        .content {
          padding: 40px 20px 20px;
          background-color: #739dd2;
          border: 1px solid #739dd2;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0px 0px 13px rgba(71, 153, 185, 0.05),
            10px 10px 13px rgba(71, 153, 185, 0.1);
          color: @white-color;
          @media screen and (min-width: 2160px) {
            padding: 20px 10px 10px;
          }
          @media screen and (max-width: 767px) {
            padding: 80px 40px 40px;
            border-radius: 30px;
          }
          .image {
            height: 45px;
            @media screen and (min-width: 2160px) {
              height: 30px;
            }
            @media screen and (max-width: 600px) {
              height: 80px;
            }
            @media screen and (max-width: 540px) {
              height: 110px;
            }
          }
          .tit {
            padding: 15px 0 20px;
            line-height: 1.1;
            text-align: center;
            @media screen and (min-width: 2160px) {
              padding: 10px 0 10px;
            }
            @media screen and (max-width: 600px) {
              padding: 50px 0 40px;
            }
          }
          .desc {
            text-align: left;
            line-height: 1.5;
          }
        }
      }
    }
  }
}
</style>
