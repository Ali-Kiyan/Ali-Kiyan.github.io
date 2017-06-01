<!DOCTYPE html>
<html>
<title>Ali-Kiyan</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<script src="js/script.js"></script>

<body>

<!-- Navbar (sit on top) -->
<div class="w3-top" style= " color: #000;">
  <div class="w3-bar" id="myNavbar">
    <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
      <i class="fa fa-bars" ></i>
    </a>
    <a href="#home" class="w3-bar-item w3-button w3-hover-light-gray "><i class="fa fa-home"></i> HOME</a>
    <a href="#about" class="w3-bar-item w3-button w3-hide-small w3-hover-light-gray"><i class="fa fa-user"></i> ABOUT</a>
    <a href="#portfolio" class="w3-bar-item w3-button w3-hide-small w3-hover-light-gray "><i class="fa fa-th"></i> PORTFOLIO</a>
    <a href="#contact" class="w3-bar-item w3-button w3-hide-small w3-hover-light-grey "><i class="fa fa-envelope"></i> CONTACT</a>
  </div>

  <!-- Navbar on small screens -->
  <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
    <a href="#about" class="w3-bar-item w3-button" onclick="toggleFunction()">ABOUT</a>
    <a href="#portfolio" class="w3-bar-item w3-button" onclick="toggleFunction()">PORTFOLIO</a>
    <a href="#contact" class="w3-bar-item w3-button" onclick="toggleFunction()">CONTACT</a>
  </div>
</div>

<!-- First Parallax Image with Logo Text -->
<div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
  <div class="w3-display-middle" style="white-space-space:nowrap;">
    <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-hover-greyscale w3-hover-opacity">Ali Kiyan</span></span>
  </div>
</div>

<!-- Container (About Section) -->
<div class="w3-content w3-container w3-padding-64" id="about">
  <h3 class="w3-center">ABOUT ME</h3>
  <p class="w3-center"><em>I am Developer!</em></p>
  <p>My name is Ali and I am studying my master course in databases and web-based systems as an international student.
     I am 22 years old and a tech fanic looking for an oppotunity to work and master my skill. I have experience mostly in
      web development but I have never wanted to restrict myself and I would like to develop applications and web applications as well.</p>
    <span class="w3-col m6 w3-hide-small w3-padding-large ">
        <p class="fa fa-university">  What I have done so far</p>
        <a href="Https://Ali-Kiyan.github.io/Biography/Files/Advanced Databases-Case Study.pdf"class="w3-button w3-hover-light-green w3-animate-left"><i class="fa fa-download w3-margin-right"></i>Advanced Databases-Case Study</a>
    <a href="Https://Ali-Kiyan.github.io/Biography/Files/Advanced_database.pdf" class="w3-button w3-hover-light-blue w3-animate-left"><i class="fa fa-download w3-margin-right "></i>Advanced_database</a>
    <a href="Https://Ali-Kiyan.github.io/Biography/Files/SemanticWeb&InformationExtraction-CaseStudy.pdf" class="w3-button w3-hover-pale-red w3-animate-left"><i class="fa fa-download w3-margin-right"></i>Semantic_Web & Information Extraction-Case Study</a>
    <a href="Https://Ali-Kiyan.github.io/Biography/Files/Semantic_Web&InformationExtration.pdf" class="w3-button w3-hover-brown w3-animate-left"><i class="fa fa-download w3-margin-right"></i>Semantic_Web & Information Extraction</a>

    </span>


  <div class="w3-row">
    <div class="w3-col m6 w3-left w3-padding-large">
      <p><b><i class="fa fa-graduation-cap w3-margin-right"></i>Certificates</b></p>
        <p>MSc databases and Web-Based Systems <span class="w3-button w3-light-grey w3-animate-right">2017-Present</span></p>
        <p>Bachelor of Computer Engineering  <span class="w3-button w3-light-grey w3-animate-right">2012-2016</span></p>
        <p>GPA:16.61 out of 20</p>
        <p>Diploma of Mathematics and Physics <span class="w3-button w3-light-grey w3-animate-right">2008-2011</span></p>
        <p>GPA:18.95 out of 20</p>
        <!--
        <a href="http://localhost:8888/Biography/files/Advanced Databases-Case Study.pdf"class="w3-button w3-hover-light-green"><i class="fa fa-download w3-margin-right"></i>Advanced Databases-Case Study</a>
        <a href="http://localhost:8888/Biography/files/Advanced_database.pdf" class="w3-button w3-hover-light-blue"><i class="fa fa-download w3-margin-right"></i>Advanced_database</a>
        <a href="http://localhost:8888/Biography/files/SemanticWeb&InformationExtraction-CaseStudy.pdf" class="w3-button w3-hover-pale-red"><i class="fa fa-download w3-margin-right"></i>Semantic_Web & Information Extraction-Case Study</a>
        <a href="http://localhost:8888/Biography/files/Semantic_Web&InformationExtration.pdf" class="w3-button w3-hover-brown"><i class="fa fa-download w3-margin-right"></i>Semantic_Web & Information Extraction</a>
        <a href="http://localhost:8888/Biography/files/Advanced Databases-Case Study.pdf"class="w3-button w3-hover-light-green"><i class="fa fa-download w3-margin-right"></i>Advanced Databases-Case Study</a>
        <a href="http://localhost:8888/Biography/files/Advanced_database.pdf" class="w3-button w3-hover-light-blue"><i class="fa fa-download w3-margin-right"></i>Advanced_database</a>
        <a href="http://localhost:8888/Biography/files/SemanticWeb&InformationExtraction-CaseStudy.pdf" class="w3-button w3-hover-pale-red"><i class="fa fa-download w3-margin-right"></i>Semantic_Web & Information Extraction-Case Study</a>
        <a href="http://localhost:8888/Biography/files/Semantic_Web&InformationExtration.pdf" class="w3-button w3-hover-brown"><i class="fa fa-download w3-margin-right"></i>Semantic_Web & Information Extraction</a>
        -->
    </div>


  </div>
  <p class="w3-large w3-center w3-padding-16">My skills :</p>
    <p class="w3-wide"><i class="fa fa-laptop"></i>Programming</p>
    <div class="w3-light-gray">
        <div class="w3-container w3-padding-small w3-grey w3-center" style="width:70%">70%</div>
    </div>
  <p class="w3-wide"><i class="fa fa-code"></i>Web Design</p>
  <div class="w3-light-gray">
    <div class="w3-container w3-padding-small w3-grey w3-center" style="width:60%">60%</div>
  </div>
    <p class="w3-wide"><i class="fa fa-pencil"></i>Database Design</p>
    <div class="w3-light-grey">
        <div class="w3-container w3-padding-small w3-grey w3-center" style="width:85%">85%</div>
    </div>
  <p class="w3-wide"><i class="fa fa-database"></i>SQL</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-grey w3-center" style="width:80%">80%</div>
  </div>
</div>

<div class="w3-row w3-center w3-dark-grey w3-padding-16">
    <a href="Https://Ali-Kiyan.github.io/Biography/Files/Ali_kiyan_CV.pdf" class="w3-button w3-hover-white w3-animate-left"><i class="fa fa-download w3-margin-right"></i>Ali Kiyan CV</a>
<!--
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">HTML</span><br>
  </div>
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">CSS</span><br>

  </div>
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">PHP</span><br>

  </div>
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">SQL</span><br>
  </div>
    -->
</div>

<!-- Second Parallax Image with Portfolio Text -->
<div class="bgimg-2 w3-display-container w3-opacity-min">
  <div class="w3-display-middle">
    <span class="w3-xxlarge w3-text-white w3-wide w3-hover-opacity">PORTFOLIO</span>
  </div>
</div>

<!-- Container (Portfolio Section) -->
<div class="w3-content w3-container w3-padding-64" id="portfolio">
  <h3 class="w3-center">MY WORK</h3>
  <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) -->
  <div class="w3-row-padding w3-center">
      <p>Here is my latest work</p>
  </div>
    <div class="w3-section w3-center">

            <img style ="width:50%;" src="images/Green_Environment_Demo.png" onclick="onClick(this)" class="w3-hover-opacity">
        </br>
        <a href="Https://Ali-Kiyan.github.io/Biography/Files/Green_environment_Description.pdf" class="w3-button w3-hover-pale-green"><i class="fa fa-download w3-margin-right"></i>Green Environment Description</a>
        <a href="Https://Ali-Kiyan.github.io/Biography/Files/Green_environment.zip" class="w3-button w3-hover-pale-blue"><i class="fa fa-download w3-margin-right"></i>Green Environment Pages</a>
        </br>

    </div>
<!--
  <div class="w3-row-padding w3-center w3-section">
    <div class="w3-col m3">
      <img src="images/2.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="The mist">
    </div>

    <div class="w3-col m3">
      <img src="images/2.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="My beloved typewriter">
    </div>

    <div class="w3-col m3">
      <img src="images/7.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Empty ghost train">
    </div>

    <div class="w3-col m3">
      <img src="images/8.jpg" style="width:100%" onclick="onClick(this)" class="w3-hover-opacity" alt="Sailing">
    </div>
    <button class="w3-button w3-padding-large w3-light-grey" style="margin-top:64px">LOAD MORE</button>
    </div>
    -->
  </div>


<!-- Modal for full size images on click-->
<div id="modal01" class="w3-modal"  onclick="this.style.display='none'" style="background-color:#3c3c3c">
  <span class="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i class="fa fa-remove"></i></span>
  <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
    <img id="img01" class="w3-image">
    <p id="caption" class="w3-opacity w3-large" ></p>
  </div>
</div>


<!-- Third Parallax Image with Portfolio Text -->
<div class="bgimg-3 w3-display-container w3-opacity-min">
  <div class="w3-display-middle">
     <span class="w3-xxlarge w3-text-black w3-hover-opacity" ">CONTACT</span>
  </div>
</div>

<!-- Container (Contact Section) -->
<div class="w3-content w3-container w3-padding-64" id="contact">
  <h3 class="w3-center">WHERE I LIVE</h3>
  <p class="w3-center"><em>I'd love your feedback!</em></p>

  <div class="w3-row w3-padding-32 w3-section">
      <!--
    <div class="w3-col m4 w3-container">
      <!-- Add Google Maps -->
     <!-- <div id="googleMap" class="w3-round-large w3-greyscale" style="width:100%;height:400px;"></div>
    </div> -->
    <div class="w3-col m8 w3-panel">
      <div class="w3-large w3-margin-bottom">
        <i class="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Manchester, United Kingdom<br>
        <i class="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +44 7946229886<br>
        <i class="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: Alikiyand@gmail.com<br>
      </div>
        <!--
      <p>Swing by for a cup of <i class="fa fa-coffee"></i>, or leave me a note:</p>
      <form action="/action_page.php" target="_blank">
        <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
          <div class="w3-half">
            <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name">
          </div>
          <div class="w3-half">
            <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email">
          </div>
        </div>
        <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message">
        <button class="w3-button w3-black w3-right w3-section" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </form>
      -->
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="w3-center w3-black w3-padding-32 w3-opacity w3-hover-opacity-off">
  <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
    <p class="w3-center">&copy; 2017 Ali Kiyan</p>
    <!--
  <div class="w3-xlarge w3-section">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
  </div>
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
  -->
</footer>
</body>
</html>
