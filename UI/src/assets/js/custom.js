$(document).ready(function(){
	jQuery(function ($) {
		$("#link").ejMenu({ width: 612 });
	});

	jQuery(function ($) {
		$("#vertical").ejMenu({
			menuType: ej.MenuType.NormalMenu,
			orientation: ej.Orientation.Vertical
		});
	});

	var contentHeight = window.innerHeight;
	$(".verticalMenu").css({'min-height': contentHeight+"px" });
	var contentAreaHeight = $(".content-area").height();
	if(contentAreaHeight < contentHeight){
		$(".verticalMenu").css({'top': "-60px" });
	}
	else{
		$(".verticalMenu").css({'top': "" });
	}

	//$("ul.inner-list").css({'min-height': contentHeight+"px" });
	$(".e-dialog").attr('style','background-color: #000; opacity:1; z-index:1000;');

	$(function () {
        $("#treeView").ejTreeView();
		$("#treeView2").ejTreeView();
		$("#treeView3").ejTreeView();
	});
	$( '.treeview-heading-list:hover' ).each(function () {
		this.style.setProperty( 'background', 'transparent', 'important' );
	});

	$(function () {
		$("#button").ejButton({ click: "openDialog" });
		$("#dialog").ejDialog({ showOnInit: false, backgroundScroll: false, enableModal: true, enableAnimation: true });
	});


	$( '*' ).each(function () {
		var color = $(this).css("color");
		var background = $(this).css("background");

		if (color == "#ff4081") {
            $(this).css("color", "rgb(83, 178, 226)");
        }
		if (background == "#ff4081") {
            $(this).css("background", "rgb(83, 178, 226)");
        }
	});


});
function openDialog() {
	$("#dialog").ejDialog("open");
}


 $('.header-item').hover(function(){
	$(this).addClass('header-icon');
	}, function(){
	$(this).removeClass('header-icon');
});
	//$( "span.e-focus" ).next( ".dropdown-label" ).css( "color", "rgb(83, 178, 226)" );


//$(function () {
  //  $('#formId').submit(function () {
		//if(!$('label').hasClass("e-error")) {
	//		alertFunction();
		//}
    //});
//});

function alertFunction() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


if($(".e-control").hasClass("e-error")){
	$(".dropdown-label").css("color", "#f44336", "important");
	$(".e-error").css("color", "#f44336", "important");
}
else{
	$(".dropdown-label").css("color", "rgba(0, 0, 0, 0.537)");
}
//
// $(".verticalMenu > #vertical > li > .treeview-heading-list >treeView > li > a").mouseover(function (e) {
// 	console.log(e.target,"");
//     $(".e-plus").toggleClass("e-minus");
// });

var classname  = document.getElementsByClassName("dropdown-custom-icon");
var customSubIcon  = document.getElementsByClassName("custom-sub-icon");
customSubIcon[0].setAttribute("onmouseleave",'upIcon(this)')


var nodeIconEle = []
for (var i = 0; i < classname.length; i++) {
    classname[i].setAttribute("onmouseover", "downIcon(this)");
}

function downIcon(e){
	 let nodes = e.childNodes
	 nodeIconEle.push(nodes[2])
	 nodes[2].className = "fa fa-angle-down"
}
function upIcon(e){

	let nodes = e.childNodes
	nodeIconEle.push($(nodes[0]).find("i")[1])
	$(nodes[0]).find("i")[1].className = "fa fa-angle-right right-icon e-icon e-plus"
}

$('#treeView2').on('mouseleave',function(){
	for(var i=0;i<nodeIconEle.length;i++){
		nodeIconEle[i].className = "fa fa-angle-right right-icon e-icon e-plus"
	}
})
/*$("input").on("focusout",function(e){
	$("label[for='"+e.target.id+"']").css({color:"#f44336"});
});*/