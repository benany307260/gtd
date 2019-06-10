package com.bentest.std.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
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
	public Result<List<GtdSchedule>> getCurrHopeDone(@RequestBody(required=false) GtdSchedule gtdSchedule) {
		return Result.success(gtdScheduleRespository.getByItemHopeDoneDate(gtdSchedule.getItemHopeDoneDate()));
	}
	
}
