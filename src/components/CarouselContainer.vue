<template>
  <div class="carousel-container">
    <el-row class="row-bg" :gutter="props.gutterValue">
      <el-col v-for="list in props.slideList" :key="list">
        <img :src="list.img" class="img picture-mit" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent, computed, nextTick, onMounted, onActivated, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { ElRow, ElCol } from 'element-plus'
export default defineComponent({
  name: 'CarouselContainer',
  props: ['slideList', 'gutterValue'],
  components: { ElRow, ElCol },
  setup (props) {
    const store = useStore()
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()

    onMounted(async () => { })
    return {
      props
    }
  }
})
</script>

<style lang="less" scoped>
.carousel-container {
  width: 100%;
  .row-bg {
    // padding: 50px 0 35px;
    // @media screen and (max-width: 600px) {
    //   padding: 100px 0 70px;
    // }
    .el-col {
      margin: 2px 0;
      max-width: 11.1111%;
      flex: 0 0 11.1111%;
      @media screen and (max-width: 768px) {
        max-width: 20%;
        flex: 0 0 20%;
      }
      @media screen and (max-width: 600px) {
        max-width: 25%;
        flex: 0 0 25%;
      }
    }
  }
}
</style>
