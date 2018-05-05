$( document ).ready(function() {
    const $content = $('.content');
    const $leftHeader = $('.left-header');
    const $rightHeader = $('.right-header');
    const resizeHeader = function(){
        const rightWidth = $content.width()|0;
        const leftWidth = rightWidth*0.35;
        $leftHeader.css("border-right-width", leftWidth + "px");
        $rightHeader.css("border-left-width", rightWidth + "px");
    };
    resizeHeader();
    $(window).resize(function(){
        resizeHeader();
    });
});