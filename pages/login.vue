<template>
	<view class="content">
		<view class="logoBox">
			<image class='logo' src="../static/login/国家电网-LOGO@3x.png" mode=""></image>
		</view>
		<view class="mt120">
			<m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入手机号"></m-input>
		</view>
		<view class="mt120">
			<m-input class="m-input" type="password" clearable displayable v-model="password" placeholder="请输入密码"></m-input>
		</view>
	</view>
</template>

<script>
	import mInput from '../components/m-input.vue'
	export default {
		components:{
			mInput
		},
		data() {
			return {
				account:'',
				password:''
			};
		}
	}
</script>

<style lang="scss" scoped>
.content{
	.logoBox{
		text-align: center;
	}
	.logo{
		margin-top: 170upx;
		width: 180upx;
		height: 180upx;
	}
	.mt120{
		padding:0 62upx;
		
		box-sizing: border-box;
	}
}
</style>
