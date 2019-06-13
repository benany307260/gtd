package com.bentest.gtd.mapper.provider;

import com.bentest.gtd.vo.GtdScheduleVo;



public class GtdProvider {

	
	public String findGtdItemsSql(GtdScheduleVo condition){
		StringBuffer sql = new StringBuffer();
		sql.append(" select * from gtd_schedule where 1=1 ");
		
		// 没条件，查全部
		if(condition == null) {
			return sql.toString();
		}
		
		if(condition.getItemHopeDoneDate() != null){
			sql.append("and ITEM_HOPE_DONE_DATE=#{itemHopeDoneDate} ");
		}
		if(condition.getItemStatus() != null){
			sql.append("and ITEM_STATUS=#{itemStatus} ");
		}
		
		return sql.toString();
	}
	
	
}
