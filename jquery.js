
$(document).ready(function(){
	$(".fa-bars").click(function(){
		$(".menu").animate({left:"270px"},600);
		$(".text1").animate({left:"770px"},600);
		$(".fa-close").css("visibilty", "visible");
		$(".fa-close").animate({left: "270px"},600);
		$(".fa-bars").css("visibilty", "visible");
	});
	
});	

$(document).ready(function(){
	$(".fa-close").click(function(){
		$(".menu").animate({left:"270px"},700);
		$(".fa-bars").animate({left:"0px"},600);
		$(".text1").animate({left:"685px"},600);
		$(".fa-close").css("visibilty", "hidden");
		$(".fa-close").animate({left: "0px"},600);
		$(".fa-bars").css("visibilty", "visible");
	});
	
});	