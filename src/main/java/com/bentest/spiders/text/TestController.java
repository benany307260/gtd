package com.bentest.spiders.text;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	
	
	
	
	@RequestMapping("/au")
	public Boolean getAu() {
		return true;
	}
	
}
