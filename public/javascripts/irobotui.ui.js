$(function() {
////////////start
    $( "#nav_grids_test" )
      .accordion({
          header: "> div > h3",
          collapsible: true,
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
//////////////////////////////////////////////

    var maintab = $("#tabs_show").tabs();

//////////////////////end
  });
