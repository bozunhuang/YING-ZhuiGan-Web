// var slider = document.getElementById

$(document).ready(function () {
  $(".btn-hide").click(function () {
    $(".p-clickhide").toggle(1000);
    alert("ww");
  });
  $(".btn-hide").hover(
    function(){
      $(this).css("background-color", "#1F1F1F");
    },
    function(){
      $(this).css("background-color", "black");
    }
  );
});
