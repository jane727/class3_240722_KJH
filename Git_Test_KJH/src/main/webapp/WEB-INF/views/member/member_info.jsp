<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%-- JSTL에서 다양한 함수를 제공하는 functions 라이브러리 추가 --%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link href="${pageContext.request.contextPath}/resources/css/default.css" rel="stylesheet" type="text/css">
<script src="${pageContext.request.contextPath}/resources/js/jquery-3.7.1.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/member_join_form.js"></script>
</head>
<body>
	<header>
		<!-- 기본 메뉴 표시 영역 - inc/top.jsp 페이지 삽입 -->
		<jsp:include page="/WEB-INF/views/inc/top.jsp"></jsp:include>
	</header>
	<article>
		<h1>회원 상세정보</h1>
		<form action="MemberModify" name="joinForm" method="post">
			<table border="1">
				<tr>
					<th>이름</th>
					<td><input type="text" name="name" value="${member.name}"
						pattern="^[가-힣]{2,6}$" title="한글 2~6글자"></td>
				</tr>
				<tr>
					<th>ID</th>
					<td>
						<input type="text" name="id" id="id" value="${member.id}" onblur="checkIdLength()" disabled>
						<input type="button" value="ID중복확인" onclick="checkId()">
						<div id="checkIdResult"></div>
					</td>
				</tr>
				<tr>
					<th>기존 비밀번호</th>
					<td>
						<input type="password" name="oldPasswd" required>
					</td>
				</tr>
				<%-- 새 비밀번호와 새 비밀번호 확인은 비밀번호 변경 시에만 입력하도록 필수항목에서 제외 --%>
				<tr>
					<th>새 비밀번호</th>
					<td>
						<input type="password" id="passwd" name="passwd" placeholder="8 ~ 16글자 사이 입력">
						(변경시에만)
						<div id="checkPasswdResult"></div>
					</td>
				</tr>
				<tr>
					<th>새 비밀번호확인</th>
					<td>
						<input type="password" id="passwd2">
						<div id="checkPasswd2Result"></div>
					</td>
				</tr>
				<tr>
					<th>주소</th>
					<td>
						<input type="text" id="postcode" name="post_code" value="${member.post_code}" size="6" readonly placeholder="우편번호">
						<input type="button" value="주소검색" onclick="search_address()"><br>
						<input type="text" id="address1" name="address1" value="${member.address1}" size="25" readonly placeholder="기본주소"><br>
						<input type="text" id="address2" name="address2" value="${member.address2}" size="25" placeholder="상세주소">
					</td>
				</tr>
				<tr>
					<th>E-Mail</th>
					<td>
						<%-- 이메일 주소(email) 을 분리(기준문자열: @) 후 각각 표시 --%>
						<%-- JSTL - functions 라이브러리의 split() 함수 필요 --%>
						<%-- 1) 이메일주소를 분리하여 변수에 저장 --%>
						<%--    기본문법: \${fn:split(원본문자열, 기준문자열)} --%>
						<c:set var="arrEmail" value="${fn:split(member.email,'@')}" />
						<%-- 2) 분리된 각 배열의 문자열을 출력 (${배열명[인덱스]})--%>
						<input type="text" size="10" id="email1" value="${arrEmail[0]}" name="email1">@<input type="text" size="10"  value="${arrEmail[1]}" id="email2" name="email2">
						<select id="emailDomain">
							<option value="">직접입력</option>
							<option value="naver.com">naver.com</option>
							<option value="nate.com">nate.com</option>
							<option value="gmail.com">gmail.com</option>
						</select>
					</td>
				</tr>
				<tr>
					<th>직업</th>
					<td>
						<select name="job">
							<%-- member.job 값에 따라 직업 항목 셀렉트박스의 option 태그 항목 선택(selected) --%>
							<%-- c:if 태그 사용ㅎ아여 직업이 XXX 일 경우 selected 속성 추가 --%>
							<option value="">항목을 선택하세요</option>
							<option value="개발자" <c:if test="${member.job eq '개발자' }">selected</c:if>>개발자</option>
							<option value="DB엔지니어" <c:if test="${member.job eq 'DB엔지니어' }">selected</c:if>>DB엔지니어</option>
							<option value="관리자" <c:if test="${member.job eq '관리자' }">selected</c:if>>관리자</option>
						</select>
					</td>
				</tr>
				<tr>
					<th>성별</th>
					<td>
						<input type="radio" name="gender" value="남" required <c:if test="${member.gender eq '남' }">checked</c:if>>남
						<input type="radio" name="gender" value="여" required <c:if test="${member.gender eq '여' }">checked</c:if>>여
					</td>
				</tr>
				<tr>
					<th>취미</th>
					<td>
						<%-- member.hobby 값에 해당 취미 포함 여부를 판별하여 해당 항목 체크(checked) --%>
						<%-- split() 함수를 통해 분리 후 판별하거나 contains() 함수를 통해 분리 없이 문자열 탐색 --%>
						<%-- => ${fn:contains(원본문자열, 탐색할문자열)} --%>
						<input type="checkbox" id="hobby1" name="hobby" value="여행" <c:if test="${fn:contains(member.hobby, '여행')}">checked</c:if>><label for="hobby1">여행</label>
						<input type="checkbox" id="hobby2" name="hobby" value="독서" <c:if test="${fn:contains(member.hobby, '독서')}">checked</c:if>><label for="hobby2">독서</label>
						<input type="checkbox" id="hobby3" name="hobby" value="게임" <c:if test="${fn:contains(member.hobby, '게임')}">checked</c:if>><label for="hobby3">게임</label>
						<input type="checkbox" id="check_all"><label for="check_all">전체선택</label>
					</td>
				</tr>
				<tr>
					<th>가입동기</th>
					<td>
						<textarea rows="5" cols="40" id="motivation" name="motivation">${member.motivation}</textarea>
					</td>
				</tr>
				<tr>
					<th>프로필 이미지</th>
					<td>
						<img src="${pageContext.request.contextPath}/resources/images/profile_default.png" id="preview_profile"><br>
						<input type="file" name="profile_img" id="profile_img">
					</td>
				</tr>
				<tr>
					<td colspan="2" align="center">
						<input type="submit" value="정보수정" id="btnSubmit">
						<input type="button" value="돌아가기" onclick="history.back()">
						<input type="button" value="회원탈퇴" onclick="location.href='MemberWithdraw'">
					</td>
				</tr>
			</table>
		</form>
	</article>
	<footer>
		<!-- 회사 소개 영역 -->
		<jsp:include page="/WEB-INF/views/inc/bottom.jsp"></jsp:include>
	</footer>
</body>
</html>