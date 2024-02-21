<template>
  <div class="footer">
    <div class="powered lang-max flex-row space-between">
      <div class="footer_all">
        <el-row class="row-bg" justify="space-between">
          <el-col :xs="24" :sm="24" :md="24" :lg="7" :xl="7">
            <img :src="nebulaLogo" class="footer_logo" alt="Swan" @click="goMain" />
            <div class="media-list flex-row">
              <a href="https://twitter.com/nebulablockdata" target="_blank">
                <img :src="media01" alt="">
              </a>
              <a href="https://nebulablock.medium.com/" target="_blank">
                <img :src="media02" alt="">
              </a>
              <a href="https://www.linkedin.com/company/nebula-block/" target="_blank">
                <img :src="media03" alt="">
              </a>
            </div>
            <div class="li">
              <h6 class="font-22 weight-5">Address</h6>
              <p class="font-16 weight-3">5311 Boul. de Maisonneuve Ouest,Suite 306,Montréal, QC H4A 1Z5</p>
            </div>
            <div class="li">
              <h6 class="font-22 weight-5">Contact us</h6>
              <p class="font-16 weight-3">Email:contact@nebulablock.com</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
            <el-row>
              <el-col :xs="24" :sm="11" :md="11" :lg="11" :xl="11" class="font-22">
                <a href="javascript:;" class="weight-7">{{$t('menu.Products')}}</a>
                <router-link :to="{name: 'blockchainHosting'}" class="t weight-3">{{$t('menu.Blockchain-Hosting')}}</router-link>
                <router-link :to="{name: 'gpuClusters'}" class="t weight-3">{{$t('menu.GPU-Clusters')}}</router-link>
                <router-link :to="{name: 'bareMetal'}" class="t weight-3">{{$t('menu.Bare-Metal')}}</router-link>
                <router-link :to="{name: 'cloud'}" class="t weight-3">{{$t('menu.Cloud')}}</router-link>
                <router-link :to="{name: 'colocation'}" class="t weight-3">{{$t('menu.Colocation')}}</router-link>
              </el-col>
              <el-col :xs="24" :sm="9" :md="9" :lg="9" :xl="9" class="font-22">
                <a href="javascript:;" class="weight-7">{{$t('menu.Company')}}</a>
                <router-link :to="{name: 'aboutUs'}" class="t weight-3">{{$t('menu.About-Us')}}</router-link>
                <a href="https://nebulablock.medium.com/" class="t weight-3" target="_blank">{{$t('menu.Blog')}}</a>
              </el-col>
              <el-col :xs="24" :sm="4" :md="4" :lg="4" :xl="4" class="font-22">
                <a href="https://nebulablock.freshdesk.com/support/home" target="_blank" class="weight-7">{{$t('menu.Support')}}</a>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="24">
            <div class="copy tit font-20 weight-3">{{$t('footer.copy')}}</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { ElRow, ElCol } from 'element-plus'
export default defineComponent({
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth < 992)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const nebulaLogo = require(`@/assets/images/logo-white.png`)
    const media01 = require(`@/assets/images/dashboard/media-01.png`)
    const media02 = require(`@/assets/images/dashboard/media-02.png`)
    const media03 = require(`@/assets/images/dashboard/media-03.png`)

    function goMain () {
      router.push({ name: 'dashboard' })
    }
    onMounted(() => { })
    return {
      system,
      nebulaLogo,
      goMain,
      media01, media02, media03
    }
  },
  components: { ElRow, ElCol }
})
</script>
<style  lang="less" scoped>
.footer {
  position: relative;
  width: 100%;
  padding: 100px 0 75px;
  background: linear-gradient(90deg, #142149, @theme-color);
  @media screen and (max-width: 768px) {
    padding: 150px 0 110px;
  }
  @media screen and (max-width: 600px) {
    padding: 200px 0 150px;
  }
  .powered {
    // width: 100%;
    padding: 0;
    font-weight: 400;
    color: @white-color;
    @media screen and (max-width: 600px) {
      line-height: 2.5;
    }
    .footer_all {
      width: 100%;
      .el-row {
        display: flex;
        flex-wrap: wrap;
        .el-col {
          .footer_logo {
            display: block;
            height: 54px;
            margin: 0 0 100px;
            cursor: pointer;
            @media screen and (min-width: 2160px) {
              height: 27px;
            }
            @media screen and (max-width: 768px) {
              height: 108px;
            }
            @media screen and (max-width: 600px) {
              height: 135px;
            }
          }
          .media-list {
            @media screen and (max-width: 600px) {
              margin: 0 0 55px;
            }
            a {
              display: block;
              margin: 0 20px 0 0;
              @media screen and (min-width: 2160px) {
                margin: 0 10px 0 0;
              }
              @media screen and (max-width: 768px) {
                margin: 0 30px 0 0;
              }
              @media screen and (max-width: 600px) {
                margin: 0 40px 0 0;
              }
              @media screen and (max-width: 540px) {
                margin: 0 60px 0 0;
              }
              img,
              svg {
                display: block;
                width: 40px;
                height: 40px;
                cursor: pointer;
                opacity: 0.8;
                transition: all 0.2s;
                @media screen and (min-width: 2160px) {
                  width: 20px;
                  height: 20px;
                }
                @media screen and (max-width: 768px) {
                  width: 80px;
                  height: 80px;
                }
                @media screen and (max-width: 600px) {
                  width: 100px;
                  height: 100px;
                }
                &:hover {
                  opacity: 1;
                }
              }
            }
          }
          .li {
            padding: 14px 0 8px;
            margin: 14px 0 0;
            border-bottom: 1px solid #a1aed4;
            position: relative;
            color: @white-color;
            line-height: 1.1;
            &:after {
              content: "";
              display: block;
              width: 17px;
              height: 5px;
              background-color: @white-color;
              position: absolute;
              left: 0;
              bottom: -2.5px;
            }
            h6 {
              margin-bottom: 5px;
            }
          }
          .copy {
            margin: 55px 0 0;
            color: @white-color;
            text-transform: uppercase;
          }
          .el-row {
            margin: 0;
            @media screen and (max-width: 860px) {
              margin: 34px 0 0;
            }
            .el-col {
              a {
                display: block;
                padding: 20px 0;
                margin: 0 0 15px;
                color: @white-color;
                font-size: inherit;
                line-height: 1;
                text-transform: uppercase;
                @media screen and (max-width: 600px) {
                  margin: 50px 0 15px;
                }
              }
              a.t {
                line-height: 1.5;
                padding: 7px 0;
                margin: 0;
                text-transform: capitalize;
                color: rgba(229, 235, 255, 0.56);
                transition: all 0.2s;
                &:hover {
                  color: @white-color;
                }
              }
            }
          }
        }
        .el-col-9 {
          @media screen and (max-width: 999px) {
            width: 30%;
          }
        }
        .el-col-15 {
          @media screen and (max-width: 999px) {
            width: 70%;
          }
        }
      }
    }
    // .el-row {
    //   width: 100%;
    //   @media screen and (max-width: 767px) {
    //     flex-direction: column-reverse;
    //   }
    //   .el-col {
    //     .tit {
    //       margin: 24px 0 0;
    //       text-align: center;
    //     }
    //     .foot-media {
    //       .media-list {
    //         a {
    //           display: block;
    //           margin: 0 12px;
    //           @media screen and (min-width: 2160px) {
    //             margin: 0 6px;
    //           }
    //           @media screen and (max-width: 768px) {
    //             margin: 0 18px;
    //           }
    //           @media screen and (max-width: 600px) {
    //             margin: 0 24px;
    //           }
    //           @media screen and (max-width: 540px) {
    //             margin: 0 36px;
    //           }
    //           img,
    //           svg {
    //             display: block;
    //             width: 43px;
    //             height: 43px;
    //             cursor: pointer;
    //             @media screen and (min-width: 2160px) {
    //               width: 20px;
    //               height: 20px;
    //             }
    //             @media screen and (max-width: 768px) {
    //               width: 86px;
    //               height: 86px;
    //             }
    //             @media screen and (max-width: 600px) {
    //               width: 100px;
    //               height: 100px;
    //             }
    //             &:hover {
    //               opacity: 0.7;
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }
}
</style>