jQuery(document).ready(function(){
    AOS.init({
       once: true
    });
  
  
  });
  
  
  
  
  
  if ($(window).width() < 768) {
  
    jQuery('#nav-icon4').click(function(){
      jQuery('#nav-icon4').toggleClass('open');
      jQuery('.mainMenu').toggleClass('activeMenu');
      jQuery('body').toggleClass('fixed');
    });
  
    
  
    // $('footer .fotLinks h5').click(function(){
    //   $(this).parents('.fotLinks').find('ul').slideToggle();
    //   $(this).toggleClass('active');
    // });
  
  
    
    }
    


    $('[data-fancybox]').fancybox({ protect: true});