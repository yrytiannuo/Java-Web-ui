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


	/*调试单元
		$('#context1 .ui.top.tabular .item[data-tab="second/a"]').on('click',function(){
		var $ele = $("<div class='ui floating message'><div class='label'><img src='http://www.semantic-ui.cn/images/avatar/small/elliot.jpg'></div><span>要走的路！</span><div class='noe_sections_buttons'><button class='ui orange button'>查看详情</button><button class='ui primary button'>确认</button><button class='ui button'>丢弃</button></div></div>");
		$('#context1 .ui.bottom[data-tab="second/a"]').append($ele);
	});*/
	/*//部长接受调职离职的申请
	$('.noe_sections_manage').on('click',function(){
		$.ajax({
			type: "GET",
			url: "http://172.24.194.233:8089/getSiteById",
			dataType: "json",
			data: {
				token: window.localStorage.getItem("token")
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



































































	// var request = new XMLHttpRequest();
	// request.open("GET","");
	// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	// request.send();

	// request.onreadystatechange = function(){
	// 	if(request.readyState === 4){
	// 		if(request.status === 200){
	// 			var data = JSON.parse(request.responseText);
	// 			if(data.success){
	// 				.innerHTML = data.msg;
	// 			}else{
	// 				.innerHTML = "出现错误" + data.msg;
	// 			}
	// 		}else{

	// 		}

	// 	}
	// }


});