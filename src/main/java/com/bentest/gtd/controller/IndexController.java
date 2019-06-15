package com.bentest.gtd.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	@RequestMapping("/")
    public String index() {
        return "redirect:html/index.html";
    	//return "redirect:" + serviceIndexUrl;
    }
}