<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<style type="text/css">
	.categoryName {
		width: 300px;
	}
	td {
		text-align: center;
	}
	#categoryUpdateComplete {
		display: none;
	}
</style>
</head>
<body>
<div>
<table border="1" cellpadding="0" cellspacing="0">
	<form action="/admin/categoryInsert" method="post">
		<tr>
			<td><label style="width:50px;" for="category">등록 </label></td>
			<td colspan="2"><input id="inputBox" name="name" type="text" placeholder="카테고리 등록"></td>
			<td id="categoryUpdateComplete"><input type="button" value="완료"></td>
		</tr>
	</form>
		<tr>
			<td colspan="3" align="center">카테고리 목록</td>
		</tr>
		<c:if test="${list !=null }">
			<c:forEach items="${list }" var="list">
				<tr data-value="${list.id }" id="${list.id }">
					<td class="categoryName">${list.name }</td>
					<td class="update"><input type="button" value="수정"></td>
					<td class="delete"><input type="button" value="삭제"></td>
				</tr>
			</c:forEach>
		</c:if>
</table>
</div>
</body>
<script src="/resources/js/admin.js"></script>
</html>