function loadingProcess() {
  
}

$(document).ready(function() {
  console.log("document ready");

  $(window).resize(function () {
    console.log("window resize");

    if(window.innerWidth > 1024) {
      $(".toggle").removeAttr("style");
      console.log("removeAttr style");
    }

  });
  
  $("#toggle-btn").click(function () {
    console.log("toggle-btn click");

    $(".toggle").slideToggle();

  });

});

