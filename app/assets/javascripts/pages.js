$(document).on('turbolinks:load', function(){

    //modals
    var modalBtns = document.querySelectorAll('.projBtn');
    modalBtns.forEach(function(btn){
      btn.onclick = function() {
        var projModal = btn.getAttribute('data-modal');
        document.getElementById(projModal).style.display =  "initial";
      };
    });
    
    var closeBtns = document.querySelectorAll(" .projClose");
    closeBtns.forEach(function(btn){
      btn.onclick = function() {
        var projModal = btn.closest('.projModal');
        projModal.style.display = "none";
        location.reload();
      };
    });
    
    window.onclick = function(event) {
      if (event.target.className === 'projModal') {
        event.target.style.display = "none";
        location.reload();
      };
    };

    //tooltips
    $('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
          .text(title)
          .appendTo('body')
          .fadeIn('slow');
    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
          .css({ top: mousey, left: mousex })
    });

});