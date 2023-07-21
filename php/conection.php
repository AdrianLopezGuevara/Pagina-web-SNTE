<?php
$db = mysqli_connect('localhost', 'root', 'admin', 'snte');
if (!$db) {
    echo ("Error al conectar con la base");
}