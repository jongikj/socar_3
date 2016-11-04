<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="mypage" class="reservation box">
<div id="container">
<div id="content">
<h2><img style="float: left" src="resources/img/mypage/h2.gif" alt="[마이페이지] 내 정보와 예약내역, 쿠폰 등을 확인할 수 있습니다." /></h2>
<div class="info_lnb">
<ul class="info_lnb">
<li><a href="/mypage" title="내 정보" class="info_lnb1">내 정보</a></li>
<li><a href="/mypage/reserve" title="예약내역" class="info_lnb3">예약내역 <span>0</span></a></li>
<li><a href="/mypage/coupon" title="내 쿠폰" class="info_lnb4">내 쿠폰 <span>2</span></a></li>
<li><a href="/mypage/payment" title="결제내역" class="info_lnb5">결제내역</a></li>
</ul>
<div class="section" style="float: left">
<div class="group" style="width: 743px">
<h3 class="tit_corp">
<img src="resources/img/mypage/reservation_txt1.gif" alt="예약내역" /> <span>0</span> <img src="resources/img/mypage/reservation_txt2.gif" alt="건" />
</h3>
<div class="gbx">
<ul>
<li>예약변경은 반납연장만 가능합니다. 대여기간 수정, 지역 및 차종 변경은 취소 후 새로 예약해주세요.</li>
<li>반납연장은 반납 예정 시각 30분 이전까지만 가능하며, 다른 회원의 예약이 이미 존재하는 경우에는 반납연장이 불가합니다.</li>
<li>예약취소 시 대여요금과 보험료의 각 10%에 해당하는 수수료가 부과될 수 있습니다.</li>
</ul>
</div>
<div class="result_none">
<p>예약내역이 없습니다.</p>
</div>
<table cellspacing="0" class="cols">
<thead>
<tr>
<th colspan="2">예약</th>
<th>총 요금</th>
<th>결제</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p class="thumb">
<em class="car_id" style="display:none;">4325</em>
<a class="carDetail">
<img src="/template/asset/images/car_image/car22.png">
</a>
</p>
</td>
<td class="info">
<h4>
<em id="6547083_car_id" class="car_id" style="display:none;">4325</em>
<a href="#" class="carDetail">아반떼AD</a> (29호4179)
</h4>
<div class="desc">
2016.11.04 금 12:30 - 2016.11.04 금 16:10 <br>
총 3시간 40분 <br>
<em id="6547083_zone_id" style="display:none;">2211</em>
<a href="#" class="socarzoneDetail">수택동사거리</a>
</div>
</td>
<td class="price">
<a class="btn_payment_detail" >22,510원</a>
</td>
<td>
<a id="btn_payment" class="btnS rvExtendB" ><span>결제</span></a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>