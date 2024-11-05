<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div id="footer_area">
	<hr>
	<!-- img 태그를 사용하여 webapp/resources/images 디렉토리의 logo.png 파일 표시하기 -->
	<!-- 
		주의! 클라이언트가 실행하는 HTML 태그 상에서 상대 경로 루트(/) 지정 시 
		프로젝트상의 루트가 아닌 서버 상의 루트를 요청하므로 실제 요청 주소는 다음과 같다.
		http://localhost:8081/resources/images/logo.png
		=> 현재 프로젝트 컨텍스트루트가 test2 이므로 이 경로 생략 시 존재하지 않는 경로로 요청 오류 발생
		=> 프로젝트 컨텍스트루트를 실제 루트(/)로 설정ㅇ시에는 아무런 문제가 발생하지 않는다!
		-------------------------------------------------------------------------------------------
	-->
<!-- 	해결책1) /resources 앞에 컨텍스트루트 경로명을 명시 : /test2/resources/images/logo.png -->
<!-- 	<img src="/test2/resources/images/logo.png" alt="로고"> -->
<!-- 	해결책2) EL 활용하여 현재 프로젝트의 컨텍스트루트(ex. /text2)를 자동으로 입력 -->
	<img src="${pageContext.request.contextPath}/resources/images/logo.png" alt="로고">
<%-- <h1>${pageContext.request.contextPath}</h1> : /test2 --%>
</div>