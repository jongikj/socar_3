use mysql;
select * from customer;
select * from coupon_member;
select * from car;
select * from coupon_master;

insert into coupon_member(coupon_master_seq, use_flag, id) values(2, 'N', 'hong');

insert into customer(category, title, content, role, reg_date) values('공지사항', '[공지사항] 회사가 부도났습니다. 사이트 폐쇄합니다.', '공지사항 내용입니다.', 'NOTICE', '2016-11-01');
select * from member;
select * from member_customer;
update customer set category = '법인,단체' where category = '법인/단체';

insert into customer (category, title, content, role, reg_date) values('기타', '더미', '더미', 'CUSTOMER', '2016-10-28');

select * from coupon_member_master;
drop view coupon_member_master;

select
u.coupon_member_seq couponMemberSeq,
u.coupon_master_seq couponMasterSeq,
u.use_flag useFlag,
u.id id,
m.coupon_name couponName,
m.dc_option dcOption,
m.dc dc
from coupon_member u, coupon_master m
where u.coupon_master_seq = m.coupon_master_seq;

select
c.car_type carType,
c.car_num carNum,
c.rent_amt rentAmt,
c.socar_zone socarZone,
r.id id,
r.start_date startDate,
r.end_date endDate
from rent r, car c
where r.car_seq = c.car_seq and id = 'test200';


select * from rent;