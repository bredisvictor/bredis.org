<!DOCTYPE html>
<html>
    <head>
        <title>Omanski</title>
        <meta charset="utf-8">
    </head>
    <body style="margin:0; padding:0; background: #cecece;">
        <?php

$your_name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$tema = "התקבלה הודע חדשה מהאתר";
$message = htmlspecialchars($_POST["comment"]);
$myemail = "colorsense@gmail.com";

$your_name = check_input($_POST["name"], "שם!");
$email = check_input($_POST["email"], "אימייל");
$message = check_input($_POST["comment"], "הודע!");
$nosea = check_input($_POST["nosea"], "נושא!");

if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("<br /> אימייל לא קיים");
}

$message_to_myemail = "שלום אלכס, הודע התקבלה מ: 
שם: $your_name 
אימייל: $email 
נושא: $nosea
הודע: $message 
";

$from  = "From: $yourname <$email> \r\n Reply-To: $email \r\n"; 
mail($myemail, $tema, $message_to_myemail, $from);
?>

<p style="font-family: Open Sans hebrew; font-size: 1.7em;text-align: center;" >!ההודעה נשלחה בהצלחה </p>
<p style="font-family: Open Sans hebrew; font-size: 1.3em;text-align: center;"><a href="index.html">לאמוד ראשי </a></p>

<?php


function check_input($data, $problem = "")
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}
function show_error($myError)
{
?>
<html>
<body>
<p>בבקשה תתקן</p>
<?php echo $myError; ?>
</body>
</html>
<?php
exit();
}
?>
    </body>
</html>
