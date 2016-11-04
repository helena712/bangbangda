<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
</head>
<body>
    <?php
        $userId = $_GET["user_id"];
        $userPw = $_GET["user_pw"];
        $myId = "helena";
        $mypw = "111111";
        if ($userId==$myId) {
            echo "Hello~ ".$myId;
        }else {
            echo "<script>alert('Please check your id and pw')</script>";
        }
    ?>
</body>
</html>
