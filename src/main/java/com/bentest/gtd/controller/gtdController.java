package com.bentest.gtd.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.time.DateFormatUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bentest.gtd.entity.GtdSchedule;
import com.bentest.gtd.repository.GtdScheduleRespository;
import com.bentest.gtd.result.Result;

@RestController
public class gtdController {
	
	@Autowired
	private GtdScheduleRespository gtdScheduleRespository;
	
	
	@RequestMapping(value = "/v1/getCurrHopeDone")
	public Result<Object> getCurrHopeDone() {
		//DateFormatUtils.format(amzProxy.getExpireTime(), "yyyy-MM-dd HH:mm:ss");
		String currDateStr = DateFormatUtils.format(System.currentTimeMillis(), "yyyyMMdd");
		Integer currDate = Integer.valueOf(currDateStr);
		List<GtdSchedule> itemList = gtdScheduleRespository.getByItemHopeDoneDate(currDate);
		if(CollectionUtils.isEmpty(itemList)) {
			itemList = new ArrayList<GtdSchedule>();
			return Result.success("");
		}
		else {
			return Result.success(itemList);
		}
		
	}
	
}
