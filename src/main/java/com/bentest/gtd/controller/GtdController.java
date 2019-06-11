package com.bentest.gtd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bentest.gtd.entity.GtdSchedule;
import com.bentest.gtd.result.Result;
import com.bentest.gtd.service.IGtdService;
import com.bentest.gtd.vo.GtdScheduleVo;

@RestController
public class GtdController {
	
	@Autowired
	private IGtdService gtdService;
	
	
	@RequestMapping(value = "/v1/getCurrHopeDone")
	public Result<Object> getCurrHopeDone(GtdScheduleVo condition) {
		//DateFormatUtils.format(amzProxy.getExpireTime(), "yyyy-MM-dd HH:mm:ss");
		//String currDateStr = DateFormatUtils.format(System.currentTimeMillis(), "yyyyMMdd");
		//Integer currDate = Integer.valueOf(currDateStr);
		
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
	
}
