$(function () {
        // TO CREATE AN INSTANCE
        // select the tree container using jQuery

   var demo1= $("#demo1").jstree(
       {
           "plugins" : ["json"],
           "multiple" : false,
           "json" : {
               "data" : function (node, addChildrens) {
                   var nothing = function() {
                       if (node && node.removeClass) {
                           node.removeClass('jstree-loading jstree-closed').addClass('jstree-leaf');
                       }
                   }

                   // $.ajax("assets/json_data.json").done(function (e, data) {
                       // if (data) {
                           // addChildrens(data);
                           // console.log(data);
                       // } else {
                           // nothing();
                       // }
                   // }).fail(nothing);
                   nothing();
                   $.getJSON('assets/json_data.json', function (data) {

                       if (data) {
                          // console.log(data);
                           addChildrens(data);
                       } else {

                           nothing();
                       }
                   }).fail(nothing);

/////////////
               }
           }
       }
   );


    //////////demo3
   var demo3= $("#demo3")
        .bind("click.jstree",".jstree-ocl", function (e) {
            // console.log("TREE IS LOADED+"+data.node);
            /* note the second parameter, read the docs on each event for its value */
            // var demo3select=$(this).jstree('get_selected').find('a:eq(0)').attr('href');
            //console.log(demo3select);
           //console.log("click,jstree anchor:data->"+e.type+",li:"+$(this).children("ul").children("li").length+"\n"+$(this).html());
        })
        .bind("focus.jstree", ".jstree-anchor", function (e) {

           //console.log("focus,jstree anchor:data->"+e.type+$(this).html()+"\n");
            /* note the second parameter, read the docs on each event for its value */
        })
        .jstree();

    ////end demo3
});
