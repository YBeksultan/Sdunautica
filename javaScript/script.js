var tru = true;
$(document).ready(function() {
    $('.menu').click(function(event){
        $('.header_burger,.BigMenu, .menu, .header').toggleClass('active');
        $('body').toggleClass('lock');
   
        if(tru){
            tru = false;
            document.getElementById("enum").innerHTML = "close";
        }
        else {
            document.getElementById("enum").innerHTML = "Menu";
            tru = true;
        }
    });
  
    
});
$(document).ready(function() {
    $('.search').click(function(event){
        $('.inp').toggleClass('active');
        $('body').toggleClass('lock');
    });
  
    
});
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 500);
})

