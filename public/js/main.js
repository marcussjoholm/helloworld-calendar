$(document).ready(function() {
  // $("body").snowfall({ flakeCount: 100 });

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
});
