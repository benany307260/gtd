


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
				//var resdata = data.data, rescode = data.meta.success , message = data.meta.message;
				//alert(message+"----"+resdata);
				successFunc(data);
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
}


$(document).ready(function(){
	//loadUser();
});

