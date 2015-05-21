/*
路由请求选择
为路由提供请求的 URL 和其他需要的 GET 及 POST 参数, 随后路由需要根据这些数据来执行相应的代码.
即在接到请求后执行真正的处理程序.

因此我们需要查看HTTP请求,从中提取出请求的URL以及 GET/POST参数.该部分功能可以
让路由来做,也可以让服务器中或者是单独的一个模块.

所有需要的数据都会包含在 request 对象中 该对象作为 onRequest() 回调函数的第一个参数传递.
为了解析这些数据,我们需要额外的NodeJS模块,分别是 url 和 querystring模块.
*/

/*
针对不同的 URL 做不同的处理
路由模块不该做真正的处理过程, 不然当应用复杂,需要做许多的处理时, 路由就会很复杂.
我们将路由目标的函数称为请求处理程序.即根据路由来选择执行相应的处理程序.

为请求处理程序添加一个模块, 使用依赖注入让路由和请求处理程序之间的耦合更加松散,
提高路由的重用性.
*/
function route(handle, pathname, response){
	console.log("About to route a request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response);
	}else{
		console.log("No request handler found for " + pathname);
	}
}

exports.route = route;