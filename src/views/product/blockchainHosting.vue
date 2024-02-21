<template>
  <section id="container-main">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text">
          <h1 class="font-50 font-gilroy-bold">{{$t('product.ebi.title')}}</h1>
          <p class="font-24" v-html="$t('product.ebi.describe')"></p>
          <div class="learn-more font-30" @click="system.$commonFun.contactUsMethod()">{{$t('public.Contact-Us')}}</div>
        </div>
      </div>
    </div>

    <div class="blockchain">
      <div class="subtit font-30 font-gilroy-bold">{{$t('product.ebi.blockchain.title')}}</div>
      <div class="block-cont flex-row center">
        <img v-for="b in blockData" :key="b" :src="b.img" />
      </div>
      <!-- <el-row class="row-bg" :gutter="30" justify="space-between">
        <el-col :xs="24" :sm="12" :md="4" :lg="4" :xl="4" v-for="list in blockListData" :key="list">
          <div class="content">
            <p class="tit font-30 font-gilroy-bold">{{list.title}}</p>
          </div>
        </el-col>
      </el-row> -->
    </div>

    <div class="realm">
      <div class="subtit font-30 font-gilroy-bold">{{$t('product.ebi.realm.title')}}</div>
      <div class="realm-cont lang-max">
        <el-row class="row-bg" :gutter="20" justify="space-between">
          <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="r in realmData" :key="r">
            <div class="content">
              <div class="image">
                <img :src="r.img" />
              </div>
              <p class="tit font-22" v-html="r.title"></p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="builders">
      <div class="lang-max">
        <div class="builders-cont flex-row space-between">
          <div class="font-46 font-gilroy-black" v-html="$t('product.ebi.builders.title')"></div>
          <div class="learn-more font-33 font-gilroy-bold" @click="system.$commonFun.contactUsMethod()">{{$t('public.Contact-Us')}}</div>
        </div>
      </div>
    </div>

    <div class="network">
      <div class="network-cont flex-row center">
        <el-row class="row-bg" :gutter="44" justify="space-between">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="n in networkData" :key="n">
            <div class="module" :class="{'hide': n.collapse}">
              <h1 class="font-20 weight-6 flex-row space-between padding nowrap">
                <div class="flex-row nowrap">
                  <img :src="n.img" />{{n.title}}
                </div>
                <!-- <div class="button width-icon" @click="n.collapse=!n.collapse">
                  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon">
                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                  </svg>
                </div> -->
              </h1>
              <div class="area flex-row flex-start">
                <ul>
                  <li class="desc font-18 flex-row nowrap" v-for="g in n.list" :key="g">
                    <div class="width-icon min-small">
                      <Right />
                    </div>
                    <span v-html="g"></span>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="learn-more font-30 font-gilroy-bold" @click="system.$commonFun.contactUsMethod()">{{$t('public.Contact-Us')}}</div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import {
  Right
} from '@element-plus/icons-vue'
import { ElRow, ElCol, ElButton } from 'element-plus'
export default defineComponent({
  components: {
    Right,
    ElRow, ElCol, ElButton
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const carouselHeight = ref(document.body.clientWidth >= 1600 ? '600px' : document.body.clientWidth <= 768 ? '350px' : '450px')
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const interData = ref([
      {
        title: t('product.bareMetal.inter.list-1.title-1'),
        minthPrice: 139.9,
        list: [
          t('product.bareMetal.inter.list-1.describe-1'),
          t('product.bareMetal.inter.list-1.describe-2'),
          t('product.bareMetal.inter.list-1.describe-3'),
          t('product.bareMetal.inter.list-1.describe-4'),
          t('product.bareMetal.inter.list-1.describe-5'),
          t('product.bareMetal.inter.list-1.describe-6'),
        ]
      },
      {
        title: t('product.bareMetal.inter.list-2.title-1'),
        minthPrice: 149.9,
        list: [
          t('product.bareMetal.inter.list-2.describe-1'),
          t('product.bareMetal.inter.list-2.describe-2'),
          t('product.bareMetal.inter.list-2.describe-3'),
          t('product.bareMetal.inter.list-2.describe-4'),
          t('product.bareMetal.inter.list-2.describe-5'),
          t('product.bareMetal.inter.list-2.describe-6'),
        ]
      }
    ])
    const blockData = ref([
      {
        img: require(`@/assets/images/ebi/logo-01.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-06.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-04.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-12.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-13.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-14.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-15.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-16.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-02.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-03.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-05.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-07.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-08.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-09.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-10.png`)
      },
      {
        img: require(`@/assets/images/ebi/logo-11.png`)
      }
    ])
    const blockListData = ref([
      {
        title: t('product.ebi.blockchain.title-1')
      },
      {
        title: t('product.ebi.blockchain.title-2')
      },
      {
        title: t('product.ebi.blockchain.title-3')
      },
      {
        title: t('product.ebi.blockchain.title-4')
      },
      {
        title: t('product.ebi.blockchain.title-5')
      },
      {
        title: t('product.ebi.blockchain.title-6')
      }
    ])
    const realmData = ref([
      {
        img: require("@/assets/images/ebi/icon-01.png"),
        title: t('product.ebi.realm.title-1')
      },
      {
        img: require("@/assets/images/ebi/icon-02.png"),
        title: t('product.ebi.realm.title-2')
      },
      {
        img: require("@/assets/images/ebi/icon-03.png"),
        title: t('product.ebi.realm.title-3')
      },
      {
        img: require("@/assets/images/ebi/icon-04.png"),
        title: t('product.ebi.realm.title-4')
      },
    ])
    const networkData = ref([
      {
        collapse: false,
        img: require("@/assets/images/ebi/card-logo-01.png"),
        title: t('product.ebi.network.list-1.title'),
        list: [
          t('product.ebi.network.list-1.describe-1'),
          t('product.ebi.network.list-1.describe-2'),
          t('product.ebi.network.list-1.describe-3'),
          t('product.ebi.network.list-1.describe-4'),
          t('product.ebi.network.list-1.describe-5'),
          t('product.ebi.network.list-1.describe-6'),
        ]
      },
      {
        collapse: false,
        img: require("@/assets/images/ebi/card-logo-02.png"),
        title: t('product.ebi.network.list-2.title'),
        list: [
          t('product.ebi.network.list-2.describe-1'),
          t('product.ebi.network.list-2.describe-2')
        ]
      },
      {
        collapse: false,
        img: require("@/assets/images/ebi/card-logo-03.png"),
        title: t('product.ebi.network.list-3.title'),
        list: [
          t('product.ebi.network.list-3.describe-1'),
          t('product.ebi.network.list-3.describe-2'),
          t('product.ebi.network.list-3.describe-3'),
          t('product.ebi.network.list-3.describe-4')
        ]
      },
      {
        collapse: false,
        img: require("@/assets/images/ebi/card-logo-04.png"),
        title: t('product.ebi.network.list-4.title'),
        list: [
          t('product.ebi.network.list-4.describe-1'),
          t('product.ebi.network.list-4.describe-2')
        ]
      },
      {
        collapse: false,
        img: require("@/assets/images/ebi/card-logo-06.png"),
        title: t('product.ebi.network.list-6.title'),
        list: [
          t('product.ebi.network.list-6.describe-1'),
          t('product.ebi.network.list-6.describe-2')
        ]
      }
    ])

    onMounted(() => { })
    return {
      system,
      blockData,
      blockListData,
      realmData,
      networkData
    }
  }
})
</script>

<style lang="less" scoped>
#container-main {
  padding: 0 0 100px;
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
      url(../../assets/images/bg-ebi.png);
    background-position: 3% 35%, 40% 0%, 80% bottom;
    background-size: 12%, 17%, auto 75%;
    background-repeat: no-repeat, no-repeat, no-repeat;
    @media screen and (min-width: 2160px) {
      padding: 80px 0 0;
    }
    @media screen and (max-width: 1440px) {
      padding: 105px 0 0;
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
  :deep(.blockchain) {
    padding: 0 40px;
    margin: 0 auto 80px;
    .block-cont {
      width: 90%;
      // max-width: 900px;
      margin: 120px auto 70px;
      // @media screen and (max-width: 768px) {
      //   max-width: 1350px;
      // }
      img {
        height: 100px;
        margin: 0;
        @media screen and (max-width: 768px) {
          height: 150px;
        }
        @media screen and (max-width: 767px) {
          height: 200px;
        }
      }
    }
    .row-bg {
      .el-col {
        margin: 10px 0;
        @media screen and (max-width: 767px) {
          margin: 20px 0;
        }
        .content {
          height: calc(100% - 40px);
          padding: 20px 0;
          background-color: @theme-color;
          color: @white-color;
          border-radius: 10px;
          text-align: center;
          @media screen and (max-width: 768px) {
            height: calc(100% - 80px);
            padding: 40px 0;
            border-radius: 20px;
          }
        }
      }
    }
  }
  :deep(.realm),
  :deep(.blockchain) {
    text-align: center;
    overflow: hidden;
    .subtit {
      max-width: 1024px;
      margin: 70px auto 20px;
      color: @theme-color;
      line-height: 1.4;
      @media screen and (max-width: 768px) {
        max-width: 95%;
      }
    }
    .realm-cont {
      margin: 70px auto 100px;
      .el-row {
        text-align: left;
        .el-col {
          margin: 50px auto 0;
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
              height: 90px;
              img {
                height: 100%;
              }
            }
            .tit {
              margin: 50px 0 0;
              line-height: 1.5;
            }
          }
        }
      }
    }
  }
  :deep(.builders) {
    margin: 120px auto;
    background-color: @theme-color;
    color: @white-color;
    .builders-cont {
      padding: 40px 120px;
      @media screen and (max-width: 767px) {
        padding: 135px 0 80px;
      }
      .learn-more {
        margin: 55px 0;
        padding: 22px 40px;
        background-color: @white-color;
        border-color: @white-color;
        color: @theme-color;
      }
    }
  }
  :deep(.network) {
    padding: 100px 0 120px;
    text-align: center;
    .network-cont {
      width: 90%;
      max-width: 900px;
      margin: 0 auto 20px;
      @media screen and (max-width: 768px) {
        max-width: 1350px;
      }
      .row-bg {
        .el-col {
          margin: 0 0 45px;
          .module {
            height: 100%;
            margin: 0 auto;
            background-color: @white-color;
            color: @black-color;
            border-radius: 20px;
            box-shadow: 0 3px 5px rgba(77, 135, 253, 0.2);
            @media screen and (max-width: 768px) {
              box-shadow: 0 6px 10px rgba(77, 135, 253, 0.2);
              border-radius: 40px;
            }
            &.hide {
              height: auto;
              .area {
                height: 0;
                border-top: 0;
              }
              h1 {
                .button {
                  transform: rotate(-90deg);
                }
              }
            }
            h1 {
              // text-shadow: 0px 0px 9px #e77304;
              color: #7a7a7a;
              &.padding {
                padding: 12px 30px;
                @media screen and (max-width: 767px) {
                  padding: 24px 60px;
                }
              }
              .nowrap {
                width: 100%;
                word-break: break-word;
              }
              img {
                height: 55px;
                margin: 0 15px 0 0;
                @media screen and (max-width: 768px) {
                  height: 80px;
                  margin: 0 20px 0 0;
                }
                @media screen and (max-width: 600px) {
                  height: 110px;
                  margin: 0 30px 0 0;
                }
              }
            }
            .area {
              height: auto;
              max-height: unset;
              text-align: center;
              transition: all 0.3s;
              overflow: hidden;
              border-top: 2px solid #a2abd2;
              p.tit {
                width: 100%;
              }
              ul {
                padding: 30px 60px;
                @media screen and (max-width: 767px) {
                  padding: 60px 120px;
                }
                li {
                  align-items: flex-start;
                  padding: 4px 0;
                  text-align: left;
                  line-height: 1.3;
                  color: inherit;
                  @media screen and (max-width: 767px) {
                    padding: 8px 0;
                  }
                  .width-icon {
                    margin: 0 10px 0 0;
                    fill: #28479d;
                    svg,
                    path {
                      fill: inherit;
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
}
</style>
