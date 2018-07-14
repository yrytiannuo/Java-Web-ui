$(document).ready(function(){
	$('#noe_submit').click(function(){
		$.ajax({
			type: "GET",
			url: "http://172.24.194.233:8089/getSiteById",
			dataType: "json",
			data: {
				id: 1,
				userid: $("input[name='name']").val(),//获取用户id
				userpassword: $("input[name='password']").val()//获取用户密码
			},
			success: function(data,status){
				// window.location.href = "../index.html?userid="+userid;
				// $.cookies.set("userid",userid);
				$.cookie('userid',$("input[name='name']").val(),{expires:30,path:'/'});
				$.cookie('userpassword',$("input[name='password']").val(),{expires:30,path:'/'});
				window.localStorage.setItem("userid",$("input[name='name']").val());
				window.localStorage.setItem("token",data.data.token);
			},
			error: function(){
				alert("发生错误！" + jqXHR.status);
			}
		});
		$.ajax({
			type: "GET",
			url: "userinfo",
			dataType: "json",
			data: {
				token: window.localStorage.getItem("token")
			},
			success: function(data,status){
				// window.location.href = "../index.html?userid="+userid;
				// $.cookies.set("userid",userid);
				window.localStorage.setItem("userinfo",data.data);
				document.location.href = "../index.html";
			},
			error: function(){
				alert("发生错误！" + jqXHR.status);
			}
		});
	});
});