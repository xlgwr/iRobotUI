//iframe height tabs  
var ifheight = 250;
///////////////////////////////////////start
var tabId = 0; //text console.log       
var fakeBody = $("body"),
	vendors = ["Webkit", "Moz", "O"],
	webos = "palmGetResource" in window, //only used to rule out scrollTop
	operamini = window.operamini && ({}).toString.call(window.operamini) === "[object OperaMini]",
	bb = window.blackberry; //only used to rule out box shadow, as it's filled opaque on BB
var $window = $(window),
       theme,
	   loadMsgDelay = 50,
	   loadingMessageTextVisible = true,
	   loadingMessage = "loading",
	   activeBtnClass = "ui-btn-active",
	   scrollTop = ("pageXOffset" in window || "scrollTop" in document.documentElement || "scrollTop" in fakeBody[0]) && !webos && !operamini,
	   $html = $("html");
// loading div which appears during Ajax requests
// will not appear if loadingMessage is false
var loaderClass = "ui-loader",
		$loader = $("<div class='" + loaderClass + "'><span class='ui-icon-xlgwr ui-icon-loading'></span><h1></h1></div>");
//theme switcher
function themeswithcer(themetext) {
    var theme;
    if (themetext == '') {
        theme = "redmond";
    } else {
        theme = themetext;
    }
    $('#set').hide();
    $('#themes').hover(function () { $('#set').fadeIn(); }, function () { });
    $('#themes a').click(function () {
        theme = $(this).attr('title');
        updatetheme(theme);
        return false;
    });
    $('#set').hover(function () { }, function () { $(this).hide(); });
}


function updatetheme(theme) {
    if (theme.indexOf("?") >= 0) { theme = theme.split('?')[1]; }
    if (theme.indexOf('#') >= 0) { theme = theme.split('#')[1]; }
    var cssPath = 'Content/themes/';
    var linkhref = '<link href="' + cssPath + theme + '/jquery.ui.all.css" title="theme" rel="Stylesheet" type="text/css" />';
    //console.log("theme swithche:"+linkhref);
    $('link[title="theme"]').replaceWith(linkhref);
    $('iframe').each(function () {
        var thissrc = $(this).attr("src");
        $(this).attr("src", thissrc);
    });
}

// For non-fixed supportin browsers. Position at y center (if scrollTop supported), above the activeBtn (if defined), or just 100px from top
// For non-fixed supportin browsers. Position at y center (if scrollTop supported), above the activeBtn (if defined), or just 100px from top
function fakeFixLoader() {
    var activeBtn = $("." + activeBtnClass).first();

    $loader
			.css({
			    top: scrollTop && $window.scrollTop() + $window.height() / 2 ||
				activeBtn.length && activeBtn.offset().top || 100
			});
}
/////////////////////
function autoHeight(removeheight) {
    
    var ifheight = $("body").height() - removeheight;
    $(".ui-tabs-panel>iframe").height(ifheight-18);

    $("#nav_grids").height(ifheight+50);
}
//////////////////////
function getScreenHeight() {
    // Native innerHeight returns more accurate value for this across platforms, 
    // jQuery version is here as a normalized fallback for platforms like Symbian
    return window.innerHeight || $(window).height();
}
// check position of loader to see if it appears to be "fixed" to center
// if not, use abs positioning
function checkLoaderPosition() {
    var offset = $loader.offset(),
			scrollTop = $window.scrollTop(),
			screenHeight = getScreenHeight();

    if (offset.top < scrollTop || (offset.top - scrollTop) > screenHeight) {
        $loader.addClass("ui-loader-fakefix");
        fakeFixLoader();
        $window
				.unbind("scroll", checkLoaderPosition)
				.bind("scroll", fakeFixLoader);
    }
}
///////////////////show err message
function messageErrOr(msgText, OptionText) {

    $("#messageerrorOptionText").html(OptionText);
    $("#messageerrorspan").html(msgText);
    //console.log(msgText + ":fun");
    $("#messageerror").show("fast").hover(
            function () {
                $(this).stop();
            },
            function () {
                //  $(this).hide(100);
            }
      );
}
///////////////////
///	showPageLoadingMsg start
function showPageLoadingMsg(theme, msgText, textonly) {
    var $pages = $(this);
    //console.log($pages.html());
    var pageContainer = $("body").first();
    $html.addClass("ui-loading");
    //console.log("showPageLoadingMsg  1");

    if (loadingMessage) {
        // text visibility from argument takes priority
        var textVisible = textonly || loadingMessageTextVisible;

        theme = theme || loadingMessageTheme,
        //console.log(pageContainer.size() + "testVisible:" + textVisible + ",theme:" + theme);
            $loader
					.attr("class", loaderClass + " ui-corner-all ui-body-" + (theme || "a") + " ui-loader-" + (textVisible ? "verbose" : "default") + (textonly ? " ui-loader-textonly" : ""))
					.find("h1")
						.text(msgText || loadingMessage)
						.end()
					.appendTo(pageContainer);

        checkLoaderPosition();
        $window.bind("scroll", checkLoaderPosition);
    }
}
///showPageLoadingMsg

///hidePageLoadingMsg start
function hidePageLoadingMsg() {
    //console.log("hidePageLoadingMsg 1");
    $html.removeClass("ui-loading");

    if (loadingMessage) {
        $loader.removeClass("ui-loader-fakefix");
    }

    $(window).unbind("scroll", fakeFixLoader);
    $(window).unbind("scroll", checkLoaderPosition);
}
///hidePageLoadingMsg  end
///tabsadd(tabShow,,iframesrc,

///
$(function () {
    //console.log("function 1 ");
    //*************************************************
    if ($.browser.msie || ($.browser.version == "6.0") || !$.support.style) {

        $("#menu li").hover(
            function () {

                $(this).find("div").first().show();
                //console.log("li div hover ok");
            },
            function () {
                $(this).find("div").first().hide();
                //console.log("li div hover ok");
            }
           );
        ////console.log("本系统不支持IE6,请使用IE6以上版本或谷歌浏览器、火狐、Opera最新版本，谢谢！"); 
        //location.href=("http://www.baidu.com/s?wd=%B9%C8%B8%E8%E4%AF%C0%C0%C6%F7&rsv_bp=0&rsv_spt=3&rsv_n=2&inputT=1102");
        //代码
    };
    //$("#messageerrorspan")
    $("#messageerrorclose").live("click", function () {
        //console.log("136H: messageerrorspan .ui-icon-circle-close");
        $("#messageerror").hide();
    });
    //************function 2*****************************************************
    $(document).ready(function () {
        //console.log("function 3 ");
        // //console.log("height:"+ifheight+"bodyh:"+$("body").height());
        autoHeight(ifheight);
        // hide #back-top first
        $("#back-top").hide();

        // fade in #back-top
        $(function () {

            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });

            // scroll body to 0px on click
            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });

    });   //function 2
});
////////////////

///////////////////////////////////////end
