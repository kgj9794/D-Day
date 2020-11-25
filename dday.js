alert("커플분들을 위한 DDAY 프로그램입니다.");
var inputStartDay = prompt("두 사람이 연인사이가 시작된 날을 입력하세요!", "예시) 2020-02-26" );     //입력창 생성 

var man = prompt("여자친구분의 이름을 입력하세요!");
var girl = prompt("남자친구분의 이름을 입력하세요!");
//각 날짜를 Date 객체로 생성, 연, 월, 일 변수 생성
var today = new Date();
/*var inputStartDay = new Date(inputStartDay);*/
var clean;
clean=inputStartDay.replace("예시) ","");
var inputStartDay = new Date(clean);
var startDay = new Date(inputStartDay);
var year = startDay.getFullYear();
var month = startDay.getMonth() + 1;     // 0이 1월이라 +1
var day = startDay.getDate();
if (month < 10) {month = "0" + month;}
if (day < 10) { day = "0"+day; }
document.querySelector("#man").innerHTML = man;
document.querySelector("#girl").innerHTML = girl;
document.querySelector("#heart").innerHTML ="❤️"
if(man ==null || girl==null || man == "" || girl ==""){
	document.querySelector("#man").innerHTML = null;
document.querySelector("#girl").innerHTML = null;
	document.querySelector("#heart").innerHTML = "<b>이름이 모두 입력되지 않았어요..</b> <br>새로고침하여 다시 입력해주세요!<br><a onClick='window.location.reload()' style='cursor: pointer; '><button class='mdc-icon-button material-icons' style='color:white;'>refresh</button></a>";
  style.display(ul) = none;}
document.querySelector("#startDay").innerHTML = "처음 만난 날 : "+year + "년 " + month + "월 " + day + "일";      // 시작날 표시


// 현재까지 며칠 지났는지 표시(밀리초로 변환해서 계산)
var startMilli = startDay.getTime();
var todayMilli = today.getTime();
var calcDay = 24 * 60 * 60 * 1000;  // 밀리초를 하루로 변환한 것(나눌때 사용)
var passedDay = Math.round((todayMilli - startMilli) / calcDay + 1);
document.querySelector("#today").innerHTML = "<h1 style='color:#f5f6fa;'>사랑한지 <b style='color:white'>" + passedDay + "</b>일 째</h1>";
if(isNaN(passedDay)){
document.querySelector("#non").innerHTML = "환영합니다..! 하지만..";
document.querySelector("#today").innerHTML = "<p style='color:red;'><b style='color:red;'>날짜정보가 이상해요..</b><br>새로고침하여 다시 입력해주세요!</p>"+"<a onClick='window.location.reload()' style='cursor: pointer; '><button class='mdc-icon-button material-icons' style='color:white;'>refresh</button></a>";
style.display(ul) = none;

}       // 결과값 출력
if(passedDay <= 0 ){
	document.querySelector("#startDay").innerHTML = "네..? " +year + "년 " + month + "월 " + day + "일이요..?";      // 시작날 표시
	document.querySelector("#today").innerHTML = "<h3>"  + "미래에서 오셨나요?</h3>"+"<a onClick='window.location.reload()' style='cursor: pointer; '><button class='mdc-icon-button material-icons' style='color:white;' id='re'>refresh</button></a>";	}

//함수 실행
calcDate(100);
calcDate(200);
calcDate(300);
calcDate(367);

//날짜 계산 함수(다음날 부터 1일)
function calcDate(number){
    var futureMilli = startMilli + (calcDay * number); //입력받은 날짜 만큼 지난 날의 밀리초
    var dDay = Math.round((futureMilli - todayMilli) / calcDay + 1);
    if(number == 365){  // 1주년일 경우 시작일에 년도만 더해줌
        year = startDay.getFullYear() + 1;
        month = startDay.getMonth() + 1;
        day = startDay.getDate() - 2;
        
    }else{
        var futureDate = new Date(futureMilli);
        year = futureDate.getFullYear();
        month = futureDate.getMonth() + 1;
        day = futureDate.getDate() - 1;
    }
	
	 var dDay = dDay - 1;
    var day = day + 1;
	if (month < 10) { month = "0"+month;}
	if (day < 10) { day = "0"+day; }
    document.querySelector(".days" + number).innerHTML = "&nbsp;"+number + "일 : ";      // 남은 d-day결과 표시
    document.querySelector("#dday" + number).innerHTML = "&nbsp;&nbsp;"+dDay + "일 남음<br>&nbsp;&nbsp;" + "(" +year + "-" + month + "-" + day + ")";      // 남은 d-day결과 표시
    document.querySelector("#qna").innerHTML = "<p style='font-size: small;'>※ 1주년은 367일째로 계산됩니다</p>";
   

   // 해당 날짜가 지났다면 지났다고 표출
	if (dDay < 0) { document.querySelector("#dday" + number).innerHTML = "&nbsp;지났습니다!<br>&nbsp;&nbsp;" + "(" +year + "-" + month + "-" + day + ")";
	document.querySelector(".days" + number).innerHTML = "&nbsp;<del>"+number + "일</del> : "; }
	if (dDay === 0){document.querySelector("#dday" + number).innerHTML = "&nbsp;<b style='color:#e84393'>오늘입니다!<br>&nbsp;&nbsp;" + "(" +year + "-" + month + "-" + day + ")</b>";
	document.querySelector(".days" + number).innerHTML = "&nbsp;<b style='color:#e84393'>"+number + "일 : </b>"; }

  

  

}