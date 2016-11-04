package com.socar.web.domains;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component
@Lazy
@Data
public class CouponMemberMasterDTO {
	@Getter @Setter int couponMemberSeq, couponMasterSeq, dc, carSeq, price;
	@Getter @Setter String useFlag, id, couponName, dcOption, startDate, endDate, optionHeader, optionDetail, openDateStart, openDateEnd; 
}
