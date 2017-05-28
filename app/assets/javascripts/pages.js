$(document).on('turbolinks:load', function(){

    //modals
    var modalBtns = document.querySelectorAll('.projBtn');
    modalBtns.forEach(function(btn){
      btn.onclick = function() {
        var projModal = btn.getAttribute('data-modal');
        document.getElementById(projModal).style.visibility =  "visible";
      }
    });
    
    var closeBtns = document.querySelectorAll(" .projClose");
    closeBtns.forEach(function(btn){
      btn.onclick = function() {
        var projModal = btn.closest('.projModal');
        projModal.style.display = "none";
        // $('iframe').attr('src', $('iframe').attr('src')); 
        // fix so correct src is replaced
      };
    });
    
    window.onclick = function(event) {
      if (event.target.className === 'projModal') {
        event.target.style.display = "none";
        // $('iframe').attr('src', $('iframe').attr('src'));
        // fix so correct src is replaced
      };
    };



});