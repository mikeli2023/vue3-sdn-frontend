<template>
  <section id="container-header" :class="{'bg-color-none': scrollTopVal > 400}">
    <div class="header lang-max flex-row space-between nowrap">
      <img :src="nebulaLogo" class="logo-img" alt='Nebula Block' @click="goMain" />
      <div class="el-menu-right flex-row menu-width-mit weight-6">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :teleported="true" @select="handleSelect">
          <el-sub-menu index="3">
            <template #title>
              <span class="mit font-22">{{$t('menu.Tools')}}</span>
            </template>
            <el-menu-item index="3-2">
              <span class="mit font-22">{{$t('menu.SDN')}}</span>
            </el-menu-item>
            <el-menu-item index="3-1">
              <span class="mit font-22">{{$t('menu.VPN')}}</span>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="company">
            <template #title>
              <span class="mit font-22">{{$t('menu.Company')}}</span>
            </template>
            <el-menu-item index="about">
              <span class="mit font-22">{{$t('menu.About-Us')}}</span>
            </el-menu-item>
            <el-menu-item index="blog">
              <span class="mit font-22">{{$t('menu.Blog')}}</span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item index="support">
            <span class="mit font-22">{{$t('menu.Support')}}</span>
          </el-menu-item>
          <el-menu-item index="contact">
            <span class="mit font-22">{{$t('public.Contact-Us')}}</span>
          </el-menu-item>
          <el-menu-item index="myProfile" v-if="emailAddress">
            <span class="mit font-22">My Profile</span>
          </el-menu-item>
        </el-menu>
        <div class="right flex-row nowrap">
          <div class="sign" v-if="emailAddress">
            <el-dropdown @command="handleSelect" class="sign-popper" popper-class="menu-popper" :teleported="true">
              <span class="el-dropdown-link login font-22">
                {{emailAddress}}
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="myProfile">
                    <span class="font-20">My Profile</span>
                  </el-dropdown-item>
                  <el-dropdown-item command="logout">
                    <span class="font-20">Logout</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div v-if="emailAddress === ''" class="login font-22" @click="dataShow=true">{{t('menu.login')}}</div>

          <el-dropdown popper-class="i18n-popper" @command="handleSelect">
            <span class="el-dropdown-link flex-row nowrap">
              <i class="mit-icon"></i>
              <span class="mit font-22">{{language === 'zh-cn'? 'CN':'EN'}}</span>
              <el-icon class="el-icon--right">
                <CaretBottom />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="cn">
                  <div class="language-menu flex-row nowrap" :class="{'is-disabled': language === 'zh-cn'}">
                    <i class="mit-icon cn"></i>
                    <span class="mit font-18">CN</span>
                  </div>
                </el-dropdown-item>
                <el-dropdown-item command="en">
                  <div class="language-menu flex-row nowrap" :class="{'is-disabled': language === 'en'}">
                    <i class="mit-icon en"></i>
                    <span class="mit font-18">EN</span>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <login-over v-if="dataShow" :dataShow="dataShow" @handleLogin="handleLogin"></login-over>
    <contact-us v-if="contactShow" :contactShow="contactShow" @handleLogin="handleLogin"></contact-us>
  </section>
</template>
<script>
import loginOver from '@/components/login.vue'
import contactUs from '@/components/contactUs.vue'
import { defineComponent, computed, onMounted, onBeforeUnmount, nextTick, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from "vue-i18n"
import {
  ArrowDown, CaretBottom
} from '@element-plus/icons-vue'
import { ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup, ElIcon, ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu } from "element-plus"
export default defineComponent({
  components: {
    loginOver, contactUs, ArrowDown, CaretBottom,
    ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup, ElIcon, ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu
  },
  setup () {
    const store = useStore()
    const { t, locale } = useI18n()
    const language = computed(() => (store.state.languageNB))
    const emailAddress = computed(() => (store.state.emailAddress))
    const contactShow = computed(() => (String(store.state.contactShow) === 'true'))
    const bodyWidth = ref(document.body.clientWidth < 992)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const nebulaLogo = require("@/assets/images/logo.png")
    const scrollTopVal = ref(0)
    const activeIndex = ref('1')
    const dataShow = ref(false)

    const scrollTop = () => {
      nextTick(() => {
        let elVal = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        scrollTopVal.value = elVal
      })
    }
    function goMain () {
      router.push({ name: 'dashboard' })
      activeIndex.value = '1'
    }
    async function handleSelect (key, keyPath) {
      if (key === '1') router.push({ name: 'dashboard' })
      else if (key === '3-1') router.push({ name: 'VPN' })
      else if (key === '3-2') router.push({ name: 'SDN' })
      else if (key === 'about') router.push({ name: 'aboutUs' })
      else if (key === 'blog') system.$commonFun.goLink('https://nebulablock.medium.com/')
      else if (key === 'support') system.$commonFun.goLink('https://nebulablock.freshdesk.com/support/home')
      else if (key === 'contact') system.$commonFun.contactUsMethod()
      else if (key === 'cn' && language.value !== 'zh-cn') {
        locale.value = 'zh-cn'
        store.dispatch('setLanguage', 'zh-cn')
      } else if (key === 'en' && language.value !== 'en') {
        locale.value = 'en'
        store.dispatch('setLanguage', 'en')
      } else if (key === 'logout') {
        system.$commonFun.signOut()
      } else if (key === 'myProfile') router.push({ name: 'myProfile', params: { tab: 'profile' } })
    }
    // what-we-do
    async function activeMenu (row) {
      const state = route.query.state
      if (state === 'LogIn' || state === 'Reset') dataShow.value = true
      const nameMenu = row || route.name
      if (nameMenu.indexOf('dashboard') > -1) activeIndex.value = '1'
      else if (nameMenu.indexOf('VPN') > -1) activeIndex.value = '3-1'
      else if (nameMenu.indexOf('SDN') > -1) activeIndex.value = '3-2'
      else if (nameMenu.indexOf('blog') > -1) activeIndex.value = 'blog'
      else if (nameMenu.indexOf('about') > -1) activeIndex.value = 'about'
      else if (nameMenu.indexOf('myProfile') > -1) activeIndex.value = 'myProfile'
      else if (nameMenu.indexOf('welcome') > -1) activeIndex.value = 'welcome'
      else activeIndex.value = '1'
    }
    function handleLogin (dia) {
      dataShow.value = dia
      contactShow.value = dia
    }
    onMounted(() => {
      activeMenu()
      window.addEventListener('scroll', scrollTop, true)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', scrollTop, true);
    })
    watch(route, (to, from) => {
      activeMenu()
      window.scrollTo(0, 0)
    })
    return {
      t,
      system,
      language,
      emailAddress,
      nebulaLogo,
      scrollTopVal,
      activeIndex,
      dataShow,
      contactShow,
      handleSelect, goMain, handleLogin
    }
  }
})
</script>
<style lang="less" scoped>
#container-header {
  // transition: all 0.2s;
  &.bg-color {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
  }
  .header {
    margin: auto;
    padding: 18px 0;
    @media screen and (min-width: 2160px) {
      padding: 6px 0;
    }
    @media screen and (max-width: 600px) {
      padding: 36px 0;
    }
    .logo-img {
      height: 52px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        height: 78px;
      }
      @media screen and (max-width: 767px) {
        height: 104px;
      }
      @media screen and (max-width: 540px) {
        height: 156px;
      }
    }
    .el-menu-right {
      justify-content: flex-end;
      flex-wrap: nowrap;
      :deep(.el-menu) {
        width: calc(100% - 170px);
        background-color: transparent;
        border: 0;
        justify-content: flex-end;
        @media screen and (max-width: 441px) {
          width: calc(100% - 170px);
        }
        .el-menu-item,
        .el-sub-menu,
        .el-sub-menu__title {
          padding: 0;
          margin-left: 50px;
          background-color: transparent !important;
          border-bottom: 1.6px solid transparent;
          color: @black-color;
          @media screen and (min-width: 2160px) {
            line-height: 35px;
          }
          &:first-child {
            margin-left: 0;
          }
          &:hover,
          &.is-active {
            border-bottom: 1.6px solid transparent;
            color: @theme-color;
            .el-sub-menu__title {
              color: inherit;
            }
          }
          .el-icon {
            width: 40px;
            height: 40px;
            @media screen and (max-width: 992px) {
              width: 50px;
              height: 50px;
            }
            @media screen and (max-width: 599px) {
              width: 90px;
              height: 90px;
            }
            svg {
              width: 100%;
              height: 100%;
            }
          }
          .el-sub-menu__icon-arrow {
            position: static;
            width: 10px;
            height: 10px;
            right: 10px;
            margin-left: 8px;
            margin-top: -3px;
            background: url(../assets/images/dashboard/menu.png) no-repeat
              center;
            background-size: 100%;
            // @media screen and (max-width: 992px) {
            //   width: 20px;
            //   height: 20px;
            // }
            svg {
              display: none;
            }
          }
        }
        .el-sub-menu__title {
          border: 0 !important;
        }
      }
    }
    .right {
      white-space: nowrap;
      color: @black-color;
      // @media screen and (max-width: 600px) {
      //   display: none;
      // }
      .login {
        background-color: @theme-color;
        padding: 6px 16px;
        margin: 0 0 0 45px;
        border: 1px solid @theme-color;
        border-radius: 6px;
        color: @white-color;
        cursor: pointer;
        transition: all 0.2s;
        @media screen and (max-width: 768px) {
          padding: 9px 24px;
          margin: 0 0 0 45px;
          border-radius: 12px;
        }
        @media screen and (max-width: 600px) {
          padding: 12px 32px;
          border-radius: 18px;
        }
        @media screen and (max-width: 540px) {
          padding: 15px 40px;
        }
        &:hover {
          background-color: transparent;
          color: @theme-color;
        }
      }
      i.mit-icon {
        width: 25px;
        height: 25px;
        background: url(../assets/images/i18n.png) no-repeat left 1px;
        background-size: 90%;
        @media screen and (max-width: 768px) {
          width: 20px;
          height: 20px;
        }
      }
      span.mit {
        margin: 0 6px;
        color: @black-color;
        line-height: 25px;
        @media screen and (max-width: 768px) {
          margin: 0 5px;
        }
      }
      .el-dropdown {
        @media screen and (max-width: 768px) {
          display: none;
        }
        * {
          outline: none !important;
          cursor: pointer;
        }
        // cursor: pointer;
        outline: none;
        border: 0;
        i {
          margin: 0;
          color: @black-color;
          &.el-icon--right {
            margin: -3px 0 0;
          }
        }
      }
      .sign {
        .el-dropdown {
          @media screen and (max-width: 768px) {
            display: block;
          }
        }
      }
      .language {
        .tit {
          span {
            color: @black-color;
          }
        }
      }
      .log-in {
        margin-right: 0.3rem;
        .tit {
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
.i18n-popper {
  display: none;
  * {
    outline: none !important;
  }
  .el-dropdown-link:focus-visible {
    outline: none !important;
  }
  .language-menu {
    min-width: 110px;
    padding: 4px 0;
    white-space: nowrap;
    color: @black-color;
    // @media screen and (max-width: 600px) {
    //   display: none;
    // }
    &.is-disabled {
      opacity: 0.4;
      &:hover {
        span.mit {
          text-decoration: none;
        }
      }
    }
    &:hover {
      span.mit {
        text-decoration: underline;
      }
    }
    i.mit-icon {
      width: 18px;
      height: 18px;
      margin: 0 10px 0 0;
      background: url(../assets/images/i18n-en.png) no-repeat left center;
      background-size: 100%;
      @media screen and (max-width: 768px) {
        margin: 0 5px 0 0;
      }
      &.cn {
        background: url(../assets/images/i18n-cn.png) no-repeat left center;
        background-size: 100%;
      }
    }
    span.mit {
      padding-top: 4px;
      color: @black-color;
      line-height: 1;
    }
  }
}

.menu-popper {
  background-color: transparent;
  border: 0 !important;
  border-radius: 0;
  // .el-popper__arrow {
  //   display: none;
  // }
  .el-dropdown-menu {
    padding: 6px 0;
    border-radius: 4px;
    box-shadow: 0 0 10px @black-color-opacity1;
    li {
      padding: 6px 16px;
      background-color: @white-color;
      color: @black-color !important;
      &:hover {
        background-color: rgba(233, 233, 233, 0.8);
      }
      span {
        min-width: 120px;
        line-height: 1.7;
        text-align: center;
      }
    }
  }
}
</style>

