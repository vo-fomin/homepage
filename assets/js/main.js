$( document ).ready(function() {
    const $content = $('.content');
    const $leftHeader = $('.left-header');
    const $rightHeader = $('.right-header');
    const $portfolioItems = $('.portfolio-item');
    const resizeHeader = function(){
        const rightWidth = $content.width()|0;
        const leftWidth = (rightWidth>=992?rightWidth*0.35:rightWidth);
        $leftHeader.css("border-right-width", leftWidth + "px");
        $rightHeader.css("border-left-width", rightWidth + "px");
    };
    resizeHeader();
    $(window).resize(function(){
        resizeHeader();
    });
    window.onbeforeprint = function(){
        $leftHeader.css("border-right-width", $content.width() + "px");
        $rightHeader.css("border-left-width", $content.width() + "px");

        if ($portfolioItems.attr('open') == null) {
            $portfolioItems.attr('data-was-closed', 'true');
        }
        $portfolioItems.attr('open', '');
    };
    window.onafterprint = function(){
        resizeHeader();
        if( $portfolioItems.attr('data-was-closed') == 'true' ) {
            $portfolioItems.removeAttr('open');
        }
        $portfolioItems.removeAttr('data-was-closed');
    };
});
