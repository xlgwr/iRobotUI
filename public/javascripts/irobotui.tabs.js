$(function() {
////////////////////////////////
    var tabTitle = 'iRobotUI',
      tabiframurl="/",
      treedataid=0,
      tabContent = 'iRobotUI by xlgwr.',
      tabTemplate = "<li><span class='ui-icon ui-icon-refresh'>f5</span><a href='#{href}' class='#{treedataid}'>#{label}</a><span class='ui-icon ui-icon-newwin'>NewWin</span><span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
      tabCounter = 2;
      tabCounterindex = 0;


    var tabs = $( "#tabs_show" ).tabs({
        activate: function( event, ui ) {
            var uihtml=ui.newTab.find("a").html();
            var navh2default=$("h2#nav_user_content_top").attr("defaulttext");
            $("h2#nav_user_content_top").html(navh2default+uihtml);
            //console.log("activate:"+uihtml);
        }
    });


    // actual addTab function: adds new tab using the input from the form above
    function addTab() {
      var label = tabTitle || "Tab " + tabCounter,
        id = "tabs-" + tabCounter,
        idiframe = "tabs-iframe-" + tabCounter,
        li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{treedataid\}/g,treedataid ).replace( /#\{label\}/g, label ) ),
        tabContentHtml = tabContent || "Tab " + tabCounter + " content.";

        tabs.find( ".ui-tabs-nav" ).append( li );
        tabs.append( "<div id='" + id + "'><iframe class='iframesub iframesubwidth iframesubheight' frameborder='0' marginwidth='0' marginheight='0' frameborder='0' vspace='0' hspace='0' id='"+idiframe+"' src='"+tabiframurl+"' datasrc='"+tabiframurl+"'></iframe></div>" );

        tabs.tabs( "refresh" );

        tabCounter++;

        tabCounterindex=tabs.find( ".ui-tabs-nav" ).find("li").length-1;
        tabs.tabs( "option", "active",tabCounterindex );

    }


    // f5 refresh
    tabs.delegate( "span.ui-icon-refresh", "click", function() {
        var panelId = $( this ).closest( "li" ).attr( "aria-controls" );
        var paneliframe=$( "#" + panelId ).find('iframe');
        var datasrc=paneliframe.attr("datasrc");
        paneliframe.attr("src", datasrc);
        //console.log("f5:panelId:"+panelId+",datasrc:"+datasrc);
    });
    // new window
    tabs.delegate( "span.ui-icon-newwin", "click", function() {
        var panelId = $( this ).closest( "li" ).attr( "aria-controls" );
        var paneliframe=$( "#" + panelId ).find('iframe');
        var datasrc=paneliframe.attr("datasrc");
        window.open(datasrc);
       // console.log("new windos panelId:"+panelId+",datasrc:"+datasrc);
    });
    // close icon: removing the tab on click
    tabs.delegate( "span.ui-icon-close", "click", function() {
        var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
        $( "#" + panelId ).remove();

        tabs.tabs( "refresh" );
         //console.log("delegate:"+panelId);
         tabCounterindex--;
    });
    // close all other icon: removing the tab on click
    tabs.delegate( "span.ui-icon-arrowthickstop-1-w", "click", function() {
        var parentroot= $( this ).parent().parent().parent();
        var panellength = parentroot.find("li").length-1;
        var panelindex = $( this ).closest( "li" ).index();
        var activeindex=tabs.tabs("option","active");
        var panelId = $( this ).closest( "li" ).attr( "aria-controls" );
        var delindex=activeindex-panelindex;
        if(panellength==0)
        {
            tabs.tabs("option","active",0);
                return 0;
        }
        if (activeindex<panellength)
        {
            for (var i=panellength;i>activeindex;i--)
                {

                    parentroot.find("li").eq(i).remove();
                    parentroot.find("div").eq(i).remove();
                }
            for (var i=activeindex-1;i>=1;i--)
                {
                    parentroot.find("li").eq(i).remove();
                    parentroot.find("div").eq(i).remove();
                }

            console.log("delallture:"+activeindex+",len:"+panellength);
        }
        else
        {
            for (var i=activeindex-1;i>=1;i--)
                {
                   //var lihtml= parentroot.find("li").eq(i).html();
                   // var divhtml= parentroot.find("div").eq(i).html();
                    parentroot.find("li").eq(i).remove();
                    parentroot.find("div").eq(i).remove();
                    //console.log("li:"+lihtml+"\n,div:"+divhtml);

                }

            console.log("delallfales:"+activeindex+",len:"+panellength);
        }
        panellength= parentroot.find("li").length-1;
        if(panellength==0)
        {
            tabs.tabs("option","active",0);
            return 0;
        }


        //$( "#" + panelId ).remove();
       // tabs.tabs( "refresh" );
       //  console.log("delegateall:"+panelId+",panelindex:"+panelindex+",activeindex:"+activeindex+",panellength:"+panellength+",delindex:"+delindex+",parentroot:"+parentroot.html());
         //tabCounterindex--;
    });
    ////////bind key up
    tabs.bind( "keyup", function( event ) {
      if ( event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE ) {
        var panelId = tabs.find( ".ui-tabs-active" ).remove().attr( "aria-controls" );
        $( "#" + panelId ).remove();
         // console.log("keyup:"+panelId);
        tabs.tabs( "refresh" );
      }
    });
///////////////nav acc
$( "#accordion" )
        .accordion({
            header: "> div > h3",
            heightStyle: "content"
        })
        .sortable({
            axis: "y",
            handle: "h3",
            stop: function( event, ui ) {
                // IE doesn't register the blur when sorting
                // so trigger focusout handlers to remove .ui-state-focus
                ui.item.children( "h3" ).triggerHandler( "focusout" );
            }
        });
////////////////end nav


/////////////////end jqgrid
  $("#rightgo").click(function () {
            ////console.log("go");
            var TextOfleft = $(this).attr("title");
            $("#nav_user_content_main").fadeToggle("fast", "linear", function () {

                $("#nav_user_content_sub").toggleClass("widthbig");

            });
            //console.log(TextOfleft.toString());
            if (TextOfleft.toString() == "展开") {
                $(this).attr("title", "左收");
                $(this).removeClass("ui-icon-circle-arrow-e").addClass("ui-icon-circle-arrow-w");
                $("#tabs_show iframe").addClass("iframesubwidth").removeClass("iframesubwidthleft");
            } else {
                $(this).attr("title", "展开");
                $(this).removeClass("ui-icon-circle-arrow-w").addClass("ui-icon-circle-arrow-e");
                $("#tabs_show iframe").addClass("iframesubwidthleft").removeClass("iframesubwidth");
            }


  });
   //***********************/
        $("#slide").click(function () {
            $("#header").slideToggle("slow");
            var TextOfleft = $(this).attr("title");
            ////console.log(TextOfleft.toString());
            if (TextOfleft.toString() == "下展") {
                $("#slide").attr("title", "上收");
                $("#slide").removeClass("active ui-icon-circle-arrow-s").addClass("ui-icon-circle-arrow-n");
                $("#tabs_show iframe").addClass("iframesubheight").removeClass("iframesubheighttop");

            } else {
                $("#slide").attr("title", "下展");
                $("#slide").removeClass("ui-icon-circle-arrow-n").addClass("active ui-icon-circle-arrow-s");
                $("#tabs_show iframe").removeClass("iframesubheight").addClass("iframesubheighttop");

            }
            //

            $("#nav_user_content_top").toggleClass("activetop");
             autoHeight(ifheight);

        });
        //  ***********************************************************
/////////end
  });
