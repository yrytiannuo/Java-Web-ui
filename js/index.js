$(document).ready(function(){
	$(".noe_aside .item").click(function(event){
		var text = event.target.innerText;
		var index = $(".noe_aside .item").index(this);
		$(".noe_menu .noe_item").text(text);
		$("#context" + index).show().siblings().hide();
	});

	// 欢迎消息框
	$('.message .close')
	  .on('click', function() {
	    $(this)
	      .closest('.message')
	      .transition('fade');
	});

	// card hover
	$('.special.cards .image').dimmer({
  		on: 'hover'
	});

	//card 弹出消息框
	$('.noe_card .ui.card')
	  .popup({
	    popup : $('.ui.popup'),
	    on    : 'hover'
	  })
	;

	//点击弹出模态框
	//learn more模态框
	$('.ui.cards .center .ui.button').on('click',function(){
		$('.ui.modal.noe_modal1').modal('show');
	});
	//信息填写 模态框
	$('.ui.animated.button').on('click',function(){
		$('.ui.modal.noe_modal2').modal('show');
	});
	//我要离职调职 模态框
	$('.noe_leave_job').on('click',function(){
		$('.ui.modal.noe_modal3').modal('show');
		$('.noe_modal3 .header')[0].innerHTML = "离职申请";
	});
	$('.noe_promote_job').on('click',function(){
		$('.ui.modal.noe_modal3').modal('show');
		$('.noe_modal3 .header')[0].innerHTML = "调职申请";
	});





















});