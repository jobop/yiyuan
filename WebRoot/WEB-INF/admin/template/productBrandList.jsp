<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page session="false" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
	<title>1元拍购_管理中心</title>
	<link href="/admin_css/global.css"  rel="stylesheet" type="text/css"/>
	<link href="/admin_css/admin_style.css"  rel="stylesheet" type="text/css"/>
  </head>
  
  <body>
  <div class="bk10"></div>
  
  <div class="table-list lr10">
 <table width="100%" cellspacing="0">
    <thead>
            <tr>
            <th width="100px;">品牌ID</th>
            <th align="center">品牌名称</th>
            <th width="100px;" align="center">所属分类</th>
			<th align="center">管理操作</th>
            </tr>
    </thead>
    <tbody>
    <s:iterator value="productBrandList" var="productType" status="st">
		<tr align="center">
		<td align="center">${productType.typeId }</td>
		<td align="center">${productType.typeName }</td>
		<td align="center">
		<s:iterator value="productTypeList" var="productTypes">
			<c:if test="${productType.ftypeId==productTypes.typeId}">
				${productTypes.typeName }
			</c:if>
		</s:iterator>
		</td>
		<td class="center ">
		<a href="/admin_back/toAddProductBrand.action?id=${productType.typeId  }"><input type="submit" class="button" value="修改" /></a>
		</td>
	</tr>
	</s:iterator>
    </tbody>
  </table>
</div>
  </body>
</html>
