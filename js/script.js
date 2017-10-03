// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}


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



// bounce animation for new link laramedia
setInterval(function(){
    $('#laramedia').toggleClass('animated pulse');
},1000);
// bounce animation for new link campJS
setInterval(function(){
    $('#campJS').toggleClass('animated pulse');
},1200);
// bounce animation for new link for ge
setInterval(function(){
    $('#ge').toggleClass('animated pulse');
},1500);
//animating the email
// setInterval(function(){
//     $('#email').toggleClass('animated pulse');
// },2000);
//aniamting CV
setInterval(function(){
    $('#cv').toggleClass('animated wobble');
},2100);


  var typed = new Typed('#myName', {
    strings: ["Graduate Developer","Ali Kiyan"],
    typeSpeed: 300
  });
  var typed = new Typed('#bio', {
    strings: ["My name is Ali and I am studying my masters ( Databases and Web-Based Systems) as an international student. I am a 22 year old developer looking for an oppotunity to work and master my skills. Having studied in software engineering in my Bachelor, I can say I have a proper understanding of computer science and software development. I have experience in web development and designing full web sites (front-end and backend with database design). I enjoy learning new skills and this is what I trying to do everyday."],
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
