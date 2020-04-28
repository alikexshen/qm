<template>
  <view class="wrap">
    <view class="form">
      <view :class="['form-item',{focus:name.focus}]">
        <view class="label">领款人</view>
        <input class="ipt" v-model="name.value" :focus="name.focus" @focus="name.focus=true" @blur="name.focus=false"
          placeholder="请填写" />
        <view class="iconfont" v-show="name.value!==''" @click="name.value=''">&#xe645;</view>
      </view>
      <view :class="['form-item',{focus:phone.focus}]">
        <view class="label">手机号</view>
        <input class="ipt" v-model="phone.value" :focus="phone.focus" @focus="phone.focus=true" @blur="phone.focus=false"
          placeholder="请填写" />
        <view class="iconfont" v-show="phone.value!==''" @click="phone.value=''">&#xe645;</view>
      </view>
      <view class="form-item">
        <view class="label">申请日期</view>
        <!-- <input class="ipt" v-model="date.value" @focus="date.focus=true" @blur="date.focus=false" placeholder="请选择" /> -->
        <picker class="ipt" mode="date" :value="date.value" @change="e=>{date.value=e.target.value}">
          <view class="uni-input">{{date.value}}</view>
        </picker>
      </view>
    </view>
    <view :class="['btn-submit',{disabled:submitEnable}]" @click="onSubmit">立即申请</view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        name: {
          value: '',
          focus: false,
        },
        phone: {
          value: '',
          focus: false,
        },
        date: {
          value: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
          focus: false,
        },
      };
    },
    computed: {
      submitEnable() {
        return !this.name.value || !this.phone.value
      }
    },
    methods: {
      onSubmit() {
        switch (true) {
          case !this.name.value:
            this.name.focus = true
            uni.showToast({
              icon: 'none',
              title: '请填写领款人',
            });
            return
          case !this.phone.value:
            this.phone.focus = true
            uni.showToast({
              icon: 'none',
              title: '请填手机号',
            });
            return
        }
        const params = {
          name: this.name.value,
          phone: this.phone.value,
          date: this.date.value,
        }
        console.log(params)
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
    display: flex;
    align-items: center;
    border-bottom: 1upx solid #E5E5E5;

    &.focus {
      border-bottom: 1upx solid #47CCA0;
    }

    .label {
      font-size: 32upx;
      color: #262626;
    }

    .ipt {
      flex: 1;
      height: 110upx;
      line-height: 110upx;
      font-size: 32upx;
      color: #262626;
      text-align: right;
    }

    .iconfont {
      font-size: 38upx;
      color: #8F8F8F;
      margin-left: 40upx;
    }
  }

  .btn-submit {
    height: 96upx;
    line-height: 96upx;
    text-align: center;
    font-size: 34upx;
    color: #FFFFFF;
    background-color: #47CCA0;
    border-radius: 100upx;
    margin: 60upx 30upx 0;

    &.disabled {
      background-color: #CCCCCC;
    }
  }
</style>
