
function getStatusDesc(status){
	var statusDesc = '';
	// 任务状态。0-进行中；100-按时完成；200-过期未完成；300-过期已完成；400-草稿；
	if(status == 0){
		statusDesc = '';
	}
}

// 今天待办
function loadCurrHopeDoneList() {
	
	//var currtime = new Date().Format("yyyyMMddHHmmss");
	var currDate = new Date().Format("yyyyMMdd");
	
    var condition = {
    		itemHopeDoneDate: currDate,
    		itemStatus: 0
    		//pageNum: 1,
    		//pageSize: 20
	};
    
    var conditionJson = JSON.stringify(condition);
    
    var successFunc = function(data) {
    	if(data.code != 0)
    	{
    		return;
    	}
		
    	var ulCurrHopeDone = $("#ulCurrHopeDone");
    	ulCurrHopeDone.empty();
		var dataList = data.data;
		for (var i = 0; i < dataList.length; i++) 
		{
			var hideClass = '';
			// 已完成，不需要显示操作按钮
			if(dataList[i].itemStatus == 100){
				hideClass = 'layui-hide';
			}
			
			var html = '<li id="liId-'+dataList[i].id+'" data-itemhopedonedate="'+dataList[i].itemHopeDoneDate+'" >'
            + '<a href="user/home.html" class="fly-avatar">'
            + '<img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">'
            + '</a>'
            + '<h2>'
            + '<a class="layui-badge">动态</a>'
            + '<a href="jie/detail.html">'+dataList[i].itemContent+'</a>'
            + '</h2>'
            + '<div class="fly-list-info">'
            + '<a href="user/home.html" link>'
            + '<cite>贤心</cite>'
            + '<i class="iconfont icon-renzheng" title="认证信息：XXX"></i>'
            + '<i class="layui-badge fly-badge-vip">VIP3</i>'
            + '</a>'
            + '<span>'+dataList[i].itemHopeDoneDate+'</span>'
            + '<span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>'
            + '<a href="javascript:void(0);" onclick="finishItem(\''+dataList[i].id+'\')" link>'
            + '<span class="layui-badge fly-badge-accept layui-bg-gray layui-hide-xs '+hideClass+' " >完成</span>'
            + '</a>'
            //+ '<button type="button" class="layui-btn layui-btn-xs">一个标准的按钮</button>'
            + '<span class="fly-list-nums"> '
            + '<i class="iconfont icon-pinglun1" title="回答"></i> 66'
            + '</span>'
            + '</div>'
            + '<div class="fly-list-badge">'
            + '</div>'
            + '</li>';
				
			ulCurrHopeDone.append(html);
		}
		
	};
    
	var path = "v1/findItemList";
    loadData(path, true, conditionJson, successFunc);
};

//今天已办
function loadCurrDoneList() {
	
	//var currtime = new Date().Format("yyyyMMddHHmmss");
	var currDate = new Date().Format("yyyyMMdd");
	
    var condition = {
    		itemHopeDoneDate: currDate,
    		itemStatus: 100
    		//pageNum: 1,
    		//pageSize: 20
	};
    
    var conditionJson = JSON.stringify(condition);
    
    var successFunc = function(data) {
    	if(data.code != 0)
    	{
    		return;
    	}
		
    	var ulCurrHopeDone = $("#ulCurrDone");
    	ulCurrHopeDone.empty();
		var dataList = data.data;
		for (var i = 0; i < dataList.length; i++) 
		{
			var hideClass = '';
			// 已完成，不需要显示操作按钮
			if(dataList[i].itemStatus == 100){
				hideClass = 'layui-hide';
			}
			
			var html = '<li id="liId-'+dataList[i].id+'" data-itemhopedonedate="'+dataList[i].itemHopeDoneDate+'" >'
            + '<a href="user/home.html" class="fly-avatar">'
            + '<img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">'
            + '</a>'
            + '<h2>'
            + '<a class="layui-badge">动态</a>'
            + '<a href="jie/detail.html">'+dataList[i].itemContent+'</a>'
            + '</h2>'
            + '<div class="fly-list-info">'
            + '<a href="user/home.html" link>'
            + '<cite>贤心</cite>'
            + '<i class="iconfont icon-renzheng" title="认证信息：XXX"></i>'
            + '<i class="layui-badge fly-badge-vip">VIP3</i>'
            + '</a>'
            + '<span>'+dataList[i].itemHopeDoneDate+'</span>'
            + '<span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>'
            + '<a href="javascript:void(0);" onclick="finishItem(\''+dataList[i].id+'\')" link>'
            + '<span class="layui-badge fly-badge-accept layui-bg-gray layui-hide-xs '+hideClass+' " >完成</span>'
            + '</a>'
            //+ '<button type="button" class="layui-btn layui-btn-xs">一个标准的按钮</button>'
            + '<span class="fly-list-nums"> '
            + '<i class="iconfont icon-pinglun1" title="回答"></i> 66'
            + '</span>'
            + '</div>'
            + '<div class="fly-list-badge">'
            + '</div>'
            + '</li>';
				
			ulCurrHopeDone.append(html);
		}
		
	};
    
	var path = "v1/findItemList";
    loadData(path, true, conditionJson, successFunc);
};


var selectClass = "layui-this";

function itemListChangeSelectClass(id){
	
	itemListRemoveSelectClass("aNotDoneList");
	itemListRemoveSelectClass("aDoneList");
	itemListRemoveSelectClass("aAllList");
	
	var aItemList = $("#"+id);
	// 不是自身选中
	if(!aItemList.hasClass(selectClass)){
		aItemList.addClass(selectClass);
	}
	
}

function itemListRemoveSelectClass(id){
	var aItemList = $("#"+id);
	
	// 不是自身选中
	if(aItemList.hasClass(selectClass)){
		aItemList.removeClass(selectClass);
	}
	
} 

//加载未完成
function loadNotDoneList() {
	
	itemListChangeSelectClass("aNotDoneList");
	loadItemList(200);
}

//加载已完成
function loadDoneList() {
	itemListChangeSelectClass("aDoneList");
	loadItemList(100);
}

//加载全部
function loadAllList() {
	itemListChangeSelectClass("aAllList");
	loadItemList(null);
}

// 加载事项
function loadItemList(itemStatus) {
	
	//var currtime = new Date().Format("yyyyMMddHHmmss");
	//var currDate = new Date().Format("yyyyMMdd");
	
    var condition = {
    		//itemHopeDoneDate: currDate,
    		itemStatus: itemStatus,
    		itemHopeDoneDateSort: -1,
    		pageNum: 1,
    		pageSize: 10
	};
    
    var conditionJson = JSON.stringify(condition);
    
    var successFunc = function(data) {
    	if(data.code != 0)
    	{
    		return;
    	}
		
    	var ulCurrHopeDone = $("#ulNotDone");
    	ulCurrHopeDone.empty();
		var dataList = data.data;
		for (var i = 0; i < dataList.length; i++) 
		{
			var hideClass = '';
			// 已完成，不需要显示操作按钮
			if(dataList[i].itemStatus == 100){
				hideClass = 'layui-hide';
			}
			
			var html = '<li id="liId-'+dataList[i].id+'" data-itemhopedonedate="'+dataList[i].itemHopeDoneDate+'" >'
            + '<a href="user/home.html" class="fly-avatar">'
            + '<img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">'
            + '</a>'
            + '<h2>'
            + '<a class="layui-badge">动态</a>'
            + '<a href="jie/detail.html">'+dataList[i].itemContent+'</a>'
            + '</h2>'
            + '<div class="fly-list-info">'
            + '<a href="user/home.html" link>'
            + '<cite>贤心</cite>'
            + '<i class="iconfont icon-renzheng" title="认证信息：XXX"></i>'
            + '<i class="layui-badge fly-badge-vip">VIP3</i>'
            + '</a>'
            + '<span>'+dataList[i].itemHopeDoneDate+'</span>'
            + '<span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>'
            + '<a href="javascript:void(0);" onclick="finishItem(\''+dataList[i].id+'\')" link>'
            + '<span class="layui-badge fly-badge-accept layui-bg-gray layui-hide-xs '+hideClass+' " >完成</span>'
            + '</a>'
            + '<a href="javascript:void(0);" onclick="notFinishItem(\''+dataList[i].id+'\')" link>'
            + '<span class="layui-badge fly-badge-accept layui-bg-gray layui-hide-xs '+hideClass+' " >无需再做</span>'
            + '</a>'
            //+ '<button type="button" class="layui-btn layui-btn-xs">一个标准的按钮</button>'
            + '<span class="fly-list-nums"> '
            + '<i class="iconfont icon-pinglun1" title="回答"></i> 66'
            + '</span>'
            + '</div>'
            + '<div class="fly-list-badge">'
            + '</div>'
            + '</li>';
				
			ulCurrHopeDone.append(html);
		}
		
	};
    
	var path = "v1/findItemList";
    loadData(path, true, conditionJson, successFunc);
};

function finishItem(id){
	
	layer.confirm('完成该事项？', {btn: ['确定','取消']}, function(index){
		
		var liId = "liId-" + id;
		//console.log("liId="+liId);
		
		var itemHopeDoneDate = $("#"+liId).data("itemhopedonedate");
		//console.log("itemHopeDoneDate="+itemHopeDoneDate);
		
		var currDate = new Date().Format("yyyyMMdd");
		
		var itemStatus;
		// 期望完成时间就是当前时间，则状态是按时完成
		if(itemHopeDoneDate == currDate){
			itemStatus = 100;
		}else{
			// 过期已完成
			itemStatus = 300;
		}
		
		var condition = {
	    		id: id,
	    		itemStatus: itemStatus,
	    		itemRealDoneDate: currDate
		};
		
		var conditionJson = JSON.stringify(condition);
	    
		var path = "v1/updateItem";
	    loadData(path, false, conditionJson, null);
	  
	    loadCurrHopeDoneList();
	    loadCurrDoneList();
	    loadNotDoneList();
	    
	    layer.close(index);
	});
	
}

// 更新事项为不用完成
function notFinishItem(id){
	
	layer.confirm('完成该事项？', {btn: ['确定','取消']}, function(index){
		
		var liId = "liId-" + id;
		
		var itemStatus = 500;
		
		var condition = {
	    		id: id,
	    		itemStatus: itemStatus
		};
		
		var conditionJson = JSON.stringify(condition);
	    
		var path = "v1/updateItem";
	    loadData(path, false, conditionJson, null);
	  
	    //loadCurrHopeDoneList();
	    //loadCurrDoneList();
	    loadNotDoneList();
	    
	    layer.close(index);
	});
	
}

