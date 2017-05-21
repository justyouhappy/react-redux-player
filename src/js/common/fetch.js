export default function fetchdata(url, config) {
	let fetchConfig = {
		credentials: 'same-orgin'//此属性配置是为了携带同源cookie，还有其他两个值
	}//配置fetch要球的第二个参数，自定义请求的参数
	config = config || {};
	if ((config.method === 'get' || config.method === 'GET') && config.data) {
		url += (url.indexOf('?') === -1 ? '?' : '&') + Object.keys(config.data).map(key => {
			return key + '=' + config.data[key]//不可以写成config.data.key,原因：太简单了，自己查，如果有信息保密需求的，最好把数据解析成和后端商议好的进制模式
		})
	} else if (config.method === 'POST' || config.method === 'post') {
		fetchConfig = Object.assign(fetchConfig, {
			method: 'POST', //不解释，参考ajax
			hearders: {
				'Content-Type': 'application/json',//和ajax一样，需配置服务端解析data格式
			},
			body: JSON.stringify(config.data)//将我们想传给后端data，放入此属性中
		})
	}
	//配置都结束了，接下来直接调用？
	return fetch(url, fetchConfig).then(responseText => {
		return responseText.json()//json() - 生成JSON.parse(responseText)的结果
	}).then(json => { //获取成功
		return json
	}, error => { //获取失败
		return Promise.reject(error)//处理失败返回的数据
	});
}