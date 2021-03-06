package com.socar.web.services;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.socar.web.domains.CarDTO;
import com.socar.web.domains.Command;
import com.socar.web.domains.Retval;

@Component @Lazy
public interface CarService {
	// SELECT
	public Retval count();
	public Retval findCount(Command command);
	public List<CarDTO> find(Command command);
	public List<CarDTO> list();
}
