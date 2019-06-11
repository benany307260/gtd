package com.bentest.gtd.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.SelectProvider;

import com.bentest.gtd.entity.GtdSchedule;
import com.bentest.gtd.mapper.provider.GtdProvider;
import com.bentest.gtd.vo.GtdScheduleVo;

@Mapper
public interface GtdMapper {

	
	/**
	 * 查询指令表
	 */
	@SelectProvider(type = GtdProvider.class, method = "findGtdItemsSql")
	@Results({ 
		@Result(property = "itemHopeDoneDate", column = "ITEM_HOPE_DONE_DATE"),
		@Result(property = "itemContent", column = "ITEM_CONTENT"),
		@Result(property = "itemType", column = "ITEM_TYPE"),
		@Result(property = "itemFontColor", column = "ITEM_FONT_COLOR"),
		@Result(property = "itemIcon", column = "ITEM_ICON"),
		@Result(property = "itemLink", column = "ITEM_LINK"),
		@Result(property = "itemRemarks", column = "ITEM_REMARKS"),
		@Result(property = "itemStatus", column = "ITEM_STATUS"),
		@Result(property = "itemRealDoneDate", column = "ITEM_REAL_DONE_DATE"),
		@Result(property = "createTime", column = "CREATE_TIME"),
		@Result(property = "updateTime", column = "UPDATE_TIME")
			})
	public List<GtdSchedule> findGtdItemList(GtdScheduleVo condition);
	
	
}