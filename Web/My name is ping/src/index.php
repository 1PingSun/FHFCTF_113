
<!DOCTYPE html>
<html>
<head>
    <title>IP Search</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Ping IP</h1>
    <form method="post" action="">
        <label for="ip">Enter IP address:</label>
        <input type="text" id="ip" name="ip">
        <input type="submit" value="Search">
    </form>

<?php
if (isset($_POST['ip'])) {
    $ip = $_POST['ip'];
    $output = shell_exec("ping -c 4 " . $ip);
    echo "<pre>$output</pre>";
}
?>
</body>
</html>