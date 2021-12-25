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
});

        var proffession = 'Study (We hope)';
        var ind1 = 0;
        var bool = true;
        var ind2 = 10;
        var prof = ['Study (We hope)','Chill with your friends', 'Have lunch (ofc)', 'Drink tea with teachers', 'Have fun', "Be SDUdent", "Take part in activities"];

        setInterval(function() {
                if(bool){
                    document.getElementById('activity').innerHTML = prof[ind1].substring(0, ind2);
                    ind2--;
                    if(ind2 < 0){
                      ind1++;
                      if(ind1 == prof.length){
                        ind1 = 0;
                      }
                      ind2 = 1;
                      bool = false;
                    }
                  }
                  else {
           
                    document.getElementById('activity').innerHTML = prof[ind1].substring(0, ind2);
                    ind2++;
                    if(ind2 == prof[ind1].length+1){
               
                      ind2 = prof[ind1].length-1;
                      bool = true;
                    }
                  }
            
          }, 150);
  

