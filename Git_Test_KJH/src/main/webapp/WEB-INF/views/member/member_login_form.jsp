<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="${pageContext.request.contextPath}/resources/css/default.css" rel="stylesheet" type="text/css">
</head>
<body>
	<header>
		<jsp:include page="/WEB-INF/views/inc/top.jsp"></jsp:include>
	</header>
	<article>
		<h1>로그인</h1>
		<div id="loginForm">
			<form action="MemberLogin" method="post">
				<input type="text" name="id" placeholder="아이디" required><br>
				<input type="password" name="passwd" placeholder="패스워드" required><br>
				<%-- checkbox 생성 시 value값 지정하지 않으면 체크시 "on", 체크하지않으면 "null" --%>
				<input type="checkbox" name="rememberId"> 아이디 기억하기<br>
				<input type="submit" value="로그인">
			</form>
		</div>
	</article>
	<footer>
		<jsp:include page="/WEB-INF/views/inc/bottom.jsp"></jsp:include>
	</footer>
</body>
</html>