package com.bentest.gtd.scheduling;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bentest.gtd.service.IGtdService;

@Service
public class DealItemTimeoutTask {
	
	private static Logger log = LoggerFactory.getLogger(DealItemTimeoutTask.class);
	
	@Autowired
	private IGtdService gtdService;
	
	
	public void run() {
		
		
		deal();
		
	}
	
	private int deal(){
		try {
			gtdService.updateItemTimeout(null);
			
			
			return 1;
			
			// 结果存库
		} catch (Exception e) {
			log.error("过期未完成任务，异常。", e);
			return -9999;
		}
	}
	
	
}
