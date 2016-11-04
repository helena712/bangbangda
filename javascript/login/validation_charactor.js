var RegExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;  //특수문자
var emailExp = /^[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/; //이메일 형식
                     /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;  //이메일 형식 풀버전
var hanExp = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힝]/;  //한글사용
var NumExp = /^[0-9]+$/;   //숫자입력


​if (inputid.id.value.search(hanExp) != -1) {
   alert("한글 사용 금지");
   document.orderForm.id.value = "";
   checked_id = false;
   return;
}

else if(RegExp.test(inputid.id.value)) {
   alert("특수문자 사용 금지");
   document.orderForm.id.value = "";
   checked_id = false;
   return;
  }

if(!NumExp.test(sec) || !NumExp.test(thi)) {  //핸드폰 번호에 숫자 이외의 것이 들어가면 안된다.
   alert("핸드폰 번호를 제대로 입력하세요");
   document.orderForm.second_number.focus();
   return false;
}
​
if(emailExp.test(document.orderForm.email_site_text.value) == false) {  //이메일주소의 형식이 맞지 않는다면
   alert("이메일 주소를 확인하세요.");
   document.orderForm.email_site_text.focus();
   return false;
  }​
