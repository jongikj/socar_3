use mysql;
select * from customer;
select * from coupon_member;
select * from car;
select * from coupon_master;

insert into customer(category, title, content, role, reg_date) values('공지사항', '공지사항 입니다.', '공지사항 내용입니다.', 'NOTICE', '2016-10-25');
select * from member;
select * from member_customer;
update customer set category = '법인,단체' where category = '법인/단체';

insert into customer (category, title, content, role, reg_date) values('기타', '더미', '더미', 'CUSTOMER', '2016-10-28');
