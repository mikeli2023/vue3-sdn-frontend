<template>
  <div class="landing">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
<style lang="less">
@import "./assets/css/style.css";

.mt-border {
  margin: 30px auto;
  border-top: 1px solid #8c878d;
}
.lang-max {
  width: 70%;
  max-width: 1340px;
  padding: 0;
  margin: auto;
  overflow: hidden;
  @media screen and (min-width: 2160px) {
    width: 100%;
    max-width: 1480px;
  }
  @media screen and (min-width: 2664px) {
    max-width: 1680px;
  }
  @media screen and (min-width: 4090px) {
    max-width: 1920px;
  }
  @media screen and (min-width: 5120px) {
    max-width: 2160px;
  }
  @media screen and (max-width: 1200px) {
    width: calc(100% - 64px);
    padding: 0 32px;
  }
}
.font-79 {
  font-size: 79px;
  @media screen and (min-width: 2160px) {
    font-size: 28px;
  }
  @media screen and (max-width: 768px) {
    font-size: 84px;
  }
  @media screen and (max-width: 600px) {
    font-size: 128px;
  }
  @media screen and (max-width: 540px) {
    font-size: 168px;
  }
}
.font-72 {
  font-size: 72px;
  @media screen and (min-width: 2160px) {
    font-size: 36px;
  }
  @media screen and (max-width: 768px) {
    font-size: 108px;
  }
  @media screen and (max-width: 600px) {
    font-size: 128px;
  }
  @media screen and (max-width: 540px) {
    font-size: 148px;
  }
}
.font-68 {
  font-size: 68px;
  @media screen and (min-width: 2160px) {
    font-size: 34px;
  }
  @media screen and (max-width: 768px) {
    font-size: 102px;
  }
  @media screen and (max-width: 600px) {
    font-size: 123px;
  }
  @media screen and (max-width: 540px) {
    font-size: 144px;
  }
}
.font-64 {
  font-size: 64px;
  @media screen and (min-width: 2160px) {
    font-size: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 96px;
  }
  @media screen and (max-width: 600px) {
    font-size: 118px;
  }
  @media screen and (max-width: 540px) {
    font-size: 139px;
  }
}
.font-50 {
  font-size: 50px;
  @media screen and (min-width: 2160px) {
    font-size: 25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 75px;
  }
  @media screen and (max-width: 600px) {
    font-size: 100px;
  }
  @media screen and (max-width: 540px) {
    font-size: 124px;
  }
}
.font-48 {
  font-size: 48px;
  @media screen and (min-width: 2160px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 72px;
  }
  @media screen and (max-width: 600px) {
    font-size: 96px;
  }
  @media screen and (max-width: 540px) {
    font-size: 120px;
  }
}
.font-46 {
  font-size: 46px;
  @media screen and (min-width: 2160px) {
    font-size: 23px;
  }
  @media screen and (max-width: 768px) {
    font-size: 69px;
  }
  @media screen and (max-width: 600px) {
    font-size: 98px;
  }
  @media screen and (max-width: 540px) {
    font-size: 118px;
  }
}
.font-42 {
  font-size: 42px;
  @media screen and (min-width: 2160px) {
    font-size: 21px;
  }
  @media screen and (max-width: 768px) {
    font-size: 63px;
  }
  @media screen and (max-width: 600px) {
    font-size: 94px;
  }
  @media screen and (max-width: 540px) {
    font-size: 116px;
  }
}
.font-38 {
  font-size: 38px;
  @media screen and (min-width: 2160px) {
    font-size: 19px;
  }
  @media screen and (max-width: 768px) {
    font-size: 57px;
  }
  @media screen and (max-width: 600px) {
    font-size: 102px;
  }
  @media screen and (max-width: 540px) {
    font-size: 114px;
  }
}
.font-33 {
  font-size: 33px;
  @media screen and (min-width: 2160px) {
    font-size: 16.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 49.5px;
  }
  @media screen and (max-width: 600px) {
    font-size: 77px;
  }
  @media screen and (max-width: 540px) {
    font-size: 99px;
  }
}
.font-30 {
  font-size: 30px;
  @media screen and (min-width: 2160px) {
    font-size: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
  @media screen and (max-width: 600px) {
    font-size: 70px;
  }
  @media screen and (max-width: 540px) {
    font-size: 90px;
  }
}
.font-27 {
  font-size: 27px;
  @media screen and (min-width: 2160px) {
    font-size: 13.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 600px) {
    font-size: 56px;
  }
  @media screen and (max-width: 540px) {
    font-size: 71px;
  }
}
.font-24 {
  font-size: 24px;
  @media screen and (min-width: 2160px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media screen and (max-width: 600px) {
    font-size: 54px;
  }
  @media screen and (max-width: 540px) {
    font-size: 72px;
  }
}
.font-23 {
  font-size: 23px;
  @media screen and (min-width: 2160px) {
    font-size: 11.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 34.5px;
  }
  @media screen and (max-width: 600px) {
    font-size: 51px;
  }
  @media screen and (max-width: 540px) {
    font-size: 69px;
  }
}
.font-22 {
  font-size: 22px;
  @media screen and (min-width: 2160px) {
    font-size: 11px;
  }
  @media screen and (max-width: 768px) {
    font-size: 33px;
  }
  @media screen and (max-width: 600px) {
    font-size: 55px;
  }
  @media screen and (max-width: 540px) {
    font-size: 66px;
  }
}
.font-20 {
  font-size: 20px;
  @media screen and (min-width: 2160px) {
    font-size: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 45px;
  }
  @media screen and (max-width: 540px) {
    font-size: 60px;
  }
}
.font-18 {
  font-size: 18px;
  @media screen and (min-width: 2160px) {
    font-size: 9px;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
  @media screen and (max-width: 540px) {
    font-size: 54px;
  }
}
.font-16 {
  font-size: 16px;
  @media screen and (min-width: 2160px) {
    font-size: 8px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 600px) {
    font-size: 36px;
  }
  @media screen and (max-width: 540px) {
    font-size: 48px;
  }
}
.font-14 {
  font-size: 14px;
  @media screen and (min-width: 2160px) {
    font-size: 7px;
  }
  @media screen and (max-width: 768px) {
    font-size: 21px;
  }
  @media screen and (max-width: 600px) {
    font-size: 31px;
  }
  @media screen and (max-width: 540px) {
    font-size: 42px;
  }
}

.font-gilroy-black {
  font-family: "gilroy-black";
}
.font-gilroy-bold {
  font-family: "gilroy-bold";
}

.weight-3 {
  font-weight: 300;
}
.weight-4 {
  font-weight: 400;
}
.weight-5 {
  font-weight: 500;
}
.weight-6 {
  font-weight: 600;
}
.weight-7 {
  font-weight: 700;
}
.weight-8 {
  font-weight: 800;
}

.flex-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &.space-between {
    justify-content: space-between;
  }
  &.center {
    justify-content: center;
  }
  &.flex-start {
    justify-content: flex-start;
  }
  &.flex-end {
    justify-content: flex-end;
  }
  &.nowrap {
    flex-wrap: nowrap;
  }
}

.width-icon {
  display: block;
  width: 24px;
  height: 24px;
  color: @black-color;
  fill: @black-color;
  &.small {
    width: 20px;
    height: 20px;
  }
  &.min-small {
    width: 16px !important;
    height: 16px;
  }
  &.minimum-small {
    width: 14px;
    height: 14px;
  }
  &.big {
    width: 35px;
    height: 35px;
  }
  svg {
    width: inherit;
    height: inherit;
  }
}

.button-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.button {
  display: inline-block;
  padding: 8px;
  cursor: pointer;
  border-radius: 100px;
  &:hover {
    background-color: @black-color-opacity2;
  }
  svg,
  path {
    display: block;
    fill: @black-color;
    cursor: inherit;
  }
}

.el-button--primary {
  background-color: @theme-color !important;
  border-color: @theme-color !important;
}

.is-disabled {
  cursor: no-drop;
}

.img {
  display: block;
  width: 100%;
}

.picture-mit {
  max-width: 170px;
  margin: auto;
}

.menu-width-mit {
  width: calc(100% - 230px);
  @media screen and (max-width: 540px) {
    width: calc(100% - 200px);
  }
}

.el-loading-spinner {
  position: relative !important;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  top: auto !important;
  margin: 0 !important;
  .path {
    stroke: @theme-color;
  }
  .circular {
    @media screen and (max-width: 540px) {
      width: 150px !important;
      height: 150px !important;
    }
  }
  .el-loading-text {
    width: 100%;
    margin: 8px 0 0 !important;
    font-size: inherit !important;
    color: @theme-color;
    @media screen and (max-width: 540px) {
      margin: 38px 0 0 !important;
    }
  }
}

.el-popper {
  .el-select-dropdown__wrap,
  .el-select-dropdown__list,
  .el-select-dropdown__item {
    font-size: inherit;
    li {
      @media screen and (max-width: 768px) {
        height: auto;
        line-height: 2;
      }
    }
  }
}
</style>
