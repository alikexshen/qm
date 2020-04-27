
var header = {};
module.exports = (param) => {
	var url = param.url;
	var method = param.method;
	var data = param.data || {};
		
	var myhttp = function(){
		// 请求方式: GET POST
		if(method){
			method = method.toUpperCase(); // 小写转成大写
		}
		
		// 发起请求 加载动画
		if(!param.hideLoading){
			uni.showLoading({
				title:"加载中...",
				mask:true
			})
			delete param.hideLoading
			// this.$loading(); 
		}
		
		// 发起网络请求
		uni.request({
			url: url,
			method:method || "GET",
			header:header,
			data: data,
			sslVerify:false,
			success: res => {
				uni.hideLoading()
				// this.$loading(false);
				if(res.data.code && res.data.code != 200){ // api错误
					uni.showToast({
						icon:'none',
						title:res.data.msg,
						duration: 2000
					})
					if(res.data.code && res.data.code == 401){ // 
						header.token = ''
						uni.showToast({
							icon:'none',
							title:'登录失效，请重新登录！',
							duration: 2000,
							success:()=>{
								uni.clearStorage();
								uni.reLaunch({
									url:'/pages/login/login'
								})
							}
						})
						
						return;
					}
					if(res.data.code && res.data.code == 501){ // api错误
						uni.showToast({
							icon:'none',
							title:'您的网络有问题！',
							duration: 2000
						})
						return;
					}
					if(res.data.code && res.data.code == 500){ // api错误
						uni.showToast({
							icon:'none',
							title:'服务器异常,请刷新重试！',
							duration: 200000
						})
						return;
					}
					return;
				}
				
				if(param.type && param.type=='logout'){
					header.token = ''
				}
				// typeof param.success == "function" && 
				param.success(res.data.data);
			},
			fail: (e) => {
				uni.hideLoading()
				// this.$loading(false);
				uni.showToast({
					icon:'none',
					title: e.meg,
					duration: 2000
				})
				typeof param.fail == "function" && param.fail(e.data);
			},
			complete: () => {
				typeof param.complete == "function" && param.complete(e.data);
				return;
			}
		})
	}


//获取token
	if(!header.token){
		uni.getStorage({
			key:'token',
			success:(data)=>{
				header={'token':data.data}
				myhttp()	
			},
			fail:()=> {
				header={}
				myhttp()
			}
		})
	}else{
		myhttp()
	}
}