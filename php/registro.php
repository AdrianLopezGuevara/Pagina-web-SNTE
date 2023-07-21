<?php
$nombre = $_GET['nombre'];
$seccion = $_GET['seccion'];
$mensaje = $_GET['mensaje'];
$email = $_GET['email'];
$telefono = $_GET['telefono'];

$query = "INSERT INTO `registros` (`nombre`, `seccion`, `mensaje`, `email`,`telefono`) VALUES('$nombre', $seccion, '$mensaje', '$email','$telefono');";

require './conection.php';
$request = mysqli_query($db, $query);
if ($request) {
    header('Location: ../index.html');
} else {
    echo ("Error");
}