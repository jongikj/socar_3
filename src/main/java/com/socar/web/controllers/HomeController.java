package com.socar.web.controllers;

import java.util.HashMap;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.socar.web.domains.Command;
import com.socar.web.domains.CustomerDTO;
import com.socar.web.services.CustomerServiceImpl;

/**
 * Handles requests for the application home page.
 */
@Controller
@SessionAttributes({"notice"})
public class HomeController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired Command command;
	@Autowired CustomerDTO customer;
	@Autowired CustomerServiceImpl service;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		command.setKeyField("list");
		command.setKeyword("1");
		model.addAttribute("notice", service.list(command));
		return "public:public/content.tiles";
	}
}
