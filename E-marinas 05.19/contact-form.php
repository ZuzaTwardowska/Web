<?php
session_start();
?>
<!DOCTYPE html>
<html lang="pl-PL">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>E-marinas</title>
	<link rel="stylesheet"  type="text/css" href="style.css">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&amp;subset=latin-ext" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
</head>
    
<body>
    
<?php
	
$subject = "";
$email_address = "";
$message = "";
$myemail = 'zuzatwardowska@gmail.com';
    
$subject = $_POST['subject'];
$email_address = $_POST['mail'];
$message = $_POST['message'];

$to = $myemail;
$email_subject = "E-marinas: $subject";
$email_body ="Email: $email_address\n\n Wiadomość: \n $message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";
$headers .= "Content-Type:text/html". "charset=utf.8"."\r\n";
$send = mail($to,$email_subject,$email_body,$headers);
	
if($send)
{   echo '<h style="position:relative;top: 9vw;left: 39vw;font-size: 2.5vw;">Email został wysłany.<br></h>';
    echo '<a href="kontakt.html"><button style="position:relative;top: 15vw;left: 42vw;font-size:1.5vw;padding: 1vw 2vw;background-color: #393186;color: white;cursor: pointer;border-radius: 0.5vw;">Powrót do strony</button></a>';
}
else
{   echo '<h style="position:relative;top: 9vw;left: 36vw;font-size: 2.5vw;">Nie udało się wysłać emaila.<br></h>';
    echo '<a href="kontakt.html"><button position:relative;top: 15vw;left: 42vw;font-size:1.5vw;padding: 1vw 2vw;background-color: #393186;color: white;cursor: pointer;border-radius: 0.5vw;">Powrót do strony</button></a>';
}

?>
</body>
</html>