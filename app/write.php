<?php
  $json = file_get_contents("php://input");
  $file = fopen('contenu.json','w+');
  fwrite($file, $json);
  fclose($file);
?>