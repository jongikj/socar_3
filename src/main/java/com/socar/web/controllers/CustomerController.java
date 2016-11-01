package com.socar.web.controllers;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.socar.web.constants.Values;
import com.socar.web.domains.Command;
import com.socar.web.domains.CustomerDTO;
import com.socar.web.domains.Retval;
import com.socar.web.services.CustomerServiceImpl;
import com.socar.web.util.Pagination;

import sun.print.resources.serviceui;

@Controller
@Lazy
@SessionAttributes({"customer","context","js","css","img"})
@RequestMapping("/customer")
public class CustomerController {
	private static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
	@Autowired Retval retval;
	@Autowired CustomerDTO customer;
	@Autowired Command command;
	@Autowired CustomerServiceImpl service;
	
	@RequestMapping("/list/{pgNum}")
	   public @ResponseBody HashMap<String, Object> list(@PathVariable String pgNum){
	      logger.info("CustomerController {}", "list");
	      int[] rows = new int[2];
	      int[] pages = new int[3];
	      HashMap<String, Object> map = new HashMap<String, Object>();
	      Retval r = service.count();
	      int totCount = r.getCount();
	      logger.info("LIST totCount {}", totCount);
	      rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
	      pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
	      command.setStart(rows[0]);
	      command.setEnd(rows[1]);
	      map.put("list", service.list(command));
	      map.put("pgSize", Values.PG_SIZE);
	      map.put("totCount", totCount);
	      map.put("totPg", pages[2]);
	      map.put("pgNum", Integer.parseInt(pgNum));
	      map.put("startPg", pages[0]);
	      map.put("lastPg", pages[1]);
	      map.put("groupSize", Values.GROUP_SIZE);
	      return map;
	}
	
	@RequestMapping("/faqList/{keyField}/{keyword}")
	   public @ResponseBody HashMap<String, Object> faqList(@PathVariable String keyField, @PathVariable String keyword){
	      logger.info("CustomerController {}", "faqList");
	      HashMap<String, Object> map = new HashMap<String, Object>();
	      command.setKeyField(keyField);
	      command.setKeyword(keyword);
	      Retval r = service.faqCount(command);
	      int totCount = r.getCount();
	      logger.info("LIST totCount {}", totCount);
	      map.put("list", service.faqList(command));
	      map.put("totCount", totCount);
	      return map;
	}
	
	@RequestMapping("/notice")
	public @ResponseBody CustomerDTO goNotice(){
		logger.info("GO TO {}", "notice");
		return customer;
	}
	
	@RequestMapping(value="/inquiry_form",method=RequestMethod.POST,consumes="application/json")
	public @ResponseBody  Retval inquiry_write(@RequestBody CustomerDTO param) {		
		logger.info("inquiry WRITE {}","EXEUTE");
		logger.info("inquiry WRITE CATEGORY= {}",param.getCategory());
		logger.info("inquiry WRITE TITLE = {}",param.getTitle());
		logger.info("inquiry WRITE CONTENT = {}",param.getContent());
		logger.info("inquiry WRITE FILENAME= {}",param.getFileName());
		logger.info("inquiry WRITE FILENAME= {}",param.getFileName());
		logger.info("inquiry WRITE ID= {}",param.getId());
		String regDate =new SimpleDateFormat("yyyy-MM-dd").format(new Date(System.currentTimeMillis()));
		param.setRegDate(regDate);
		logger.info("inquiry WRITE REGDATE = {}",param.getRegDate());
		CustomerDTO temp = new CustomerDTO();
		temp.setCategory(param.getCategory());
		temp.setTitle(param.getTitle());
		temp.setContent(param.getContent());
		temp.setFileName(param.getFileName());
		temp.setRegDate(param.getRegDate());
		temp.setId(param.getId());
		service.inquiry_form(temp);
		retval.setMessage("success");
		return retval;
	}
	
	@RequestMapping("/send") //1대1문의 전송
	public @ResponseBody CustomerDTO sendInquiry(){
		logger.info("GO TO {}", "sendInquiry");
		return customer;
	}
	
	@RequestMapping("/faq")
	public @ResponseBody Retval goFaq(){
		logger.info("GO TO {}", "faq");
		return retval;
	}
	
	@RequestMapping("/voc")
	public @ResponseBody Retval goVoc(){
		logger.info("GO TO {}", "voc");
		return retval;
	}
	
	@RequestMapping(value="/notice_search/{keyField}/{keyword}/{pgNum}")
	 public @ResponseBody HashMap<String, Object> find(
			 @PathVariable("pgNum") String pgNum,
			 @PathVariable("keyField") String keyField,
			 @PathVariable("keyword") String keyword
			 ){
		  logger.info("TO SEARCH KEYWORD IS {}",keyword);
		  logger.info("TO SEARCH KEYFIELD IS {}",keyField);
	      logger.info("CustomerController {}", "find");
	      command.setKeyField(keyField);
	      command.setKeyword(keyword);
	      HashMap<String, Object> map = new HashMap<String, Object>();
	      Retval r = service.find_count(command);
	      int totCount = r.getCount();	
	      int[] pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
	      int[] rows = Pagination.getRows(totCount,  Integer.parseInt(pgNum), Values.PG_SIZE);
	      command.setStart(rows[0]);
	      command.setEnd(rows[1]);
	      map.put("list", service.find(command));
	      map.put("pgSize", Values.PG_SIZE);
	      map.put("totCount", totCount);
	      map.put("totPg", pages[2]);
	      map.put("pgNum", Integer.parseInt(pgNum));
	      map.put("startPg", pages[0]);
	      map.put("lastPg", pages[1]);
	      map.put("groupSize", Values.GROUP_SIZE);
	      return map;
	}
	
	@RequestMapping("/go_article/{keyField}/{keyword}")
	public @ResponseBody CustomerDTO goArticle(@PathVariable String keyField, @PathVariable String keyword){
		logger.info("CustomerController GO TO {}", "article");
		command.setKeyField(keyField);
		command.setKeyword(keyword);
		return service.goArticle(command);
	}
	
	@RequestMapping("/count")
	public @ResponseBody Retval count(){
		logger.info("CustomerController {}", "count");
		retval=service.count();
		return retval;
	}
	
	@RequestMapping("/find_count/{keyField}/{keyword}")
	public @ResponseBody Retval findCount(@PathVariable String keyField, @PathVariable String keyword){
		logger.info("CustomerController {}", "findCount");
		command.setKeyField(keyField);
		command.setKeyword(keyword);
		retval = service.find_count(command);
		return retval;
	}
	
	@RequestMapping("/faq_count/{keyField}/{keyword}")
	public @ResponseBody Retval faqCount(@PathVariable String keyField, @PathVariable String keyword){
		logger.info("CustomerController {}", "faqCount");
		command.setKeyField(keyField);
		command.setKeyword(keyword);
		retval = service.faqCount(command);
		return retval;
	}
}