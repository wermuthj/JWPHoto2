// const { doesNotMatch } = require("assert");

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


var infos = [{last: 'Doe', age: 39, height: 165}, {last: 'Bella', age: 22, height: 193}, {last: 'Jowsey', age: 98, height: 148}];

function find() {
  var a = document.getElementById('name').selectedIndex;
  var b = document.getElementsByClassName('option1')[a].value;
  var c = document.getElementById('info').selectedIndex;
  var d = document.getElementsByClassName('option2')[c].value;
 
  if (b === 'John') {
    var search = infos[0];
  } else if (b === 'Linda') {
    var search = infos[1];
  } else if (b === 'Harry') {
    var search = infos[2];
  }

  if (d === 'last') {
    var e = "'s last name is " + search.last;
  } else if (d === 'age') {
    var e = " is " + search.age + " years old";
  } else if (d === 'height') {
    var e = " is " + search.height + "cm tall";
  }
   document.getElementById('found').innerHTML = b + e;
}
