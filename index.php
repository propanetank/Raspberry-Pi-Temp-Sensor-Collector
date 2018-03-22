<html>
	<head>
		<meta http-equiv="refresh" content="60">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
		<link rel="stylesheet" href="style.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
		<script src="jquery.flot.js"></script>
		<script src="jquery.flot.time.js"></script>
		<script src="flot.js"></script>
		<title>Air Monitor</title>
	</head>
	<body>
		<div class="container">
			<h1>Server Room</h1>
			<div class="row">
				<div class="col">
					<h2>Temperature</h2>
					<div class="graph" id="temperature">
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-primary" id="t0">Last 15 Minutes</button>
						<button type="button" class="btn btn-primary" id="t1">Last Hour</button>
						<button type="button" class="btn btn-primary" id="t2">Last Day</button>
						<button type="button" class="btn btn-primary" id="t3">Last Week</button>
						<button type="button" class="btn btn-primary" id="t4">Last Month</button>
					</div>
				</div>
				<div class="col">
					<h2>Humidity</h2>
					<div class="graph" id="humidity">
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-primary" id="h0">Last 15 Minutes</button>
						<button type="button" class="btn btn-primary" id="h1">Last Hour</button>
						<button type="button" class="btn btn-primary" id="h2">Last Day</button>
						<button type="button" class="btn btn-primary" id="h3">Last Week</button>
						<button type="button" class="btn btn-primary" id="h4">Last Month</button>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>