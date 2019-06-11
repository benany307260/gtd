package com.bentest.gtd.service;

import java.util.List;

import com.bentest.gtd.entity.GtdSchedule;
import com.bentest.gtd.vo.GtdScheduleVo;

public interface IGtdService {
	public List<GtdSchedule> findItemList(GtdScheduleVo condition);
}
