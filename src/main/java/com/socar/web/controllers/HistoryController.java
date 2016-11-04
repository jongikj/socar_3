package com.socar.web.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.socar.web.constants.Values;
import com.socar.web.domains.BookingDTO;
import com.socar.web.domains.CarDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.CouponMemberMasterDTO;
import com.socar.web.domains.HistoryDTO;
import com.socar.web.domains.Retval;
import com.socar.web.services.CarService;
import com.socar.web.services.HistoryServiceImpl;
import com.socar.web.util.Pagination;

@Controller
@Lazy
@RequestMapping("/history")
public class HistoryController {
    private static final Logger logger = LoggerFactory.getLogger(HistoryController.class);
	@Autowired Retval retval;
	@Autowired Command command;
	@Autowired HistoryServiceImpl service;
	@Autowired CarDTO car;
	@Autowired CarService cService;
	@Autowired CouponMemberMasterDTO cmm;
	@Autowired HistoryDTO history;
	
	@RequestMapping("/content")
	public @ResponseBody Map<String, Object> goContent(){
		logger.info("HistoryController GO TO {}", "content");
		List<?> listZone = service.getListZone();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("list", listZone);
		return map;
	}
	@RequestMapping("/confirm")
	public @ResponseBody Map<String, Object> goConfirm(){
		logger.info("HistoryController GO To {}","confirm");
		List<?> listCoupon = service.getListCoupon();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("couponList", listCoupon);
		return map;
	}
	
	@RequestMapping("/count")
	public @ResponseBody Retval count(){
		logger.info("History Controller GO TO {}", "count");
		retval = service.count();
		return retval;
	}
	
	@RequestMapping(value="/reserve",method=RequestMethod.POST)
	public @ResponseBody Retval goReserve(@RequestBody CouponMemberMasterDTO param){
		logger.info("HistoryController GO TO {}", "reserve");
		history.setStartDate(param.getStartDate());
		history.setEndDate(param.getEndDate());
		history.setCarSeq(param.getCarSeq());
		history.setCouponMemberSeq(param.getCouponMemberSeq());
		history.setId(param.getId());
		history.setPrice(param.getPrice());
		service.insert(history);
		return retval;
	}
	
	@RequestMapping(value="/notCouponInsert",method=RequestMethod.POST)
	public @ResponseBody Retval goNotCouponInsert(@RequestBody CouponMemberMasterDTO param){
		logger.info("HistoryController GO TO {}", "goNotCouponInsert");
		history.setStartDate(param.getStartDate());
		history.setEndDate(param.getEndDate());
		history.setCarSeq(param.getCarSeq());
		history.setId(param.getId());
		history.setPrice(param.getPrice());
		service.notCouponInsert(history);
		return retval;
	}
	
	@RequestMapping("/reserve_result")
	public @ResponseBody Retval goReserve_Result(){
		logger.info("BookingController GO TO {}", "reserve_result");
		return retval;
	}
	
	@RequestMapping("/list/{keyword}")
	public @ResponseBody HashMap<String, Object> list(@PathVariable String keyword){
		logger.info("History Controller GO TO {}", "list");
        HashMap<String, Object> map = new HashMap<String, Object>();
        command.setKeyField("id");
        command.setKeyword(keyword);
        retval = service.findCount(command);
        int totCount = retval.getCount();
        logger.info("totCount {} ", totCount);
        map.put("list", service.list(command));
        map.put("totCount", totCount);
		return map;
	}
	
	@RequestMapping("/find/{keyField}/{keyword}/{pgNum}")
    public @ResponseBody HashMap<String, Object> find(
          @PathVariable("pgNum") String pgNum,
          @PathVariable("keyField") String keyField,
          @PathVariable("keyword") String keyword){
         logger.info("TO SEARCH KEYWORD IS {}",keyword);
         logger.info("TO SEARCH KEYWORD IS {}",keyField);
         logger.info("CustomerController {}", "find");
         command.setKeyField(keyField);
         command.setKeyword(keyword);
         HashMap<String, Object> map = new HashMap<String, Object>();
         retval = service.findCount(command);
         int totCount = retval.getCount();   
         int[] pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
         int[] rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE);
         command.setStart(rows[0]);
         command.setEnd(rows[1]);
         List<HistoryDTO> list = service.find(command);
         map.put("list", list);
         map.put("status", list.get(0).getStatus());
         map.put("pgSize", Values.PG_SIZE);
         map.put("totCount", totCount);
         map.put("totPg", pages[2]);
         map.put("pgNum", Integer.parseInt(pgNum));
         map.put("startPg", pages[0]);
         map.put("lastPg", pages[1]);
         map.put("groupSize", Values.GROUP_SIZE);
         return map;
	}
	@RequestMapping(value="/select_date", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<String, Object> goSelectDate(@RequestBody BookingDTO param) {
		logger.info("BookingController GO TO {}", "select_date");
		logger.info(param.getStartDate());
		logger.info(param.getEndDate());
		logger.info(param.getInput_location());
		logger.info("CarController GO TO {}", "list");
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("carList", cService.list());
		return map;
	}
	
	@RequestMapping("/useStatus/{keyword}")
	public @ResponseBody Retval useStauts(@PathVariable String keyword){
		command.setKeyword(keyword);
		service.useStatus(command);
		return retval;
	}
}
