// 아이디, 비밀번호 입력값 체크 결과(true = 적합/false = 부적합)를 저장할 변수 선언
// => 여러 함수에서 접근해야하므로 전역변수로 선언
let checkIdResult = false;
let checkPasswdResult = false;
let checkPasswd2Result = false;

function checkId() {
	window.open("check_id.jsp", "id_check", "width=400, height=400");
}

function checkIdLength() {
	let id = $("#id").val();
	console.log(id + ", " + id.length);
		
	if(id.length >= 4 && id.length <= 8) { // 적합
// 		document.querySelector("#checkIdResult").innerText = "사용 가능";
// 		document.querySelector("#checkIdResult").style.color = "GREEN";
		$("#checkIdResult").text("사용 가능22");
		$("#checkIdResult").css("color", "green");
			
		// 체크 결과 저장을 위해 checkIdResult 변수에 true 저장
		checkIdResult = true;
	} else { // 부적합
// 		document.querySelector("#checkIdResult").innerText = "4~8글자만 사용 가능합니다";
// 		document.querySelector("#checkIdResult").style.color = "RED";
		$("#checkIdResult").text("4~8글자만 사용 가능합니다22");
		$("#checkIdResult").css("color", "RED");
			
		// 체크 결과 저장을 위해 checkIdResult 변수에 false 저장
		checkIdResult = false;
	}
}
	// -----------------------------------------------------------------
$(function() {
		$("#passwd").keyup(function() {
			let passwd = $("#passwd").val();
			
			if(passwd.length >= 8 && passwd.length <= 16) { // 적합
// 				document.querySelector("#checkPasswdResult").innerText = "사용 가능한 패스워드";
// 				document.querySelector("#checkPasswdResult").style.color = "BLUE";
				$("#checkPasswdResult").text("사용 가능한 패스워드");
				$("#checkPasswdResult").css("color", "BLUE");
				
				// 체크 결과 저장을 위해 checkPasswdResult 변수에 true 저장
				checkPasswdResult = true;
			} else { // 부적합
// 				document.querySelector("#checkPasswdResult").innerText = "사용 불가능한 패스워드";
// 				document.querySelector("#checkPasswdResult").style.color = "RED";
				$("#checkPasswdResult").text("사용 불가능한 패스워드");
				$("#checkPasswdResult").css("color", "RED");
				
				// 체크 결과 저장을 위해 checkPasswdResult 변수에 false 저장
				checkPasswdResult = false;
				
			}
			
			// 비밀번호가 변경되면 비밀번호확인 작업을 다시 수행해야한다!
			// 단, 비밀번호확인을 수행하는 함수가 익명함수일 때 호출이 불가능하므로
			// 익명함수 호출 대신 비밀번호확인 항목에 대한 keyup 이벤트를 강제로 발생시킬 수 있다!
			// => 이벤트 트리거(trigger)를 활용하여 특정 요소에 이벤트 발생을 강제로 제어 가능
			$("#passwd2").trigger("keyup");
			
		});
		// ----------------------------------------------
		$("#passwd2").keyup(function() {
			let passwd = $("#passwd").val();
			let passwd2 = $("#passwd2").val();
			
			if(passwd == passwd2) { // 적합
				$("#checkPasswd2Result").text("비밀번호 일치");
				$("#checkPasswd2Result").css("color", "BLUE");
				
				// 체크 결과 저장을 위해 checkPasswdResult 변수에 true 저장
				checkPasswdResult = true;
			} else { // 부적합
				$("#checkPasswd2Result").text("비밀번호 불일치");
				$("#checkPasswd2Result").css("color", "RED");
				
				// 체크 결과 저장을 위해 checkPasswdResult 변수에 false 저장
				checkPasswd2Result = false;
			}
		});
		// --------------------------------------------------------------
		$("#check_all").click(function() {
			/*
			each() 메서드
			- 지정한 대상(요소 또는 객체)에 대한 반복을 수행하는 메서드
			- 지정 가능한 대상 : 선택자, 객체(배열 등)
			- 기본 문법 : 1) $("선택자").each(function(index, item) {});
						  2) $.each(객체, function(index, item) {});
			  => index : 대상의 인덱스,  item(또는 elem) : 대상 요소(객체)
			*/
			// 전체선택을 제외한 나머지 체크박스에 대한 반복 수행
			$("input[name=hobby]").each(function(index, item) {
// 				console.log(index);
// 				console.log(item);
				// item 파라미터에 해당 체크박스 요소 태그가 객체로 전달됨
				// 따라서, jQuery 문법으로 해당 객체에 접근하여 작업 수행 가능
				// id 선택자 check_all 의 체크 상태에 따라 나머지 체크박스 체크 상태 변경
// 				if($("#check_all").prop("checked")) {
// 					$(item).prop("checked", true);
// 				} else {
// 					$(item).prop("checked", false);
// 				}
				
				// 전체선택 체크박스 체크상태값을 각 체크박스 체크상태값으로 설정
				$(item).prop("checked", $("#check_all").prop("checked"));
		});
		// ------------
		// 만약, 선택자 요소 없이 자바스크립트 객체만으로 jQuery 의 each() 메서드 호출 시
		let arr = ["홍길동", "이순신", "강감찬"]; // 배열 생성
			
		// 일반 자바스크립트 for 문
		for(let i = 0; i < arr.length; i++) {
			console.log("일반 for문 : " + arr[i]);
		}
			
		// 향상된 for문(for...of문)
		for(let name of arr) {
			console.log("향상된 for문 : " + name);
		}
		
		// jQuery 의 each() 메서드
		$.each(arr, function(index, item) { // arr 객체(배열)에 대해 반복 수행
			console.log("jQuery each() 메서드 : " + index + ", " + item);
		});
		
	});
		
	$("#emailDomain").change(function() {
		$("#email2").val($("#emailDomain").val());
//		let select = $("#emailDomain").val();
//		let email2 = $("#email2");
//		
//		if(select == "") {
//			email2.prop("readonly", false);
//			email2.val(select);
//			email2.css("background", "");
//			email2.focus();
//		}else {
//			email2.val(select);
//			email2.prop("readonly", true);
//			email2.css("background", "#eee");
//		}
	});
	
	// -----------------------------------------------------------
	// 이미지 파일 업로드 시 해당 이미지 미리보기 표시
	// => change 이벤트 - 익명함수 파라미터에 이벤트 객체를 전달받도록 변수 event 선언
	$("#profile_img").change(function(event) {
		// 업로드되는 이미지 파일 정보 가져오기
		let file = event.target.files[0];
		
		// 자바스크립트의 FileReader 객체 생성(파일 읽기용)
		let reader = new FileReader();
		
		// FileReader 객체 로딩 완료 시 익명함수 핸들링 - 익명함수 파라미터로 event 객체 받아오기
		reader.onload = function(event2) {
			// 파일 로딩이 완료되면 img 태그에 업로드 파일 이미지 미리보기로 표시
			// => 익명함수 파라미터로 전달받은 event2 변수에 해당 업로드 파일 정보가 전달되므로
			//    해당 객체의 target.result 속성으로 파일에 접근 가능
			$("#preview_profile").attr("src", event2.target.result);
		}
		
		// FileReader 객체를 사용하여 전달된 파일 정보를 통해 파일 읽어오기
		reader.readAsDataURL(file);
		
	});
	// -------------------------------------------------------
	// 가입 버튼의 click 이벤트 핸들링	
//	$("#btnSubmit").click(function(){
//		// 회원가입 폼의 다른 데이터들 입력값 체크는 생략
//		// 이메일만 체크
//		let email1 = $("#email1").val();
//		let email2 = $("#email2").val();
//		console.log(email1 + ", " + email2);
//		
//		if(email1 == "") {
//			alert("이메일 입력 필수!");
//			$("#email1").focus();
//			return;
//		} else if(email2 == "") {
//			alert("이메일 입력 필수!");
//			$("#email2").focus();
//			return;
//		}
//		
//		// email1, email2 입력 완료 시
//		// 폼 내에 <input type="hidden"> 태그를 활용하여 email 파라미터 설정
//		// => 이 때, 해당 value 속성값은 email1 과 email2를 결합한 값 사용 (email1 + "@" + email2)
//		// => form 태그 내에 <input> 태그 추가 : append() 또는 prepend() 메서드 활용
//		// 대상 요소 내의 첫번째 자리 추가 : prepend / 마지막 : append
//		$("form").prepend("<input type='hidden' name='email' value='" + email1 + "@" + email2 + "'>");
//		
//		
//		$("form").submit(); //submit 동작 수행
//		
//	});

	$("form").on("submit", function(){
		// 회원가입 폼의 다른 데이터들 입력값 체크는 생략
		// 이메일만 체크
		let email1 = $("#email1").val();
		let email2 = $("#email2").val();
		console.log(email1 + ", " + email2);
		
		if(email1 == "") {
			alert("이메일 입력 필수!");
			$("#email1").focus();
			return false; // submit 동작 취소
		} else if(email2 == "") {
			alert("이메일 입력 필수!");
			$("#email2").focus();
			return false; // submit 동작 취소
		}
		
		// email1, email2 입력 완료 시
		// 폼 내에 <input type="hidden"> 태그를 활용하여 email 파라미터 설정
		// => 이 때, 해당 value 속성값은 email1 과 email2를 결합한 값 사용 (email1 + "@" + email2)
		// => form 태그 내에 <input> 태그 추가 : append() 또는 prepend() 메서드 활용
		// 대상 요소 내의 첫번째 자리 추가 : prepend / 마지막 : append
		$("form").prepend("<input type='hidden' name='email' value='" + email1 + "@" + email2 + "'>");
		
		// true 값을 리턴하거나 생략 시 자동으로 submit 동작 수행됨		
	});
	
		
}); // document ready 이벤트 끝