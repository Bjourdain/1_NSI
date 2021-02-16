<!DOCTYPE html>
<html>
	<head>
		<title>Site de l'association</title>
		<meta charset="UTF-8">
		<link rel="icon" type="image/png" href="favicon.png"/>
	</head>
	<body>
		<h1>ASSOCIATION La marmite à Tata Nini et Miloche</h1>
		<br/>
		<?php
			//Si les paramètres existent
			if (isset($_POST['nom']) AND isset($_POST['user_mail'])AND isset($_POST['message']))
			{
				$Nom = $_POST['nom'];
				$Mail= $_POST['user_mail'];
				$Message = $_POST['message'];
				echo 'Bonjour ' . $Nom . ' <br />'.'<br />';
				echo 'Merci de ce message.'.' <br />'.'<br />';
				echo 'Nous vous contacterons à l\'adresse : ' . $Mail . ' <br />';
			}
			else
			{
			   echo 'Il faut renseigner un nom et un message' . ' !<br />';
			}
?>
	</body>
</html> 
