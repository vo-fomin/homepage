$( document ).ready(function() {
    const $content = $('.content');
    const $leftHeader = $('.left-header');
    const $rightHeader = $('.right-header');
    var resizeHeader = function(){
        const rightWidth = $content.width()|0;
        const leftWidth = (rightWidth>=992?rightWidth*0.35:rightWidth);
        $leftHeader.css("border-right-width", leftWidth + "px");
        $rightHeader.css("border-left-width", rightWidth + "px");
    };
    resizeHeader();
    $(window).resize(function(){
        resizeHeader();
    });
});
