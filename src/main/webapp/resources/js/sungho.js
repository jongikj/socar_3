var CUSTOMER_NOTICE = 
	'<div id= "customer" class="notice1">'
	+'<div id="container" class="box">'
	+'<div id="content">'
	+'<h2><img src="'+app.img()+'/h2.gif" alt="고객센터 쏘카에 대한 궁금증 해결을 도와드립니다."></h2>'
	+'<p class="callCenter"><img src="'+app.img()+'/customer/btn_callcenter.gif" alt="콜센터 안내"></p>'
	+'<div class="faq_lnb">'
	+'<ul class="faq_lnb">'
	+'<li><a onclick="customer.notice_list(1)" id="a_customer_notice" title="공지사항" class="faq_lnb1">공지사항</a></li>'
	+'<li><a onclick="customer.customer_faq()" id="a_customer_faq" title="자주묻는 질문" class="faq_lnb2">자주묻는 질문</a></li>'
	+'<li><a onclick="customer.customer_inquiry()" id="a_customer_inquiry" title="1:1 문의하기" class="faq_lnb3">1:1 문의하기</a></li>'
	+'<li><a onclick="customer.customer_voc()" id="a_customer_voc" title="고객의견 반영절차" class="faq_lnb4">고객의견 반영절차</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="'+app.img()+'/customer/h3_notice.gif" alt="공지사항"></h3>'
	+'<div class="notice-search">'
	+'<input id="notice_keyword" type="text" class="input">'
	+'<input id="btn_notice_search" type="image" src="'+app.img()+'/customer/btn_notice_search.gif" alt="검색">'
	+'</div>'
	;
var CUSTOMER_NOTICE_FIND = 
	'<div id= "customer" class="notice1">'
	+'<div id="container" class="box">'
	+'<div id="content">'
	+'<h2><img src="'+app.img()+'/h2.gif" alt="고객센터 쏘카에 대한 궁금증 해결을 도와드립니다."></h2>'
	+'<p class="callCenter"><img src="'+app.img()+'/customer/btn_callcenter.gif" alt="콜센터 안내"></p>'
	+'<div class="faq_lnb">'
	+'<ul class="faq_lnb">'
	+'<li><a onclick="customer.notice_list(1)" id="a_customer_notice" title="공지사항" class="faq_lnb1">공지사항</a></li>'
	+'<li><a onclick="customer.customer_faq()" id="a_customer_faq" title="자주묻는 질문" class="faq_lnb2">자주묻는 질문</a></li>'
	+'<li><a onclick="customer.customer_inquiry()" id="a_customer_inquiry" title="1:1 문의하기" class="faq_lnb3">1:1 문의하기</a></li>'
	+'<li><a onclick="customer.customer_voc()" id="a_customer_voc" title="고객의견 반영절차" class="faq_lnb4">고객의견 반영절차</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="'+app.img()+'/customer/h3_notice.gif" alt="공지사항"></h3>'
	;

var CUSTOMER_NOTICE_TH = '<table cellspacing="0" summary="공지사항" class="cols">'
	+'<colgroup><col width="65"><col><col width="105"></colgroup>'
	+'<thead>'
	+'<tr>'
	+'<th>번호</th>'
	+'<th>제목</th>'
	+'<th>작성일</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>';
var CUSTOMER_NOTICE_END ='</div></div></div></div>';
var CUSTOMER_NOTICE_CONTENT = 	
	 '<div id= "customer_notice" class="notice1">'
	+'<div id="container" class="box">'
	+'<div id="content">'
	+'<h2><img src="'+app.img()+'/h2.gif" alt="고객센터 쏘카에 대한 궁금증 해결을 도와드립니다."></h2>'
	+'<p class="callCenter"><img src="'+app.img()+'/customer/btn_callcenter.gif" alt="콜센터 안내"></p>'
	+'<div class="faq_lnb">'
	+'<ul class="faq_lnb">'
	+'<li><a onclick="customer.notice_list(1)" id="a_customer_notice" title="공지사항" class="faq_lnb1">공지사항</a></li>'
	+'<li><a onclick="customer.customer_faq()" id="a_customer_faq" title="자주묻는 질문" class="faq_lnb2">자주묻는 질문</a></li>'
	+'<li><a onclick="customer.customer_inquiry()" id="a_customer_inquiry" title="1:1 문의하기" class="faq_lnb3">1:1 문의하기</a></li>'
	+'<li><a onclick="customer.customer_voc()" id="a_customer_voc" title="고객의견 반영절차" class="faq_lnb4">고객의견 반영절차</a></li>'
	+'</ul>'
	+'<div  class="section1">'
	+'<h3><img style="margin-bottom: 15px;" src="'+app.img()+'/customer/h3_notice.gif" alt="공지사항"></h3>'	;
var CUSTOMER_NOTICE_CONTENT_TH=
	'<table id="notice_content" cellspacing="0" summary="공지사항" class="cols">'
	+'<colgroup><col><col width="105"></colgroup>'
	+'<thead>'
	+'<tr>'
	+'<th>제목</th>'
	+'<th>작성일</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>';
var CUSTOMER_NOTICE_CONTENT_END = 
	 '</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';

var CUSTOMER_INQUIRY_FORM =
	'<div id= "customer" class="inquiry">'
	+'<div id="container" class="box">'
	+'<div id="content">'
	+'<h2><img src="'+app.img()+'/customer/h2.gif" alt="고객센터 쏘카에 대한 궁금증 해결을 도와드립니다."></h2>'
	+'<p class="callCenter"><img src="'+app.img()+'/customer/btn_callcenter.gif" alt="콜센터 안내"></p>'
	+'<div class="faq_lnb">'
	+'<ul class="lnb faq_lnb">'
	+'<li><a onclick="customer.notice_list(1)" id="a_customer_notice" title="공지사항" class="faq_lnb1">공지사항</a></li>'
	+'<li><a onclick="customer.customer_faq()" id="a_customer_faq" title="자주묻는 질문" class="faq_lnb2">자주묻는 질문</a></li>'
	+'<li><a onclick="customer.customer_inquiry()" id="a_customer_inquiry" title="1:1 문의하기" class="faq_lnb3">1:1 문의하기</a></li>'
	+'<li><a onclick="customer.customer_voc()" id="a_customer_voc" title="고객의견 반영절차" class="faq_lnb4">고객의견 반영절차</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="http://socdnw.speedgabia.com/template/asset/images/customer/h3_inquiry.gif" alt="1:1 문의하기"></h3>'
	+'<form name="inquiry" method="post" accept-charset="utf-8" enctype="multipart/form-data">'
	+'<fieldset>'
	+'<table cellspacing="0" class="rows">'
	+'<tbody><tr>'
	+'<th><img src="http://socdnw.speedgabia.com/template/asset/images/customer/inquiry_txt2.gif" alt="문의분류"></th>'
	+'<td>'
	+'<select style="width:165px" name="category" id="customer_inquiry_category">'
	+'<option value="예약/결제문의">예약/결제문의</option>'
	+'<option value="가입문의">가입문의</option>'
	+'<option value="차량이용/사고">차량이용/사고</option>'
	+'<option value="불편접수/건의">불편접수/건의</option>'
	+'<option value="프로모션/쿠폰">프로모션/쿠폰</option>'
	+'<option value="법인/단체">법인/단체</option>'
	+'<option value="탈퇴">탈퇴</option>'
	+'<option value="쏘파라치">쏘파라치</option>'
	+'<option value="기타">기타</option>'
	+'</select>'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="http://socdnw.speedgabia.com/template/asset/images/customer/inquiry_txt3.gif" alt="제목 / 내용"></th>'
	+'<td>'
	+'<input id="customer_inquiry_title" type="text" name="title" class="input" value="" style="width:400px">'
	+'<textarea id="customer_inquiry_contents" cols="" name="customer_inquiry_contents" rows="15" class="textarea" style="width:585px"></textarea>'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="http://socdnw.speedgabia.com/template/asset/images/customer/inquiry_txt4.gif" alt="파일첨부"></th>'
	+'<td>'
	+'<input type="file" id="customer_inquiry_file" class="input" name="userfile" value="" style="height: 28px;">'
	+'<span class="tip ml10">이미지 파일은 jpg, png, gif 만 첨부가능합니다.</span>'
	+'</td>'
	+'</tr>'
	+'</tbody></table>'
	+'<p class="centerBtn">'
	+'<input type="submit" id="btn_inquiry_submit" value="전송" class="btn_inquiry_submit">'
	+'</p>'
	+'</fieldset>'
	+'</form>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';

var CUSTOMER_FAQ_FORM =
	'<div id= "customer" class="faq">'
	+'<div id="container" class="box">'
	+'<div id="content">'
	+'<h2><img src="'+app.img()+'/customer/h2.gif" alt="고객센터 쏘카에 대한 궁금증 해결을 도와드립니다."></h2>'
	+'<p class="callCenter"><img src="'+app.img()+'/customer/btn_callcenter.gif" alt="콜센터 안내"></p>'
	+'<div class="faq_lnb">'
	+'<ul class="faq_lnb">'
	+'<li><a onclick="customer.notice_list(1)" id="a_customer_notice" title="공지사항" class="faq_lnb1">공지사항</a></li>'
	+'<li><a onclick="customer.customer_faq()" id="a_customer_faq" title="자주묻는 질문" class="faq_lnb2">자주묻는 질문</a></li>'
	+'<li><a onclick="customer.customer_inquiry()" id="a_customer_inquiry" title="1:1 문의하기" class="faq_lnb3">1:1 문의하기</a></li>'
	+'<li><a onclick="customer.customer_voc()" id="a_customer_voc" title="고객의견 반영절차" class="faq_lnb4">고객의견 반영절차</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="http://socdnw.speedgabia.com/template/asset/images/customer/h3_faq.gif" alt="자주묻는 질문"></h3>'
	+'<div id="customer_faq_tab" class="tab">'
	+'<ul>'
	+'<li class="on"><a class="btn_category tab1 0">자주묻는 질문</a></li>'
	+'<li><a class="btn_category tab2 1">예약/결제문의</a></li>'
	+'<li><a class="btn_category tab3 2">가입문의</a></li>'
	+'<li><a class="btn_category tab4 3">차량이용/사고</a></li>'
	+'<li><a class="btn_category tab5 4">프로모션/쿠폰</a></li>'
	+'<li><a class="btn_category tab6 5">법인/단체</a></li>'
	+'<li><a class="btn_category tab7 6">탈퇴</a></li>'
	+'<li><a class="btn_category tab8 7">기타</a></li>'
	+'</ul>'
	+'</div>'
	+'<dl class="faq-list">';
var CUSTOMER_FAQ_END = 
	 '</dl>'
	+'<div id="pagination" class="pagination" style="margin-top: 15px;">'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var CUSTOMER_NOTICE_CONTENT_FORM =
	'<div id= "customer" class="notice1">'
	+'<div id="container" class="box">'
	+'<div id="content">'
	+'<h2><img src="'+app.img()+'/customer/h2.gif" alt="고객센터 쏘카에 대한 궁금증 해결을 도와드립니다."></h2>'
	+'<p class="callCenter"><img src="'+app.img()+'/customer/btn_callcenter.gif" alt="콜센터 안내"></p>'
	+'<div class="faq_lnb">'
	+'<ul class="lnb faq_lnb">'
	+'<li><a onclick="customer.notice_list(1)" id="a_customer_notice" title="공지사항" class="faq_lnb1">공지사항</a></li>'
	+'<li><a onclick="customer.customer_faq()" id="a_customer_faq" title="자주묻는 질문" class="faq_lnb2">자주묻는 질문</a></li>'
	+'<li><a onclick="customer.customer_inquiry()" id="a_customer_inquiry" title="1:1 문의하기" class="faq_lnb3">1:1 문의하기</a></li>'
	+'<li><a onclick="customer.customer_voc()" id="a_customer_voc" title="고객의견 반영절차" class="faq_lnb4">고객의견 반영절차</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="'+app.img()+'/customer/h3_notice.gif" alt="공지사항"></h3>'
	+'<table cellspacing="0" summary="공지사항" class="cols">'
	+'<colgroup><col><col width="105"></colgroup>'
	+'<thead>'
	+'<tr>'
	+'<th>제목</th>'
	+'<th>작성일</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>'	//-------
	+'<tr>'
	+'<td id="notice_subj" class="subj">[공지] 매너평가 리뉴얼 : 평가 상벌제 안내</td>'
	+'<td>2016.10.11</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>' // ------
	+'<div class="viewCont">'
	+'<img src="http://www.socar.kr/uploads/ap6/notice/20161010/main_1714.jpg" width="500px"><br>'
	+'<br>'
	+'안녕하세요, 쏘카입니다.<br>'
	+'<br>'
	+'<p class="centerBtn"><a href="#"><img src="http://socdnw.speedgabia.com/template/asset/images/common/btn_list.gif" alt="목록보기"></a></p>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
	
	var CUSTOMER_NOTICE_FORM =
		'<div id= "customer" class="notice1">'
		+'<div id="container" class="box">'
		+'<div id="content">'
		+'<h2><img src="'+app.img()+'/img/h2.gif" alt="고객센터 쏘카에 대한 궁금증 해결을 도와드립니다."></h2>'
		+'<p class="callCenter"><img src="'+app.img()+'/customer/btn_callcenter.gif" alt="콜센터 안내"></p>'
		+'<div class="faq_lnb">'
		+'<ul class="faq_lnb">'
		+'<li><a onclick="customer.notice_list(1)" id="a_customer_notice" title="공지사항" class="faq_lnb1">공지사항</a></li>'
		+'<li><a onclick="customer.customer_faq()" id="a_customer_faq" title="자주묻는 질문" class="faq_lnb2">자주묻는 질문</a></li>'
		+'<li><a onclick="customer.customer_inquiry()" id="a_customer_inquiry" title="1:1 문의하기" class="faq_lnb3">1:1 문의하기</a></li>'
		+'<li><a onclick="customer.customer_voc()" id="a_customer_voc" title="고객의견 반영절차" class="faq_lnb4">고객의견 반영절차</a></li>'
		+'</ul>'
		+'<div class="section1">'
		+'<h3><img src="'+app.img()+'/customer/h3_notice.gif" alt="공지사항"></h3>'
		+'<div class="notice-search">'
		+'<input id="notice_keyword" type="text" class="input">'
		+'<input id="btn_search" type="image" src="'+app.img()+'/customer/btn_notice_search.gif" alt="검색">'
		+'</div>'
		+'<table cellspacing="0" summary="공지사항" class="cols">'
		+'<colgroup><col width="65"><col><col width="105"></colgroup>'
		+'<thead>'
		+'<tr>'
		+'<th>번호</th>'
		+'<th>제목</th>'
		+'<th>작성일</th>'
		+'</tr>'
		+'</thead>'
		+'<tbody>'
		+'<tr>'
		+'<td>611</td>'
		+'<td class="subj"><a>[공지] 매너평가 리뉴얼 : 평가 상벌제 안내</a></td>'
		+'<td>2016.10.11</td>'
		+'</tr>'
		+'<tr>'
		+'<td>610</td>'
		+'<td class="subj"><a href="#_content">[쏘카존] 10월 3주 신규 쏘카존 오픈 안내</a></td>'
		+'<td>2016.10.11</td>'
		+'</tr>'
		+'<tr>'
		+'<td>609</td>'
		+'<td class="subj"><a href="#_content">[담배와의 전쟁] 쏘파라치 10월 1주차 적발 현황 공개</a></td>'
		+'<td>2016.10.07</td>'
		+'</tr>'
		+'<tr>'
		+'<td>608</td>'
		+'<td class="subj"><a href="#_content">[공지] 태풍 차바로 인한 울산, 제주지역 피해 복구 지원</a></td>'
		+'<td>2016.10.06</td>'
		+'</tr>'
		+'<tr>'
		+'<td>607</td>'
		+'<td class="subj"><a href="#_content">[쏘카존] 10월 2주 신규 쏘카존 오픈 안내</a></td>'
		+'<td>2016.10.05</td>'
		+'</tr>'
		+'<tr>'
		+'<td>606</td>'
		+'<td class="subj"><a href="#_content">[이벤트] 친구도 나도 2만원! 프렌즈 위크!</a></td>'
		+'<td>2016.10.05</td>'
		+'</tr>'
		+'<tr>'
		+'<td>605</td>'
		+'<td class="subj"><a href="#_content">[공지] 친구초대 쿠폰 지급조건 변경</a></td>'
		+'<td>2016.10.04</td>'
		+'</tr>'
		+'<tr>'
		+'<td>604</td>'
		+'<td class="subj"><a href="#_content">[담배와의 전쟁] 쏘파라치 9월 4주차 적발 현황 공개</a></td>'
		+'<td>2016.09.30</td>'
		+'</tr>'
		+'<tr>'
		+'<td>603</td>'
		+'<td class="subj"><a href="#_content">[쏘카] 안전운전캠페인 - 자동차 속도에 따른 충격과 피해 정도</a></td>'
		+'<td>2016.09.27</td>'
		+'</tr>'
		+'<tr>'
		+'<td>602</td>'
		+'<td class="subj"><a href="#_content">[이벤트] 가을맞이 깜짝 이벤트 (~10/7)</a></td>'
		+'<td>2016.09.26</td>'
		+'</tr>'
		+'</tbody>'
		+'</table>'
		+'<div class="paginate">'
		+'&nbsp;<strong>1</strong>&nbsp;<a href="">2</a>&nbsp;<a href="">3</a>&nbsp;<a href="">4</a>'
		+'&nbsp;<a href="">5</a>&nbsp;<a href="">6</a>&nbsp;<a href="">7</a>&nbsp;<a href="">8</a>'
		+'&nbsp;<a href="">9</a>&nbsp;<a href="">10</a>&nbsp;<a href="">11</a>'
		+'&nbsp;<a href="">&gt;</a>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>';
	
	var CUSTOMER_VOC_FORM =
		'<div id= "customer" class="voc">'
		+'<div id="container" class="box">'
		+'<div id="content">'
		+'<h2><img src="'+app.img()+'/h2.gif" alt="고객센터 쏘카에 대한 궁금증 해결을 도와드립니다."></h2>'
		+'<p class="callCenter"><img src="'+app.img()+'/customer/btn_callcenter.gif" alt="콜센터 안내"></p>'
		+'<div class="faq_lnb">'
		+'<ul class="lnb faq_lnb">'
		+'<li><a onclick="customer.notice_list(1)" id="a_customer_notice" title="공지사항" class="faq_lnb1">공지사항</a></li>'
		+'<li><a onclick="customer.customer_faq()" id="a_customer_faq" title="자주묻는 질문" class="faq_lnb2">자주묻는 질문</a></li>'
		+'<li><a onclick="customer.customer_inquiry()" id="a_customer_inquiry" title="1:1 문의하기" class="faq_lnb3">1:1 문의하기</a></li>'
		+'<li><a onclick="customer.customer_voc()" id="a_customer_voc" title="고객의견 반영절차" class="faq_lnb4">고객의견 반영절차</a></li>'
		+'</ul>'
		+'<div class="section1">'
		+'<h3><img src="http://socdnw.speedgabia.com/template/asset/images/customer/voc_title.png" alt="고객의견 반영절차"></h3>'
		+'<img src="http://socdnw.speedgabia.com/template/asset/images/customer/voc_contents.png?v=20160809" alt="고객의견 반영절차">'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>';
	
	var FARE_FORM =
		'<div id="container" class="box">'
		+'<div id="wrap">'
		+'<div id="container">'
		+'<div id="content">'
		+'<div class="index">'
		+'<img src="'+app.img()+'/img/fare/top_menu_img_2.png" alt="이용요금을 알려드립니다.">'
		+'</div>'
		+'<div class="box">'
		+'<div style="margin-top:30px;display:block;overflow:hidden;width:100%;">'
		+'<a href="https://goo.gl/QFGQtZ"><img src="'+app.img()+'/img/fare/banner_20160530.jpg" alt=""></a>'
		+'</div>'
		+'<div class="group">'
		+'<h3><img src="'+app.img()+'/img/fare/socarzone_drive_fee.png" alt="전국 쏘카존 대여요금 안내"></h3>'
		+'<p><img src="'+app.img()+'/img/fare/rental_txt14.gif" alt="타면된다, 쏘카!​ 10분단위로 자유롭게 신나는 드라이빙을 즐기세요! 다양한 쿠폰혜택과 모바일에서만 만나볼 수 있는 특가상품까지 부담없이 누리세요!"></p>'
		+'<table id="guide_table" cellspacing="0" class="cols">'
		+'<colgroup>'
		+'<col width="82">'
		+'<col width="172">'
		+'<col width="90">'
		+'<col width="90">'
		+'<col width="90">'
		+'<col width="110">'
		+'<col>'
		+'</colgroup>'
		+'<thead>'
		+'<tr>'
		+'<th rowspan="2">차종</th>'
		+'<th rowspan="2">모델</th>'
		+'<th rowspan="2">기준 대여요금<br>(10분기준)</th>'
		+'<th colspan="2">쏘친만을 위한 <span style="color:#f63325">특별할인!</span></th>'
		+'<th rowspan="2">주행요금<br>(주행거리 Km당)</th>'
		+'</tr>'
		+'<tr>'
		+'<th class="strong">주중</th>'
		+'<th>주말</th>'
		+'</tr>'
		+'</thead>'
		+'<tbody>'
		+'<tr>'
		+'<th rowspan="4" class="first">경형A<br></th>'
		+'<td class="tal">모닝</td>'
		+'<td>1,200원</td>'
		+'<td class="strong">720원~</td>'
		+'<td>960원~</td>'
		+'<td>160원</td>'
		+'</tr>'
		+'<tr>'
		+'<td class="tal">스파크</td>'
		+'<td>1,200원</td>'
		+'<td class="strong">720원~</td>'
		+'<td>960원~</td>'
		+'<td>160원</td>'
		+'</tr>'
		+'<tr>'
		+'<td class="tal">넥스트스파크</td>'
		+'<td>1,200원</td>'
		+'<td class="strong">720원~</td>'
		+'<td>960원~</td>'
		+'<td>160원</td>'
		+'</tr>'
		+'<tr>'
		+'<td class="tal">레이</td>'
		+'<td>1,250원</td>'
		+'<td class="strong">750원~</td>'
		+'<td>1,000원~</td>'
		+'<td>170원</td>'
		+'</tr>'
		+'<tr>'
		+'<th rowspan="2" class="first">소형</th>'
		+'<td class="tal">프라이드</td>'
		+'<td>1,430원</td>'
		+'<td class="strong">850원~</td>'
		+'<td>1,140원~</td>'
		+'<td>170원</td>'
		+'</tr>'
		+'<tr>'
		+'<td class="tal">엑센트</td>'
		+'<td>1,430원</td>'
		+'<td class="strong">850원~</td>'
		+'<td>1,140원~</td>'
		+'<td>170원</td>'
		+'</tr>'
		+'<tr>'
		+'<th rowspan="3" class="first">준중형</th>'
		+'<td class="tal">K3</td>'
		+'<td>1,580원</td>'
		+'<td class="strong">950원~</td>'
		+'<td>1,260원~</td>'
		+'<td>170원</td>'
		+'</tr>'
		+'<tr>'
		+'<td class="tal">아반떼</td>'
		+'<td>1,580원</td>'
		+'<td class="strong">950원~</td>'
		+'<td>1,260원~</td>'
		+'<td>170원</td>'
		+'</tr>'
		+'<tr>'
		+'<td class="tal">아반떼AD</td>'
		+'<td>1,580원</td>'
		+'<td class="strong">950원~</td>'
		+'<td>1,260원~</td>'
		+'<td>170원</td>'
		+'</tr>'
		+'<tr>'
		+'<th rowspan="5" class="first">중형</th>'
		+'<td class="tal">K5(LPG)</td>'
		+'<td>2,160원</td>'
		+'<td class="strong">1,300원~</td>'
		+'<td>1,730원~</td>'
		+'<td>140원</td>'
		+'</tr>'
		+'<tr>'
		+'<td class="tal">LF 쏘나타</td>'
		+'<td>2,160원</td>'
		+'<td class="strong">1,300원~</td>'
		+'<td>1,730원~</td>'
		+'<td>180원</td>'
		+'</tr>'
		+'<tr>'
		+'<td class="tal">LF 쏘나타(LPG)</td>'
		+'<td>2,160원</td>'
		+'<td class="strong">1,300원~</td>'
		+'<td>1,730원~</td>'
		+'<td>140원</td>'
		+'</tr>'
		+'<tr>'
		+'<td class="tal">SM5</td>'
		+'<td>2,160원</td>'
		+'<td class="strong">1,300원~</td>'
		+'<td>1,730원~</td>'
		+'<td>180원</td>'
		+'</tr>'
		+'<tr>'
		+'<td class="tal">말리부</td>'
		+'<td>2,660원</td>'
		+'<td class="strong">1,600원~</td>'
		+'<td>2,130원~</td>'
		+'<td>180원</td>'
		+'</tr>'
		+'</tbody>'
		+'</table>'
		+'<br>'
		+'<span style="color: #333">※ 주중/주말 기준</span>'
		+'<br>'
		+'<span style="color: #333">　·</span><span style="color: #333">주중 - 일 19:00 ~ 금 19:00 / 주중 심야 - 00:00 ~ 06:00</span>'
		+'<br>'
		+'<span style="color: #333">　·</span><span style="color: #333">주말 - 금 19:00 ~ 일 19:00 (공휴일 및 당사 지정 성수기 포함)</span>'
		+'<ul><br>'
		+'<li>요금표의 SO회원 특별할인 금액은 최저가 기준으로 지역마다 다를 수 있습니다.</li>'
		+'<li>대여요금은 지역별, 성수기/비수기 등에 따라 탄력요금제로 운영하므로, 위에 안내된 요금은 결제 시 요금과 다를 수 있습니다.</li>'
		+'<li>주행요금은 차량 이용 후 실제 주행거리에 따라 부과됩니다. 주행요금 계산기로 예상 비용을 미리 확인해보세요. <a href="#" class="oil">주행요금 계산기</a></li>'
		+'<li>편도/D2D(도어 투 도어) 서비스 이용 시에는 차량 회송비용 등을 고려한 별도 요금이 추가 과금될 수 있습니다.</li>'
		+'<li>대여요금 및 주행요금은 당사 내부정책/유가변동에 따라 변경될 수 있습니다.</li>'
		+'</ul>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>';
	
	var GUIDE_FORM =
		'<div id="container" class="box">'
		+'<div id="content">'
		+'<div class="index">'
		+'<img src="'+app.img()+'/img/guide/top_menu_img_1.png" alt="쏘카에 대해 알아볼까요?">'
		+'</div>'
		+'<div class="guide_box1">'
		+'<div style="float: left;" class="snb">'
		+'<ul class="menu">'
		+'<li class="on"><a href="#socar1" class="menu1">이용방법</a></li>'
		+'<li><a href="#socar2" class="menu2">이용규칙</a></li>'
		+'<li><a href="#socar3" class="menu3">모바일 이용안내</a></li>'
		+'<li><a href="#socar4" class="menu4">쏘카 가이드</a></li>'
		+'<li><a href="#socar5" class="menu5">쏘카 임팩트</a></li>'
		+'</ul>'
		+'<ul class="banner">'
		+'<li><a href="https://www.facebook.com/socarsharing" target="_blank"><img src="'+app.img()+'/img/guide/banner1.gif" alt="쏘카 페이스북"></a></li>'
		+'<li><a href="http://blog.socar.kr" target="_blank"><img src="'+app.img()+'/img/guide/banner2_n.gif" alt="쏘카 블로그"></a></li>'
		+'<li><a href="https://goo.gl/Aqsjr5" target="_blank"><img src="'+app.img()+'/img/guide/banner3.gif" alt="쏘카 인재채용"></a></li>'
		+'</ul>'
		+'</div>'
		+'<div style="float: left; padding-left: 90px; width: 880px;" id="socar1" class="content">'
		+'<h3><img src="'+app.img()+'/guide/txt10.gif" alt="쏘카 이용방법"></h3>'
		+'<p class="txt"><img src="'+app.img()+'/guide/txt11.gif" alt="가입에서 예약 사용까지 간편하게 이용할 수 있는 편리하고 경제적인 쏘카의 이용방법을 알려드립니다. 쏘카와 함께 스마트 카셰어링을 경험해 보세요! "></p>'
		+'<ul>'
		+'<li class="rule1">'
		+'<h4><img src="'+app.img()+'/guide/txt12.gif" alt="회원 가입"></h4>'
		+'<p>카셰어링은 신뢰를 기반으로 한 회원제 서비스입니다.<br>'
		+'운전면허 및 결제카드 등록 후 SO회원이 되시면 쏘카 이용이 가능합니다.</p>'
		+'</li>'
		+'<li class="rule2">'
		+'<h4><img src="'+app.img()+'/guide/txt13.gif" alt="차량 예약"></h4>'
		+'<p>SO회원 가입 승인 후 쏘카 예약이 가능합니다. 홈페이지 및 모바일앱을 이용해 예약하실<br>수 있고 정상적으로 예약완료된 경우 휴대폰으로 확인메시지가 전송됩니다.</p>'
		+'<p>'
		+'<img src="'+app.img()+'/guide/mobile.gif" alt="안드로이드폰, 아이폰" usemap="#mobile.gif">'
		+'<map name="mobile.gif">'
		+'<area shape="rect" coords="1,0,98,23" href="https://play.google.com/store/apps/details?id=socar.Socar&amp;utm_source=www-socar&amp;utm_medium=guide" target="_blank" alt="안드로이드폰">'
		+'<area shape="rect" coords="99,0,166,23" href="https://itunes.apple.com/kr/app/id515173864" target="_blank" alt="아이폰">'
		+'</map>'
		+'</p>'
		+'</li>'
		+'<li class="rule3">'
		+'<h4><img src="'+app.img()+'/guide/txt14.gif" alt="쏘카 이용"></h4>'
		+'<p>쏘카앱 스마트키 잠금해제 버튼을 누르거나, 등록한 회원카드를 차량 앞 유리에 부착된 단말기에 접촉시켜 주세요. 경적음이 울린 후 차량 문이 열립니다.<br> 예약한 시간 동안에는 회원카드 및 모바일앱 스마트키로 차량 문을 제어할 수 있습니다.</p>'
		+'</li>'
		+'<li class="rule4">'
		+'<h4><img src="'+app.img()+'/guide/txt15.gif" alt="차량 반납"></h4>'
		+'<p>반납 시간에 맞추어 차량을 반납 장소에 주차하신 후 모바일앱 스마트키 및 회원카드로 차량 문을 <br>잠가 주세요.<br>'
		+'제자리에 정상 반납 처리되면 휴대폰으로 확인 메시지가 발송됩니다.</p>'
		+'</li>'
		+'<li class="rule5">'
		+'<h4><img src="'+app.img()+'/guide/txt16.gif" alt="요금 결제"></h4>'
		+'<p>차량 이용에 따른 요금은 대여료와 주행요금으로 구분되며, 가입시 등록한 결제카드로 청구됩니다.<br>'
		+'결제가 완료되지 않으면 차량 사용에 제한이 있을 수 있으니, 미리 결제카드의 유효여부를<br>확인해주세요. </p>'
		+'</li>'
		+'</ul>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>'
		+'</div>';
	
var COMPANY_FORM =
     '<div id="container" class="box">'
     +'<div id="content">'
     +'<div class="index">'
     +'<img src="'+app.img()+'/company/top_menu_img_3.png" alt="법인/단체 프로그램을 알아보세요!">'
     +'</div>'
     +'<div class="box">'
     +'<div style="float: left;" class="snb">'
     +'<ul class="menu">'
     +'<li class="on"><a href="#company1" class="menu1">프로그램안내 및 혜택</a></li>'
     +'<li><a href="#company2" class="menu2">가입 및 이용 방법</a></li>'
     +'<li><a href="#company3" class="menu3">자주 묻는 질문</a></li>'
     +'</ul>'
     +'<ul class="banner">'
     +'<li><a href="https://www.facebook.com/socarsharing" target="_blank"><img src="http://socdnw.speedgabia.com/template/asset/images/socar/banner1.gif" alt="쏘카 페이스북"></a></li>'
     +'<li><a href="http://blog.socar.kr" target="_blank"><img src="http://socdnw.speedgabia.com/template/asset/images/socar/banner2_new.gif" alt="쏘카 블로그"></a></li>'
     +'<li><a href="https://goo.gl/Aqsjr5" target="_blank"><img src="http://socdnw.speedgabia.com/template/asset/images/socar/banner3.gif" alt="쏘카 인재채용"></a></li>'
     +'</ul>'
     +'</div>'
     +'<div style="float: left; padding-left: 90px; width: 880px;" id="company1" class="content">'
     +'<h3><img src="'+app.img()+'/company/txt4.gif" alt="쏘카 법인/단체 프로그램"></h3>'
     +'<p class="txt"><img src="'+app.img()+'/company/txt5.gif" alt="쏘카 법인/단체 프로그램은 1인 이상의 기업, 정부기관, 비영리단체를 대상으로 진행하는 특별 프로그램입니다. 쏘카는 법인/단체의 비용 절감 및 간편한 이용을 통해 업무 효율성을 높이는 등 최상의 업무 차량 지원을 제공합니다."></p>'
     +'<div><a href="/join"><img alt="법인/단체 회원가입" src="'+app.img()+'/company/btn_company_mail_n.gif"></a><a href="https://www.dropbox.com/sh/nbmi016ck6bihl9/AAC1mnZNR3-vqe5ww6tcxZr1a?dl=0" target="_blank" style="margin-left:10px;"><img alt="법인 프로그램안내서 다운로드" src="http://socdnw.speedgabia.com/template/asset/images/company/btn_company.gif"></a></div>'
     +'<div style="margin-top:20px;">'
     +'<iframe width="560" height="315" src="//www.youtube.com/embed/ed3GNGmpidc" frameborder="0" allowfullscreen=""></iframe>'
     +'</div>'
     +'</div>'
     +'</div>';

var customer = (function(){
	var init = function(){
		onCreate();
	};
	var setContentView = function(){
	};
	var onCreate = function(){
		setContentView();
		$(".gnb li:nth-child(1)").click(function(){
			$("#pub_article").html(GUIDE_FORM);
		 });
		$(".gnb li:nth-child(2)").click(function(){
			$("#pub_article").html(FARE_FORM);
		 });
		$(".gnb li:nth-child(3)").click(function() {
			$('#pub_article').html(COMPANY_FORM);
		});
		$(".gnb li:nth-child(4)").click(function(){
			customer.notice_list(1);
		});
		$(".faq_lnb > li:nth-child(1)").click(function(){
			customer.notice_list(1);
		});
		$(".faq_lnb > li:nth-child(2)").click(function(){
			
			$.ajax({
				url : app.context() + '/customer/faq_0_form',
				type : 'GET',
				data:{},
				dataType : 'JSON',
				success : function(data) {
					$("#pub_article").html(customer_faq_0_form);
				}
			});
			
		});
		$(".faq_lnb > li:nth-child(3)").click(function(){
			customer.customer_inquiry();
		});
	};
	return{
		init : init,
		setContentView : setContentView,
		onCreate : onCreate,
		notice_list : function(pgNum){
			$.getJSON(app.context() + '/customer/list/' + pgNum, function(data){
				var frame = '';
				var notice_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				console.log('스타트 페이지' + startPg);
				console.log('라스트 페이지' + lastPg);
				console.log('페이지 사이즈' + pgSize);
				console.log('토탈 페이지' + totPg);
				console.log('그룹 사이즈' + groupSize);
				console.log('페이지 넘버' + pgNum);
				var notice_list = '';
				notice_list += CUSTOMER_NOTICE;
				notice_list += CUSTOMER_NOTICE_TH;
				if (data.totCount == 0){
					notice += '<tr><td colspan=3>등록된 공지사항이 없습니다.</td></tr>';
				} else {
					$.each(data.list, function(i, customer){
						notice_list += 
							 '<tr>'
							+'<td>' + customer.customerSeq + '</td>'
							+'<td style="text-align: left"><a onclick="customer.customer_notice_content('+customer.customerSeq+', '+pgNum+')">' + customer.title + '</a></td>'
							+'<td>' + customer.regDate + '</td>'
							+'<tr>';
					}); //else 의 $.each 끝
				}
				
				notice_list += '</tbody></table>';
				var pagination = 
					 '<nav aria-label="Page navigation">'
					+'<ul class="paginate">';
				$('#pub_article').html(notice_list);
				var temp_num;
				if(pgNum > groupSize){
					var temp;
					if(pgNum % groupSize == 0){
						temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1 - groupSize;
					}else{
						temp = (Math.floor(((pgNum - groupSize) / groupSize)) * groupSize) + 1;
					}					
					var temp2 = 1;
					pagination +=
						'<a onclick="customer.notice_list(' + temp2 + ')" aria-label="Previous">'
						+'<span style="font-size: 30px" aria-hidden="true">&laquo;</span>'
						+'</a>'
						+'<a onclick="customer.notice_list(' + temp + ')" aria-label="Previous">'
						+'<span aria-hidden="true"><</span>'
						+'</a>';
				}
				for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
					if(i == pgNum){
						pagination += '<font color="blue"><strong>' + i + '</strong></font>';
					} else {
						pagination += '<a onclick="customer.notice_list('+ i +')">' + ' ' + i + ' ' + '</a>';
					}
					temp_num = i;
				}
				if(temp_num != totPg){ //0~9
					var temp3;
					if(pgNum % groupSize == 0){
						temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1 - groupSize;
					}else{
						temp3 = (Math.floor(((pgNum + groupSize) / groupSize)) * groupSize) + 1;
					}
					var temp4 = totPg;
					pagination += 
						'<a onclick="customer.notice_list(' + temp3 + ')" aria-label="Next">'
						+'<span aria-hidden="true">></span>'
						+'</a>'
						+'<a onclick="customer.notice_list(' + temp4 + ')" aria-label="Next">'
						+'<span style="font-size: 30px" aria-hidden="true">&raquo;</span>'
						+'</a>';
				}
				pagination += '</ul></nav>';
				frame += notice_list;
				frame += pagination;
				notice_list += CUSTOMER_NOTICE_END;
				$('#pub_article').html(frame);
				$('#btn_notice_search').click(function() {
					if ($('#notice_keyword').val().length>0) {
						customer.customer_find_notice('title',$('#notice_keyword').val(),1);
						
					} else {
						alert('검색어를 입력해주세요');
						$('#notice_keyword').focus();
						return false

					}
				});
				
			});               // notice_list의 getJSON 끝
		},	                     //notice_list 끝
		customer_find_notice : function(keyField,keyword,pgNum){
			$('#pub_article').empty();
			$.getJSON(app.context()+'/customer/notice_search/'+keyField+'/'+keyword+'/'+pgNum,function(data){
				var frame = '';
				var notice_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				notice_list = CUSTOMER_NOTICE_FIND;
				notice_list += CUSTOMER_NOTICE_TH;	
				
				if (data.totCount===0) {
					notice_list +='<tr><td colspan=7>등록된 검색 공지사항이 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i, customer){
						notice_list +=
							'<tr>'
							+'<td>'+customer.customerSeq+'</td>'
							+'<td class="subj"><a onclick="customer.customer_notice_content('+customer.customerSeq+')" id= "a_customer_notice_content">'+customer.title+'</a></td>'
							+'<td>'+customer.regDate+'</td>'
							+'<td style="visibility:hidden">'+customer.customerSeq+'</td>'
							+'</tr>';
					});
				}
				notice_list += '</tbody></table>'
					var pagination = 
						 '<nav aria-label="Page navigation">'
						+'<ul class="paginate">';
					$('#pub_article').html(notice_list);
					var temp_num;
					if(pgNum > groupSize){
						var temp;
						if(pgNum %  groupSize == 0){
							temp = (Math.floor(((pgNum -  groupSize) /  groupSize)) *  groupSize) + 1 -  groupSize;
						}else{
							temp = (Math.floor(((pgNum -  groupSize) /  groupSize)) *  groupSize) + 1;
						}					
						var temp2 = 1;
						pagination +=
							'<a onclick="customer.customer_find_notice(\''+keyField+'\',\''+keyword+'\','+(temp2)+')" aria-label="Previous">'
							+'<span style="font-size: 30px" aria-hidden="true">&laquo;</span>'
							+'</a>'
							+'<a onclick="customer.customer_find_notice(\''+keyField+'\',\''+keyword+'\','+(temp)+')" aria-label="Previous">'
							+'<span aria-hidden="true"></span>'
							+'</a>';
					}
					for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
						if(i == pgNum){
							pagination += '<font color="blue"><strong>' + i + '</strong></font>';
						} else {
							
							pagination += '<a onclick="customer.customer_find_notice(\''+keyField+'\',\''+keyword+'\','+i+')">' + ' ' + i + ' ' + '</a>';
						}
						temp_num = i;
					}
					if(temp_num != totPg){ //0~9
						var temp3;
						if(pgNum %  groupSize == 0){
							temp3 = (Math.floor(((pgNum +  groupSize) /  groupSize)) *  groupSize) + 1 -  groupSize;
						}else{
							temp3 = (Math.floor(((pgNum +  groupSize) /  groupSize)) *  groupSize) + 1;
						}
						var temp4 = totPg;
						pagination += 
							'<a onclick="customer.customer_find_notice(\''+keyField+'\',\''+keyword+'\','+(temp3)+')" aria-label="Next">'
							+'<span aria-hidden="true">></span>'
							+'</a>'
							+'<a onclick="customer.customer_find_notice(\''+keyField+'\',\''+keyword+'\','+(temp4)+')" aria-label="Next">'
							+'<span style="font-size: 30px" aria-hidden="true">&raquo;</span>'
							+'</a>';
                 }
                pagination += '</nav></div>'
                notice_list += pagination;	                
				notice_list += CUSTOMER_NOTICE_END;
				frame = notice_list;
				$('#pub_article').html(frame);
			});
		},
		customer_notice_content : function(customerSeq, pgNum){
			$.getJSON(app.context() + '/customer/go_article/customer_seq/' + customerSeq, function(data){
				$('#pub_article').empty();
				var frame = '';
				var notice_content = '';
				notice_content = CUSTOMER_NOTICE_CONTENT;
				notice_content += CUSTOMER_NOTICE_CONTENT_TH;
				notice_content +=
					'<tr>'
					+'<td id="notice_subj" class="subj">' + data.title + '</td>'
					+'<td>' + data.regDate + '</td>'
					+'</tr>'
					+'</tbody>'
					+'</table>';
				notice_content += 
					 '<div style="margin-bottom: 20px; padding: 20px 20px 30px; border-bottom: 1px solid #d3d3d3" class="viewCont">' 
					+ data.content 
					+'</div>'
					+'<p class="centerBtn"><a id="notice_move_list_btn" onclick="customer.notice_list('+pgNum+')"><img src="http://socdnw.speedgabia.com/template/asset/images/common/btn_list.gif" alt="목록보기"></a></p>';
				notice_content += CUSTOMER_NOTICE_CONTENT_END;	
				frame = notice_content;
				$('#pub_article').html(frame);
			});
		},
		customer_faq : function(){
			$.getJSON(app.context() + '/customer/faqList/category/자주묻는 질문', function(data){
				var frame = '';
				var faq_content = '';
				faq_content = CUSTOMER_FAQ_FORM;
				$.getJSON(app.context() + '/customer/faq_count/category/자주묻는 질문', function(count){
					faq_content += '<p class="count">총게시물 <strong>'+count.count+'</strong>개</p>';
					if(count.count == 0){
						faq_content += 
							 '<dt style="text-align: center">등록된 게시물이 없습니다.</dt>'
					}else {
						$.each(data.list, function(i, faq){
							faq_content += 
								 '<dt><span>Q</span> '+ faq.title +'</dt>'
								+'<dd style="display: none;"><span>A</span>'
								+faq.content
								+'</dd>';
						}); // each 끝
					}
					faq_content += CUSTOMER_FAQ_END;
					$('#pub_article').html(faq_content);
					customer.faq_click_event();
					customer.faq1();
					customer.faq2();
					customer.faq3();
					customer.faq4();
					customer.faq5();
					customer.faq6();
					customer.faq7();
					customer.faq8();
				});
			});
		},
		
		
		faq_click_event : function(){
			//클릭 이벤트
			$(".faq .faq-list dt").click(function(){
				$(".faq .faq-list dt").removeClass('active');
				$(this).addClass('active');
				$(".faq .faq-list dd").not($(this).next("dd")).slideUp();
				$(this).next("dd").slideToggle();
				return false;
			});
		},
		faq1 : function(){
			$('#customer_faq_tab ul li:nth-child(1)').click(function() {
				$.getJSON(app.context() + '/customer/faqList/category/자주묻는 질문', function(data){
					var frame = '';
					var faq_content = '';
					faq_content = CUSTOMER_FAQ_FORM;
					$.getJSON(app.context() + '/customer/faq_count/category/자주묻는 질문', function(count){
						faq_content += '<p class="count">총게시물 <strong>'+count.count+'</strong>개</p>';
						if(count.count == 0){
							faq_content += 
								 '<dt style="text-align: center">등록된 게시물이 없습니다.</dt>'
						}else {
							$.each(data.list, function(i, faq){
								faq_content += 
									 '<dt><span>Q</span> '+ faq.title +'</dt>'
									+'<dd style="display: none;"><span>A</span>'
									+faq.content
									+'</dd>';
							}); // each 끝
						}
						faq_content += CUSTOMER_FAQ_END;
						$('#pub_article').html(faq_content);
						$('#customer_faq_tab ul li').removeClass("on");
						$('#customer_faq_tab ul li:nth-child(1)').addClass("on");
						customer.faq_click_event();
						customer.faq1();
						customer.faq2();
						customer.faq3();
						customer.faq4();
						customer.faq5();
						customer.faq6();
						customer.faq7();
						customer.faq8();
					});
				});
			});
		},
		faq2 : function(){
			$('#customer_faq_tab ul li:nth-child(2)').click(function() {
				$.getJSON(app.context() + '/customer/faqList/category/예약,결제문의', function(data){
					var frame = '';
					var faq_content = '';
					faq_content = CUSTOMER_FAQ_FORM;
					$.getJSON(app.context() + '/customer/faq_count/category/예약,결제문의', function(count){
						faq_content += '<p class="count">총게시물 <strong>'+count.count+'</strong>개</p>';
						if(count.count == 0){
							faq_content += 
								 '<dt style="text-align: center">등록된 게시물이 없습니다.</dt>'
						}else {
							$.each(data.list, function(i, faq){
								faq_content += 
									 '<dt><span>Q</span> '+ faq.title +'</dt>'
									+'<dd style="display: none;"><span>A</span>'
									+faq.content
									+'</dd>';
							}); // each 끝
						}
						faq_content += CUSTOMER_FAQ_END;
						$('#pub_article').html(faq_content);
						$('#customer_faq_tab ul li').removeClass("on");
						$('#customer_faq_tab ul li:nth-child(2)').addClass("on");
						customer.faq_click_event();
						customer.faq1();
						customer.faq2();
						customer.faq3();
						customer.faq4();
						customer.faq5();
						customer.faq6();
						customer.faq7();
						customer.faq8();
					});
				});
			});
		},
		faq3 : function(){
			$('#customer_faq_tab ul li:nth-child(3)').click(function() {

				$.getJSON(app.context() + '/customer/faqList/category/가입문의', function(data){
					$('#pub_article').empty();
					var frame = '';
					var faq_content = '';
					faq_content = CUSTOMER_FAQ_FORM;
					$.getJSON(app.context() + '/customer/faq_count/category/가입문의', function(count){
						faq_content += '<p class="count">총게시물 <strong>'+count.count+'</strong>개</p>';
						if(count.count == 0){
							faq_content += 
								 '<dt style="text-align: center">등록된 게시물이 없습니다.</dt>'
						}else {
							$.each(data.list, function(i, faq){
								faq_content += 
									 '<dt><span>Q</span> '+ faq.title +'</dt>'
									+'<dd style="display: none;"><span>A</span>'
									+faq.content
									+'</dd>';
							}); // each 끝
						}
						faq_content += CUSTOMER_FAQ_END;
						$('#pub_article').html(faq_content);
						$('#customer_faq_tab ul li').removeClass("on");
						$('#customer_faq_tab ul li:nth-child(3)').addClass("on");
						customer.faq_click_event();
						customer.faq1();
						customer.faq2();
						customer.faq3();
						customer.faq4();
						customer.faq5();
						customer.faq6();
						customer.faq7();
						customer.faq8();
					});
				});
			});
		},
		faq4 : function(){
			$('#customer_faq_tab ul li:nth-child(4)').click(function() {
				$.getJSON(app.context() + '/customer/faqList/category/차량이용,사고', function(data){
					$('#pub_article').empty();
					var frame = '';
					var faq_content = '';
					faq_content = CUSTOMER_FAQ_FORM;
					$.getJSON(app.context() + '/customer/faq_count/category/차량이용,사고', function(count){
						faq_content += '<p class="count">총게시물 <strong>'+count.count+'</strong>개</p>';
						if(count.count == 0){
							faq_content += 
								 '<dt style="text-align: center">등록된 게시물이 없습니다.</dt>'
						}else {
							$.each(data.list, function(i, faq){
								faq_content += 
									 '<dt><span>Q</span> '+ faq.title +'</dt>'
									+'<dd style="display: none;"><span>A</span>'
									+faq.content
									+'</dd>';
							}); // each 끝
						}
						faq_content += CUSTOMER_FAQ_END;
						$('#pub_article').html(faq_content);
						$('#customer_faq_tab ul li').removeClass("on");
						$('#customer_faq_tab ul li:nth-child(4)').addClass("on");
						customer.faq_click_event();
						customer.faq1();
						customer.faq2();
						customer.faq3();
						customer.faq4();
						customer.faq5();
						customer.faq6();
						customer.faq7();
						customer.faq8();
					});
				});
			});
		},
		faq5 : function(){
			$('#customer_faq_tab ul li:nth-child(5)').click(function() {
				$.getJSON(app.context() + '/customer/faqList/category/프로모션,쿠폰', function(data){
					$('#pub_article').empty();
					var frame = '';
					var faq_content = '';
					faq_content = CUSTOMER_FAQ_FORM;
					$.getJSON(app.context() + '/customer/faq_count/category/프로모션,쿠폰', function(count){
						faq_content += '<p class="count">총게시물 <strong>'+count.count+'</strong>개</p>';
						if(count.count == 0){
							faq_content += 
								 '<dt style="text-align: center">등록된 게시물이 없습니다.</dt>'
						}else {
							$.each(data.list, function(i, faq){
								faq_content += 
									 '<dt><span>Q</span> '+ faq.title +'</dt>'
									+'<dd style="display: none;"><span>A</span>'
									+faq.content
									+'</dd>';
							}); // each 끝
						}
						faq_content += CUSTOMER_FAQ_END;
						$('#pub_article').html(faq_content);
						$('#customer_faq_tab ul li').removeClass("on");
						$('#customer_faq_tab ul li:nth-child(5)').addClass("on");
						customer.faq_click_event();
						customer.faq1();
						customer.faq2();
						customer.faq3();
						customer.faq4();
						customer.faq5();
						customer.faq6();
						customer.faq7();
						customer.faq8();
					});
				});
			});
		},
		faq6 : function(){
			$('#customer_faq_tab ul li:nth-child(6)').click(function() {
				$.getJSON(app.context() + '/customer/faqList/category/법인,단체', function(data){
					$('#pub_article').empty();
					var frame = '';
					var faq_content = '';
					faq_content = CUSTOMER_FAQ_FORM;
					$.getJSON(app.context() + '/customer/faq_count/category/법인,단체', function(count){
						faq_content += '<p class="count">총게시물 <strong>'+count.count+'</strong>개</p>';
						if(count.count == 0){
							faq_content += 
								 '<dt style="text-align: center">등록된 게시물이 없습니다.</dt>'
						}else {
							$.each(data.list, function(i, faq){
								faq_content += 
									 '<dt><span>Q</span> '+ faq.title +'</dt>'
									+'<dd style="display: none;"><span>A</span>'
									+faq.content
									+'</dd>';
							}); // each 끝
						}
						faq_content += CUSTOMER_FAQ_END;
						$('#pub_article').html(faq_content);
						$('#customer_faq_tab ul li').removeClass("on");
						$('#customer_faq_tab ul li:nth-child(6)').addClass("on");
						customer.faq_click_event();
						customer.faq1();
						customer.faq2();
						customer.faq3();
						customer.faq4();
						customer.faq5();
						customer.faq6();
						customer.faq7();
						customer.faq8();
					});
				});
			});
		},
		faq7 : function(){
			$('#customer_faq_tab ul li:nth-child(7)').click(function() {
				$.getJSON(app.context() + '/customer/faqList/category/탈퇴', function(data){
					$('#pub_article').empty();
					var frame = '';
					var faq_content = '';
					faq_content = CUSTOMER_FAQ_FORM;
					$.getJSON(app.context() + '/customer/faq_count/category/탈퇴', function(count){
						faq_content += '<p class="count">총게시물 <strong>'+count.count+'</strong>개</p>';
						if(count.count == 0){
							faq_content += 
								 '<dt style="text-align: center">등록된 게시물이 없습니다.</dt>'
						}else {
							$.each(data.list, function(i, faq){
								faq_content += 
									 '<dt><span>Q</span> '+ faq.title +'</dt>'
									+'<dd style="display: none;"><span>A</span>'
									+faq.content
									+'</dd>';
							}); // each 끝
						}
						faq_content += CUSTOMER_FAQ_END;
						$('#pub_article').html(faq_content);
						$('#customer_faq_tab ul li').removeClass("on");
						$('#customer_faq_tab ul li:nth-child(7)').addClass("on");
						customer.faq_click_event();
						customer.faq1();
						customer.faq2();
						customer.faq3();
						customer.faq4();
						customer.faq5();
						customer.faq6();
						customer.faq7();
						customer.faq8();
					});
				});
			});
		},
		faq8 : function(){
			$('#customer_faq_tab ul li:nth-child(8)').click(function() {
				$.getJSON(app.context() + '/customer/faqList/category/기타', function(data){
					$('#pub_article').empty();
					var frame = '';
					var faq_content = '';
					faq_content = CUSTOMER_FAQ_FORM;
					$.getJSON(app.context() + '/customer/faq_count/category/기타', function(count){
						faq_content += '<p class="count">총게시물 <strong>'+count.count+'</strong>개</p>';
						if(count.count == 0){
							faq_content += 
								 '<dt style="text-align: center">등록된 게시물이 없습니다.</dt>'
						}else {
							$.each(data.list, function(i, faq){
								faq_content += 
									 '<dt><span>Q</span> '+ faq.title +'</dt>'
									+'<dd style="display: none;"><span>A</span>'
									+faq.content
									+'</dd>';
							}); // each 끝
						}
						faq_content += CUSTOMER_FAQ_END;
						$('#pub_article').html(faq_content);
						$('#customer_faq_tab ul li').removeClass("on");
						$('#customer_faq_tab ul li:nth-child(8)').addClass("on");
						customer.faq_click_event();
						customer.faq1();
						customer.faq2();
						customer.faq3();
						customer.faq4();
						customer.faq5();
						customer.faq6();
						customer.faq7();
						customer.faq8();
					});
				});
			});
		},
		customer_inquiry : function(){
			$.getJSON(app.context() + '/member/session', function(session){
				if(session.id == null){
					alert("로그인을 해주세요");
				}else{
			$('#pub_article').empty().html(CUSTOMER_INQUIRY_FORM);
			customer.init();
			$('#btn_inquiry_submit').click(function(e){
			    e.preventDefault();
			    var join_info = {
						'title' : $('#customer_inquiry_title').val(),
						'content' : $('#customer_inquiry_contents').val(),
						'category' :$('#customer_inquiry_category').val(),
						'fileName' :$('#customer_inquiry_file').val(),
						'id' : session.id
					};
			    $.ajax({
					url : app.context()+'/customer/inquiry_form',
					type : 'post',
					contentType : 'application/json',
					data : JSON.stringify(join_info),
					dataType : 'json',
					success : function(data){
						if(data.message==='success'){
							alert("문의가 접수되었습니다.");
							controller.home();
						}
					},
					error : function(x,s,m){
						alert("1대1 문의 전송 시 에러 발생 : " + m);
					}
						});
					});
				}
			}); 
		},
		customer_voc : function(){
			$('#pub_article').html(CUSTOMER_VOC_FORM);
		}
	};
})();


