define(function (require, exports){
    require('msPick');
    $("#p-data-wrap").msPickPlugin({
        type:'city',	//根据它控制input的name city/cityCode,数据等
        check:'checkbox',	//单选/多选
        maxCount:5,		//多选下的最多选择条数
        column:6,		//列数
        comData:{			//常用数据
                "nodes": 
                    [
                        {
                            "code": "石家庄",
                            "name":"石家庄"
                        },
                        {
                            "code": "唐山",
                            "name":"唐山"
                        },
                        {
                            "code": "南京",
                            "name":"南京"
                        },
                        {
                            "code": "无锡",
                            "name":"无锡"
                        }
                    ]
                },
        init:[
                {				//初始值
                    "code":"石家庄",
                    "name":"石家庄"
                },
                {
                    "code":"唐山",
                    "name":"唐山"
                }
            ]
    }).css("width","400px");
    $("#p-data-wrap1").msPickPlugin({
        type:'industry',	
        check:'checkbox',	//单选/多选
        maxCount:5,		//多选下的最多选择条数
        column:3,		//列数
        comData:{
                    "nodes": 
                        [
                            {
                                "code": "101",
                                "name": "计算机软/硬件"
                            },
                            {
                                "code": "102",
                                "name": "互联网/电子商务/IT服务"
                            },
                            {
                                "code": "103",
                                "name": "网游"
                            },
                            {
                                "code": "104",
                                "name": "通讯(设备/运营/增值服务)"
                            }
                        ]
                },
        init:[
                {
                    "code":"101",
                    "name":"计算机软/硬件"
                },
                {
                    "code":"102",
                    "name":"互联网/电子商务/IT服务"
                }
            ],
        style:{
            "foldHeadWidth":"170px",
            "msCbComponent":"265px",
            "msOkWidth":"250px"
        }
    });

    $("#p-data-wrap2").msPickPlugin({
        type:'job',	//根据它控制input的name city/cityCode,数据等
        check:'checkbox',	//单选/多选
        maxCount:5,		//多选下的最多选择条数
        column:3,
        init:[
                {
                    "code":"0101001",
                    "name":"销售代表"
                },
                {
                    "code":"0101002",
                    "name":"电话销售"
                }
            ],
        style:{
            "foldHeadWidth":"165px",
            "msCbComponent":"170px",
            "msOkWidth":"200px"
        }
    });
});