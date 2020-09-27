$(document).ready(function () {
  $("#container").css("display", "none");
  $("#container1").css("display", "none");
  $("#container2").css("display", "none");
  $("#container3").css("display", "none");
  $("#icon").css("display", "none");
  $("#icon1").css("display", "none");
  $("#icon2").css("display", "none");
  $("#icon3").css("display", "none");

  setTimeout(function () {
    $("body").addClass("loaded");
  }, 1500);
});

//Owl initializer funciton to prepare the carousel

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    animateOut: "slideOutDown",
    animateIn: "flipInX",
    items: 1,
    margin: 10,
    stagePadding: 30,
    fluidSpeed: true,
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

// sticky nav functionality

jQuery(document).ready(function () {
  if ($(".cd-stretchy-nav").length > 0) {
    var stretchyNavs = $(".cd-stretchy-nav");

    stretchyNavs.each(function () {
      var stretchyNav = $(this),
        stretchyNavTrigger = stretchyNav.find(".cd-nav-trigger");

      stretchyNavTrigger.on("click", function (event) {
        event.preventDefault();
        stretchyNav.toggleClass("nav-is-visible");
        hamburger.classList.toggle("is-active");
      });
    });

    $(document).on("click", function (event) {
      !$(event.target).is(".cd-nav-trigger") &&
        !$(event.target).is(".cd-nav-trigger span") &&
        stretchyNavs.removeClass("nav-is-visible");
    });
  }
});


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
$win.on("scroll", function (s) {
  var top = $win.scrollTop();
  top = top / 4;
  $(".mainT").css("margin-left", top + "px");
});



var typed = new Typed("#myName", {
  strings: ["Full stack Web Engineer", "Ali Kiyan"],
  typeSpeed: 300,
});
var typed = new Typed("#bio", {
  strings: [
    "Full-stack web engineer with MSc in Databases and web systems. Lately, my focuse has been on ReactJS, NodeJS, Python and MySQL. I have been exposed with software developent life cycle and my interest is in finding scalable and maintainable solutions to problems.",
  ],
  typeSpeed: 40,
});

function stroke(name, duration, color, percentage) {
  var bar = new ProgressBar.Line(name, {
    strokeWidth: 4,
    easing: "easeIn",
    duration: duration,
    color: color,
    trailColor: "#34495e",
    trailWidth: 1,
    svgStyle: { width: "100%", height: "100%" },
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: "#999",
        position: "absolute",
        right: "0",
        top: "30px",
        padding: 0,
        margin: 0,
        transform: null,
      },
      autoStyleContainer: false,
    },
    from: { color: "#FFEA82" },
    to: { color: "#ED6A5A" },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });
  bar.animate(percentage);
}

document.querySelectorAll(".typed-cursor")[1].style.display = "none";

var c = 1;
$(document).on("scroll", function () {
  var x = $(window).scrollTop();
  var y = $("#skills").offset().top;
  console.log(x);
  console.log(parseInt(y) - 200);
  if (x > parseInt(y) - 200) {
    if (c == 1) {
      $("#container").css("display", "block");
      $("#container1").css("display", "block");
      $("#container2").css("display", "block");
      $("#container3").css("display", "block");
      $("#icon").css("display", "block");
      $("#icon1").css("display", "block");
      $("#icon2").css("display", "block");
      $("#icon3").css("display", "block");
      $("#container").addClass("animated fadeInUp");
      $("#container1").addClass("animated fadeInDown");
      $("#container2").addClass("animated fadeInUp");
      $("#container3").addClass("animated fadeInDown");
      $("#icon").addClass("animated fadeInUp");
      $("#icon1").addClass("animated fadeInDown");
      $("#icon2").addClass("animated fadeInUp");
      $("#icon3").addClass("animated fadeInDown");

      setTimeout(function () {
        stroke(container, 3200, "#589e54", 0.9);
        stroke(container1, 3200, "#67809F", 0.65);
        stroke(container2, 3200, "#68949f", 0.8);
        stroke(container3, 3200, "#74689f", 0.8);
      }, 1000);

      c = c + 1;
    }
  }
});
