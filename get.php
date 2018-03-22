<?php
	// Database connection
	$conn = new mysqli("10.2.0.5", "temps", "tempreader", "temps");

	if($conn->connect_error) {
		echo "<h3 class='text-danger'>Error connecting to the database, unable to fetch data!</h3>";
		echo "<p class='text-danger'>Please try loading the page in a few minutes.</p>";
		die($conn->connect_error);
	}

	// Get current time and date
	$time = time();
	$today = date("Y-m-d");
	$monthAgo = $time - 2678400;

	if ($_GET['data'] == "temp") {
		$getTemps = "SELECT timestamp, temp FROM serverrm ORDER BY id DESC LIMIT 43200";
		$tempsResult = $conn->query($getTemps);
		$temps = array();
		while ($row = $tempsResult->fetch_row())
			$temps[] = $row;
		$tempJSON = json_encode($temps, JSON_NUMERIC_CHECK);
		echo $tempJSON;
	} else if ($_GET['data'] == "humidity") {
		$getHumidity = "SELECT timestamp, humidity FROM serverrm ORDER BY id DESC LIMIT 43200";
		$humidityResult = $conn->query($getHumidity);
		$humidity = array();
		while ($row = $humidityResult->fetch_row())
			$humidity[] = $row;
		$humidityJSON = json_encode($humidity, JSON_NUMERIC_CHECK);
		echo $humidityJSON;
	} else {
		header("Location: index.php");
	}
?>