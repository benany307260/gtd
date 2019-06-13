package com.bentest.gtd.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bentest.gtd.entity.GtdSchedule;
import com.bentest.gtd.mapper.GtdMapper;
import com.bentest.gtd.service.IGtdService;
import com.bentest.gtd.vo.GtdScheduleVo;

@Service
public class GtdServiceImpl implements IGtdService {

	@Autowired
	private GtdMapper gtdMapper;
	
	@Override
	public List<GtdSchedule> findItemList(GtdScheduleVo condition) {
        List<GtdSchedule> resultList = gtdMapper.findGtdItemList(condition);
        return resultList;
	}

	@Override
	public Integer updateItemStatus(GtdScheduleVo condition) {
		return gtdMapper.updateItemStatus(condition);
	}

}
