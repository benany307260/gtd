package com.bentest.gtd.vo;

import java.io.Serializable;
import java.util.Date;


public class GtdScheduleVo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Integer id;

	private Date createTime;

	private String itemContent;

	private String itemFontColor;

	private Integer itemHopeDoneDate;

	private String itemIcon;

	private String itemLink;

	private Integer itemRealDoneDate;

	private String itemRemarks;

	private Integer itemStatus;

	private String itemType;

	private Date updateTime;

	public GtdScheduleVo() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
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