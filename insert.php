<?php
$conn=mysqli_connect("localhost","root","","test");
if(mysqli_connect_error())
{
echo "error";
}
$query="insert into resume values('$_POST[template]','$_POST[location]')";
$result=mysqli_query($conn,$query);
if(!$result){
  echo "Error:" .mysqli_error($conn);
  exit;
}?>
<h2 style="background-color:white;">Inserted successful</h2>
<?php
mysqli_close($conn);
?>