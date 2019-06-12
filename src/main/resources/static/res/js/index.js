
// 今天待办
function loadCurrHopeDoneList() {
	
	//var currtime = new Date().Format("yyyyMMddHHmmss");
	var currDate = new Date().Format("yyyyMMdd");
	
    var condition = {
    		itemHopeDoneDate: currDate,
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
			var html = '<li>'
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
            + '<span>刚刚</span>'
            + '<span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>'
            + '<a href="javascript:void(0);" link>'
            + '<span class="layui-badge fly-badge-accept layui-bg-gray layui-hide-xs">关闭</span>'
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

// 加载未完成
function loadNotDoneList() {
	
	//var currtime = new Date().Format("yyyyMMddHHmmss");
	//var currDate = new Date().Format("yyyyMMdd");
	
    var condition = {
    		//itemHopeDoneDate: currDate,
    		itemStatus: 200,
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
			var html = '<li>'
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
            + '<span>刚刚</span>'
            + '<span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>'
            + '<span class="layui-badge fly-badge-accept layui-hide-xs">未完成</span>'
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

