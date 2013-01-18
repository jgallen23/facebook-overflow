//facebook-overflow.js

(function($) {

  $.fn.fbOverflow = function() {

    var minHeight = 25;
    var maxHeight = 80;
    var maxInterval = 5;

    return this.each(function() {
      var el = $(this);

      var count = 0;

      el.css({
        height: minHeight,
        overflow: 'hidden'
      });

      var timeout = setInterval(function() {
        var height = $('iframe', el).height();
        if (height < maxHeight && height > minHeight) {
          el.css({ overflow: 'visible', height: 'inherit' });
          clearInterval(timeout);
        }
        count++;
        if (count == maxInterval)
          clearInterval(timeout);
      }, 500);
    });
  };
})(jQuery);
