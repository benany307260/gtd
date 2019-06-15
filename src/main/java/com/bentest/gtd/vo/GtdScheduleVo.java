package com.bentest.gtd.vo;

import java.io.Serializable;
import java.util.Date;


public class GtdScheduleVo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;

	private Date createTime;

	private String itemContent;

	private String itemFontColor;

	private Integer itemHopeDoneDate;

	private String itemIcon;

	private String itemLink;

	private Integer itemRealDoneDate;

	private String itemRemarks;

	/**
	 * 任务状态。0-进行中；100-按时完成；200-过期未完成；300-过期已完成；400-草稿；
	 */
	private Integer itemStatus;

	private String itemType;

	private Date updateTime;
	
	private Integer pageSize;
	
	private Integer pageNum;
	
	
	/**
	 * 排序字段，1为正序；-1为倒序
	 */
	private Integer itemHopeDoneDateSort;

	public GtdScheduleVo() {
	}

	public Integer getItemHopeDoneDateSort() {
		return itemHopeDoneDateSort;
	}

	public void setItemHopeDoneDateSort(Integer itemHopeDoneDateSort) {
		this.itemHopeDoneDateSort = itemHopeDoneDateSort;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}

	public Integer getPageNum() {
		return pageNum;
	}

	public void setPageNum(Integer pageNum) {
		this.pageNum = pageNum;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public String getItemContent() {
		return itemContent;
	}

	public void setItemContent(String itemContent) {
		this.itemContent = itemContent;
	}

	public String getItemFontColor() {
		return itemFontColor;
	}

	public void setItemFontColor(String itemFontColor) {
		this.itemFontColor = itemFontColor;
	}

	public Integer getItemHopeDoneDate() {
		return itemHopeDoneDate;
	}

	public void setItemHopeDoneDate(Integer itemHopeDoneDate) {
		this.itemHopeDoneDate = itemHopeDoneDate;
	}

	public String getItemIcon() {
		return itemIcon;
	}

	public void setItemIcon(String itemIcon) {
		this.itemIcon = itemIcon;
	}

	public String getItemLink() {
		return itemLink;
	}

	public void setItemLink(String itemLink) {
		this.itemLink = itemLink;
	}

	public Integer getItemRealDoneDate() {
		return itemRealDoneDate;
	}

	public void setItemRealDoneDate(Integer itemRealDoneDate) {
		this.itemRealDoneDate = itemRealDoneDate;
	}

	public String getItemRemarks() {
		return itemRemarks;
	}

	public void setItemRemarks(String itemRemarks) {
		this.itemRemarks = itemRemarks;
	}

	public Integer getItemStatus() {
		return itemStatus;
	}

	public void setItemStatus(Integer itemStatus) {
		this.itemStatus = itemStatus;
	}

	public String getItemType() {
		return itemType;
	}

	public void setItemType(String itemType) {
		this.itemType = itemType;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}


}