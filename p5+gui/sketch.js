// var slider = document.getElementById

$(document).ready(function () {
  $(".btn-hide").click(function () {
    $(".p-clickhide").toggle(1000);
  });

  $(".btn").hover(
    function () {
      $(this).css("background-color", "#1F1F1F");
    },
    function () {
      $(this).css("background-color", "black");
    }
  );

  $(".btn-fade").click(function () {
    $(".p-clickfade").fadeTo("fast", 0.4);
  });

  $(".btn-slide").click(function () {
    $(".p-clickslide").slideToggle("fast");
  });

  // $(".btn-animate").click(function () {
  //   $(".p-clickanimate").animate({
  //     left: '60px',
  //     fontSize: '2rem'
  //   }, "fast");
  // });

  $(".btn-animate").click(function () {
    $(".p-clickanimate").animate(
      {
        left: "60px",
      },
      "fast"
    );
    $(".p-clickanimate").animate(
      {
        fontSize: "2rem",
      },
      "fast"
    );
  });


  //html methods
  $(".btn-gettext").click(function(){
    $(".p-showtext").text(function(i, origText){
          return $(".hidden").text();
    })
  });

  $(".btn-addtext").click(function(){
    var txt = document.createElement("p");
    txt.innerHTML = "This is a new p element";
    $(".p-addtext").append("Hello ");
    $(".p-addtext").after(txt);
  });

  $(".btn-removetext").click(function(){
    $(".div-add").empty();
  });
});
