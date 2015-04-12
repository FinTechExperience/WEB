<?php
session_start();
include_once='dbconfig.php';

?>
<!doctype html>
<html xmlns:fb="http://www.facebook.com/2008/fbml">
  <head>
    <title>Login with Facebook</title>
    <link rel="stylesheet" type="text/css" href="../css/primary.css">
    <link rel="stylesheet" type="text/css" href="../css/wrapper.css">
    <link rel="stylesheet" type="text/css" href="../css/home.css">
    <link rel="stylesheet" type="text/css" href="../css/cuenta.css">

    <link rel="stylesheet" href="res/font-awesome/css/font-awesome.min.css">
<script href="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
<script src="post.js"></script>

 </head>
<?php
 $target_path = "uploads/";
$target_path = $target_path . basename( $_FILES['file']['name']); if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target_path)) { echo "El archivo ". basename( $_FILES['uploadedfile']['name']). " ha sido subido";
} else{
echo "Ha ocurrido un error, trate de nuevo!";
}

?>


  <h1> Haz completado tu registro" </h1>

  <br>
  <h2>Con este codigo puede activar tu aplicacion movil:</h2>
  <br>
  <h2>

  </body>
</html>
