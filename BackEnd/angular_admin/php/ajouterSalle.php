<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$nomSalle = mysqli_real_escape_string($mysqli, trim($request->nomSalle));
$surface = mysqli_real_escape_string($mysqli, trim($request->surface));
$capacite = mysqli_real_escape_string($mysqli, trim($request->capacite));
$prixPH = mysqli_real_escape_string($mysqli, trim($request->prixPH));
$sql = "INSERT INTO `salle`(nomSalle,surface,capacite,prixPH) VALUES('$nomSalle','$surface','$capacite','$prixPH')";
if ($mysqli->query($sql) === TRUE) {
$data = [
'msg' => 'Ajout de salle avec success'
];
echo json_encode($data);
}
else {
$data = [
'msg' => 'ajout de salle est echouer'
];
echo json_encode($data);
}
}

?>