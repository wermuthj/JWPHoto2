var clicks = 0;
function hello() {
  clicks += 1;
  document.getElementById('click').innerHTML = clicks; 
}
function reset() {
  clicks = 0;
  document.getElementById('click').innerHTML = clicks;
}

$(document).ready(function(){   
  setTimeout(function () {
      $("#cookieConsent").fadeIn(200);
   }, 1000);
   $(".cookieConsentNO").click(function() {
     document.write('You may not access this page')
   })
  $("#closeCookieConsent, .cookieConsentOK").click(function() {
      $("#cookieConsent").fadeOut(200);
  }); 
}); 

function ageTester() {
  var inputValue = document.getElementById('age').value
  if (inputValue >= 18) {
    $('.box').fadeOut(200);
    $('body').css('overflow', 'auto');

  } else {
    document.write('You must be at least 18 Years old in order to access this page')
  }
}

 
