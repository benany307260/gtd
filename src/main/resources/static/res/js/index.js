

function loadCurrHopeDoneList() {
	
	//var currtime = new Date().Format("yyyyMMddHHmmss");
	var currDate = new Date().Format("yyyyMMdd");
	
    var condition = {
    		itemHopeDoneDate: currDate
	};
    
    var conditionJson = JSON.stringify(condition);
    
    var successFunc = function(data) {
    	if(!data.meta.success)
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
            + '<a href="jie/detail.html">测试啦测试啦</a>'
            + '</h2>'
            + '<div class="fly-list-info">'
            + '<a href="user/home.html" link>'
            + '<cite>贤心</cite>'
            + '<i class="iconfont icon-renzheng" title="认证信息：XXX"></i>'
            + '<i class="layui-badge fly-badge-vip">VIP3</i>'
            + '</a>'
            + '<span>刚刚</span>'
            + '<span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>'
            + '<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>'
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
    
	var path = "v1/getCurrHopeDone";
    loadData(path, true, conditionJson, successFunc);
};
