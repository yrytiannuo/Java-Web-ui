$(document).ready(function(){
	/*//接受登陆界面存在localStorge的参数
	var userinfo = window.localStorage.getItem("userinfo");//data.data了
	var userinfoarr = [];
	for(let key in userinfo){
		userinfoarr.push(userinfo[key]);
	}
	//修改一下界面信息
		//名字
		for(var i=0;i<$('.userinfo_name').length;i++){
			$('.userinfo_name')[i].innerHTML = userinfo.name;
		}
		//个人信息
		for(var i=0;i<$('.noe_personal_information span').length;i++){
			$('.noe_personal_information span')[i].innerHTML = userinfoarr[i+1];
		}
		//社交信息
		$('.noe_social_information:first-child p')[i].innerHTML = userinfo.外在;
		$('.noe_social_information:last-child p')[i].innerHTML = userinfo.内在;
		//工作信息
		for(var i=0;i<$('.noe_working_information').length;i++){
			$('.noe_working_information')[0].innerHTML = userinfo;
			$('.noe_working_information')[1].innerHTML = userinfo;
			$('.noe_working_information')[2].innerHTML = userinfo;
			$('.noe_working_information')[3].innerHTML = userinfo;
		}*/

	//登出
	// $('.noe_menu .right.menu .ui.item').on('click',function(){
	// 	document.location.href = "E:/git/SMF/login.html";
	// });


	/*//修改信息提交
	$('.noe_revise_information').on("click",function(){
		$.ajax({
			type: "POST",
			url: "http://172.24.194.233:8089/getSiteById",
			dataType: "json",
			data： {
				token: window.localStorage.getItem("token");
				username: $('.noe_modal2 input[name="username"]').val(),
				education: $('.noe_modal2 input[name="education"]').val(),
				address: $('.noe_modal2 input[name="address"]').val(),
				sex: $('.noe_modal2 input[name="sex"]').val(),
				profession: $('.noe_modal2 input[name="profession"]').val(),
				country: $('.noe_modal2 input[name="country"]').val(),
				outer_info: $('.noe_modal2 input[name="outer_info"]').val(),
				inner_info: $('.noe_modal2 input[name="inner_info"]').val()
			},
			success: function(data,status){
				alert('下次登陆信息会被修改！');
			},
			error: function(){
				alert("发生错误！" + jqXHR.status);
			}
		});
	});*/

	/*//离职升职申请提交
	$('.noe_modal3 .right.button').on("click",function(){
		$.ajax({
			type: "POST",
			url: "http://172.24.194.233:8089/getSiteById",
			dataType: "json",
			data: {
				token: window.localStorage.getItem("token"),
				letter_resignation: $('.noe_modal3 textarea').val()，
				部门id:???
			},
			success: function(data,status){
				alert("发送成功！");
			},
			error: function(){
				alert("发生错误！" + jqXHR.status);
			}
		});
	});*/


	/*//learn more
	$('.ui.cards .center .ui.button').on('click',function(){
		// console.log($(this).closest('.card').find('.header')[0].innerHTML);
		// console.log($(this).closest('.card').find('.date')[0].innerHTML);
		// console.log($(this).closest('.card').find('.extra a')[0].innerText);
		// $('.noe_modal1 .description').empty();
		// var datadata = "hello world!";
		// var $ele = $("<div class='ui header'>" + datadata + "</div>");
		// $('.noe_modal1 .description').append($ele);
		// var $ele = $("<p>" + datadata + "</p>");
		// $('.noe_modal1 .description').append($ele);

		$.ajax({
			type: "GET",
			url: "http://172.24.194.233:8089/getSiteById",
			dataType: "json",
			data: {
				token: window.localStorage.getItem("token"),
				username: $(this).closest('.card').find('.header')[0].innerHTML,
				userdate: $(this).closest('.card').find('.date')[0].innerHTML,
				userstatus: $(this).closest('.card').find('.extra a')[0].innerHTML
			},
			success: function(data,status){
				$('.noe_modal1 .description').empty();
				var $ele = $("<div class='ui header'>" + data.data + "</div>");
				$('.noe_modal1 .description').append($ele);
				$ele = $("<p>" + data.data + "</p>");
				$('.noe_modal1 .description').append($ele);
			},
			error: function(){
				alert("发生错误！" + jqXHR.status);
			}

		});
	});*/

	/*//动态添加部门人员
	$('#context0 .ui.tab.segment[data-tab="second"] .ui.top.attached.menu .item[data-tab="second/b"]').on('click',function(){
		//测试
		var $ele = $("<div class='card'><div class='blurring dimmable image'><div class='ui dimmer transition hidden'><div class='content'><div class='center'><div class='ui inverted button'>Learn More</div></div></div></div><img src='http://www.semantic-ui.cn/images/avatar/large/elliot.jpg'></div><div class='content'><a class='header'>叶老板</a><div class='meta'><span class='date'>Joined in Sep 2014</span></div></div><div class='extra content'><a><i class='users icon'></i>总经理</a></div></div>");
		$('#context0 .ui.tab.segment[data-tab="second"] .ui.bottom.attached[data-tab="second/b"] .cards').append($ele);
		});
		// $.ajax({
		// 	type: "GET",
		// 	url: "http://172.24.194.233:8089/获取部门人员信息",
		// 	dataType: "json",
		// 	data: {
		// 		token: window.localStorage.getItem("token")
		// 	},
		// 	success: function(data,status){
		// 		var $ele = $("<div class='card'><div class='blurring dimmable image'><div class='ui dimmer transition hidden'><div class='content'><div class='center'><div class='ui inverted button'>Learn More</div></div></div></div><img src='http://www.semantic-ui.cn/images/avatar/large/elliot.jpg'></div><div class='content'><a class='header'>叶老板</a><div class='meta'><span class='date'>Joined in Sep 2014</span></div></div><div class='extra content'><a><i class='users icon'></i>总经理</a></div></div>");
		// 		$('#context0 .ui.tab.segment[data-tab="second"] .ui.bottom.attached[data-tab="second/b"]').empty();
		// 		for(var i=0;i<data.data.length;i++){
		// 			$('#context0 .ui.tab.segment[data-tab="second"] .ui.bottom.attached[data-tab="second/b"]').append($ele);
		// 		}
		// 	},
		// 	error: function(){
		// 		alert("发生错误！" + jqXHR.status);
		// 	}
		// });
	});*/

	//第一类功能结束

	//第二类功能开始
	/*$('.noe_aside .item:nth-child(3)').on('click',function(){
		$.ajax({
			type: "GET",
			url: "http://172.24.194.233:8089/getSiteById",
			dataType: "json",
			data: {
				token: window.localStorage.getItem("token")
			},
			success: function(data,status){
				var text = event.target.innerText;
				var index = $(".noe_aside .item").index(this);
				$(".noe_menu .noe_item").text(text);
				$("#context" + index).show().siblings().hide();
			},
			error: function(){
				$('.noe_aside .ui.error.message').removeClass("hidden");
			}
		});
	});*/


















	/*//调试单元
		$('#context1 .ui.top.tabular .item[data-tab="second/a"]').on('click',function(){
		var $ele = $("<div class='ui floating message'><div class='label'><img src='http://www.semantic-ui.cn/images/avatar/small/elliot.jpg'></div><span>要走的路！</span><div class='noe_sections_buttons'><button class='ui orange button'>查看详情</button><button class='ui primary button'>确认</button><button class='ui button'>丢弃</button></div></div>");
		$('#context1 .ui.bottom[data-tab="second/a"]').append($ele);
	});*/
	/*//部长查看调职离职的申请
	$('.noe_sections_manage').on('click',function(){
		$.ajax({
			type: "GET",
			url: "http://172.24.194.233:8089/getSiteById",
			dataType: "json",
			data: {
				token: window.localStorage.getItem("token"),
				userid: window.localStorage.getItem("userid")
			},
			success: function(data,status){
				var count1=0,count0=0;
				$('#context1 .ui.bottom[data-tab="second/a"]').empty();
				for(var i=0;i<data.data.length;i++){
					if(data.data[i].分类 == 0){
						count0++;
						var $ele = $("<div class='ui floating message'><div class='label'><img src='" + data.data[i].userimg + "'></div><span>" + data.data[i].username + "</span><div class='noe_sections_buttons'><button class='ui orange button'>查看详情</button><button class='ui primary button'>确认</button><button class='ui button'>丢弃</button></div></div>");
						$('#context1 .ui.bottom[data-tab="second/a"]').append($ele);
					}else{
						count1++;
						var $ele = $("<div class='ui floating message'><div class='label'><img src='" + data.data[i].userimg + "'></div><span>" + data.data[i].username + "</span><div class='noe_sections_buttons'><button class='ui orange button'>查看详情</button><button class='ui primary button'>确认</button><button class='ui button'>丢弃</button></div></div>");
						$('#context1 .ui.bottom[data-tab="second/b"]').append($ele);
					}
				}
				$('.ui.tab.segment .ui.top.attached .item[data-tab="second/a"] span')[0].innerText=count0;//调职消息数量
				$('.ui.tab.segment .ui.top.attached .item[data-tab="second/b"] span')[0].innerText=count1;//离职消息数量
			}
		});
	});*/
	/*//部长选择处理调职离职申请 丢弃操作
	$('body').on('click','.ui.floating.message .noe_sections_buttons .ui.button:last-child',function(){
		$(this).closest('.ui.floating.message').remove();
		$.ajax({
				type: "POST",
				url: "http://172.24.194.233:8089/getSiteById",
				dataType: "json",
				data: {
					token: window.localStorage.getItem("token"),
					username: $(this).closest('.ui.floating.message').find('span').innerHTML
				},
				success: function(data,status){
					alert("丢弃！");
				},
				error: function(){
					alert("发生错误！" + jqXHR.status);
				}
			});
	});
	//确认操作
	$('body').on('click','.ui.floating.message .noe_sections_buttons .ui.button:nth-child(2)',function(){
		$(this).closest('.ui.floating.message').remove();
		$.ajax({
				type: "POST",
				url: "http://172.24.194.233:8089/getSiteById",
				dataType: "json",
				data: {
					token: window.localStorage.getItem("token"),
					username: $(this).closest('.ui.floating.message').find('span').innerHTML
				},
				success: function(data,status){
					alert("确认！");
				},
				error: function(){
					alert("发生错误！" + jqXHR.status);
				}
			});
	});
	//查看详情
	$('body').on('click','.ui.floating.message .noe_sections_buttons .ui.button:nth-child(1)',function(){
			//调试
			$('.ui.modal.noe_modal3').modal('show');
			$.ajax({
				type: "GET",
				url: "http://172.24.194.233:8089/getSiteById",
				dataType: "json",
				data: {
					token: window.localStorage.getItem("token"),
					username: $(this).closest('.ui.floating.message').find('span').innerHTML
				},
				success: function(data,status){
					$('.noe_modal3 .image.content textarea')[0].innerHTML = data.data.申请信;
					$('.ui.modal.noe_modal3').modal('show');
				},
				error: function(){
					alert("发生错误！" + jqXHR.status);
				}
			});
	});*/

	 /* //部长编辑部门人员
	 $('#context1 .ui.tabular .item[data-tab="third"]').on('click',function(){
	 	$.ajax({
			type: "GET",
			url: "http://172.24.194.233:8089/getSiteById",
			dataType: "json",
			data: {
				token: window.localStorage.getItem("token"),
				userid: window.localStorage.getItem("userid")
			},
			success: function(data,status){
				$('#context1 .noe_people_manage').empty();
				for(var i=0;i<data.data.length;i++){
					var $ele = $("<div class='ui floating message'><span>" + 1607020412 + "</span><span>" + 叶义武 + "</span><span>" + 男 + "</span><span>" + 设计部 + "</span><div class='buttons'><button class='ui primary button'>编辑</button><button class='ui button'>删除</button></div></div>");
					$('#context1 .noe_people_manage').append($ele);
				}
			},
			error: function(){
				alert("发生错误！" + jqXHR.status);
			}
		});
	 });
	 //部长新增人员确认后
	 $('.noe_modal5 .actions .ui.positive.right.button').on('click',function(){
	 	$.ajax({
			type: "POST",
			url: "http://172.24.194.233:8089/getSiteById",
			dataType: "json",
			data: {
				token: window.localStorage.getItem("token"),
				userid: $('.noe_modal5 input[name="userid"]').val(),
				username: $('.noe_modal5 input[name="username"]').val(),
				usersex: $('.noe_modal5 input[name="usersex"]').val(),
				usersection: $('.noe_modal5 input[name="usersection"]').val()
			},
			success: function(data,status){
				var $ele = $("<div class='ui floating message'><span>" + $('.noe_modal5 input[name="userid"]').val() + "</span><span>" + $('.noe_modal5 input[name="username"]').val() + "</span><span>" + $('.noe_modal5 input[name="usersex"]').val() + "</span><span>" + $('.noe_modal5 input[name="usersection"]').val() + "</span><div class='buttons'><button class='ui primary button'>编辑</button><button class='ui button'>删除</button></div></div>");
				$('#context1 .noe_people_manage').append($ele);
			},
			error: function(){
				alert("发生错误！" + jqXHR.status);
			}
		});
	 }); */
	 /*//部长编辑部员操作 删除
	 $('body').on('click','.noe_people_manage .ui.message .buttons button:last-child',function(){
	 	$(this).closest('.ui.floating.message').remove();
	 	$.ajax({
			type: "POST",
			url: "http://172.24.194.233:8089/getSiteById",
			dataType: "json",
			data: {
				token: window.localStorage.getItem("token"),
				userid: $('.noe_modal5 input[name="userid"]').val(),
				username: $('.noe_modal5 input[name="username"]').val(),
				usersex: $('.noe_modal5 input[name="usersex"]').val(),
				usersection: $('.noe_modal5 input[name="usersection"]').val()
			},
			success: function(data,status){
				var $ele = $("<div class='ui floating message'><span>" + $('.noe_modal5 input[name="userid"]').val() + "</span><span>" + $('.noe_modal5 input[name="username"]').val() + "</span><span>" + $('.noe_modal5 input[name="usersex"]').val() + "</span><span>" + $('.noe_modal5 input[name="usersection"]').val() + "</span><div class='buttons'><button class='ui primary button'>编辑</button><button class='ui button'>删除</button></div></div>");
				$('#context1 .noe_people_manage').append($ele);
			},
			error: function(){
				alert("发生错误！" + jqXHR.status);
			}
		});
	 });*/

	//第二类功能结束
	//第三类功能开始


	//是否有权限产看此类功能
	/*$('.noe_aside .item:nth-child(4)').on('click',function(){
		$.ajax({
			type: "GET",
			url: "http://172.24.194.233:8089/getSiteById",
			dataType: "json",
			data: {
				token: window.localStorage.getItem("token")
			},
			success: function(data,status){
				var text = event.target.innerText;
				var index = $(".noe_aside .item").index(this);
				$(".noe_menu .noe_item").text(text);
				$("#context" + index).show().siblings().hide();
			},
			error: function(){
				$('.noe_aside .ui.error.message').removeClass("hidden");
			}
		});
	});*/

	//公司财务
	/*//公司收入总额
	$('#context2 .ui.tabular.secondary.menu .item:first-child').on('click',function(){
		$.ajax({
			type: "GET",
			url: "http://172.24.194.233:8089/getSiteById",
			dataType: "json",
			data: {
				token: window.localStorage.getItem("token")
			},
			success: function(data,status){
				
			},
			error: function(){
				$('.noe_aside .ui.error.message').removeClass("hidden");
			}
		});
	});*/


































































});