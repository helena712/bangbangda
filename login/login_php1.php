<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <style>
        * { box-sizing: border-box}
        .wrap { width: 300px; margin: 100px auto}
        .input_idpw { width: 100%}
        input { width: 300px; font-size: 14px; padding: 10px;}
    </style>
</head>
<body>
<div class="wrap">
    <form action="login_php2.php" method="get">
        <div class="input_idpw">
            <input type="text" name="user_id" value="" placeholder="user id">
            <input type="password" name="user_pw" value="" placeholder="user password">
        </div>
        <div class="input_btn">
            <input type="submit" value="Login">
        </div>
    </form>
</div>
</body>
</html>
