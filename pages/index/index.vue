<template>
	<view class="content">
		<hx-navbar :back="false" :backgroundImg="'../../static/index/BG-H01@3x.png'" >
			<view class="out fz26 pl50" slot="right">
				退出
			</view>
		</hx-navbar>
		<view class="topWrap">
			<view class="topcont">
				<view class="headImg">
					
				</view>
				<view class="ml30">
					<view class="fz42">
						李某某
					</view>
					<view class="fz32">
						13812345678
					</view>
					<!-- <image src="../../static/index/BG-H01@3x.png" mode=""></image> -->
				</view>
			</view>
		</view>
		<view class="wrapPart2">
			<view class="searchPart">
				<input type="text" value="" class="searchInp fz30" placeholder="搜索人名、标题、内容"/>
				<image class="searchIcon" src="../../static/index/search@3x.png" mode=""></image>
			</view>
			<view class="navPart mt60">
				<view class="navItem">
					<image src="../../static/index/add@3x.png" class="navItemImg" mode=""></image>
					<view class="fz34 fw500">
						添加赔偿
					</view>
				</view>
				<view class="navItem">
					<image src="../../static/index/list@3x.png" class="navItemImg" mode=""></image>
					<view class="fz34 fw500">
						赔偿记录
					</view>
				</view>
				<view class="navItem">
					<image src="../../static/index/message@3x.png" class="navItemImg messageImg" mode=""></image>
					<view class="fz34 fw500">
						消息
					</view>
				</view>
			</view>
			<view class="messageTipPart">
				<view class="left fz30">
					<image src="../../static/index/sp@3x.png" class="sp pr10" mode=""></image>
					<view class="">
						您有1条 <text class="red">驳回</text> 赔偿待处理<text class="time pl20">2小时前</text>
					</view>
				</view>
				<image src="../../static/index/godetail@3x.png" class="godetail" mode=""></image>
			</view>
			<navigator url="../login">denglu</navigator>
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
		.out{
			color:#fff;
		}
		.topWrap{
			
		}
		.topcont{
			height: 250upx;
			width:100% ;
			// background:linear-gradient(90deg,rgba(71,204,160,1) 0%,rgba(0,117,113,1) 100%);
			background: url(../../static/index/BG-H02@3x.png)0 0 no-repeat;
			background-size: 100%;
			padding: 0 30upx;
			display: flex;
			color:#fff;
			.headImg{
				height: 120upx;
				width: 120upx;
				background-color: #fff;
				border-radius: 50%;
			}
		}
		.wrapPart2{
			padding: 0 30upx;
			margin-top:-60upx;
			.searchPart{
				height: 100upx;
				background:rgba(255,255,255,1);
				box-shadow:0px 4upx 16upx 0px rgba(241,241,241,1);
				border-radius:14upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				
				.searchInp{
					padding-left: 37upx;
					color: #8F8F8F;
				}
				.searchIcon{
					width: 43upx;
					height: 43upx;
					padding-right: 37upx;
				}
			}
		}
		.navPart{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.navItem{
				width: 330upx;
				height: 216upx;
				box-shadow:0px 4px 16px 0px rgba(241,241,241,1);
				text-align: center;
				margin-bottom: 30upx;
				border-radius:14upx;
				.navItemImg{
					padding-top: 30upx;
					width: 78upx;
					height: 94upx;
				}
				.messageImg{
					width: 100upx;
					height: 94upx;
				}
			}
		}
		.messageTipPart{
			height:120upx;
			background:rgba(255,255,255,1);
			box-shadow:0px 4upx 16upx 0px rgba(241,241,241,1);
			border-radius:14upx;
			display: flex;
			padding:0 30upx;
			box-sizing: border-box;
			align-items: center;
			justify-content: space-between;
			.left{
				display: flex;
				align-items: center;
				color:#262626;
				.time{
					color:#8F8F8F;
				}
				.red{
					color:#F53E31;
				}
			}
			.sp{
				width: 30upx;
				height: 34upx;
			}
			.godetail{
				height: 26upx;
				width: 13upx;
			}
		}
	}
</style>
