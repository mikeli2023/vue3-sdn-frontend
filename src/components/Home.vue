<template>
  <div class="wrapper" id="wrapper" ref="area">
    <el-container>
      <el-header :class="{'bg-header': route.name === 'dashboard'}">
        <v-head></v-head>
      </el-header>
      <el-main>
        <div class="content">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
          <el-backtop :right="20" :bottom="50" />
        </div>
        <v-foot v-show="route.name !== 'welcome'"></v-foot>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import vHead from './Header.vue';
import vFoot from './Footer.vue';
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { ElConfigProvider, ElBacktop, ElContainer, ElHeader, ElFooter, ElMain, ElRow, ElCol } from "element-plus"
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
export default defineComponent({
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth < 992)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const language = computed(() => (store.state.languageNB))
    const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

    // const toggle = () => {
    //   language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
    // }
    // watch(language, () => {
    //   toggle()
    // })
    onMounted(() => { })
    return {
      route,
      locale
    }
  },
  components: {
    vFoot, vHead,
    ElConfigProvider, ElBacktop, ElContainer, ElHeader, ElFooter, ElMain, ElRow, ElCol
  }
})
</script>

<style lang="less" scoped>
.wrapper {
  min-height: 100vh;
  .content {
    width: 100%;
    :deep(.el-backtop) {
      background-color: @white-color;
      color: @black-color;
      box-shadow: 0 0 15px @black-color-opacity1;
      @media screen and (max-width: 768px) {
        width: 80px;
        height: 80px;
      }
      @media screen and (max-width: 600px) {
        width: 110px;
        height: 110px;
      }
      .el-icon,
      svg {
        @media screen and (max-width: 768px) {
          width: 50px;
          height: 50px;
        }
        @media screen and (max-width: 600px) {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
  .el-container {
    .el-header,
    .el-footer,
    .el-main {
      width: 100%;
      height: auto;
      padding: 0;
    }
    .el-main {
      display: flex;
      min-height: 100vh;
      align-items: flex-start;
      align-content: space-between;
      flex-wrap: wrap;
    }
    .el-header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
      background-color: transparent;
      border-bottom: 2px solid #7b97d6;
      &.bg-header {
        background-color: @white-color;
      }
    }
    .el-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99;
      padding: 100px 0;
      background: url(../assets/images/background-image01.jpg) repeat center;
      background-size: 100%;
      @media screen and (max-width: 768px) {
        padding: 150px 0;
      }
      @media screen and (max-width: 600px) {
        padding: 200px 0;
      }
    }
    .bg {
      background: url(../assets/images/background-image01.jpg) repeat center;
      background-size: 100%;
    }
  }
}
</style>

<style lang="less">
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.3s;
// }

// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
// }
</style>

