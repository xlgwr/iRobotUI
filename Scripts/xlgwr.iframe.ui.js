(function ($, undefined) {
    ///////////////////////////////////////start
    //////////////////////////top1
    $(function () {
        //console.log("function 7 ");
        //theme switcher
        $(document).each(function () {
            var linktheme = $(parent.document).find('link[title="theme"]').first().attr("href");
           // console.log(linktheme.toString());
            $('link[title="theme"]').replaceWith('<link href="' + linktheme + '" title="theme" rel="Stylesheet" type="text/css" />');
            $('iframe').each(function () {
                var thissrc = $(this).attr("src");
                $(this).attr("src", thissrc);
            });
        });
    });
    /////////////////////top1 end
    ///////////////////////////////////////end
})(jQuery);