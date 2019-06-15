package com.bentest.gtd.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix="system")
public class SystemConfig {
	
	/**
	 * 扫描指令Cron表达式，默认每5s一次
	 */
	private String handleItemTimeoutCron = "0/5 * * * * ?";
	
	/**
	 * 服务端节点编号，最大两位
	 */
	private int serverNode;
	
	/**
	 * 服务端区域编号，最大两位
	 */
	private int areaNode;
	

	public String getHandleItemTimeoutCron() {
		return handleItemTimeoutCron;
	}

	public void setHandleItemTimeoutCron(String handleItemTimeoutCron) {
		this.handleItemTimeoutCron = handleItemTimeoutCron;
	}

	public int getServerNode() {
		return serverNode;
	}

	public void setServerNode(int serverNode) {
		this.serverNode = serverNode;
	}

	public int getAreaNode() {
		return areaNode;
	}

	public void setAreaNode(int areaNode) {
		this.areaNode = areaNode;
	}
	
}
