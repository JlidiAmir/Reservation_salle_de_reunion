<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$idProfile = mysqli_real_escape_string($mysqli, trim($request->idProfile));
$pwd = mysqli_real_escape_string($mysqli, trim($request->mdp));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$sql = "UPDATE profile set email='$email',mdp='$pwd' where idProfile = '$idProfile'  ";
if($result = mysqli_query($mysqli,$sql))
{
$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
http_response_code(404);
}
}
?>