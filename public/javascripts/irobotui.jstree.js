$(function () {
        // TO CREATE AN INSTANCE
        // select the tree container using jQuery
    $("#demo1").jstree();

    //////////demo3
    $("#demo3")
        .jstree(function(){
        console.log($(this).get_node());
        })
    ////end demo3
});
