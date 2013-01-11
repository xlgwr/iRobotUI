(function ($, undefined) {
    ///////////////////////////////////////start   
    /* function 1 */
    $(function () {
        //get ui button;
        $("input:submit").button();
        $("input:button").button();
        //***********************************************
        $("#nav_user_content_main_nav").accordion({
            autoHeight: false,
            event: "mouseover"
        });

        $("#tabschild,.tabs-up").tabs();
        //  ***********************************************************
        $("#rightgo").click(function () {
            ////console.log("go");
            var TextOfleft = $(this).attr("title");
            //console.log(TextOfleft.toString());
            if (TextOfleft.toString() == "展开") {
                $(this).attr("title", "左收");
                $(this).removeClass();
                $(this).addClass("ui-icon  ui-icon-circle-arrow-w");
            } else {
                $(this).attr("title", "展开");
                $(this).removeClass();
                $(this).addClass("ui-icon  ui-icon-circle-arrow-e");
            }

            $("#nav_user_content_main").fadeToggle("fast", "linear", function () {

                $("#nav_user_content_sub").toggleClass("widthbig");
                $("#back-top").toggleClass("right");
            });
            //hidePageLoadingMsg()
        });
        //***********************/
        $("#slide").click(function () {
            $("#header").slideToggle("slow");
            var TextOfleft = $(this).attr("title");
            ////console.log(TextOfleft.toString());
            if (TextOfleft.toString() == "下展") {
                $("#slide").attr("title", "上收");
                $("#slide").removeClass();
                $("#slide").addClass("btn-slide ui-icon  ui-icon-circle-arrow-n");
                ifheight = 250;
                
            } else {
                $("#slide").attr("title", "下展");
                $("#slide").removeClass();
                $("#slide").addClass("btn-slide active ui-icon ui-icon-circle-arrow-s");
                ifheight = 149;
                
            }
            //

            $("#nav_user_content_top").toggleClass("activetop");
             autoHeight(ifheight);

        });
        //  ***********************************************************
        ////////////////////////
        $("#tools-1 td a").button();
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //F5
        $('#F5').click(function () {
            location.reload();
        });
        ///////menuall menu theme
        $("#menuall").addClass("ui-helper-reset ui-state-default ui-corner-all");
        $("#menu").addClass("clearfix");
        //////////////////div columns
        $("#menu>ul>li>div:eq(0)").addClass("begin");
       // $("#menu>ul>li>div").last().addClass("last");

        $("#menu>ul>li>div").each(function () {
            var ulclassl;
            var divhaveclass;
            ulclassl = $(this).find("ul[class]").length;
            divhaveclass = $(this).attr("class");
            //console.log("div:class:" + divhaveclass + ",ulclassLeng:" + ulclassl);
            switch (ulclassl) {
                case 3:
                    $(this).addClass("columns three");
                    break;
                case 2:
                    $(this).addClass("columns two");
                    break;
				case 0:
                    $(this).addClass("last");
                    break;
                default:
                    break;
            };
            $(this).addClass("ui-helper-clearfix ui-state-default ui-corner-all");
        });
        /////////////////end div columns
        ///div ul li
        $("#menu>ul>li>div>ul").each(function() {
            $(this).find("a:eq(0)").addClass("parent");
            $(this).find("li>a[next]").each(function(){
              $(this).addClass("parent");
              $(this).find("span:eq(1)").addClass("ui-icon ui-icon-triangle-1-s");
              $(this).next("div").addClass("ui-helper-clearfix ui-state-highlight ui-corner-all");
            });

           
        });
        //theme switcher
        themeswithcer("redmond");

        //  *********************************************************** 
    });   //function 1 end
    ///////////////////////////////////////end
})(jQuery);