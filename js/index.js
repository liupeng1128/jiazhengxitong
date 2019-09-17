$(function(){
	$("ul.left_nav").on("click","li",function (){
		var url = $(this).attr("url");

		$("#wrapper").load(url);
	});
	//模拟点击
	$("ul.left_nav>li:first-child").trigger("click");
});
