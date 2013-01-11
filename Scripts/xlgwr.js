(function ($, undefined) {

    /* function 1 */
    $(function () {
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $('.DataItem tr:gt(0)').click(function () {
            var checked = $(this).find(":checkbox").attr("checked");
            ////console.log(checked);
            if (checked == "checked") {
                $(this).removeClass();
                $(this).find(':checkbox').removeAttr("checked");

            } else {

                $('.DataItem tr:gt(0) :checkbox').removeAttr("checked");

                $('.DataItem tr:gt(0)').removeClass();

                $(this).find(':checkbox').attr("checked", "checked");

                $(this).toggleClass();

            }
            $(this).toggleClass("click");
        });
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    });


    //////////////////////////////top1
    $(function () {
        //console.log("function theme switcher 5 ");
        //theme switcher
        $(document).each(function () {
            var linktheme = $(parent.document).find('link[title="theme"]').first().attr("href");
            ////console.log(linktheme.toString());
            $('link[title="theme"]').replaceWith('<link href="' + linktheme + '" title="theme" rel="Stylesheet" type="text/css" />');
            $('iframe').each(function () {
                var thissrc = $(this).attr("src");
                $(this).attr("src", thissrc);
            });
            /////////////////////datetime
            $("input[name='送货日期'],input[name='交货日期']").datepicker({ minDate: 0, maxDate: "+6M +10D" })
        });
    });
    ////end top1

    //child top 2

    $(function () {
        //console.log("function 6 ");
        var titles = "";
        //////////////////////////////////////////////////////////////////////////
        $("input:button").button();
        $("input:submit").button();
        //$(".loadmessage").hide();
        //////////////////////////////////////////////////////////////////////////
        $("#dialog_tools,#dialog_Create,#dialog_select").dialog({
            autoOpen: false,
            zIndex: 3999,
            buttons: {
                "   确  定  ": function () {
                    $(this).dialog("close");
                    //           location.href = "/XlgwrCordiality/ProductionSchedule/CreateProcessInspection";
                    //           location = location;
                    //            window.location.reload();
                    //            location.reload();
                }
            },
            open: function (event, ui) {
                var $dialog = $(this);
                // 最大化,最小化,图标修改处
                var atext = $(".ui-dialog-titlebar-close").replaceWith('<p class="ui-xlgwr"><span class="ui-icon ui-icon-minusthick">minusthick</span> <span class="ui-icon ui-icon-extlink">extlink</span><span class="ui-icon ui-icon-closethick">close</span></p>');
                //最大化,最小化事件
                $(".ui-xlgwr>span").click(function () {
                    var spantext = $(this).text();
                    ////console.log("ok:ui-span" + spantext);
                    //最大化
                    if (spantext == "extlink") {

                        if (window.screen) {              //判断浏览器是否支持window.screen判断浏览器是否支持screen
                            var myw = screen.availWidth;   //定义一个myw，接受到当前全屏的宽
                            var myh = screen.availHeight;  //定义一个myw，接受到当前全屏的高
                            //window.moveTo(0, 0);           //把window放在左上脚
                            //window.resizeTo(myw, myh);     //把当前窗体的长宽跳转为myw和myh
                            $dialog.dialog({
                                position: ['left', 'top'],
                                width: myw * 0.8,
                                height: myh * 0.8
                            });

                        } else {
                            $dialog.dialog({
                                position: 'center',
                                width: 800,
                                height: 600
                            });
                        }

                        //最小化
                    } else if (spantext == "minusthick") {
                        $dialog.dialog({
                            position: 'top',
                            width: 210,
                            height: 210
                        });
                        //退出
                    } else if (spantext == "close") {
                        $dialog.dialog("close");
                    } else {
                        //console.log("请选择正确的图标,谢谢.");
                    }
                });
            },
            close: function () {

                //$("#dialogtools").text("加载中...");
                //$(".loadmessage").hide();
            }
        });
        //////////////////////////////////////////////////////////////////////////
        ///////////////////////////////刷选/////////////////////////////////////
        $("#btnSelect").click(function () {
            var selectKey2 = $("#intext").val().toString();
            var hrefsSelect = $("#dialogselect").attr("src-data").toString() + selectKey2.toString();
            //iframe加载src
            $("#dialogselect").attr("src", hrefsSelect);
            $("#dialog_select").dialog("option", "title", titles + productid.toString());

        });
        //////////////////////////////////////////////////////////////////////////
        /*加载要选择的对象.如：客户ＩＤ，调用该客户的相关信息//*****/
        $(".selecticon").click(function () {

            ////console.log("ok");

            // //console.log(likeText.toString());

            //获取class 的值
            var flag = $(this).attr("class"); //.hasClass('WOPID');
            ////console.log(flag.toString());

            var hrefs = "";
            var titles = "";
            //面页转换,进入的面不同
            if (flag == "selecticon PC ui-icon ui-icon-search") {
                // //console.log("flag:productid PI");
                titles = "客户资料->客户代号Like->";
                hrefs = "/XlgwrCordiality/ProductInformation/GetProductCustomerInformationById/";
            } else if (flag == "selecticon MA ui-icon ui-icon-search") {
                ////console.log("flag:productid MA");
                titles = "供应商资料->厂商代号Like->";
                hrefs = "/XlgwrCordiality/VendorsManagement/GetPageVendorsInformationByIdChild/";
            } else if (flag == "selecticon PI ui-icon ui-icon-search") {
                // //console.log("flag:productid PI");
                titles = "产品资料->产品代号Like->";
                hrefs = "/XlgwrCordiality/ProductInformation/GetSelectProductInformationById/";
            } else if (flag == "selecticon WOPID") {
                titles = "工单详细资料->工单单号Like->";
                hrefs = "/XlgwrCordiality/ProductionSchedule/EditProcessInspection/";
            } else {
                //console.log("选择错误.icon child");
            }
            //获取ID号 //获取输入input的值
            var productid = $(this).parent().find('input:eq(0)').val();

            // //console.log(productid.toString());

            if (productid == "") {
                titles += "前N条记录,请输入要筛选的数据.谢谢.";
            }
            //var productid = $(this).text().toString();
            //连接href
            var Id = hrefs + productid.toString();

            ////console.log(Id.toString());
            //打开新窗口

            var $dialotShow = $("#dialog_select").dialog();
            var $dialotiframe = $("#dialogselect");
            ////console.log("Ok");
            //.attr("datasrc").toString();
            $dialotShow.dialog("open");
            $dialotShow.dialog({
                width: 520,
                height: 320
            });
            //iframe
            $dialotiframe.attr("src-data", hrefs.toString());

            $dialotiframe.attr("src", Id.toString());

            $dialotShow.dialog("option", "title", titles + productid.toString());


        });
        //////////////////////////////////////////////////////////////////////////
    });

    ////end top 2
    /*  child end
    *************************************************************************************
    by xlgwr

    */
    /*  dialog start
    *************************************************************************************
    by xlgwr

    */


    /////top 2 start time

    $(function () {
        //console.log("function 8 ");
        //////////////////////////////////////////////////////////////////////////
        $(".each").each(function () {
            var textval = $(this).val();
            if (textval.length > 0) {
                $(this).attr("disabled", "disabled");
            }

        });
        //////////////////////////////////////////////////////////////////////////
        $(".Productnumber").dblclick(function () {
            ////console.log("ok");
            var a = $(this).val();
            if (a.length > 0) {
                var id = $(this).attr("name").toString();
                $(this).attr("disabled", "disabled");
                id = "/XlgwrCordiality/ProductionSchedule/SaveStratOrEndTimeprocessInspectionDetailsDetails/" + id.toString() + "^" + a
                // //console.log(id.toString());
                $.ajax({
                    url: id.toString(),
                    success: function (data) {
                        if (data.toString() == "保存成功") {
                            //console.log(data.toString());
                        } else {
                            //console.log(data.toString());
                            window.close();
                            window.open("#");
                        }

                    }
                });
                ///
            } else {
                //console.log("请输入正确的数量.谢谢!");
                $(this).focus();
            }


        });
        ////////////////////////////////////////////////////////////////////////
        $(".starttime").click(function () {
            var a = new Date();
            a = a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
            $(this).val(a);
            var id = $(this).attr("name").toString();
            $(this).attr("disabled", "disabled");
            id = "/XlgwrCordiality/ProductionSchedule/SaveStratOrEndTimeprocessInspectionDetailsDetails/" + id.toString() + "^" + a
            // //console.log(id.toString());
            $.ajax({
                url: id.toString(),
                success: function (data) {
                    if (data.toString() == "保存成功") {

                        //console.log(data.toString());
                    } else {
                        //console.log(data.toString());
                        window.close();
                        window.open("#");

                    }


                }
            });

        });
        ///////////////////////////////////////////////////////////////////
        //endtime
        $(".endtime").click(function () {
            var a = new Date();
            a = a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + " " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
            $(this).val(a);
            var id = $(this).attr("name").toString();
            $(this).attr("disabled", "disabled");
            id = "/XlgwrCordiality/ProductionSchedule/SaveStratOrEndTimeprocessInspectionDetailsDetails/" + id.toString() + "^" + a
            // //console.log(id.toString());
            $.ajax({
                url: id.toString(),
                success: function (data) {
                    if (data.toString() == "保存成功") {
                        //console.log(data.toString());
                    } else {
                        //console.log(data.toString());
                        window.close();
                        window.open("#");
                    }

                }
            });
            ///

        });
    });



    ///top 2 end

    //////top 3
    $(function () {
        //console.log("function 9 ");
        //////////datatime
        $("input[name='送货日期'],input[name='交货日期']").datepicker({ minDate: 0, maxDate: "+6M +10D" })

        //////////////////////////////////////////////////////////////////////////////
        var $tabs = $("#tabsdetails").tabs({
            select: function (event, ui) {
                var $iframe = $(ui.panel).find('iframe:eq(0)'); //获取当前iframe
                var iframeDataSrc = $iframe.attr("data-src"); //获取当前iframe的url
                var iframeSrc = $iframe.attr("flag"); //是否点过,0:无,1:点过
                //////////
                ////console.log("Tab:tabsdetails---" + ui.index.toString() + "---Datasrc:---" + iframeDataSrc.toString() + "---src:--" + iframeSrc.toString());
                //////////
                if (iframeSrc.toString() == "0") {
                    // //console.log("you was click once.");
                    $iframe.attr("flag", "1"); //改变点击记录
                    $iframe.attr("src", iframeDataSrc.toString()); //进入iframe的src
                }
                //////////
            }
        });
        //////////////////////////////////////////////////////////////////////////////  
        //////////////////////////////////////////////////////////////////////////

    });

    //////////end top 3

    /////////top 4

    $(function () {
        //console.log("function 10 ");
        //变量
        var titles = "";
        //////////////////////////////////////////////////////////////////////////
        $("input:button").button();
        //////////////////////////////////////////////////////////////////////////
        $("#dialog_tools,#dialog_Create,#dialog_select").dialog({
            autoOpen: false,
            zIndex: 3999,
            buttons: {
                "   确  定  ": function () {
                    $(this).dialog("close");
                    //           location.href = "/XlgwrCordiality/ProductionSchedule/CreateProcessInspection";
                    //           location = location;
                    //            window.location.reload();
                    //            location.reload();
                }
            },
            open: function (event, ui) {
                var $dialog = $(this);
                // 最大化,最小化,图标修改处
                var atext = $(".ui-dialog-titlebar-close").replaceWith('<p class="ui-xlgwr"><span class="ui-icon ui-icon-minusthick">minusthick</span> <span class="ui-icon ui-icon-extlink">extlink</span><span class="ui-icon ui-icon-closethick">close</span></p>');
                //最大化,最小化事件
                $(".ui-xlgwr>span").click(function () {
                    var spantext = $(this).text();
                    ////console.log("ok:ui-span" + spantext);
                    //最大化
                    if (spantext == "extlink") {

                        if (window.screen) { //判断浏览器是否支持window.screen判断浏览器是否支持screen
                            var myw = screen.availWidth; //定义一个myw，接受到当前全屏的宽
                            var myh = screen.availHeight; //定义一个myw，接受到当前全屏的高
                            //window.moveTo(0, 0);           //把window放在左上脚
                            //window.resizeTo(myw, myh);     //把当前窗体的长宽跳转为myw和myh
                            $dialog.dialog({
                                position: ['left', 'top'],
                                width: myw * 0.8,
                                height: myh * 0.8
                            });

                        } else {
                            $dialog.dialog({
                                position: 'center',
                                width: 800,
                                height: 600
                            });
                        }

                        //最小化
                    } else if (spantext == "minusthick") {
                        $dialog.dialog({
                            position: 'top',
                            width: 210,
                            height: 210
                        });
                        //退出
                    } else if (spantext == "close") {
                        $dialog.dialog("close");
                    } else {
                        //console.log("请选择正确的图标,谢谢.");
                    }
                });
            },
            close: function () {

                //$("#dialogtools").text("加载中...");
                //$(".loadmessage").hide();
            }
        });
        //////////////////////////////////////////////////////////////////////////
        // ***************************************新增工单单号
        //            $("#getnew").click(function () {
        //                $.ajax({
        //                    url: "/XlgwrCordiality/ProductionSchedule/SetUpWorkOrderInformationmodel",
        //                    success: function (data) {
        //                        ////console.log("ok:getnew");
        //                        location.href = "/XlgwrCordiality/ProductionSchedule/CreateProcessInspection";
        //                    }
        //                });
        //            });
        //////////////////////////////////////////////////////////////////////////
        // ***************************************工单单号
        $("#getid").click(function () {
            ////console.log("getid:ok");
            ////console.log("ok"); 
            var selectkey = $('input[name$="工单单号"]').val().toString();
            var Id = "/XlgwrCordiality/ProductionSchedule/GetWorkOrderInformation/" + selectkey;
            ////console.log(Id.toString()); $("#dialog_tools").dialog("open");
            //                $("#dialog_tools").dialog("open");

            //$("#intext").val(selectkey);
            $("#dialog_tools").dialog("open");

            //$(".loadmessage").fadeIn('slow');

            $("#dialogtools").attr("src", Id.toString());


        });
        ///////////////////////////////刷选/////////////////////////////////////
        $("#btnSelect").click(function () {
            var selectKey2 = $("#intext").val().toString();
            var hrefsSelect = $("#dialogselect").attr("src-data").toString() + selectKey2.toString();
            //iframe加载src
            $("#dialogselect").attr("src", hrefsSelect);
            $("#dialog_select").dialog("option", "title", titles + productid.toString());

        });
        //////////////////////////////////////////////////////////////////////////
        /****//加载要选择的对象.如：客户ＩＤ，调用该客户的相关信息/ /*****/
        $(".selecticon").click(function () {

            ////console.log("ok");

            // //console.log(likeText.toString());

            //获取class 的值
            var flag = $(this).attr("class") //.hasClass('WOPID');
            ////console.log(flag.toString());

            var hrefs = "";
            var titles = "";
            //面页转换,进入的面不同
            if (flag == "selecticon PC ui-icon ui-icon-search") {
                // //console.log("flag:productid PI");
                titles = "客户资料->客户代号Like->"
                hrefs = "/XlgwrCordiality/ProductInformation/GetProductCustomerInformationById/";
            } else if (flag == "selecticon MA ui-icon ui-icon-search") {
                // //console.log("flag:productid PI");
                titles = "供应商资料->厂商代号Like->"
                hrefs = "/XlgwrCordiality/VendorsManagement/GetPageVendorsInformationByIdChild/";
            } else if (flag == "selecticon WOPID") {
                titles = "工单详细资料->工单单号Like->"
                hrefs = "/XlgwrCordiality/ProductionSchedule/EditProcessInspection/";
            } else {
                //console.log("选择错误.icon dialog");
            }
            //获取ID号 //获取输入input的值
            var productid = $(this).parent().find('input:eq(0)').val();

            // //console.log(productid.toString());

            if (productid == "") {
                titles += "前N条记录,请输入要筛选的数据.谢谢.";
            }
            //var productid = $(this).text().toString();
            //连接href
            var Id = hrefs + productid.toString();

            ////console.log(Id.toString());
            //打开新窗口

            var $dialotShow = $("#dialog_select").dialog();
            var $dialotiframe = $("#dialogselect");

            //.attr("datasrc").toString();
            $dialotShow.dialog("open");
            $dialotShow.dialog({
                width: 520,
                height: 320
            });
            //iframe
            $dialotiframe.attr("src-data", hrefs.toString());

            $dialotiframe.attr("src", Id.toString());

            $dialotShow.dialog("option", "title", titles + productid.toString());


        });
        //////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////// 
        /****点对应的ID,DialogTools,加载不一样的url*****/
        $(".productid").click(function () {

            ////console.log("ok");

            //获取class 的值
            var flag = $(this).attr("class"); //.hasClass('WOPID');
            ////console.log(flag.toString());



            //面页转换,进入的面不同
            if (flag == "productid PI") {
                // //console.log("flag:productid PI");
                titles = "产品详细资料--->产品代号--->";
                hrefs = "/XlgwrCordiality/ProductInformation/Details/";
            } else if (flag == "productid WOPID") {
                titles = "工单详细资料--->工单单号--->";
                hrefs = "/XlgwrCordiality/ProductionSchedule/EditProcessInspection/";
            } else {
                //console.log("选择错误.productid");
            }
            //获取ID号
            var productid = $(this).text().toString();
            //连接href
            var Id = hrefs + productid;
            ////console.log(Id.toString());
            //打开新窗口
            var $dialotShow = $("#dialog_tools").dialog();
            var $dialotiframe = $("#dialogtools");

            //.attr("datasrc").toString();
            $dialotShow.dialog({
                width: 855,
                height: 680
            });
            $dialotShow.dialog("open");
            //iframe
            $dialotiframe.attr("src-data", hrefs.toString());

            $dialotiframe.attr("src", Id.toString());

            $dialotShow.dialog("option", "title", titles + productid.toString());


        });
        //////////////////////////////////////////////////////////////////////////
        //*************************************************

        //***********************************************
        //////////////////////////////////////////////////////////////////////////

        $('.DataItem tr:gt(0)').click(function () {
            ////console.log("click tr");
            var checked = $(this).find(":checkbox").attr("checked");
            ////console.log(checked);
            if (checked == "checked") {
                $(this).removeClass();
                $(this).find(':checkbox').removeAttr("checked");


            } else {
                $('.DataItem tr:gt(0) :checkbox').removeAttr("checked");
                $('.DataItem tr:gt(0)').removeClass();
                $(this).find(':checkbox').attr("checked", "checked");
                $(this).toggleClass();
                //////////////////////////////////////////////////////id
                var id = $(this).find(':checkbox').val().toString();

                //var WOI = $(this).find(':checkbox').hasClass('WOI');
                ////console.log(id.toString());
                ///
                //获取class 的值
                var flag = $(this).find(':checkbox').attr("class") //.hasClass('WOPID');
                ////console.log(flag.toString());
                //面页转换,修改值,进入的面不同
                if (flag == "PIselect") {
                    ////console.log("ok");
                    //new 
                    var datatwo = $(this).find(':checkbox').attr("data-two").toString();
                    var datathree = $(this).find(':checkbox').attr("data-three").toString();
                    var datafoure = $(this).find(':checkbox').attr("data-foure").toString();
                    var datafive = $(this).find(':checkbox').attr("data-five").toString();
                    var data6 = $(this).find(':checkbox').attr("data-6").toString();
                    ////console.log(id + "2:" + datatwo + "3:" + datathree + "4:" + datafoure);
                    ///////////////
                    $(parent.document).find("input[name='产品代号']").attr("value", id);
                    $(parent.document).find("input[name='产品名称']").attr("value", datatwo);
                    $(parent.document).find("input[name='客户料号']").attr("value", datathree);
                    $(parent.document).find("input[name='品名料号']").attr("value", datafoure);
                    $(parent.document).find("input[name='单价']").attr("value", datafive);
                    $(parent.document).find("select[name='单位']").attr("value", data6);
                    ////console.log("ok");
                }
                if (flag == "PC") {
                    ////console.log("ok");
                    //new 
                    var datatwo = $(this).find(':checkbox').attr("data-two");
                    var datathree = $(this).find(':checkbox').attr("data-three").toString();
                    var datafoure = $(this).find(':checkbox').attr("data-foure").toString();
                    var datafive = $(this).find(':checkbox').attr("data-five").toString();

                    $(parent.document).find("input[name='客户代号']").attr("value", id.toString());
                    $(parent.document).find("input[name='客户简称']").attr("value", datatwo.toString());
                    $(parent.document).find("input[name='业务员代号']").attr("value", datathree);
                    $(parent.document).find("input[name='业务员名称']").attr("value", datafoure);
                    $(parent.document).find("select[name='币别']").attr("value", datafive);

                }
                if (flag == "MA") {
                    ////console.log("ok");
                    //new 
                    var datatwo = $(this).find(':checkbox').attr("data-two");
                    var datathree = $(this).find(':checkbox').attr("data-three").toString();
                    var datafoure = $(this).find(':checkbox').attr("data-foure").toString();
                    var datafive = $(this).find(':checkbox').attr("data-five").toString();

                    $(parent.document).find("input[name='厂商代号']").attr("value", id.toString());
                    $(parent.document).find("input[name='厂商简称']").attr("value", datatwo.toString());
                    $(parent.document).find("input[name='业务员代号']").attr("value", datathree);
                    $(parent.document).find("input[name='业务员名称']").attr("value", datafoure);
                    $(parent.document).find("select[name='币别']").attr("value", datafive);

                } else if (flag == "selectPI") {
                    //选择对象Id,进行Create,edit,delete,details操作
                    $(parent.document).find("#tools-1-tr-1-i").attr("data-id", id.toString());

                } else if (flag == "WOI") {
                    ////console.log("ok");
                    $.ajax({
                        url: "/XlgwrCordiality/ProductionSchedule/SelectWorkOrderInformationmodel/" + id.toString(),
                        success: function (data) {
                            // //console.log("选择工单:" + id.toString() + " 成功...");
                            // location.href = "/XlgwrCordiality/ProductionSchedule/CreateProcessInspection";
                        }
                    });
                } else {
                    ////console.log("选择错误.dialog");
                }

                ///

            }
            $(this).toggleClass("click");


        });
        //***********************************************
        //////////////////////////////////////////////////////////////////////////
        //            $('.DataItem tr:gt(0)').dblclick(function () {
        //                //console.log("dbclick tr");
        //                $(this).dialog("close");
        //                
        //            });

        //////////////////////////////////////////////////////////////////////////
        //$(".loadmessage").hide();
        ///**********************
        $(".pages").click(function () {
            //$(".loadmessage").fadeIn();
            var loadhref = $(this).attr("href-data");
            ////console.log("OK" + loadhref.toString());
            //                $("#powerAccording").load(loadhref.toString(),
            //                                              function (response, status, xhr) {
            //                                                  if (status == "error") {
            //                                                      var msg = "Sorry but there was an error: ";
            //                                                      //console.log(msg + xhr.status + " " + xhr.statusText);
            //                                                  }
            //                                                  //$(".loadmessage").fadeOut('slow');
            //                                                  //$(".loadmessage").hide();
            //                                              });
            location.href = loadhref.toString();
            //$(".loadmessage").fadeOut('slow');
            //$(".loadmessage").hide();

        });

        //////////////////////////////////////////////////////////////////////////
        //*********************************************

    });

    //////////end top 4

    $(function () {
        //变量
        //console.log("function 11 ");
        var titles = "";
        //////////////////////////////////////////////////////////////////////////
        $("input:button").button();
        $("#tools-1 td a").button();
        //////////////////////////////////////////////////////////////////////////
        $("#dialog_tools,#dialog_Create,#dialog_select").dialog({
            autoOpen: false,
            zIndex: 3999,
            buttons: {
                "   确  定  ": function () {
                    $(this).dialog("close");
                    //           location.href = "/XlgwrCordiality/ProductionSchedule/CreateProcessInspection";
                    //           location = location;
                    //            window.location.reload();
                    //            location.reload();
                }
            },
            open: function (event, ui) {
                var $dialog = $(this);
                // 最大化,最小化,图标修改处
                var atext = $(".ui-dialog-titlebar-close").replaceWith('<p class="ui-xlgwr"><span class="ui-icon ui-icon-minusthick">minusthick</span> <span class="ui-icon ui-icon-extlink">extlink</span><span class="ui-icon ui-icon-closethick">close</span></p>');
                //最大化,最小化事件
                $(".ui-xlgwr>span").click(function () {
                    var spantext = $(this).text();
                    ////console.log("ok:ui-span" + spantext);
                    //最大化
                    if (spantext == "extlink") {

                        if (window.screen) { //判断浏览器是否支持window.screen判断浏览器是否支持screen
                            var myw = screen.availWidth; //定义一个myw，接受到当前全屏的宽
                            var myh = screen.availHeight; //定义一个myw，接受到当前全屏的高
                            //window.moveTo(0, 0);           //把window放在左上脚
                            //window.resizeTo(myw, myh);     //把当前窗体的长宽跳转为myw和myh
                            $dialog.dialog({
                                position: ['left', 'top'],
                                width: myw * 0.8,
                                height: myh * 0.8
                            });

                        } else {
                            $dialog.dialog({
                                position: 'center',
                                width: 800,
                                height: 600
                            });
                        }

                        //最小化
                    } else if (spantext == "minusthick") {
                        $dialog.dialog({
                            position: 'top',
                            width: 210,
                            height: 210
                        });
                        //退出
                    } else if (spantext == "close") {
                        $dialog.dialog("close");
                    } else {
                        //console.log("请选择正确的图标,谢谢.");
                    }
                });
            },
            close: function () {

                //$("#dialogtools").text("加载中...");
                //$(".loadmessage").hide();
            }
        });
        //////////////////////////////////////////////////////////////////////////

        ///////////////////////////////刷选/////////////////////////////////////
        $("#btnSelect").click(function () {
            var selectKey2 = $("#intext").val().toString();
            var hrefsSelect = $("#dialogselect").attr("src-data").toString() + selectKey2.toString();
            //iframe加载src
            $("#dialogselect").attr("src", hrefsSelect);
            $("#dialog_select").dialog("option", "title", titles + productid.toString());

        });


        //*********************************************

    });
    /*  dialog end
    *************************************************************************************
    by xlgwr

    */
    /*  dialogsearch start
    *************************************************************************************
    by xlgwr

    */
    ////////top 1 start
    $(function () {
        //console.log("function 12 ");
        //////////////////////////////////////////////////////////////////////////////
        var $tabs = $("#tabsdetails").tabs({
            select: function (event, ui) {
                var $iframe = $(ui.panel).find('iframe:eq(0)'); //获取当前iframe
                var iframeDataSrc = $iframe.attr("data-src"); //获取当前iframe的url
                var iframeSrc = $iframe.attr("flag"); //是否点过,0:无,1:点过
                //////////
                ////console.log("Tab:tabsdetails---" + ui.index.toString() + "---Datasrc:---" + iframeDataSrc.toString() + "---src:--" + iframeSrc.toString());
                //////////
                if (iframeSrc.toString() == "0") {
                    // //console.log("you was click once.");
                    $iframe.attr("flag", "1"); //改变点击记录
                    $iframe.attr("src", iframeDataSrc.toString()); //进入iframe的src
                }
                //////////
            }
        });
        //////////////////////////////////////////////////////////////////////////////  

        var index = $(parent.document).find("#tabs_show").tabs("option", "selected");
        //console.log(index);
        var $stririd = $(parent.document).find("iframe+div").eq(0); //.attr("id");
        $stririd.fadeOut(400);

        //console.log("function 12.1 ");
    });
    ///////top 1  end 

    ////////top 1 start
    $(function () {

    });
    ///////top 1  end 
    ///////////////////////////////////////end
})(jQuery);