<template>
  <view class="wrap">
    <form @submit="onSubmit">
      <view class="form">
        <view class="form-item">
          <view class="label">领款人</view>
          <input class="ipt" name="name" placeholder="请填写" />
        </view>
        <view class="form-item">
          <view class="label">手机号</view>
          <input class="ipt" name="phone" placeholder="请填写" />
        </view>
        <view class="form-item">
          <view class="label">申请日期</view>
          <input class="ipt" name="name" placeholder="请选择" />
        </view>
      </view>
      <button class="btn-submit" form-type="submit">立即申请</button>
    </form>
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      onSubmit(e) {
        console.log(e.detail.value)
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrap {
    background-color: #F7F7F7;
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 20upx;
  }

  .form {
    background-color: #FFFFFF;
    padding: 0 30upx;
  }

  .form-item {
    position: relative;

    .label {
      font-size: 32upx;
      color: #262626;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    .ipt {
      height: 110upx;
      font-size: 32upx;
      color: #262626;
      text-align: right;
      border-bottom: 1upx solid #E5E5E5;
      padding-left: 200upx;
    }
  }

  .btn-submit {
    font-size: 34upx;
    color: #FFFFFF;
    background-color: #47CCA0;
    border-radius: 100upx;
    margin: 60upx 30upx 0;
  }
</style>
