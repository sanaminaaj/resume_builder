<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    <title>Resume Builder</title>
  </head>
  <body>
<ul class="nav" style="background-color: black;">
  <li class="nav-item">
    <h3 style="color:white;">Resume Builder</h3>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="login.php" style="color:white;">Admin</a>
  </li>
 
</ul>

<?php
$con=mysqli_connect("localhost","root","","test");
if(mysqli_connect_error())
{
echo "error";
}
$query="SELECT * FROM resume";
$result=mysqli_query($con,$query);
if(!$result){
  echo "Error:" .mysqli_error($con);
  exit;
}

while($row=mysqli_fetch_assoc($result)){
	echo "<h4 style='color:black;display:block;text-align:center'>Template</h4>";
	echo "<img height='400' width='100%' src='".$row['template']."'><br>";?>
	<a style="display:block;text-align:center;color:white" class="btn btn-dark" href="<?php echo $row['location']; ?>"> OPEN </a><br>
<hr>
<?php
}
mysqli_close($con);
?>
   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
  </body>
</html>
