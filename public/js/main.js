$(document).ready(function() {
  function openBox($el) {
    var height = $(window).height();
    var width = $(window).width();

    var containerHeight = $(".container").height();
    var containerWidth = $(".container").height();

    var topPos = (height - containerHeight) / 4;
    var leftPos = (width - containerWidth) / 4;

    window.setTimeout(function() {
      $el
        .css({
          top: -topPos + "px",
          left: -leftPos + "px",
          height: "calc(100% + " + topPos * 2 + "px)",
          width: "calc(100% + " + leftPos * 2 + "px)"
        })
        .addClass("open");
    }, 0);

    window.setTimeout(function() {
      $el.removeAttr("style").removeClass("open");
    }, 2000);
  }

  $("body").snowfall({ flakeCount: 100 });

  const randomDay = Math.floor(Math.random() * 24) + 1;

  for (var i = 1; i <= 24; i++) {
    var boxClass;
    if (i < randomDay) {
      boxClass = "past";
    } else if (i === randomDay) {
      boxClass = "present";
    } else {
      boxClass = "future";
    }

    $(".box-" + i).addClass(boxClass);
  }

  $(".box").on("click", function() {
    var $el = $(this);
    var classes = $el.attr("class");
    if (classes.includes("past")) {
      openBox($el);
    } else if (classes.includes("present")) {
      window.setTimeout(openBox, 0, $el);
      //$(this).addClass("unlock");
    } else if (classes.includes("future")) {
    }
  });
});
