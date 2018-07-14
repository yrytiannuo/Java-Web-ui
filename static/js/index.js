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

	//card hover
	$('#context0 .ui.tab.segment[data-tab="second"] .ui.top.attached.menu .item[data-tab="second/b"]').on('click',function(){
		$('.special.cards .image').dimmer({
	  		on: 'hover'
		});
	});

	//card 弹出消息框
	$('.noe_card .ui.card')
	  .popup({
	    popup : $('.ui.popup'),
	    on    : 'hover'
	  })
	;

	//点击弹出模态框
	//learn more模态框  可以加在ajax.js的点击事件中
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
	//部长编辑部员信息 模态框
	$('body').on('click','.noe_people_manage .ui.message .buttons button:first-child',function(){
		$('.ui.modal.noe_modal4').modal('show');
	});
	$('.noe_people_manage .ui.red.button').on('click',function(){
		$('.ui.modal.noe_modal5').modal('show');
	});

	$('.shape').shape();
	// $('.shape').shape('flip up');

	//main1 饼状图
	var myChart1 = echarts.init(document.getElementById('main1'));
	var myChart2 = echarts.init(document.getElementById('main2'),'light');
	var myChart3 = echarts.init(document.getElementById('main3'));

               var option1 = {
				    tooltip: {
				        trigger: 'item',
				        formatter: "{a} <br/>{b}: {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        x: 'center',
				        data:['离职人员','未离职人员']
				    },
				    series: [
				        {
				            name:'访问来源',
				            type:'pie',
				            radius: ['50%', '70%'],
				            avoidLabelOverlap: false,
				            label: {
				                normal: {
				                    show: false,
				                    position: 'center'
				                },
				                emphasis: {
				                    show: true,
				                    textStyle: {
				                        fontSize: '30',
				                        fontWeight: 'bold'
				                    }
				                }
				            },
				            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
				            data:[
				                {value:335, name:'离职人员'},
				                {value:1310, name:'未离职人员'}
				            ]
				        }
				    ]
				};
				var option2 = {
				    tooltip: {
				        trigger: 'item',
				        formatter: "{a} <br/>{b}: {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        x: 'center',
				        data:['调职人员','未调职人员']
				    },
				    series: [
				        {
				            name:'访问来源',
				            type:'pie',
				            radius: ['50%', '70%'],
				            avoidLabelOverlap: false,
				            label: {
				                normal: {
				                    show: false,
				                    position: 'center'
				                },
				                emphasis: {
				                    show: true,
				                    textStyle: {
				                        fontSize: '30',
				                        fontWeight: 'bold'
				                    }
				                }
				            },
				            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
				            data:[
				                {value:335, name:'调职人员'},
				                {value:1310, name:'未调职人员'}
				            ]
				        }
				    ]
				};
				var option3= {
				    legend: {
				        data:['蒸发量','降水量']
				    },
				    calculable : true,
				    xAxis : [
				        {
				            type : 'category',
				            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'蒸发量',
				            type:'bar',
				            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
				            markPoint : {
				                data : [
				                    {type : 'max', name: '最大值'},
				                    {type : 'min', name: '最小值'}
				                ]
				            },
				            markLine : {
				                data : [
				                    {type : 'average', name: '平均值'}
				                ]
				            }
				        },
				        {
				            name:'降水量',
				            type:'bar',
				            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
				            markPoint : {
				                data : [
				                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
				                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
				                ]
				            },
				            markLine : {
				                data : [
				                    {type : 'average', name : '平均值'}
				                ]
				            }
				        }
				    ]
				};

        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option1);
        myChart2.setOption(option2);
        myChart3.setOption(option3);



    /*//部长查看部门报表
	$('.charts .chart1 .ui.header').on('click',function(){
		$.ajax({
				type: "GET",
				url: "http://172.24.194.233:8089/getSiteById",
				dataType: "json",
				data: {
					token: window.localStorage.getItem("token")
				},
				success: function(data1,status){
					myChart.setOption({
					    series: [{
				            data:[
				                {value:data1.num, name:'离职人员'},
				                {value:data1.num, name:'未离职人员'}
				            ]
				        }]
					});
				},
				error: function(){
					alert("发生错误！" + jqXHR.status);
				}
		});
	});
	$('.charts .chart2 .ui.header').on('click',function(){
		$.ajax({
				type: "GET",
				url: "http://172.24.194.233:8089/getSiteById",
				dataType: "json",
				data: {
					token: window.localStorage.getItem("token")
				},
				success: function(data1,status){
					myChart.setOption({
					    series: [{
				            data:[
				                {value:335, name:'调职人员'},
				                {value:1310, name:'未调职人员'}
				            ]
				        }]
					});
				},
				error: function(){
					alert("发生错误！" + jqXHR.status);
				}
		});
	});
	$('.charts .chart3 .ui.header').on('click',function(){
		$.ajax({
				type: "GET",
				url: "http://172.24.194.233:8089/getSiteById",
				dataType: "json",
				data: {
					token: window.localStorage.getItem("token")
				},
				success: function(data1,status){
					myChart.setOption({
					    series : [
				        {
				            name:'蒸发量',
				            type:'bar',
				            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
				            markPoint : {
				                data : [
				                    {type : 'max', name: '最大值'},
				                    {type : 'min', name: '最小值'}
				                ]
				            }
				        },
				        {
				            name:'降水量',
				            type:'bar',
				            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
				            markPoint : {
				                data : [
				                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
				                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
				                ]
				            }
				        }
				    ]
					});
				},
				error: function(){
					alert("发生错误！" + jqXHR.status);
				}
		});
	});*/













});