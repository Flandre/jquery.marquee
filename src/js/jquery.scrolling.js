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
      this.width(o.width);
      this.height(o.height);
      this.css({
        'position': 'relative',
        'overflow': 'hidden'
      });
      var text = this.children('p');
      text.each(function (idx) {
        var mt = o.height + idx * ($(this).height() + parseInt($(this).css('margin-top')));
        $(this).css({
          'position': 'absolute',
          'top': mt
        });
        /* run animate */
        setAnimate($(this), mt, o.loop);
      });

      function setAnimate(ctx, top, loop) {
        if (loop != 0) {
          var lo = loop - 1;
          ctx.animate({
            top: -(ctx.height() + parseInt(ctx.css('margin-top')))
          }, top / o.scrollamount * o.scrolldelay, 'linear', function () {
            setAnimate(type, lo)
          })
        }
      }
    }
  });
})(jQuery);