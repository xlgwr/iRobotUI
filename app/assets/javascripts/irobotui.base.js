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
