package com.bentest.gtd.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bentest.gtd.config.SystemConfig;
import com.bentest.gtd.entity.GtdSchedule;
import com.bentest.gtd.repository.GtdScheduleRespository;
import com.bentest.gtd.result.CodeMsg;
import com.bentest.gtd.result.Result;
import com.bentest.gtd.service.IGtdService;
import com.bentest.gtd.vo.GtdScheduleVo;
import com.bentest.spiders.util.GetIncrementId;
import com.github.pagehelper.PageHelper;

@RestController
public class GtdController {
	
	@Autowired
	private IGtdService gtdService;
	
	@Autowired
	private GtdScheduleRespository gtdScheduleRespository;
	
	@Autowired
    private SystemConfig systemConfig;
	
	
	@RequestMapping(value = "/v1/findItemList")
	public Result<Object> findItemList(@RequestBody(required=false) GtdScheduleVo condition) {
		//DateFormatUtils.format(amzProxy.getExpireTime(), "yyyy-MM-dd HH:mm:ss");
		//String currDateStr = DateFormatUtils.format(System.currentTimeMillis(), "yyyyMMdd");
		//Integer currDate = Integer.valueOf(currDateStr);
		
		if(condition.getPageNum() != null && condition.getPageSize() != null) {
			//使用分页插件
			PageHelper.startPage(condition.getPageNum() , condition.getPageSize());
		}
		
		List<GtdSchedule> itemList = gtdService.findItemList(condition);
		
		return Result.success(itemList);
		/*if(CollectionUtils.isEmpty(itemList)) {
			itemList = new ArrayList<GtdSchedule>();
			return Result.success("");
		}
		else {
			return Result.success(itemList);
		}*/
		
	}
	
	@RequestMapping(value = "/v1/updateItem")
	public Result<Object> updateItem(@RequestBody GtdScheduleVo condition) {
		if(condition.getId() == null) {
			return Result.error(CodeMsg.BIND_ERROR);
		}
		
		gtdService.updateItemById(condition);
		return Result.success("");
	}
	
	@RequestMapping(value = "/v1/addItem")
	public Result<Object> addItem(@RequestBody GtdSchedule condition) {
		long id = GetIncrementId.getInstance().getCount(systemConfig.getServerNode(), systemConfig.getAreaNode());
		condition.setId(id);
		condition.setCreateTime(new Date());
		condition.setUpdateTime(new Date());
		gtdScheduleRespository.save(condition);
		return Result.success("");
	}
	
}
