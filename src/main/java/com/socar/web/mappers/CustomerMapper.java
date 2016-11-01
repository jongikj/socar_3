package com.socar.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.socar.web.domains.Command;
import com.socar.web.domains.CustomerDTO;
import com.socar.web.domains.Retval;
@Repository
public interface CustomerMapper {
	public Retval count(Retval ret);
	public Retval faqCount(Command command);
	public List<CustomerDTO> list(Command command);
	public List<CustomerDTO> faqList(Command command);
	public Retval find_count(Command command);
	public List<CustomerDTO> find(Command command);
	public CustomerDTO goArticle(Command command);
	public CustomerDTO inquiry_form(CustomerDTO customer);
}

