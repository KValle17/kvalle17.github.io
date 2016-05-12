/***** Javascript site Sun Jul 21 19:58:12 CST 2013 from mkjs (2013-07-20 16:16:01) *****/
$(document).ready(function(){

  /* showhide: */
  // hide all of the element with 'show_hide' class
  $(".show_hide").hide();
  // toggle the .show component with next .show_hide class
  $(".show").click(function(){
    $(this).next(".show_hide").slideToggle(600);
  });

  /* fb_inline: */
  // for inline popups
  $("a.inline").fancybox({
    closeClick    : false
  });

  /* fb_calendar: */
  // for Fancybox inline calendar items
  $("a.calinline").fancybox({
    autoDimensions    : false,
    width             : 280,
    height            : 240,
    transitionIn      : 'none',
    transitionOut     : 'none'
  });

  /* fb_map: */
  // for Fancybox image map (in gallery, use rel='anything')
  $('area.fancy').fancybox({
    closeClick        : true,
    helpers : {
      title : {
        type : 'inside'
      }
    },
    titleFormat       : function(title, currentArray, currentIndex, currentOpts) {
      return '<span id="fancybox-title-over">' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &mdash; ' + title : '') + '</span>';
    }
  });

  /* fb_plain: */
  // for Fancybox plain (in gallery, use rel='anything')
  $('a.fancygal').fancybox({
    loop          : false,
    closeClick    : true,
    helpers : {
      title : {
        type : 'inside'
      }
    },
    titleFormat   : function(title, currentArray, currentIndex, currentOpts) {
    return '<span id="fancybox-title-over">' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &mdash; ' + title : '') + '</span>';
    }
  });

  /* fb_iframe: */
  // for iframes
  $("a.iframe").fancybox({
    maxWidth      : 800,
    maxHeight     : 600,
    fitToView     : false,
    width         : '75%',
    height        : '75%',
    autoSize      : false,
    closeClick    : false,
    openEffect    : 'none',
    closeEffect   : 'none',
    type          : 'iframe',
    onCleanup     : function() {
      var myContent = this.href;
      $(myContent).unwrap();
    }
  });

  /* spamno: */
  $("a.spamno").each(function() {
    str         = $(this).attr('href');
    var re_at   = new RegExp("/q-q/");
    var re_addr = new RegExp("addr=(.+?)&");
    var re_name = new RegExp("name=(.*)");
    var addr_ar = re_addr.exec(str);
    var addr    = addr_ar[1];
    addr        = addr.replace(re_at,'@').split('').reverse().join('').replace(/\//g, '.');
    var name_ar = re_name.exec(str);
    var name    = name_ar[1];
    $(this).attr('href', 'mailto:' + addr);
    name        = name.replace("(addr)", addr);
    $(this).text(name);
  });

  /* pullquotes: */
  $('span.pql').each(function(index) { 
    var $parentParagraph = $(this).parent('p'); 
    $parentParagraph.css('position', 'relative'); 
    $(this).clone() 
      .addClass('pulled-left') 
      .prependTo($parentParagraph); 
  }); 
  $('span.pqr').each(function(index) { 
    var $parentParagraph = $(this).parent('p'); 
    $parentParagraph.css('position', 'relative'); 
    $(this).clone() 
      .addClass('pulled-right') 
      .prependTo($parentParagraph); 
  });

/* ready_end: */
});

