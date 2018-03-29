$(document).ready(function() {


   setTimeout(function(){
     $('body').addClass('loaded');

   }, 2500)
});


//Owl initializer funciton to prepare the carousel

$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:65
  });

});

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
// hamburger.addEventListener("click", function() {
//   // Toggle class "is-active"
//   hamburger.classList.toggle("is-active");
//   // Do something else, like open/close menu
// });



// sticky nav functionality

jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');

		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
        hamburger.classList.toggle("is-active");
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
});



// Change style of navbar on scroll
// window.onscroll = function() {myFunction()};
// function myFunction() {
//     var navbar = document.getElementById("myNavbar");
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
//     } else {
//         navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
//     }
// }

// Used to toggle the menu on small screens when clicking on the menu button
// function toggleFunction() {
//     var x = document.getElementById("navDemo");
//     if (x.className.indexOf("w3-show") == -1) {
//         x.className += " w3-show";
//     } else {
//         x.className = x.className.replace(" w3-show", "");
//     }
// }

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
// var $win = $(window);
// $win.on('scroll', function(s){
//   var top = $win.scrollTop();
//   top = top/10;
// $('.aliMain').css('margin-left',top + 'px');
// });





//main text scroll
var $win = $(window);
$win.on('scroll', function(s){
  var top = $win.scrollTop();
  top = top/4;
$('.mainT').css('margin-left',top + 'px');
});



// // bounce animation for new link laramedia
// setInterval(function(){
//     $('#laramedia').toggleClass('animated pulse');
// },1000);
// // bounce animation for new link campJS
// setInterval(function(){
//     $('#campJS').toggleClass('animated pulse');
// },1200);
// // bounce animation for new link for ge
// setInterval(function(){
//     $('#ge').toggleClass('animated pulse');
// },1500);
// //animating the email
// // setInterval(function(){
// //     $('#email').toggleClass('animated pulse');
// // },2000);
// //aniamting CV
// setInterval(function(){
//     $('#cv').toggleClass('animated wobble');
// },2100);


  var typed = new Typed('#myName', {
    strings: ["Postgrad Developer","Ali Kiyan"],
    typeSpeed: 300
  });
  var typed = new Typed('#bio', {
    strings: ["My name is Ali and I am a 22-year-old international student and I have studied MSc Databases and web-based systems (Expecting Distinction) in Manchester. At this point of my life, I am looking for a graduate/junior role where I can gain hands-on experience and master my skills in web development and databases. I can relocate, and I am looking for a postion where I can learn, take my skills to the next level, and work towards my objectives. Since I am an international student, I will need tier 2 Sponsorship to be able to work in UK."],
    typeSpeed: 25
  });
  var typed = new Typed('#cvT', {
    strings: ["Ali Kiyan CV"],
    typeSpeed: 100
  });

  function stroke(name,duration, color, percentage){
        var bar = new ProgressBar.Line(name, {
              strokeWidth: 4,
              easing: 'easeIn',
              duration: duration,
              color: color,
              trailColor: '#34495e',
              trailWidth: 1,
              svgStyle: {width: '100%', height: '100%'},
              text: {
                style: {
                  // Text color.
                  // Default: same as stroke color (options.color)
                  color: '#999',
                  position: 'absolute',
                  right: '0',
                  top: '30px',
                  padding: 0,
                  margin: 0,
                  transform: null
                },
                autoStyleContainer: false
              },
              from: {color: '#FFEA82'},
              to: {color: '#ED6A5A'},
              step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
              }
         });

        bar.animate(percentage);

   }


document.querySelectorAll(".typed-cursor")[1].style.display = "none";
document.querySelectorAll(".typed-cursor")[2].style.display = "none";
  var c = 1;
$(document).on('scroll', function(){
  var x = $(window).scrollTop();
  var y = $('#skills').offset().top;
  console.log(x);
  console.log( parseInt(y)-200);
  if(x > (parseInt(y)-200) ){
    if(c == 1){
      $('#container').addClass('animated fadeInRightShort');
      $('#container1').addClass('animated fadeInLeftShort');
      $('#container2').addClass('animated fadeInRightShort');
      $('#container3').addClass('animated fadeInLeftShort');
      $('#icon').addClass('animated fadeInRightShort');
      $('#icon1').addClass('animated fadeInLeftShort');
      $('#icon2').addClass('animated fadeInRightShort');
      $('#icon3').addClass('animated fadeInLeftShort');
      stroke(container, 2800, '#589e54', 0.8);
      stroke(container1, 2800, '#67809F', 0.45);
      stroke(container2, 2800, '#68949f', 0.75);
      stroke(container3, 2800, '#74689f', 0.7);
      c = c+1;
    }

  }
});
