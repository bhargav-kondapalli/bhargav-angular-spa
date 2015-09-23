
<?php

$visitor = $_POST['name']; 
$visitormail = $_POST['email']; 
$city = $_POST['city'];
$notes = $_POST['message'];


if (eregi('http:', $notes)) {
die ("Do NOT try that! ! ");
}
if(!$visitormail == "" && (!strstr($visitormail,"@") || !strstr($visitormail,"."))) 
{
echo "<h2>Use Back - Enter valid e-mail</h2>\n"; 
$badinput = "<h2>Feedback was NOT submitted</h2>\n";
echo $badinput;
die ("Go back! ! ");
}

if(empty($visitor) || empty($visitormail) || empty($notes )) {
echo "<h2>Use Back - fill in all fields</h2>\n";
die ("Use back! ! "); 
}

$todayis = date("l, F j, Y, g:i a") ;

$attn = $visitor; 
$subject = $attn; 

$notes = stripcslashes($notes); 

$message = " $todayis [EST] \n

From: $visitor ($visitormail)\n
Email From: $attn \n
City: $city \n
Message: $notes \n 
";

$from = "From: $visitormail\r\n";

mail("bkondapalli@bhargavkondapalli.com", $subject, $message, $from);

?>
