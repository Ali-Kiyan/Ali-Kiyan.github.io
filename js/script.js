// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// //connecting scroll to a div class
//
//
//     var $win = $(window);
//     $win.on('scroll', function(s){
//
//     var top = $win.scrollTop();
//
//     top = top - 4300;
//
//     if(top<0)
//     $('.contactInfo').css('margin-left',top + 'px');
// });


//image scroll
var $win = $(window);
$win.on('scroll', function(s){
  var top = $win.scrollTop();
  top = top/8;
$('.aliMain').css('margin-right',top + 'px');
});

//main text scroll
var $win = $(window);
$win.on('scroll', function(s){
  var top = $win.scrollTop();
  top = top/2;
$('.mainT').css('margin-left',top + 'px');
});



// bounce animation for new link
setInterval(function(){
    $('#laramedia').toggleClass('animated swing');
},1500);
// bounce animation for new link
setInterval(function(){
    $('#campJS').toggleClass('animated swing');
},1500);
//animating the email
setInterval(function(){
    $('#email').toggleClass('animated swing');
},2000);
//aniamting CV
setInterval(function(){
    $('#cv').toggleClass('animated flash');
},2000);


  var typed = new Typed('#myName', {
    strings: ["Graduate Developer","Ali Kiyan"],
    typeSpeed: 300
  });
  var typed = new Typed('#bio', {
    strings: ["My name is Ali and I am studying my masters ( Databases and Web-Based Systems) as an international student. I am a 22 year old tech fanatic looking for an oppotunity to work and master my skill. Having studied in software engineering in my Bachelor, I can say I have a proper understanding of computer science and software development. I have experience in web development and designed full web sites (front-end and backend with database design). I would like to develop applications and web applications as well."],
    typeSpeed: 30
  });
  var typed = new Typed('#cvT', {
    strings: ["Ali Kiyan CV"],
    typeSpeed: 100
  });


document.querySelectorAll(".typed-cursor")[1].style.display = "none";
document.querySelectorAll(".typed-cursor")[2].style.display = "none";
