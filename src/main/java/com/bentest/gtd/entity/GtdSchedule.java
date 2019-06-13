package com.bentest.gtd.entity;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;


@Entity
@Table(name="gtd_schedule")
@NamedQuery(name="GtdSchedule.findAll", query="SELECT g FROM GtdSchedule g")
public class GtdSchedule implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Long id;

	@JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="CREATE_TIME")
	private Date createTime;

	@Column(name="ITEM_CONTENT")
	private String itemContent;

	@Column(name="ITEM_FONT_COLOR")
	private String itemFontColor;

	@Column(name="ITEM_HOPE_DONE_DATE")
	private Integer itemHopeDoneDate;

	@Column(name="ITEM_ICON")
	private String itemIcon;

	@Column(name="ITEM_LINK")
	private String itemLink;

	@Column(name="ITEM_REAL_DONE_DATE")
	private Integer itemRealDoneDate;

	@Column(name="ITEM_REMARKS")
	private String itemRemarks;

	@Column(name="ITEM_STATUS")
	private Integer itemStatus;

	@Column(name="ITEM_TYPE")
	private String itemType;

	@JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="UPDATE_TIME")
	private Date updateTime;

	public GtdSchedule() {
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