<?php 

$host = "localhost";

$username = "";

$password = "";

$db = "clientcounter";

$dbcon = mysqli_connect($host,$username,$password,$db);

$change = mysqli_query($dbcon,"UPDATE clients SET count = count+1");

$dbcon->close();

?>


<!DOCTYPE html>
<html>
    <head>
        <title>Bredis</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="Bredis Victor full stack developer">
        <meta name="description" content="Professional website development: design, front-end development, back-end development, full stack development">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="media.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>  
        <script src="main.js"></script>
        <body>
            <script>
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

				ga('create', 'UA-87002940-1', 'auto');
				ga('send', 'pageview');

			</script>
           <div id="loadingconteiner">
               <span id="bredis1">
                    <span id="bredisspan">Bredis 
                        <span class="bspan"> Victor</span>
                    </span>
                </span>    
                <div id="bredis2">
                    <div id="b">B</div>
                    <div id="r">r</div>
                    <div id="e">e</div>
                    <div id="d">d</div>
                    <div id="i">i</div>
                    <div id="s">s</div>
                    <div id="v">V</div>
                    <div id="i2">i</div>
                    <div id="c">c</div>
                    <div id="t">t</div>
                    <div id="o">o</div>
                    <div id="r2">r</div>
                </div>    
                <span id="loading">Loading...</span>
                <div id="bordertop"></div>
                <div id="borderright"></div>
                <div id="borderbottom"></div>
                <div id="borderleft"></div>
            </div>
           
           
           <button id="menubutton">
               <span class="buttonLines" id="topLine"></span>
               <span class="buttonLines" id="midleLine"></span>
               <span class="buttonLines" id="bottomLine"></span>
           </button>
            <nav >
                <div id="navicon"></div>
                <div id="menuwrapper">
                    <ul id="menu">
                        <li>
                            <a href="#aboutme">ABOUT ME</a>
                        </li>
                        <li>
                            <a href="#skills">SKILLS</a>
                        </li>
                        <li>
                            <a href="#portfolio">PORTFOLIO</a>
                        </li>
                        <li>
                            <a href="#contacts">CONTACTS</a>
                        </li>
                    </ul>   
                </div>
            </nav>
           
           
            <header>
                <div id="logo">
                    <h1>Bredis<span> Victor</span></h1>
                    <span>FullStack development/web design</span>
                </div>
            </header> 
            <section id="aboutme">
                <div class="aboutheader">
                    <h2>ABOUT ME</h2>
                    <span>LET  me introduce myself </span>
                    <span class="line"></span>
                </div>
                <div id="aboutcontent">
                    <div id="abiutsection">
                        <span>ABOUT MYSELF</span>
                        <p>
                           <span>Hello my name is Bredis Victor!</span> 
                           <br>
                           <br>
                           <br>
                        I'am web developer just started may lond way, but i'am already walking with big and confident steps. I am very hard-working and purposeful, and my achievements will soon make themselves felt
 
                        </p>
                    </div>
                    <div id="picsection">
                        <span>PHOTO</span>
                        <div id="myPic"></div>
                    </div>
                    <div id="personalinfosection">
                        <span>PERSONAL INFORMATION</span>
                        <p>
                            <span id="myname">BREDIS VICTOR</span>
                            <br>
                            <br>
                            <br>
                            Professional website development: design, front-end, back-end development
                            <br>
                            
                            Birthday: 13 to november 1985
                            <br>
                            
                            Phone number: +972-54-313-72-13
                            <br>
                            
                            E-mail: <span class="weamail">thevictor85@gmail.com</span>
                            <br>
                            
                            Web-site: <span class="weamail">http://bredis.org
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <section id="skills">
                <div class="aboutheader">
                    <h2>SKILLS</h2>
                    <span>THE PROGRAMMING LANGUAGES THAT I KNOW</span>
                    <span class="line"></span>
                </div>
                <div id="skillsmain">
                        <p>
                        You are always a student, never a master. 
                        You have to keep moving forward.<br>
                        <span id="pspan">Conrad L. Hall</span>
                        </p>  
                        <div id="skillsinner">
                            <div class="scales" id="html5">
                           <span class="progress">In progress</span>
                            <span class="scalesspanhtml5">HTML5</span>
                            <div class="clacalesinner" id="html5scale"></div>
                        </div>
                            <div class="scales" id="css3">
                           <span class="progress">In progress</span>
                            <span class="scalesspancss3">CSS3</span>
                            <div class="clacalesinner" id="css3scale"></div>
                        </div>
                            <div class="scales" id="javascript">
                           <span class="progress">In progress</span>
                            <span class="scalesspanjavascript">JavaScript</span>
                            <div class="clacalesinner" id="javascriptscale"></div>
                        </div>
                            <div class="scales" id="jquery">
                           <span class="progress">In progress</span>
                            <span class="scalesspanjquery">JQuery</span>
                            <div class="clacalesinner" id="jqueryscale"></div>
                        </div>
                        <div class="scales" id="php">
                            <span class="progress">In progress</span>
                            <span class="scalesspanphp">PHP</span>
                            <div class="clacalesinner" id="phpscale"></div>
                        </div>
                        <div class="scales" id="mysql">
                            <span class="progress">In progress</span>
                            <span class="scalesspanmysql">MySql</span>
                            <div class="clacalesinner" id="mysqlscale"></div>
                        </div>
                        <div class="scales" id="angularjs">
                           <span class="progress">Soon</span>
                            <span class="scalesspanangularjs">AngularJs</span>
                            <div class="clacalesinner" id="angularjsscale"></div>
                        </div>
                        <div class="scales" id="nodejs">
                            <span class="progress">Soon</span>
                            <span class="scalesspannodejs">NodeJs</span>
                            <div class="clacalesinner" id="nodejsscale"></div>
                        </div>
                        <div class="scales" id="nosql">
                            <span class="progress">Soon</span>
                            <span class="scalesspannosql">NoSql</span>
                            <div class="clacalesinner" id="nosqlscale"></div>
                        </div>
                        </div>
                    </div>
            </section>
            <section id="portfolio">
                <div class="aboutheader">
                    <h2 id="w">PORTFOLIO</h2>
                    <span>MY LAST WORKS</span>
                    <span class="line w"></span>
                </div>
                <div id="workinner">
                    <div class="works">
                        <img src="img/pluginimg.jpg" alt="">
                        <span class="filter"></span>
                        <div class="imagetextwrapper">
                            <h3>IMAGE GALLERY PLUGIN</h3>
                            <a href="works/galleryPlugIn/index.html" target="_blank">Review</a>
                        </div>   
                    </div>
                    <div class="works">
                        <img src="img/web.jpg" alt="">
                        <span class="filter"></span>
                        <div class="imagetextwrapper">
                            <h3>WEBSITE OF DESIGNER</h3>
                            <a href="works/omanski/index.html" target="_blank">Review</a>
                        </div>    
                    </div>
					<div class="works">
                        <img src="img/devweb.JPG" alt="">
                        <span class="filter"></span>
                        <div class="imagetextwrapper">
                            <h3>PHP PROJECT</h3>
                            <a href="http://developersweb.net" target="_blank">Review</a>
                           
                        </div>
					</div>
					<div class="works">
                        <img src="img/dice.jpg" alt="">
                        <span class="filter"></span>
                        <div class="imagetextwrapper">
                            <h3>3D DICES</h3>
                            <a href="works/3ddice/kub.html" target="_blank">Review</a>
                           
                        </div>
                    </div>
                    <div class="works">
                        <img src="img/space.jpg" alt="">
                        <span class="filter"></span>
                        <div class="imagetextwrapper">
                            <h3>PARALLAX EFFECTS</h3>
                            <a href="works/space/index.html" target="_blank">Review</a>
                        </div>    
                    </div>
                    <div class="works">
                        <img src="img/text.jpg" alt="">
                        <span class="filter"></span>
                        <div class="imagetextwrapper">
                            <h3>GENERATING TEXT</h3>
                            <a href="works/javascript/index.html" target="_blank">Review</a>
                        </div>    
                    </div>
                    <div class="works">
                        <img src="img/tigtac.jpg" alt="">
                        <span class="filter"></span>
                        <div class="imagetextwrapper">
                            <h3>TIC TAC TOE</h3>
                            <a href="works/tictactoe/index.html" target="_blank">Review</a>
                        </div>    
                    </div>
                    <div class="works">
                        <img src="img/homeWork.jpg" alt="">
                        <span class="filter"></span>
                        <div class="imagetextwrapper">
                            <h3>ONE OF STUDY WORKS</h3>
                            <a href="works/homeWorkjQuery/index.html" target="_blank">Review</a>
                        </div>    
                    </div>
                    
                </div>
            </section>
            <section id="contacts">
                <div class="aboutheader">
                    <h2>CONTACTS</h2>
                    <span>LEAVE YOUR MESSAGE </span>
                    <span class="line"></span>
                </div>
                <div id="comtactsmainwrapper">
                    <div id="picontacts">
                        <div id="piadress">
                            <span class="piicon ad"></span>
                            <span class="pimaintext">ADDRESS</span>
                            <span class="piinfo">Israel</span>
                        </div>
                        <div id="piphone">
                            <span class="piicon ph"></span>
                            <span class="pimaintext">PHONE</span>
                            <span class="piinfo">+972-54-313-72-13</span>
                        </div>
                        <div id="piwebsite">
                            <span class="piicon wb"></span>
                            <span class="pimaintext">WEB-SITE</span>
                            <span class="piinfo">http://bredis.org </span>
                        </div>
                    </div>
                    <div id="piform">  
                       <span class="messageSpan"></span>
                        <form>
                           <label id="lname" for="fname"><span class="x">*</span>Name</label>
                           <input type="text" id="fname" placeholder="Your name">
                           <label id="lmail" for="fmail"><span class="x">*</span>E-mail</label>
                           <input type="email" id="fmail" placeholder="Your E-mail">
                           <label id="lmessage" for="fmessage"><span class="x">*</span>Message</label>
                           <textarea name="text" id="fmessage" cols="30" rows="10" placeholder="Your message"></textarea>
                           <button id="sendbutton">Send</button>
                        </form>
                    </div>     
                </div>
            </section>
            <footer>
                <div id="footercont">
                    <span>© 2016 Bredis Victor</span>
                </div>
            </footer>
			<!-- img src="img/keyboard-943748_1920-min.jpg" style="position:absolute; bottom:0; opacity:0; width:0; height:0;" -->
        </body> 
    </head>
</html>