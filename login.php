
<?php 
require('connection.php');
?>
<html>
<head>
 <link rel="stylesheet" href="./login.css">

</head>
<body>

<div class="login-page">
  <div class="form">
    
    <form class="login-form" method="POST">
      <input type="text" placeholder="username" name="username" required/>
      <input type="password" placeholder="password" name="password" required/>
      <button type="submit" name="login">login</button>
      
    </form>
  </div>
</div>
<!-- partial -->
<?php
if(isset($_POST['login']))
{
$query="SELECT * FROM login WHERE username='$_POST[username]' AND password='$_POST[password]'";
$result=mysqli_query($conn,$query);
if(mysqli_num_rows($result)==1)
{
session_start();
header("location: admin.php");
}
else
{
echo "<script>alert('Incorrect Password');</script>";
}
}
?>
</body>
</html>

