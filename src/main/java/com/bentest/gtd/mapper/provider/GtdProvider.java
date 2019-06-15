package com.bentest.gtd.mapper.provider;

import org.apache.ibatis.jdbc.SQL;

import com.bentest.gtd.vo.GtdScheduleVo;



public class GtdProvider {

	
	public String findGtdItemsSql(GtdScheduleVo condition){
		
		return new SQL() {{
			SELECT("*");
			FROM("gtd_schedule");
            
			if(condition.getItemHopeDoneDate() != null){
				WHERE("ITEM_HOPE_DONE_DATE=#{itemHopeDoneDate}");
			}
			if(condition.getItemStatus() != null){
				WHERE("ITEM_STATUS=#{itemStatus} ");
			}
			
			// 正序排序
			if(condition.getItemHopeDoneDateSort() != null && condition.getItemHopeDoneDateSort() > 0) {
				ORDER_BY("ITEM_HOPE_DONE_DATE ASC");
			}
			// 倒序排序
			else if(condition.getItemHopeDoneDateSort() != null && condition.getItemHopeDoneDateSort() < 0) {
				ORDER_BY("ITEM_HOPE_DONE_DATE DESC");
			}
            
        }}.toString();
		
		/*StringBuffer sql = new StringBuffer();
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
		
		return sql.toString();*/
	}
	
	public String updateItemByIdSql(final GtdScheduleVo condition){
		
		return new SQL() {{
			UPDATE("gtd_schedule");
            
            if (condition.getItemStatus() != null) {
               SET("ITEM_STATUS = #{itemStatus}");
            }
            if (condition.getItemRealDoneDate() != null) {
                SET("ITEM_REAL_DONE_DATE = #{itemRealDoneDate}");
            }
            
            WHERE("ID=#{id}");
        }}.toString();
	}
	
	
}
