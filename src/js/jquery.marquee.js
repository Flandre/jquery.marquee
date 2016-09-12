(function ($) {
  $.fn.extend({
    marquee: function (options) {
      var defaults = {
        width: 1000,
        height: 30,
        direction: 'up',
        scrollamount: 1,
        scrolldelay: 100,
        loop: -1
      };
      options = $.extend(defaults, options);
      var o = options;
      var html = this.html();
      this.empty().append($('<div></div>').append(html));
      this.width(o.width);
      this.height(o.height);
      this.css({
        'position': 'relative',
        'overflow': 'hidden'
      });
      var text = this.children('div');
      text.css({
        'position': 'absolute'
      });
      /* run animate */
      setAnimate(o.direction);

      function setAnimate(type){
        if(type == 'up'){
          text.css('top',  o.height);
          text.animate({
            top: -text.height()
          }, (text.height() + o.height) / o.scrollamount * o.scrolldelay, 'linear', function(){setAnimate(type)})
        }
        if(type == 'down'){
          text.css('bottom',  o.height);
          text.animate({
            bottom: -text.height()
          }, (text.height() + o.height) / o.scrollamount * o.scrolldelay, 'linear', function(){setAnimate(type)})
        }
      }
    }
  });
})(jQuery);