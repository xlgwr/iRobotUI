$(function() {
////ui input submit
    $('input:submit').each(function()
                           {
                               $(this).addClass('btn btn-large btn-primary');
                           });
////////////start nav conten main
    $( "#nav_accordion_main" )
      .accordion({
          header: "> div > h3",
          collapsible: true,
          heightStyle: "content",
          create:function(event,ui){
              var activateHeader="当前页面："+ $(ui.header).text();
              $("h2#nav_user_content_top").attr("defaulttext",activateHeader+"-->");
              $("h2#nav_user_content_top").html(activateHeader);
          },
         beforeActivate:function(event,ui){
             var anewHeaderhtml=$(ui.newHeader).text();
             var aoldHeaderhtml=$(ui.oldHeader).text();
             if(anewHeaderhtml){
                 anewHeaderhtml="当前页面："+ anewHeaderhtml;
                 $("h2#nav_user_content_top").attr("defaulttext",anewHeaderhtml+"-->");
                 $("h2#nav_user_content_top").html(anewHeaderhtml);
                // console.log("nav_accordion_main_new:"+anewHeaderhtml+"\nOldheader:"+aoldHeaderhtml);
             }
          }
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
//////////////////////////////////////////////end nav main

//////////////////////end
  });
