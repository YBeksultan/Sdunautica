$(document).ready(function() {
    $('.menu').click(function(event){
        $('.header_burger,.BigMenu').toggleClass('active');
        $('body').toggleClass('lock');
    });
  
    
});


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 300);
})