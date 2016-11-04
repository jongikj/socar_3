package com.socar.web.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.socar.web.domains.Command;
import com.socar.web.domains.MemberDTO;
import com.socar.web.domains.Retval;
import com.socar.web.services.MemberServiceImpl;

@Controller
@Lazy
@SessionAttributes({"user", "context", "css", "img", "js","temp"})
@RequestMapping("/member")
public class MemberController {
   private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
   @Autowired Retval retval;
   @Autowired MemberDTO member;
   @Autowired MemberServiceImpl service;
   @Autowired Command command;   
      
    @RequestMapping(value="/unregist",method=RequestMethod.POST)
      public @ResponseBody Retval unRegist(HttpSession session,MemberDTO param,SessionStatus status) {
         logger.info("GO TO {}","unregist");
         MemberDTO temp = (MemberDTO) session.getAttribute("user");
         retval.setMessage(service.delete(temp.getId()));
         logger.info("탈퇴 {}",temp.getId());
         status.setComplete();
         return retval;
      }
   
   @RequestMapping(value="/update",method=RequestMethod.POST)
   public @ResponseBody Retval Update(@RequestBody MemberDTO param, HttpSession session) {
      logger.info("GO TO {}","=======update========");
      MemberDTO temp = (MemberDTO) session.getAttribute("user");
      temp.setPw(param.getPw());
      temp.setPhone(param.getPhone());
      temp.setAddress(param.getAddress());
      temp.setLicenseType(param.getLicenseType());
      temp.setLicenseNum(param.getLicenseNum());
      temp.setLicenseEnd(param.getLicenseEnd());
      temp.setLicenseStart(param.getLicenseStart());
      temp.setEmail(param.getEmail());
      retval.setMessage(service.update(temp));
      session.setAttribute("user", service.update(temp));
      logger.info("update 비번 {}",param.getPw());
      logger.info("update 이멜 {}",param.getEmail());
      return retval;
   } 
   
   @RequestMapping("/check_dup/{id}")
   public @ResponseBody Retval CheckDup(@PathVariable String id) {
      logger.info("CHECK DUP {}","EXEUTE");
      if (service.existId(id)==1) {
         retval.setFlag("TRUE");
         retval.setMessage("입력하신 ID 사용할수 없습니다");
      }else{
         retval.setFlag("FALSE");
         retval.setMessage("입력하신 ID는 사용가능합니다");
         retval.setTemp(id);
      }
      logger.info("RETVAL FLAG IS {}",retval.getFlag());
      logger.info("RETVAL MSG IS {}",retval.getMessage());
      return retval;
   } 
/*   @RequestMapping("/goregist")
   public @ResponseBody Retval goRegistForm() {
      logger.info("SIGN UP {}","EXEUTE");
      logger.info("SIGN UP ID = {}",param.getId());
      logger.info("SIGN UP PW = {}",param.getPw());
      logger.info("SIGN UP SSN = {}",param.getName());
      logger.info("SIGN UP EMAIL = {}",param.getEmail());
      logger.info("SIGN UP PHONE = {}",param.getPhone());
      retval.setMessage(service.regist(param));
      retval.setMessage("success");
      return retval;
   }*/
   
   /*@RequestMapping(value="/aaa",method=RequestMethod.POST,
         consumes="application/json")
   public @ResponseBody Retval goRegist(@RequestBody MemberDTO param, HttpSession session) {
      logger.info("SIGN UP {}","EXEUTE");
      logger.info("SIGN UP ID = {}",param.getId());
      logger.info("SIGN UP PW = {}",param.getPw());
      logger.info("SIGN UP SSN = {}",param.getName());
      logger.info("SIGN UP EMAIL = {}",param.getEmail());
      logger.info("SIGN UP PHONE = {}",param.getPhone());
      retval.setMessage(service.regist(param));

      MemberDTO temp = new MemberDTO();
      temp.setId(param.getId());
      temp.setPw(param.getPw());
      temp.setName(param.getName());
      temp.setEmail(param.getEmail());
      temp.setPhone(param.getPhone());
      session.setAttribute("temp",temp);
      return retval;
   }*/

   @RequestMapping(value="/license",method=RequestMethod.POST,consumes="application/json")
   public @ResponseBody Retval goLicense(@RequestBody MemberDTO param) {
      logger.info("MemberController  GO TO {}", "license");
      
      logger.info("SIGN UP {}","EXEUTE");
      logger.info("SIGN UP ID = {}",param.getId());
      logger.info("SIGN UP PW = {}",param.getPw());
      logger.info("SIGN UP PHONE = {}",param.getName());
      logger.info("SIGN UP EMAIL = {}",param.getEmail());
      logger.info("SIGN UP PHONE = {}",param.getAddress());
      logger.info("SIGN UP PHONE = {}",param.getLicenseType());
      logger.info("SIGN UP PHONE = {}",param.getLicenseNum());
      logger.info("SIGN UP PHONE = {}",param.getLicenseEnd());
      logger.info("SIGN UP PHONE = {}",param.getLicenseStart());
      logger.info("SIGN UP PHONE = {}",param.getGender());
      logger.info("SIGN UP SSN = {}",param.getBirth()); 
      logger.info("SIGN UP GENDER = {}",param.getGender());
      
      
      retval.setMessage(service.regist(param));
      return retval;
   }

   @RequestMapping(value="/signin", method=RequestMethod.POST)
   public @ResponseBody MemberDTO goSignIn(@RequestParam String id, @RequestParam String pw, HttpSession session){
      logger.info("MemberController GO TO {}", "signin");
      logger.info("LOGIN ID IS {}", id);
      logger.info("LOGIN PW IS {}", pw);
      member.setId(id);
      member.setPw(pw);
      MemberDTO user = service.signIn(member);
      if(user.getId().equals("NONE")){
         logger.info("MemberController LOGIN {}", "FAIL");
         return user;
         
      } else {
         logger.info("MemberController LOGIN {}", "SUCCESS");
         logger.info("로그인 정보 : {}", user);
         session.setAttribute("user", user);
         return user;
      }
   }
   
   @RequestMapping("/logout")
   public String moveLogout(SessionStatus status) {
      logger.info("GO TO {}", "LOGOUT");
      status.setComplete();
      logger.info("SESSION IS {}", "CLEAR");
      return "redirect:/";
   }   
   
   @RequestMapping("/signined/admin_header")
   public String adminHeader(){
      logger.info("THIS PATH IS {}", "SIGNINED_ADMIN_HEADER");
      return "admin/header.jsp";
   }
   
   @RequestMapping("/signined/header")
   public String loginedHeader(){
      logger.info("THIS PATH IS {}", "SIGNINED_HEADER");
      return "user/header.jsp";
   }
   
   @RequestMapping("/home")
   public String goHome(){
      logger.info("THIS PATH IS {}", "HOME");
      return "public/content.jsp";
   }
   
   @RequestMapping("/myinfo")
   public @ResponseBody Retval goMyInfo(){
      logger.info("MemberController GO TO {}", "myinfo");
      return retval;
   }
   
   @RequestMapping("/goMain")
   public @ResponseBody Retval goMain(){
      logger.info("MemberController GO TO{}", "goMain");
      return retval;
   }
   
/*   @RequestMapping("/card")
   public @ResponseBody Retval goCard() {

      retval.setMessage("success");
      return retval;
   }*/
/*
   @RequestMapping("/myPage")
   public @ResponseBody Retval goMyPage(){
      logger.info("MemberController GO TO {}","myPage");
      retval.setMessage("success");
      return retval;
   }
   
   @RequestMapping("/myHistory")
   public @ResponseBody Retval goMyHistory(){
      logger.info("MemberController GO TO {}","myHistory");
      return retval;
   }
   
   @RequestMapping("/myCoupon")
   public @ResponseBody Retval goMyCoupon(){
      logger.info("MemberController GO TO {}","myCoupon");
      return retval;
   }
   
   @RequestMapping("/myPay")
   public @ResponseBody Retval goMyPay(){
      logger.info("MemberController GO TO {}","myPay");
      return retval;
   }
   
   @RequestMapping("/count")
   public @ResponseBody Retval count(){
      logger.info("MemberController GO TO {}", "count");
      retval = service.count();
      return retval;
   }*/
   
   @RequestMapping("/list")
   public @ResponseBody List<MemberDTO> list(){
      logger.info("MemberController GO TO {}", "list");
      List<MemberDTO> list = new ArrayList<MemberDTO>();
      list = service.list();
      return list;
   }
   
   @RequestMapping("/find/{keyField}/{keyword}")
   public @ResponseBody List<MemberDTO> find(@PathVariable String keyField, @PathVariable String keyword){
      logger.info("MemberController GO TO {}", "find");
      List<MemberDTO> list = new ArrayList<MemberDTO>();
      command.setKeyField(keyField);
      command.setKeyword(keyword);
      list = service.find(command);
      return list;
   }
   
   @RequestMapping("/session")
   public @ResponseBody MemberDTO findSession(HttpSession session){
      logger.info("MemberController GO TO {}", "findSession");
      MemberDTO temp = (MemberDTO) session.getAttribute("user");
      logger.info("정보 : {} ", temp);
      if(temp == null){
         temp = new MemberDTO();
      }
      return temp;
   }
   
   @RequestMapping("/regist")
   public @ResponseBody Retval regist(@RequestBody MemberDTO param){
      logger.info("MemberController GO TO {}", "regist");
      MemberDTO temp = new MemberDTO();
      temp.setId(param.getId());
      temp.setPw(param.getPw());
      temp.setName(param.getName());
      temp.setEmail(param.getEmail());
      temp.setAddress(param.getAddress());
      temp.setPhone(param.getPhone());
      temp.setLicenseType(param.getLicenseType());
      temp.setLicenseNum(param.getLicenseNum());
      temp.setLicenseEnd(param.getLicenseEnd());
      temp.setLicenseStart(param.getLicenseStart());
      temp.setBirth(param.getBirth());
      temp.setGender(param.getGender());
      service.regist(temp);
      retval.setMessage("success");
      return retval;
   }
}