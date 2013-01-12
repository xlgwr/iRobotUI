(function ($, undefined) {
    ///////////////////////////////////////start  
    /* function 1 */
    $(function () {

        //tabs-----------------------------------------------------------------------------			
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var hrefs = $('#hrefindex').attr("href-index");
        //////////////////////
        var navtextdefault = $("h2#nav_user_content_top").attr("defaulttext");
        //////console.logsearchs);
        var tab_load = "Shared/preload.html";
        //Tools buttons
        var errortabsIndex = false;
        var SumClick = 0;
        var currentTabsIndex = 0;
        var tab_counter = 1;
        // tabs init with a custom tab template and an "add" callback filling in the content
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var $tabs = $("#tabs_show").tabs({
            tabTemplate: "<li><span class='ui-icon ui-icon-refresh'>f5</span><a href='#{href}'>#{label}</a><span class='ui-icon ui-icon ui-icon-newwin'>NewWin</span><span class='ui-icon ui-icon-close'>Remove Tab</span></li>",

            add: function (event, ui) {

                SumClick++;
                //console.log"add:ui.index:" + ui.index + ",---24h:SumClick++:" + SumClick + ",---27H:tab_counter:" + tab_counter);

                /////////////////////////////////////////
                var tab_id = "iframe_" + tab_counter.toString();

                //////console.logtab_id.toString()); <iframe id="dialogtools" frameborder='0'>加载中...</iframe>///////
                $(ui.panel).append("<iframe class='dialogtools' id='" + tab_id + "' frameborder='0'  marginwidth='0' marginheight='0' frameborder='0' vspace='0' hspace='0' src='Shared/preload.html' datasrc='Shared/preload.html' ></iframe>");
                // var tab_content = "加载中...请稍候...谢谢...";
                var clid = tab_id + "-container";
                //showPageLoadingMsg( "a","加载中"+clid, false);
				//console.log("addtabs,ajax:"+tab_load);
                $.ajax({
						        url: tab_load,
						        type: "GET",
						        dataType: "html",
                                                        async:false,
							error:function(req,err){
								//console.log("addtabs:err,"+tab_id+"err:"+err);
								$(ui.panel).find("#"+tab_id).attr("src", "Shared/Error.html");
								$(ui.panel).find("#"+tab_id).attr("datasrc", "Shared/Error.html");
								}
						});
                // var endtab_id = "'#" + tab_id + "'";
                //////console.logendtab_id.toString());
                //$(this).find(endtab_id.toString()).attr("src", tab_load);
                //$(this).find(endtab_id.toString()).attr("datasrc", tab_load);
				
				//select this add ui tabs
				
				$tabs.tabs('select', '#' + ui.panel.id);
				//console.log("ADD:select add ui tabs:"+ui.panel.id);

            },
            select: function (event, ui) {
                //console.log"select:43H:index:" + ui.index);
                var textnav = navtextdefault + $(this).find(".ui-tabs-nav a").eq(ui.index).text();
                $("h2#nav_user_content_top").html(textnav);

                autoHeight(ifheight);
                //////console.logtextnav); 
                //theme switcher
                $("h2#nav_user_content_top").html(textnav);

            },
            load: function (event, ui) {
                ////console.logui.index);
                //var $textifram =$('iframe+div').eq(ui.index);//.attr("id"); //$tabs.find("iframe").eq(index).attr("id");
                //$textifram.hide();
                //////console.log"div=" + textifram);
            },
            remove: function (event, ui) {
                SumClick--;
                //console.log"remove:ui.index:" + ui.index + ",---60h:SumClick--:" + SumClick);
                if (SumClick <= 0) {
                    SumClick = $tabs.tabs("length") - 1;
                    //console.log"remove-0:63h:SumClick:" + SumClick);
                }
            }
        });
        //Tabs   sorttable///////////////////////////////////////////

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $tabs.tabs().find(".ui-tabs-nav").sortable({ axis: "x" });
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // note: closable tabs gonna be an option in the future - see http://dev.jqueryui.com/ticket/3924
        /////退出
        $("#tabs_show span.ui-icon-close").live("click", function () {
            var index = $("li", $tabs).index($(this).parent());
            $tabs.tabs("remove", index);
        });
        /////del all tabs
        $("#tabs_show span.ui-icon-arrowthickstop-1-w").live("click", function () {
            var SumTabs = $tabs.tabs("length") - 2;
            for (var i = SumTabs; i >= 1; i--) {
                //console.log"del:all:89h:i:" + i);
                $tabs.tabs("remove", i);
            }
            SumClick = 1;
            $tabs.tabs("select", SumClick);

        });
        //////刷新
        $("#tabs_show span.ui-icon-refresh").live("click", function () {
            var index = $("li", $tabs).index($(this).parent());
            var textifram = $tabs.find("iframe").eq(index).attr("id");
            //////console.log"ifram=" + textifram);
            var datasrc = $tabs.find("iframe").eq(index).attr("datasrc").toString();
            //////console.log"DataSrc:" + datasrc);
            $tabs.find("iframe").eq(index).attr("src", datasrc);
        });
        ////新窗口
        $("#tabs_show span.ui-icon-newwin").live("click", function () {
            var index = $("li", $tabs).index($(this).parent());
            var textifram = $tabs.find("iframe").eq(index).attr("id");
            //////console.log"ifram=" + textifram);
            var datasrc = $tabs.find("iframe").eq(index).attr("datasrc").toString();
            window.open(datasrc);
        });

        //End Tabs ............................................................................

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //***************************************************************************************************************
        $("#tools-1-tr-1-i a[falg]").click(function () {

            var $aTitel = $(this).text();
            var $aId = $(this).attr("id");
            /////////////////////////////////////////////////////////////////////////////


            ////////////////
            if ($aId == "Search") {
                // ////console.log"ok");
                tab_load = hrefs + "/Search";

                errortabsIndex = true;

            } else if ($aId == "Create") {
                //////console.log"ok");
                tab_load = hrefs + "/Create";

                errortabsIndex = true;

            } else if ($aId == "Copy") {
                var id = $("#tools-1-tr-1-i").attr("data-id");
                //////console.logid.toString());
                if (id != 0) {
                    errortabsIndex = true;
                    tab_load = hrefs + "/Copy/" + id;

                } else {
                    errortabsIndex = false;
                    tab_load = "Shared/error.html";
                    messageErrOr("请选择要复制的数据。谢谢！", "复制操作提示");
                    ////console.log"请选择要复制的数据。");
                }
                //////console.logid);
            } else if ($aId == "Edit") {
                var id = $("#tools-1-tr-1-i").attr("data-id");
                //////console.logid.toString());
                if (id != 0) {
                    errortabsIndex = true;
                    tab_load = hrefs + "/Edit/" + id;

                } else {
                    errortabsIndex = false;
                    tab_load = "Shared/error.html";
                    messageErrOr("请选择要修改的数据。谢谢！", "修改操作提示");
                    ////console.log"请选择要修改的数据。");
                }
                //////console.logid);

            } else if ($aId == "Details") {
                var id = $("#tools-1-tr-1-i").attr("data-id");
                //////console.logid.toString());
                if (id != 0) {
                    errortabsIndex = true;
                    tab_load = hrefs + "/Details/" + id;

                } else {
                    errortabsIndex = false;
                    tab_load = "Shared/error.html";
                    messageErrOr("请选择要查看的数据。谢谢！", "明细操作提示");
                    ////console.log"请选择要查看的数据。");
                }
                //////console.logid);

            } else if ($aId == "Delete") {
                var id = $("#tools-1-tr-1-i").attr("data-id");
                //////console.logid.toString());
                if (id != 0) {
                    errortabsIndex = true;
                    tab_load = hrefs + "/Delete/" + id;

                } else {
                    errortabsIndex = false;
                    tab_load = "Shared/error.html";
                    messageErrOr("请选择要删除的数据。谢谢！", "删除操作提示");
                    ////console.log"请选择要删除的用户。");
                }
                //////console.logid);
            } else {
			    tab_load = "Shared/error.html";
                errortabsIndex = true;
                tab_load = "Shared/error.html";
            };
            if (errortabsIndex) {
			    // add tabs
      			$tabs.tabs("add", "#tabs-" + tab_counter, $aTitel.toString());
                ////console.log"errortabsIndex:209H:tab_counter" + tab_counter);
                tab_counter++;
                ////console.log"errortabsIndex:211H:tab_counter++:" + tab_counter);
                //hidePageLoadingMsg();
            } else {
                $tabs.tabs("select", 0);

            }
        });
        //*****************************************************************************************************lefttools
        $("#nav_user_content_main_nav a[id]").click(function () {


            var aclass = $(this).attr("class");
            var ah3 = $("#nav_user_content_main_nav h3").eq(aclass).text();


            var $aTitel = ah3 + ":" + $(this).text();
            var $aId = $(this).attr("id");
            //////////////////
            if ($aId == "SearchProductDetailsMaterialModel") {

                tab_load = hrefs + "/SearchProductDetailsMaterialModel";

            } else if ($aId == "GetPagePageProductInformation") {
                //////console.log"ok2:" + hrefs);
                tab_load = hrefs + "/GetPagePageProductInformation/1";

            } else if ($aId == "SearchTechnologyDetailsModel") {

                tab_load = hrefs + "/SearchTechnologyDetailsModel";

            } else if ($aId == "WorkOrderProcessInspection") {
                //////console.log"ok");
                tab_load = hrefs + "/GetPageprocessInspectionDataDetails/1";

            } else if ($aId == "NewWorkOrderProcessInspection") {
                //////console.log"ok");
                tab_load = hrefs + "/CreateProcessInspection";

            } else if ($aId == "SearchprocessInspectionDataDetailsViewModel") {
                //////console.log"ok");
                tab_load = hrefs + "/SearchprocessInspectionDataDetailsViewModel";

            } else {
                tab_load = "Home/Developing";
            };
            //console.log"nav:254H:" + tab_counter);
            $tabs.tabs("add", "#tabs-" + tab_counter, $aTitel.toString());

            //console.log"nav:253h:SumClick:" + SumClick);
            $tabs.tabs("select", SumClick);
            //var index=$(parent.document).find("#tabs_show").tabs( "option", "selected" );
            //////console.logindex);
            //var $stririd=$(parent.document).find("iframe+div").eq(index);//.attr("id");
            //$stririd.fadeOut(400);
            //////console.logstririd);
            tab_counter++;

        });
        //tabs-----------------------------------------------------------------------------  


        //***********************************************************// 
    });   //function 1 end
    ///////////////////////////////////////end
})(jQuery);