$(function(){
  var carouselList = $("#carousel ul");
  setInterval(changeSlide, 3000);

    function changeSlide(){      carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);

      function moveFirstSlide(){
        var  firstItem = carouselList.find("li:first"),
             lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
      }
    }
    function slideBack(){
       carouselList.animate({'marginLeft':+400}, 500, moveFirstSlideBack);
       function moveFirstSlideBack(){
         var  firstItem = carouselList.find("li:first"),
              lastItem = carouselList.find("li:last");
         firstItem.before(lastItem);
         carouselList.css({marginLeft:0});
        }
     }
  $("#right").click(function(){
    changeSlide();
  });
  $("#left").click(function(){
    slideBack();
  });
});


















