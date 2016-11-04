package com.socar.web.services;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.socar.web.domains.Command;
import com.socar.web.domains.CouponDTO;
import com.socar.web.domains.HistoryDTO;
import com.socar.web.domains.Retval;
import com.socar.web.mappers.CarMapper;
import com.socar.web.mappers.CouponMapper;
import com.socar.web.mappers.HistoryMapper;

@Service
@Lazy
public class HistoryServiceImpl implements HistoryService{
	@Autowired SqlSession sqlSession;
	@Autowired Command command;
	
	@Override
	public Retval count() {
		HistoryMapper mapper = sqlSession.getMapper(HistoryMapper.class);
		return mapper.count();
	}
	
	@Override
	public Retval findCount(Command command) {
		HistoryMapper mapper = sqlSession.getMapper(HistoryMapper.class);
		return mapper.findCount(command);
	}

	@Override
	public List<HistoryDTO> list(Command command) {
		HistoryMapper mapper = sqlSession.getMapper(HistoryMapper.class);
		return mapper.list(command);
	}

	@Override
	public List<HistoryDTO> find(Command command) {
		HistoryMapper mapper = sqlSession.getMapper(HistoryMapper.class);
		return mapper.find(command);
	}
	@Override
	public List<String> getListZone() {
		CarMapper mapper = sqlSession.getMapper(CarMapper.class);
		return mapper.listZone();
	}

	@Override
	public List<CouponDTO> getListCoupon() {
		CouponMapper mapper = sqlSession.getMapper(CouponMapper.class);
		return mapper.list();
	}

	@Override
	public int insert(HistoryDTO history) {
		HistoryMapper mapper = sqlSession.getMapper(HistoryMapper.class);
		return mapper.insert(history);
	}

	@Override
	public int notCouponInsert(HistoryDTO history) {
		HistoryMapper mapper = sqlSession.getMapper(HistoryMapper.class);
		return mapper.notCouponInsert(history);
	}

	@Override
	public Retval useStatus(Command command) {
		HistoryMapper mapper = sqlSession.getMapper(HistoryMapper.class);
		return mapper.useStatus(command);
	}
	
}
