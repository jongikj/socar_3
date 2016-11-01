use mysql;
select * from customer;
select * from coupon_member;
select * from car;
select * from coupon_master;

insert into customer(category, title, content, role, reg_date) values('공지사항', '[공지사항] 회사가 부도났습니다. 사이트 폐쇄합니다.', '공지사항 내용입니다.', 'NOTICE', '2016-11-01');
select * from member;
select * from member_customer;
update customer set category = '법인,단체' where category = '법인/단체';

insert into customer (category, title, content, role, reg_date) values('기타', '더미', '더미', 'CUSTOMER', '2016-10-28');
