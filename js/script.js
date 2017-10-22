$(document).ready(function() {


   setTimeout(function(){
     $('body').addClass('loaded');

   }, 1000)
});


//Owl initializer funciton to prepare the carousel


$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:2,
    loop:false,
    margin:30,
    autoplay:true,
    autoplayTimeout:1000,
    stagePadding:30,
    autoplayHoverPause:true,
    smartSpeed:4500
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


stroke(container, 800, '#67809F', 0.9);
stroke(container1, 800, '#67809F', 0.85);
stroke(container2, 1200, '#67809F', 0.75);
stroke(container3, 1200, '#67809F', 0.9);

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
    strings: ["Graduate Developer","Ali Kiyan"],
    typeSpeed: 300
  });
  var typed = new Typed('#bio', {
    strings: ["My name is Ali and I am a 22-year-old international student and I am studying my Masters in Manchester. Studying computer engineering(software) in my bachelors enabled me to know different areas of computer science and development (especially web development and databases) have been one of the areas that I find it very rewarding. I love to learn and simply being better everyday and altough life has not been always easy for me, I try to accept its challenge. At this point of my life, I am looking for a graduate/junior role. I can relocate throughout the UK and I am looking for a postion where I can learn, take my skills to the next level, and work towards my objectives."],
    typeSpeed: 15
  });
  var typed = new Typed('#cvT', {
    strings: ["Ali Kiyan CV"],
    typeSpeed: 100
  });

  function stroke(name,duration, color, percentage){
        var bar = new ProgressBar.Line(name, {
              strokeWidth: 4,
              easing: 'easeInOut',
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
