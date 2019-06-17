package com.bentest.gtd.service;

import java.util.List;

import com.bentest.gtd.vo.GtdScheduleVo;

public interface IGtdService {
	public List<GtdScheduleVo> findItemList(GtdScheduleVo condition);
	
	public Integer updateItemById(GtdScheduleVo condition);
	
	public Integer updateItemTimeout(GtdScheduleVo condition);
}
