package com.socar.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.socar.web.domains.Command;
import com.socar.web.domains.MemberDTO;
import com.socar.web.domains.Retval;

@Repository
public interface MemberMapper {
   public MemberDTO signIn(MemberDTO member);
   public int regist(MemberDTO member);
   public int update(MemberDTO member);
   public int delete(String id);
   // SELECT
   public Retval count();
   public List<MemberDTO> list();
   public List<MemberDTO> find(Command command);
   public int existId(String id);
}