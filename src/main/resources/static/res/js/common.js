


   /* 加载数据*/
	loadData = function(path, isAsync, data, successFunc) {
		var url =("../") + path; 
		
		$.ajax({
			url: url,
			type: 'POST',
			timeout: 60000,
			async: isAsync,
			contentType: "application/json; charset=utf-8",
			dataType: 'json',
			data: data,
			success: function(data){
				if(successFunc == null){
					if(data.code == 0) {
			    		layer.msg('操作成功');
			    	}
					else {
						layer.msg(data.msg);
					}
				}else{
					successFunc(data);
				}
			},
			error:function(data){
				alert("error");
			},
			beforeSend: function(){
		      
		   },
		   complete: function(){
			  
		   }
		});
	};
	
	loadDataPost = function(port, isAsync, data, headers, successFunc) {
		var url =("./") + port; 
		$.ajax({
			url: url,
			type: 'POST',
			timeout: 60000,
			headers: headers,
			async: isAsync,
			dataType: 'json',
			data: data,
			success: function(data){
				//var resdata = data.data, rescode = data.meta.success , message = data.meta.message;
				//alert(message+"----"+resdata);
				successFunc(data);
			},
			error:function(data){
				alert(data.responseJSON.meta.message);
			},
			beforeSend: function(){
		      
		   },
		   complete: function(){
			  
		   }
		});
	};

	/* 限制点击的特殊加载数据*/
	sploadData = function(port, port_method, isAsync,data, successFunc) {
		var localToken=modToken,
			url =("../") + ( port.match(/\?/g) ? (port + localToken.replace(/\?/,'&')):(port + modToken)) + ("&method="+port_method); 
		$.ajax({
			url: url,
			type: 'POST',
			timeout: 60000,
			async: isAsync,
			dataType: 'json',
			data: data,
			success: function(data){
				successFunc(data);
			},
			error:function(){
				clearTimeout(handler);
				var handler = setTimeout(function(){$('.js-loading').hide();},0);
			},
			beforeSend: function(){
		      $('.js-loading').show();
		   },
		   complete: function(){
			   clearTimeout(handler);
			   var handler = setTimeout(function(){$('.js-loading').hide();},0);
		   }
		});
	};
	/*发送数据*/
	sendData = function(url,data, successFunc) {
		$.ajax({
			url:("../") + url,
			type: 'POST',
			timeout: 60000,
			async: true,
			dataType: 'json',
			data: data,
			success: successFunc,
			error:function(){
				window.location.assign("domainURL");
			}
		});
	};
			



/*支付跳转新窗口，返回html*/
function loadData_charge(port, port_method, isAsync,data, successFunc) {
	var url =("../") + ( port.match(/\?/g) ? (port + modToken.replace(/\?/,'&')):(port + modToken)) + ("&method="+port_method); 
	$.ajax({
		url: url,
		type: 'POST',
		timeout: 60000,
		async: isAsync,
		dataType: 'html',
		data: data,
		success: successFunc,
		error:function(){
			clearTimeout(handler);
			var handler = setTimeout(function(){$('.js-loading').hide();},0);
		},
		beforeSend: function(){
		  $('.js-loading').show();
		},
		complete: function(){
		   clearTimeout(handler);
		   var handler = setTimeout(function(){$('.js-loading').hide();},0);
		}
	});
};


function loadData_charge_json(port, port_method, isAsync,data, successFunc) {
	var url =("../") + ( port.match(/\?/g) ? (port + modToken.replace(/\?/,'&')):(port + modToken)) + ("&method="+port_method); 
	$.ajax({
		url: url,
		type: 'POST',
		timeout: 60000,
		async: isAsync,
		dataType: 'json',
		data: data,
		success: successFunc,
		error:function(){
			clearTimeout(handler);
			var handler = setTimeout(function(){$('.js-loading').hide();},0);
		},
		beforeSend: function(){
		  $('.js-loading').show();
		},
		complete: function(){
		   clearTimeout(handler);
		   var handler = setTimeout(function(){$('.js-loading').hide();},0);
		}
	});
};

//时间格式化问题
Date.prototype.Format = function (fmt) {  
    var o = {  
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "H+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds() //毫秒   
    };  
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));  
    for (var k in o)  
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));  
    return fmt;  
};


UrlParam = function() { // url参数 
	　　var data, index; 
	　　(function init() { 
	　　　　data = []; //值，如[["1","2"],["zhangsan"],["lisi"]] 
	　　　　index = {}; //键:索引，如{a:0,b:1,c:2} 
	　　　　var u = window.location.search.substr(1); 
	　　　　if (u != '') { 
	　　　　　　var params = decodeURIComponent(u).split('&'); 
	　　　　　　for (var i = 0, len = params.length; i < len; i++) { 
	　　　　　　　　if (params[i] != '') { 
	　　　　　　　　　　var p = params[i].split("="); 
	　　　　　　　　　　if (p.length == 1 || (p.length == 2 && p[1] == '')) {// p | p= | = 
	　　　　　　　　　　　　data.push(['']); 
	　　　　　　　　　　　　index[p[0]] = data.length - 1; 
	　　　　　　　　　　} else if (typeof(p[0]) == 'undefined' || p[0] == '') { // =c 舍弃 
	　　　　　　　　　　　　continue; 
	　　　　　　　　　　} else if (typeof(index[p[0]]) == 'undefined') { // c=aaa 
	　　　　　　　　　　　　data.push([p[1]]); 
	　　　　　　　　　　　　index[p[0]] = data.length - 1; 
	　　　　　　　　　　} else {// c=aaa 
	　　　　　　　　　　　　data[index[p[0]]].push(p[1]); 
	　　　　　　　　　　} 
	　　　　　　　　} 
	　　　　　　} 
	　　　　} 
	　　})(); 
	　　return { 
	 　　　　// 获得参数,类似request.getParameter() 
	　　　　param : function(o) { // o: 参数名或者参数次序 
	　　　　　　try { 
	　　　　　　　　return (typeof(o) == 'number' ? data[o][0] : data[index[o]][0]); 
	　　　　　　} catch (e) { 
	　　　　　　} 
	　　　　}, 
	　　　　//获得参数组, 类似request.getParameterValues() 
	　　　　paramValues : function(o) { // o: 参数名或者参数次序 
	　　　　　　try { 
	　　　　　　　　return (typeof(o) == 'number' ? data[o] : data[index[o]]); 
	　　　　　　} catch (e) {} 
	　　　　}, 
	　　　　//是否含有paramName参数 
	　　　　hasParam : function(paramName) { 
	　　　　　　return typeof(paramName) == 'string' ? typeof(index[paramName]) != 'undefined' : false; 
	　　　　}, 
	　　　　// 获得参数Map ,类似request.getParameterMap() 
	　　　　paramMap : function() { 
	　　　　　　var map = {}; 
	　　　　　　try { 
	　　　　　　　　for (var p in index) { map[p] = data[index[p]]; } 
	　　　　　　} catch (e) {} 
	　　　　　　return map; 
	　　　　} 
	  　　} 
	}();



$(document).ready(function(){
	//loadUser();
});

