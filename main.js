//Click counter
var clicks = 0;
function hello() {
  clicks += 1;
  document.getElementById('click').innerHTML = clicks; 
}
function reset() {
  clicks = 0;
  document.getElementById('click').innerHTML = clicks;
}
//cookie Consent
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
//Age Verification
function ageTester() {
  var inputValue = document.getElementById('age').value
  if (inputValue >= 18) {
    $('.box').fadeOut(200);
    $('body').css('overflow', 'auto');

  } else {
    {window.location = 'age.html'}
  }
}

//Name infos
var infos = [{last: 'Doe', age: 39, height: 165}, {last: 'Bella', age: 22, height: 193}, {last: 'Jowsey', age: 98, height: 148}];

function find() {
 
 let search; 
 let e;

  var a = document.getElementById('name').selectedIndex;
  var b = document.getElementsByClassName('option1')[a].value;
  var c = document.getElementById('info').selectedIndex;
  var d = document.getElementsByClassName('option2')[c].value;
 
  if (b === 'John') {
    search = infos[0];
  } else if (b === 'Linda') {
    search = infos[1];
  } else if (b === 'Harry') {
    search = infos[2];
  }

  if (d === 'last') {
     e = "'s last name is " + search.last;
  } else if (d === 'age') {
    e = " is " + search.age + " years old";
  } else if (d === 'height') {
    e = " is " + search.height + "cm tall";
  }
   document.getElementById('found').innerHTML = b + e;
}




var articles = [
  {
    "id": 101,
    "title": "Die Wirtschaft ist gebrochen ",
    "text": "Doggo ipsum boofers.  Corgo heck heckin angery woofer pats such treat noodle horse, length boy sub woofer big ol pupper borking doggo.",
    "ressort": "economy",
    "author": "hugo",
    "release": new Date('2019-06-28'),
  }, 
  {
    "id": 102,
    "title": "Neue Technologien ",
    "text": "Doggo ipsum boofers.  Corgo heck heckin angery woofer pats such treat noodle horse, length boy sub woofer big ol pupper borking doggo.",
    "ressort": "international",
    "author": "lara",
    "release": new Date('2020-06-28'),
  },
  {
    "id": 103,
    "title": "Weitere Technologien ",
    "text": "Doggo ipsum boofers.  Corgo heck heckin angery woofer pats such treat noodle horse, length boy sub woofer big ol pupper borking doggo.",
    "ressort": "tech",
    "author": "lara",
    "release": new Date('2017-06-28'),
  },
  {
    "id": 104,
    "title": "Trump ist tot ",
    "text": "Doggo ipsum boofers.  Corgo heck heckin angery woofer pats such treat noodle horse, length boy sub woofer big ol pupper borking doggo.",
    "ressort": "international",
    "author": "heinz",
    "release" : new Date('2021-06-28'),
  },
  {
    "id": 105,
    "title": "Neue Technologien ",
    "text": "Doggo ipsum boofers.  Corgo heck heckin angery woofer pats such treat noodle horse, length boy sub woofer big ol pupper borking doggo.",
    "ressort": "economy",
    "author": "lara",
    "release": new Date('2015-06-28'),
  },
  {
    "id": 106,
    "title": "Weitere Technologien ",
    "text": "Doggo ipsum boofers.  Corgo heck heckin angery woofer pats such treat noodle horse, length boy sub woofer big ol pupper borking doggo.",
    "ressort": "tech",
    "author": "heinz",
    "release": new Date('2004-06-28'),
  },
  {
    "id": 107,
    "title": "Trump ist tot ",
    "text": "Doggo ipsum boofers.  Corgo heck heckin angery woofer pats such treat noodle horse, length boy sub woofer big ol pupper borking doggo.",
    "ressort": "international",
    "author": "hugo",
    "release" : new Date('2007-06-28'),
  },
  ];

  

  function findArticle() {

    let ressort = document.getElementById('ressort1').selectedIndex;
    let filters1;
    let ressort2;
    if (ressort == 0) {
      filters1 = articles.filter(a => a.ressort == "tech" || a.ressort == "international" || a.ressort == "economy");
    } else {
      ressort2 = document.getElementsByClassName('articles1')[--ressort].value;
      filters1 = articles.filter(a => a.ressort == ressort2);
    }

    console.log(ressort2)
  

    let writer = document.getElementById('author').selectedIndex;
    let filters2;
    let writer2;
    if (writer == 0) {
      filters2 = filters1.filter(a => a.author == "lara" || a.author == "hugo" || a.author == "heinz");
    } else {
      writer2 = document.getElementsByClassName('articles2')[--writer].value;
      filters2 = filters1.filter(a => a.author == writer2);
    }
    let releasedate = document.getElementById('release').selectedIndex;
    let sortedActivities;
    if (releasedate == 0) {
        sortedActivities = filters2.slice().sort((a, b) => a.release - b.release)
    } else {
      sortedActivities = filters2.slice().sort((a, b) => b.release - a.release)
    }
   
    const filteredd = Object.values(sortedActivities); 
    console.log(filteredd);
    var object1 = "";
     var loop;
     for (loop = 0; loop < filteredd.length; loop++) {
       object1 += 
       `title: ${filteredd[loop].title}` + 
       `ressort: ${filteredd[loop].ressort}<br>`+
       `text: ${filteredd[loop].text}<br>`+
       `author: ${filteredd[loop].author}<br>`+
       `release: ${filteredd[loop].release}<br><br>`;
     }
   
     document.getElementById('found1').innerHTML = object1;
     console.log(object1)
      

     console.log(sortedActivities)
  }

  

 