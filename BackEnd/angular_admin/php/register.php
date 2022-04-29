<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$mdp = mysqli_real_escape_string($mysqli, trim($request->mdp));
$sql = "INSERT INTO profile(email,mdp) VALUES ('$email' ,'$mdp')";
if ($mysqli->query($sql) === TRUE) {
$data = [
'msg' => 'success'
];
echo json_encode($data);
}
else {
$data = [
'msg' => 'failed'
];
echo json_encode($data);
}
}

?>