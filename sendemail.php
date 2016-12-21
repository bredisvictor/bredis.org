<?php 
    $personname = htmlspecialchars($_POST["name"]);
    $personEmail = htmlspecialchars($_POST["email"]);
    $personMessage = htmlspecialchars($_POST["message"]);
    $email = "thevictor85@gmail.com";
    $myname = "Victor Bredis";
    
	
    $subject = "You got message from you personal site";

    $message = "Hello $myname, you got message from:
	
    Name: $personname
    E-MAIL: $personEmail
    Message: 
	$personMessage";


    
    mail($email,$subject,$message);
    
    
    echo "E-mail sent successful";
    
?>