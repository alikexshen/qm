<template>
  <view class="content">
    <hx-navbar :back="false" :backgroundColorLinearDeg='90' :backgroundColor="[[71,204,160],[0,117,113]]">
      <view class="out fz24 pl50" slot="right">
        退出
      </view>
    </hx-navbar>
    <view class="topcont">
      vjdj
    </view>
  </view>
</template>

<script>
  import hxNavbar from "@/components/hx-navbar/hx-navbar.vue"
  export default {
    components: {
      hxNavbar
    },
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .content {
    width: 100%;

    .out {
      color: #fff;
    }

    .topcont {
      height: 310upx;
      width: 100%;
      background: linear-gradient(90deg, rgba(71, 204, 160, 1) 0%, rgba(0, 117, 113, 1) 100%);
    }
  }
</style>
