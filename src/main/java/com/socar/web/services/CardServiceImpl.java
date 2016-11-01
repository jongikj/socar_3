package com.socar.web.services;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.socar.web.domains.CardDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.Retval;
import com.socar.web.mappers.CardMapper;
import com.socar.web.mappers.MemberMapper;

@Service@Lazy
public class CardServiceImpl implements CardService{
	@Autowired SqlSession sqlsession;
	@Autowired Command command;
	@Autowired CardDTO card;
	@Autowired CardMapper cardMapper; 
	
	
	@Override
	public String regist(CardDTO param) {
		// TODO Auto-generated method stub
		System.out.println("CARDserviceImpl 진입");
		System.out.println("카드ID"+param.getId());
		System.out.println("카드번호	"+param.getCardNum());
		System.out.println("카드비번"+param.getCardPw());
		System.out.println("카드월"+param.getCardMonth());
		System.out.println("카드년	"+param.getCardYear());
		
		return (sqlsession.getMapper(CardMapper.class).regist(param)!=0)?"success":"fail";
	}
	@Override
	public Retval count() {
		CardMapper mapper = sqlsession.getMapper(CardMapper.class);
		return mapper.count();
	}

	@Override
	public Retval findCount(Command command) {
		CardMapper mapper = sqlsession.getMapper(CardMapper.class);
		return mapper.findCount(command);
	}
	
	@Override
	public List<CardDTO> find(Command command) {
		CardMapper mapper = sqlsession.getMapper(CardMapper.class);
		return mapper.find(command);
	}

	@Override
	public List<CardDTO> list() {
		CardMapper mapper = sqlsession.getMapper(CardMapper.class);
		return mapper.list();
	}


}
