<template>
  <section id="container-main">
    <div class="banner">
      <div class="content lang-max flex-row">
        <div class="text">
          <h1 class="font-50 font-gilroy-bold">{{$t('product.colocation.title')}}</h1>
          <p class="font-24">{{$t('product.colocation.describe')}}</p>
          <div class="learn-more font-30" @click="system.$commonFun.contactUsMethod()">{{$t('public.Contact-Us')}}</div>
        </div>
      </div>
    </div>

    <div class="plan">
      <div class="title s font-33 font-gilroy-bold">{{$t('product.colocation.plan.title')}}</div>
      <div class="plan-cont">
        <el-row class="row-bg" :gutter="40" justify="space-between">
          <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" v-for="p in planData" :key="p">
            <div class="content">
              <p class="tit font-30 font-gilroy-bold flex-row center">{{p.title}}</p>
              <p class="subtit font-18 flex-row center">
                <span class="font-48 font-gilroy-bold">${{p.minthPrice}}</span>/ month
              </p>
              <p class="desc font-16 flex-row center">Once-off setup: {{p.from}} ${{p.onceOff}}</p>
              <div class="learn-more font-18" @click="system.$commonFun.contactUsMethod()">{{$t('public.Contact-Us')}}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="features">
      <div class="title font-33 font-gilroy-bold">{{$t('product.colocation.features.title')}}</div>
      <div class="features-cont">
        <div class="table-cont">
          <!-- <div class="tit font-22">Infrastructure</div> -->
          <el-table :data="tableData" border fit :span-method="headerStyle" table-layout="fixed" style="width: 100%">
            <el-table-column prop="name">
              <template #header>
                <span class="font-22 weight-4">Infrastructure</span>
              </template>
              <template #default="scope">
                <span class="font-18 m">{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="resule">
              <template #header>
                <span class="font-22 weight-4">MTL1</span>
              </template>
              <template #default="scope">
                <span class="font-18 m">{{scope.row.resule}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="resule">
              <template #header>
                <span class="font-22 weight-4">MTL2</span>
              </template>
              <template #default="scope">
                <span class="font-18 m">{{scope.row.resule1}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="resule">
              <template #header>
                <span class="font-22 weight-4">RAL</span>
              </template>
              <template #default="scope">
                <span class="font-18 m">{{scope.row.resule2}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="table-cont">
          <div class="tit font-22">Terms</div>
          <el-table :data="tableData02" :show-header="false" border fit table-layout="fixed" style="width: 100%">
            <el-table-column prop="name" label="Name">
              <template #default="scope">
                <span class="font-18">{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="resule" label="Address">
              <template #default="scope">
                <span class="font-18">{{scope.row.resule}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <div class="locations-area">
      <div class=" lang-max">
        <el-row class="content" justify="space-between">
          <el-col :xs="24" :sm="24" :md="15" :lg="15" :xl="15">
            <div class="big-tit font-33 font-gilroy-bold">COLOCATION LOCATIONS</div>
          </el-col>
        </el-row>

        <div class="swiper-location">
          <el-row class="show content flex-row" justify="space-between">
            <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14" class="left gallery">
              <ul class="gallery-thumbs flex-row swiper-wrapper">
                <li class="font-18 flex-row nowrap swiper-slide">
                  <span></span>
                  <b class="font-gilroy-bold">Montreal</b> <img :src="location01" class="l" />
                </li>
                <li class="font-18 flex-row nowrap swiper-slide">
                  <span></span>
                  <b class="font-gilroy-bold">Montreal</b> <img :src="location01" class="l" />
                </li>
                <li class="font-18 flex-row nowrap swiper-slide">
                  <span></span>
                  <b class="font-gilroy-bold">Raleign</b> <img :src="location02" class="l" />
                </li>
              </ul>
            </el-col>
          </el-row>

          <div class="gallery-swiper">
            <div class="swiper-wrapper">
              <!-- items -->
              <el-row class="hide content flex-row swiper-slide" justify="space-between">
                <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14" class="left">
                  <ul class="gallery-thumbs flex-row">
                    <li class="font-18 flex-row nowrap">
                      <span></span>
                      <b class="font-gilroy-bold">Montreal</b> <img :src="location01" class="l" />
                    </li>
                    <li class="font-18 flex-row nowrap">
                      <span></span>
                      <b class="font-gilroy-bold">Montreal</b> <img :src="location01" class="l" />
                    </li>
                    <li class="font-18 flex-row nowrap">
                      <span></span>
                      <b class="font-gilroy-bold">Raleign</b> <img :src="location02" class="l" />
                    </li>
                  </ul>

                  <div class="tit font-18 font-gilroy-bold">DIRECT CONNECTIVITY TO CLOUD ONRAMPS!</div>
                  <div class="logo flex-row">
                    <img v-for="i in logoImg" :key="i" :src="i" />
                  </div>

                  <div class="tit font-18 font-gilroy-bold">WORLD’S LARGEST DATA CENTER PROVIDER</div>
                  <el-row class="list-text" :gutter="12" justify="space-between">
                    <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" v-for="t in worldText" :key="t">
                      <div class="text-area top flex-row center font-14">{{t}}</div>
                    </el-col>
                  </el-row>

                  <div class="tit font-18 font-gilroy-bold">RANKING 1ST GLOBALLY</div>
                  <el-row class="list-text" :gutter="30" justify="space-between">
                    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" v-for="r in rankingText" :key="r">
                      <div class="text-area top flex-row center font-14">{{r}}</div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="right">
                  <img :src="locationImg01" class="img" />
                  <el-row justify="space-between">
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                      <div class="font-20 font-gilroy-bold">2980+</div>
                      <p class="font-16">Enterprises</p>
                    </el-col>
                    <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                      <div class="font-20 font-gilroy-bold">750+</div>
                      <p class="font-16">Digital content provider</p>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                      <div class="font-20 font-gilroy-bold">1800+</div>
                      <p class="font-16">Networks</p>
                    </el-col>
                    <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                      <div class="font-20 font-gilroy-bold">2900+</div>
                      <p class="font-16">Cloud & IT service providers</p>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>

              <!-- items -->
              <el-row class="hide content flex-row swiper-slide" justify="space-between">
                <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14" class="left">
                  <ul class="gallery-thumbs flex-row">
                    <li class="font-18 flex-row nowrap">
                      <span></span>
                      <b class="font-gilroy-bold">Montreal</b> <img :src="location01" class="l" />
                    </li>
                    <li class="font-18 flex-row nowrap">
                      <span></span>
                      <b class="font-gilroy-bold">Montreal</b> <img :src="location01" class="l" />
                    </li>
                    <li class="font-18 flex-row nowrap">
                      <span></span>
                      <b class="font-gilroy-bold">Raleign</b> <img :src="location02" class="l" />
                    </li>
                  </ul>

                  <div class="tit font-18 font-gilroy-bold">FULLY CUSTOMIZABLE DATA CENTER PROVIDER</div>
                  <el-row class="list-text" :gutter="12" justify="space-between">
                    <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" v-for="fully in fullyText" :key="fully">
                      <ul class="text-area top flex-row font-14">
                        <li v-for="f in fully.list" :key="f">{{f}}
                        </li>
                      </ul>
                    </el-col>
                  </el-row>

                  <div class="tit font-18 font-gilroy-bold">TRANSPARENT COLOCATION SERVICES</div>
                  <el-row class="list-text" :gutter="30" justify="space-between">
                    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" v-for="trans in transparentText" :key="trans">
                      <div class="text-area top flex-row font-14">{{trans}}</div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="right">
                  <img :src="locationImg01" class="img" />
                </el-col>
              </el-row>

              <!-- items -->
              <el-row class="hide content flex-row swiper-slide" justify="space-between">
                <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14" class="left">
                  <ul class="gallery-thumbs flex-row">
                    <li class="font-18 flex-row nowrap">
                      <span></span>
                      <b class="font-gilroy-bold">Montreal</b> <img :src="location01" class="l" />
                    </li>
                    <li class="font-18 flex-row nowrap">
                      <span></span>
                      <b class="font-gilroy-bold">Montreal</b> <img :src="location01" class="l" />
                    </li>
                    <li class="font-18 flex-row nowrap">
                      <span></span>
                      <b class="font-gilroy-bold">Raleign</b> <img :src="location02" class="l" />
                    </li>
                  </ul>

                  <div class="tit font-18 font-gilroy-bold">US BASED 37+ COLOCATION FACILITIES ACROSS 50 STATES</div>
                  <el-row class="list-text" :gutter="12" justify="space-between">
                    <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6" v-for="based in basedText" :key="based">
                      <div class="text-area top flex-row center font-14">{{based}}</div>
                    </el-col>
                  </el-row>

                  <div class="tit big font-18 font-gilroy-bold">9.5/10 CUSTOMER SATISFACTION</div>
                  <el-row class="list-text" :gutter="30" justify="space-between">
                    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" v-for="customer in customerText" :key="customer">
                      <div class="text-area top flex-row center font-14">{{customer}}</div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :xs="24" :sm="24" :md="9" :lg="9" :xl="9" class="right">
                  <img :src="locationImg02" class="img" />
                  <img :src="logoList01" class="img width small" />
                  <img :src="logoList02" class="img width" />
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="can-content">
      <div class="title font-33 font-gilroy-bold">{{$t('product.colocation.dataCenter.title')}}</div>
      <div class="swiper flex-row center">
        <div class="lang-max">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="s in swiperData" :key="s">
                <img :src="s.img" />
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <div class="introduction flex flex-row center">
        <el-row class="lang-max" :gutter="80" justify="center">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="content content-stretch flex-row">
              <div class="subtit font-24 font-gilroy-black">
                {{$t('product.colocation.dataCenter.text')}}
              </div>
              <div class="text flex-row">
                <ul class="flex-row">
                  <li class="font-24" v-for="soc in introduText" :key="soc">{{soc}}</li>
                </ul>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="content content-stretch">
              <el-row class="data-area" :gutter="35" justify="space-between">
                <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8" v-for="(datas, d) in dataCenterData" :key="d">
                  <div class="content">
                    <p :class="{'tit font-27':true, 'font-24': d === 1 || d === 3 }">{{datas.title}}</p>
                    <p class="desc font-14">{{datas.desc}}</p>
                  </div>
                </el-col>
              </el-row>
              <el-row class="logo-area">
                <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="6" v-for="center in centersData" :key="center">
                  <img :src="center.img" class="img" />
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="shop-value lang-max">
      <div class="title font-33 font-gilroy-bold">{{$t('product.colocation.turnkey.title')}}</div>
      <div class="turnkey flex-row space-between">
        <ul class="left">
          <li class="flex-row space-between nowrap" v-for="(item, t) in turnkeyData" :key="t" v-show="t<3">
            <p class="font-22">{{item.title}}</p>
            <div class="icon-cont flex-row space-between nowrap">
              <span class="point"></span>
              <span class="icon"></span>
            </div>
          </li>
        </ul>
        <ul class="right">
          <li class="flex-row space-between flex-end nowrap" v-for="(item, t) in turnkeyData" :key="t" v-show="t>=3">
            <div class="icon-cont flex-row space-between nowrap">
              <span class="icon"></span>
              <span class="point"></span>
            </div>
            <p class="font-22">{{item.title}}</p>
          </li>
        </ul>
      </div>

      <div class="title font-33 font-gilroy-bold">{{$t('product.colocation.shop.title')}}</div>
      <el-row class="row-bg" :gutter="20" justify="space-between">
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="value in valueData" :key="value">
          <div class="image flex-row center">
            <img :src="shopImg" />
          </div>
          <div class="content">
            <p class="tit font-23 font-gilroy-bold flex-row center">{{value.title}}</p>
            <ul>
              <li class="desc font-16 flex-row nowrap" v-for="shop in value.list" :key="shop">
                <div class="width-icon min-small">
                  <Right />
                </div>
                {{shop}}
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
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
import { ElRow, ElCol, ElButton, ElTable, ElTableColumn } from 'element-plus'
import Swiper from '@/assets/js/swiper.min.js'
export default defineComponent({
  components: {
    Right,
    ElRow, ElCol, ElButton, ElTable, ElTableColumn
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const valueData = ref([
      {
        title: t('product.colocation.shop.title-1'),
        list: [
          t('product.colocation.shop.list-1.desc-1'),
          t('product.colocation.shop.list-1.desc-2'),
          t('product.colocation.shop.list-1.desc-3'),
          t('product.colocation.shop.list-1.desc-4'),
        ]
      },
      {
        title: t('product.colocation.shop.title-2'),
        list: [
          t('product.colocation.shop.list-2.desc-1'),
          t('product.colocation.shop.list-2.desc-2'),
          t('product.colocation.shop.list-2.desc-3'),
          t('product.colocation.shop.list-2.desc-4'),
        ]
      },
      {
        title: t('product.colocation.shop.title-3'),
        list: [
          t('product.colocation.shop.list-3.desc-1'),
          t('product.colocation.shop.list-3.desc-2'),
          t('product.colocation.shop.list-3.desc-3'),
          t('product.colocation.shop.list-3.desc-4'),
        ]
      },
      {
        title: t('product.colocation.shop.title-4'),
        list: [
          t('product.colocation.shop.list-4.desc-1'),
          t('product.colocation.shop.list-4.desc-2'),
          t('product.colocation.shop.list-4.desc-3'),
          t('product.colocation.shop.list-4.desc-4'),
        ]
      },
    ])
    const shopImg = require("@/assets/images/colocation/shop-bg.png")
    const turnkeyData = ref([
      {
        title: t('product.colocation.turnkey.title-1'),
        img: require("@/assets/images/colocation/turnky-icon-01.png")
      },
      {
        title: t('product.colocation.turnkey.title-2'),
        img: require("@/assets/images/colocation/turnky-icon-02.png")
      },
      {
        title: t('product.colocation.turnkey.title-3'),
        img: require("@/assets/images/colocation/turnky-icon-03.png")
      },
      {
        title: t('product.colocation.turnkey.title-4'),
        img: require("@/assets/images/colocation/turnky-icon-04.png")
      },
      {
        title: t('product.colocation.turnkey.title-5'),
        img: require("@/assets/images/colocation/turnky-icon-05.png")
      },
      {
        title: t('product.colocation.turnkey.title-6'),
        img: require("@/assets/images/colocation/turnky-icon-06.png")
      }
    ])
    const introduText = ref([
      'SOC 1 Type II',
      'SOC 2 Type II',
      'HIPAA',
      'SOC 2 + HITRUST',
      'GLBA',
      'PCI-DSS1',
      'NIST SP 800-53 rev 41',
    ])
    const centersData = ref([
      {
        img: require(`@/assets/images/colocation/dataCenters/dataCenters-01.png`)
      },
      {
        img: require(`@/assets/images/colocation/dataCenters/dataCenters-02.png`)
      },
      {
        img: require(`@/assets/images/colocation/dataCenters/dataCenters-03.png`)
      },
      {
        img: require(`@/assets/images/colocation/dataCenters/dataCenters-04.png`)
      },
      {
        img: require(`@/assets/images/colocation/dataCenters/dataCenters-05.png`)
      },
      {
        img: require(`@/assets/images/colocation/dataCenters/dataCenters-06.png`)
      },
      {
        img: require(`@/assets/images/colocation/dataCenters/dataCenters-07.png`)
      },
      {
        img: require(`@/assets/images/colocation/dataCenters/dataCenters-08.png`)
      },
      {
        img: require(`@/assets/images/colocation/dataCenters/dataCenters-09.png`)
      },
      {
        img: require(`@/assets/images/colocation/dataCenters/dataCenters-10.png`)
      },
      {
        img: require(`@/assets/images/colocation/dataCenters/dataCenters-11.png`)
      },
      {
        img: require(`@/assets/images/colocation/dataCenters/dataCenters-12.png`)
      },
    ])
    const dataCenterData = ref([
      {
        title: '100+',
        desc: 'Directly connects to all major clouds'
      },
      {
        title: 'Below 10ms',
        desc: 'Ultra-low latency'
      },
      {
        title: '2,900+',
        desc: 'Cloud & IT providers'
      }
    ])
    const swiperData = ref([
      {
        img: require(`@/assets/images/colocation/swiper/swiper-01.jpg`)
      },
      {
        img: require(`@/assets/images/colocation/swiper/swiper-02.jpg`)
      },
      {
        img: require(`@/assets/images/colocation/swiper/swiper-03.jpg`)
      },
      {
        img: require(`@/assets/images/colocation/swiper/swiper-04.jpg`)
      }
    ])
    const planData = ref([
      {
        title: t('product.colocation.plan.title-1'),
        minthPrice: 99,
        onceOff: 150,
        from: ''
      },
      {
        title: t('product.colocation.plan.title-2'),
        minthPrice: 399,
        onceOff: 150,
        from: 'from'
      },
      {
        title: t('product.colocation.plan.title-3'),
        minthPrice: 700,
        onceOff: 150,
        from: 'from'
      }
    ])
    const tableData = ref([
      {
        name: 'Rack',
        resule: '42- unit rack space Standard Rack',
        resule1: '42- unit rack space Standard Rack',
        resule2: '42- unit rack space Standard Rack',
      }, {
        name: 'Power supply',
        resule: 'Redundant power supply ) via A/B line (5kw-40kw) ',
        resule1: 'Redundant power supply ) via A/B line (5kw-40kw) ',
        resule2: 'Redundant power supply ) via A/B line (5kw-40kw) ',
      }, {
        name: 'Connection',
        resule: '1 GBit/s-Port-10GBit/s-Port',
        resule1: '1 GBit/s-Port-10GBit/s-Port',
        resule2: '1 GBit/s-Port-10GBit/s-Port',
      }, {
        name: 'Climate control',
        resule: 'Cold aisle containment',
        resule1: 'Climate control via raised floors',
        resule2: 'Cold aisle containment'
      },
      {
        name: 'Network availability',
        resule: 'min. 99.9%',
        resule1: 'min. 99.9%',
        resule2: 'min. 99.9%'
      }, {
        name: 'BGP network',
        resule: 'Yes',
        resule1: 'Yes',
        resule2: 'Yes'
      }, {
        name: 'Juniper backbone technology',
        resule: 'Yes',
        resule1: 'Yes',
        resule2: 'Yes'
      }, {
        name: '24/7 Monitoring',
        resule: 'Yes',
        resule1: 'Yes',
        resule2: 'Yes'
      }, {
        name: 'DDoS protection',
        resule: 'Yes',
        resule1: 'Yes',
        resule2: 'Yes'
      }, {
        name: 'Early warning fire system',
        resule: 'Yes',
        resule1: 'Yes',
        resule2: 'Yes'
      }, {
        name: 'Uninterrupted power supply',
        resule: 'Yes',
        resule1: 'Yes',
        resule2: 'Yes'
      }
    ])
    const tableData02 = ref([
      {
        name: 'Minimum Contract Period',
        resule: '3 months'
      }, {
        name: 'Cancellation Period',
        resule: '30 days to the end of the month'
      }, {
        name: 'Possible payment methods',
        resule: 'bank transfer, credit card, Paypal and direct debit'
      },
    ])
    const locationImg01 = require("@/assets/images/colocation/map-01.png")
    const locationImg02 = require("@/assets/images/colocation/map-02.png")
    const location01 = require("@/assets/images/colocation/location-01.png")
    const location02 = require("@/assets/images/colocation/location-02.png")
    const logoList01 = require("@/assets/images/colocation/logo.jpg")
    const logoList02 = require("@/assets/images/colocation/logo-all.png")
    const logoImg = ref([
      require("@/assets/images/colocation/logo-01.png"),
      require("@/assets/images/colocation/logo-02.png"),
      require("@/assets/images/colocation/logo-03.png"),
      require("@/assets/images/colocation/logo-04.png"),
      require("@/assets/images/colocation/logo-05.png")
    ])
    const worldText = ref([
      'Ultra-low latency (less 10 ms)',
      'Full back up and uninterrupted power',
      'High-speed connections',
      'SUSTAINABILITY WITH >99.999% UPTIME',
    ])
    const rankingText = ref([
      'Diverse fiber option of 100mbps, 10gbps, DWDM or Dark Fiber.',
      "950+ networks connected the data centers, including the world's top Tier-1 carriers, networks and ISPs",
      'Certifications: SOC 1 Type II, SOC 2 Type II, ISO 27001, NIST 800-53/FI, PCI DSS, HIPAA, ISO 22301',
    ])
    const fullyText = ref([
      {
        list: [
          '70,000 sq. ft. built',
          '4 MW Ready + 20 MW expansion capacity'
        ]
      },
      {
        list: [
          '2N UPS and 2N generators',
          '48 hours of fuel onsite'
        ]
      },
      {
        list: [
          'Redundant meet-me room availability',
          'Passive waves (DWDM) available'
        ]
      },
      {
        list: [
          'Custom containment and in-row cooling available',
          'N+1 redundant cooling design'
        ]
      }
    ])
    const transparentText = ref([
      'Customer-related power monitoring',
      'Real-time Data and Advanced Analytics on Utilization',
      'Audited under Certifications: SOC 1 Type II, SOC 2 Type II, ISO 27001, NIST 800-53/FI, PCI DSS, HIPAA'
    ])
    const basedText = ref([
      'Industry-leading uptime Service Level Agreement (SLA) of 100%',
      '24x7x365 electronic and physical security',
      'Strategically located on the biggest research campus in the US',
      '2N or System Plus System power design',
    ])
    const customerText = ref([
      'Exceptional performance and low latency connections',
      'CCX for up to 1Gbps dedicated connections to AWS, Azure, CTL, Megaport or PCCW',
      'Audited under SOC 1 Type II, SOC 2 Type II, SOC 2 + HITRUST, GLBA, HIPAA, PCI-DSS1, NIST SP 800-53 rev 41 annually and ISO 27001 certified2. ITAR and EU-US Privacy Shield3 registered.'
    ])

    function headerStyle ({ row, column, rowIndex, columnIndex, }) {
      // console.log(rowIndex, columnIndex);
      if (rowIndex === 4) {
        if (columnIndex === 1) {
          return [1, 3]
        } else if (columnIndex !== 0) {
          return [0, 0];
        }
      }
    }
    onMounted(() => {
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        // centeredSlides: true,
        spaceBetween: 60,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }
      })

      var galleryThumbs = new Swiper('.gallery', {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
      });
      var galleryTop = new Swiper('.gallery-swiper', {
        spaceBetween: 10,
        autoplay: {
          delay: 10000,
          disableOninteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs
        }
      });
    })
    return {
      system,
      bodyWidth,
      valueData,
      shopImg,
      turnkeyData,
      introduText,
      centersData,
      dataCenterData,
      swiperData,
      planData,
      tableData,
      tableData02,
      headerStyle,
      locationImg01,
      locationImg02,
      location01,
      location02,
      logoList01,
      logoList02,
      logoImg,
      worldText,
      rankingText,
      fullyText,
      transparentText,
      basedText,
      customerText
    }
  }
})
</script>

<style lang="less" scoped>
@import "../../assets/css/swiper.min.css";
#container-main {
  padding: 0 0 100px;
  // background: @white-color url(../../assets/images/background-image04.png) repeat;
  // background-size: 100% 100%;
  background-image: url(../../assets/images/background-image03.png);
  background-position: 0 21%;
  background-repeat: no-repeat;
  background-size: 10%;
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1.15;
  color: @theme-color;
  .title {
    display: inline-block;
    max-width: 76%;
    padding: 30px 70px;
    margin: 160px auto 50px;
    color: @theme-color;
    border-radius: 200px;
    box-sizing: content-box;
    @media screen and (max-width: 768px) {
      padding: 45px 105px;
    }
    @media screen and (max-width: 600px) {
      padding: 60px 140px;
    }
    &.s {
      margin-top: 85px;
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
    padding: 115px 0 0;
    background: url(../../assets/images/background-image02.png) 1% 30% no-repeat;
    background-size: 12%;
    @media screen and (min-width: 2160px) {
      padding: 80px 0 0;
    }
    @media screen and (max-width: 1440px) {
      padding: 105px 0 0;
    }
    @media screen and (max-width: 768px) {
      padding: 210px 0 100px;
    }
    .content {
      background: url(../../assets/images/bg-colocation.png) right bottom no-repeat;
      background-size: auto 100%;
      .text {
        max-width: 660px;
        padding: 85px 0;
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
  :deep(.plan) {
    text-align: center;
    .plan-cont {
      width: 90%;
      max-width: 1034px;
      margin: 0 auto 30px;
      @media screen and (max-width: 768px) {
        max-width: 1540px;
      }
      .el-row {
        position: relative;
        .el-col {
          position: relative;
          // padding: 0 22px;
          margin: 40px 0 0;
          @media screen and (max-width: 768px) {
            margin: 80px 0 0;
          }
          .content {
            position: relative;
            max-width: 1200px;
            height: calc(100% - 80px);
            padding: 40px 20px;
            margin: 0 auto;
            background-color: @white-color;
            border: 1px solid #96a6d1;
            border-radius: 20px;
            text-align: center;
            line-height: 1.2;
            overflow: hidden;
            z-index: 3;
            transition: all 0.2s;
            @media screen and (max-width: 767px) {
              height: calc(100% - 160px);
              padding: 80px 40px;
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
              .desc {
                color: #94a3ce;
              }
              .learn-more {
                background-color: @white-color;
                color: @theme-color;
              }
            }
            .tit {
              width: 65%;
              min-height: 48px;
              margin: auto;
              line-height: 24px;
              text-align: center;
            }
            .subtit {
              align-items: baseline;
              padding: 10px 0 15px;
              color: @black-color;
              @media screen and (min-width: 2160px) {
                padding: 5px 0 10px;
              }
              @media screen and (max-width: 600px) {
                padding: 20px 0 30px;
              }
              span {
                color: @theme-color;
              }
            }
            .desc {
              color: #808080;
            }
            .learn-more {
              padding: 12px 23px;
              margin: 45px auto 0;
              border-radius: 150px;
              @media screen and (max-width: 600px) {
                padding: 24px 46px;
                margin: 90px auto 0;
              }
            }
          }
        }
      }
    }
  }
  :deep(.features) {
    text-align: center;
    .features-cont {
      width: 90%;
      max-width: 1034px;
      margin: 0 auto;
      @media screen and (max-width: 768px) {
        max-width: 1540px;
      }
      .table-cont {
        box-sizing: content-box;
        margin: 40px auto 65px;
        border: 1px solid @theme-color;
        border-radius: 8px;
        overflow: hidden;
        text-align: left;
        .tit {
          padding: 13px 30px;
          background-color: @theme-color;
          color: @white-color;
        }
        .el-table {
          tr {
            th {
              padding: 13px 30px;
              background-color: @theme-color;
              color: @white-color;
              border: 0;
              text-align: center;
            }
            td {
              border-color: @theme-color;
              text-align: center;
              color: @black-color;
              &:nth-child(1) {
                text-align: left;
                // white-space: nowrap;
              }
              &:last-child {
                border-right: 0;
              }
              .cell {
                padding: 0 30px;
                color: inherit;
                line-height: 1.15;
                @media screen and (max-width: 768px) {
                  padding: 10px 30px;
                }
                .m {
                  display: block;
                  padding: 10px 0;
                }
              }
            }
            &:nth-child(2n + 1) {
              td {
                background-color: #f0f6fc;
              }
            }
          }
        }
        .el-table__border-left-patch,
        .el-table--border::after,
        .el-table--border .el-table__inner-wrapper::after,
        .el-table--border::before {
          display: none;
        }
      }
    }
  }
  :deep(.locations-area) {
    padding: 80px 0 40px;
    margin: 220px 0 0;
    background-color: @theme-color;
    color: @white-color;
    word-break: break-word;
    .content {
      .big-tit {
        padding: 0 0 35px;
        // text-indent: 80px;
        @media screen and (max-width: 768px) {
          padding: 0 0 70px;
        }
      }
      .left {
        padding: 0 0 16px;
        .gallery-thumbs {
          li {
            width: auto !important;
            padding: 8px 11px;
            margin: 0 17px 35px 0 !important;
            border: 2px solid #9cbaf3;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
            @media screen and (max-width: 768px) {
              padding: 16px 22px;
              margin: 0 34px 70px 0 !important;
            }
            &:hover,
            &.swiper-slide-thumb-active {
              background-color: @white-color;
              border-color: @white-color;
              color: @theme-color;
              span {
                background-color: #264a9b;
                border-color: #a9c6fd;
              }
            }
            span {
              width: 17px;
              height: 17px;
              border: 2px solid @white-color;
              border-radius: 60px;
              @media screen and (max-width: 768px) {
                width: 34px;
                height: 34px;
              }
            }
            b {
              margin: 0 20px 0 10px;
              white-space: nowrap;
              @media screen and (max-width: 768px) {
                margin: 0 40px 0 20px;
              }
            }
            img {
              height: 20px;
              @media screen and (max-width: 768px) {
                height: 40px;
              }
            }
          }
        }
        .tit {
          padding: 16px 0;
          @media screen and (max-width: 768px) {
            padding: 32px 0;
          }
          &.big {
            padding: 36px 0 16px;
            @media screen and (max-width: 768px) {
              padding: 72px 0 32px;
            }
          }
        }
        .logo {
          img {
            height: 30px;
            margin: 4px 33px 27px 0;
            @media screen and (max-width: 768px) {
              height: 60px;
              margin: 8px 33px 54px 0;
            }
            @media screen and (max-width: 600px) {
              height: 100px;
              margin: 12px 99px 81px 0;
            }
          }
        }
        .list-text {
          .el-col {
            padding: 10px 0;
            .text-area {
              height: calc(100% - 48px);
              padding: 24px 20px;
              background-color: #6182c7;
              border-radius: 6px;
              line-height: 1.2;
              &.top {
                align-items: flex-start;
              }
              li {
                position: relative;
                padding: 0 0 0 10px;
                &::before {
                  position: absolute;
                  content: "";
                  left: 0;
                  top: 4px;
                  width: 4px;
                  height: 4px;
                  background-color: @white-color;
                  border-radius: 16px;
                }
              }
            }
          }
        }
      }
      .right {
        .el-col {
          padding: 0 20px;
          div {
            padding: 15px 0 5px;
          }
        }
        .img {
          max-width: 700px;
          margin: auto;
          @media screen and (max-width: 600px) {
            max-width: none;
            margin: 60px auto;
          }
        }
        .width {
          width: 75%;
          margin: auto;
          @media screen and (max-width: 600px) {
            width: 95%;
          }
          &.small {
            width: 70%;
            margin: 25px auto 35px !important;
            @media screen and (max-width: 600px) {
              width: 90%;
              margin: 50px auto 70px !important;
            }
          }
        }
      }
    }
    .swiper-location {
      position: relative;
      overflow: hidden;
      .show {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        z-index: 99;
      }
      .hide {
        .gallery-thumbs {
          opacity: 0;
        }
      }
    }
  }
  :deep(.can-content) {
    padding: 0 0 20px;
    margin: 30px 0 0;
    text-align: center;
    @media screen and (max-width: 600px) {
      padding: 0 0 40px;
    }
    .title {
      margin-bottom: 70px;
    }
    .swiper {
      padding: 30px 0 10px;
      margin: 40px 0 70px;
      background-color: @theme-color;
      @media screen and (max-width: 768px) {
        padding: 60px 0 20px;
      }
      @media screen and (max-width: 600px) {
        padding: 90px 0 30px;
      }
      .swiper-container {
        width: 100%;
        height: 250px;
        padding-bottom: 30px;
        @media screen and (max-width: 768px) {
          height: 370px;
          padding-bottom: 60px;
        }
        @media screen and (max-width: 600px) {
          height: 500px;
          padding-bottom: 90px;
        }
      }
      .swiper-pagination {
        bottom: 0;
        .swiper-pagination-bullet {
          @media screen and (max-width: 768px) {
            width: 15px;
            height: 15px;
            margin: 0 10px;
          }
          @media screen and (max-width: 600px) {
            width: 25px;
            height: 25px;
            margin: 0 15px;
          }
        }
        .swiper-pagination-bullet-active {
          background-color: @white-color;
        }
      }
      .swiper-slide {
        text-align: center;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        width: auto;
        img {
          height: 100%;
        }
      }
    }
    .introduction {
      text-align: left;
      .el-row {
        @media screen and (max-width: 1200px) {
          width: 100%;
          padding: 0;
        }
      }
      .image {
        margin: 40px auto 35px;
        border-radius: 10px;
        @media screen and (min-width: 2160px) {
          margin: 20px auto 15px;
        }
        @media screen and (max-width: 600px) {
          margin: 80px auto 70px;
        }
      }
      .content {
        padding: 0;
        text-transform: uppercase;
        line-height: 1;
        .tit {
          padding: 2px 10px 0px;
          margin: 0 8px 0 0;
          background-color: #253c82;
          font-weight: 600;
          border-radius: 8px;
          color: @white-color;
          @media screen and (max-width: 600px) {
            padding: 20px 30px;
            border-radius: 20px;
          }
        }
        p {
          padding: 0;
          color: #060707;
          line-height: 1.1;
          span {
            color: #253c82;
          }
          &:first-child {
            font-weight: bold;
          }
        }
        .subtit {
          position: relative;
          padding: 30px 0 10px 25px;
          font-weight: normal;
          color: @theme-color;
          line-height: 1.3;
          @media screen and (max-width: 600px) {
            padding: 60px 0 20px 50px;
          }
        }
        .text {
          padding: 5px 0 20px 25px;
          text-transform: initial;
          @media screen and (max-width: 768px) {
            padding: 10px 0 40px 25px;
          }
          @media screen and (max-width: 600px) {
            padding: 15px 0 60px 50px;
          }
          .describe {
            line-height: 1.2;
          }
          ul {
            flex-wrap: wrap;
            justify-content: flex-start;
            li {
              padding: 12px 25px 9px;
              margin: 15px 15px 0 0;
              background-color: #253c82;
              font-weight: 300;
              border-radius: 40px;
              color: @white-color;
              white-space: nowrap;
              @media screen and (max-width: 600px) {
                padding: 24px 50px 18px;
                margin: 30px 30px 0 0;
                border-radius: 80px;
              }
            }
          }
        }
        .data-area {
          padding: 20px 0 0 0;
          @media screen and (max-width: 600px) {
            padding: 40px 0 0 0;
          }
          .el-col {
            position: relative;
            margin: 0 0 35px;
            @media screen and (min-width: 2160px) {
              margin: 0 0 17px;
            }
            @media screen and (max-width: 767px) {
              margin: 0 0 70px;
              &:nth-child(2n + 1) {
                &::before {
                  left: 50%;
                }
                .content {
                  &::before {
                    display: none;
                  }
                }
              }
              &:nth-child(2n + 2) {
                &::before {
                  right: 50%;
                }
                .content {
                  &::after {
                    display: none;
                  }
                }
              }
            }
            &::before {
              position: absolute;
              content: "";
              top: 50%;
              left: 0;
              right: 0;
              height: 1px;
              background-color: #8e9abe;
              z-index: 1;
            }
            &:first-child {
              &::before {
                left: 50%;
              }
              .content {
                &::before {
                  display: none;
                }
              }
            }
            &:last-child {
              &::before {
                right: 50%;
              }
              .content {
                &::after {
                  display: none;
                }
              }
            }
            .content {
              position: relative;
              height: calc(100% - 25px);
              padding: 15px 10px 10px;
              background-color: @white-color;
              border: 1px solid #909fc4;
              border-radius: 10px;
              text-align: left;
              box-shadow: 0px 0px 13px rgba(71, 153, 185, 0.05),
                10px 10px 13px rgba(71, 153, 185, 0.1);
              text-transform: none;
              z-index: 9;
              @media screen and (min-width: 2160px) {
                height: calc(100% - 15px);
                padding: 10px 5px 5px;
              }
              @media screen and (max-width: 768px) {
                height: calc(100% - 50px);
                padding: 30px 20px 20px;
                border-radius: 20px;
              }
              &::before,
              &::after {
                position: absolute;
                content: "";
                top: 50%;
                left: 0;
                width: 11px;
                height: 11px;
                margin: -6px 0 0 -6px;
                background-color: @white-color;
                border: 1px solid #909fc4;
                border-radius: 16px;
                z-index: 10;
                @media screen and (min-width: 2160px) {
                  width: 6px;
                  height: 6px;
                  margin: -3px 0 0 -3px;
                }
              }
              &::after {
                left: auto;
                right: 0;
                margin: -6px -6px 0 0;
                @media screen and (min-width: 2160px) {
                  margin: -3px -3px 0 0;
                }
              }
              .tit {
                padding: 0 0 6px;
                margin: 0;
                background-color: transparent;
                font-weight: bold;
                line-height: 23px;
                color: #00269f;
                @media screen and (max-width: 768px) {
                  line-height: 46px;
                }
                @media screen and (max-width: 600px) {
                  padding: 0 0 12px;
                  line-height: 34px;
                }
                @media screen and (max-width: 540px) {
                  line-height: 46px;
                  padding-bottom: 25px;
                }
              }
              .desc {
                min-height: 26.4px;
                line-height: 1.1;
                color: #05010f;
                @media screen and (max-width: 600px) {
                  min-height: 39.6px;
                }
                @media screen and (max-width: 540px) {
                  min-height: 52.8px;
                }
              }
            }
          }
        }
        .logo-area {
          // width: 100%;
          // margin: 0 0 0 10px;
          .el-col {
            padding: 0;
            margin: 0;
            &.text-service {
              font-style: italic;
              font-weight: bolder;
              color: #253c82;
              justify-content: center;
            }
            .content {
              height: calc(100% - 40px);
              padding: 30px 10px 10px;
              border: 1px solid #909fc4;
              border-radius: 20px;
              text-align: center;
              box-shadow: 0px 0px 13px rgba(71, 153, 185, 0.05),
                10px 10px 13px rgba(71, 153, 185, 0.1);
              @media screen and (max-width: 767px) {
                height: calc(100% - 70px);
                padding: 50px 20px 20px;
                border-radius: 40px;
              }
            }
          }
        }
      }
      .list-img {
        flex-wrap: wrap;
        justify-content: space-between;
        .left {
          @media screen and (max-width: 992px) and (min-width: 768px) {
            max-width: 500px;
          }
        }
      }
    }
  }
  :deep(.shop-value) {
    margin: 0 auto;
    text-align: center;
    .title {
      margin: 160px auto 110px;
    }
    .turnkey {
      height: 437px;
      padding: 20px 0;
      margin: 20px 0 30px;
      align-items: stretch;
      background: url(../../assets/images/colocation/turnky-bg.png) no-repeat
        center;
      background-size: auto 100%;
      @media screen and (max-width: 767px) {
        height: auto;
        background: none;
      }
      .left,
      .right {
        width: 38%;
        text-align: left;
        @media screen and (max-width: 1200px) {
          width: 42%;
        }
        @media screen and (max-width: 767px) {
          width: 100%;
          list-style: disc;
        }
        &.right {
          li {
            float: right;
            text-align: right;
            &:nth-child(3n + 1) {
              .icon-cont {
                &::before {
                  background-color: #96b6f2;
                }
                .point {
                  border-color: #96b6f2;
                }
                .icon {
                  background: #96b6f2
                    url(../../assets/images/colocation/turnky-icon-04.png)
                    no-repeat center;
                  background-size: 50%;
                }
              }
            }
            &:nth-child(3n + 2) {
              width: 90%;
              .icon-cont {
                &::before {
                  background-color: #739dd2;
                }
                .point {
                  border-color: #739dd2;
                }
                .icon {
                  background: #739dd2
                    url(../../assets/images/colocation/turnky-icon-05.png)
                    no-repeat center;
                  background-size: 50%;
                }
              }
            }
            &:nth-child(3n + 3) {
              .icon-cont {
                &::before {
                  background-color: #28479d;
                }
                .point {
                  border-color: #28479d;
                }
                .icon {
                  background: #28479d
                    url(../../assets/images/colocation/turnky-icon-06.png)
                    no-repeat center;
                  background-size: 50%;
                }
              }
            }
          }
        }
        li {
          width: 100%;
          height: 33.333%;
          @media screen and (max-width: 767px) {
            width: 100% !important;
            height: auto;
            padding: 50px 0;
            text-align: left !important;
            justify-content: flex-start !important;
            list-style: disc;
          }
          &:nth-child(3n + 1) {
            .icon-cont {
              &::before {
                background-color: #28479d;
              }
              .point {
                border-color: #28479d;
              }
              .icon {
                background: #28479d
                  url(../../assets/images/colocation/turnky-icon-01.png)
                  no-repeat center;
                background-size: 50%;
              }
            }
          }
          &:nth-child(3n + 2) {
            width: 90%;
            .icon-cont {
              &::before {
                background-color: #739dd2;
              }
              .point {
                border-color: #739dd2;
              }
              .icon {
                background: #739dd2
                  url(../../assets/images/colocation/turnky-icon-02.png)
                  no-repeat center;
                background-size: 50%;
              }
            }
          }
          &:nth-child(3n + 3) {
            .icon-cont {
              &::before {
                background-color: #96b6f2;
              }
              .point {
                border-color: #96b6f2;
              }
              .icon {
                background: #96b6f2
                  url(../../assets/images/colocation/turnky-icon-03.png)
                  no-repeat center;
                background-size: 50%;
              }
            }
          }
          p {
            width: 100%;
            max-width: 320px;
            @media screen and (max-width: 767px) {
              max-width: none;
            }
          }
          .icon-cont {
            position: relative;
            width: 100%;
            height: 100%;
            @media screen and (max-width: 767px) {
              display: none;
            }
            &::before {
              position: absolute;
              content: "";
              top: 50%;
              width: 100%;
              height: 1px;
              background-color: @theme-color;
              z-index: 1;
            }
            .point {
              width: 17px;
              height: 17px;
              background-color: #f5f8fd;
              border-radius: 20px;
              border: 1px solid @theme-color;
              z-index: 3;
            }
            .icon {
              width: 80px;
              height: 80px;
              border-radius: 200px;
              z-index: 3;
            }
          }
        }
      }
    }
    .el-row {
      position: relative;
      margin: 0 0 145px;
      .el-col {
        position: relative;
        // padding: 0 22px;
        margin: 40px 0 75px;
        @media screen and (max-width: 768px) {
          margin: 40px 0 150px;
        }
        .image {
          position: absolute;
          left: 28%;
          top: -17px;
          width: 44%;
          z-index: 1;
          @media screen and (max-width: 1200px) {
            left: 50%;
            width: 150px;
            margin-left: -75px;
          }
          @media screen and (max-width: 600px) {
            top: -27px;
            width: 250px;
            margin-left: -125px;
          }
          img {
            width: 100%;
          }
        }
        .content {
          position: relative;
          max-width: 1200px;
          height: calc(100% - 95px);
          padding: 60px 20px 35px;
          margin: 0 auto;
          border: 1px solid #7186bf;
          border-radius: 20px;
          text-align: center;
          line-height: 1.2;
          overflow: hidden;
          z-index: 3;
          @media screen and (max-width: 767px) {
            height: calc(100% - 190px);
            padding: 120px 40px 70px;
            border-radius: 40px;
          }
          .tit {
            width: 65%;
            min-height: 48px;
            padding: 0 0 25px;
            margin: auto;
            line-height: 24px;
            text-align: center;
            @media screen and (min-width: 2160px) {
              padding: 0 0 15px;
            }
            @media screen and (max-width: 600px) {
              padding: 0 0 50px;
            }
          }
          ul {
            li {
              padding: 6px 0;
              text-align: left;
              line-height: 1.3;
              color: @black-color;
              .width-icon {
                margin: 0 10px 0 0;
                fill: @theme-color;
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
</style>
