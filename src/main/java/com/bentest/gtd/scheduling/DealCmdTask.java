package com.bentest.gtd.scheduling;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bentest.gtd.dao.CmdMapper;
import com.bentest.spiders.entity.AmzCmdtask;

@Service
public class DealCmdTask {
	
	private static Logger log = LoggerFactory.getLogger(DealCmdTask.class);
	
	@Autowired
	private CmdMapper cmdMapper;
	
	
	private static Integer cmdTaskId = 0;
	
	public void run() {
		
		
		
		
	}
	
	private int deal(AmzCmdtask cmdTask){
		try {
			if(cmdTask == null){
				log.info("指令处理，指令对象为null。");
				return -1;
			}
			
			
			return -1;
			
			// 结果存库
		} catch (Exception e) {
			log.error("处理指令，异常。", e);
			return -9999;
		}
	}
	
	
}
