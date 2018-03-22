$(function() {
	var data;
	var options;
	$.getJSON("get.php?data=temp", function(json) {
		data = json;
		var time = new Date().getTime();
		
		$.plot("#temperature", [{ label: "Temps", data: data, points: { symbol: "circle" } }], {
			yaxis: {
				min: 45,
				max: 75
			},
			xaxis: {
				mode: "time",
				minTickSize: [1, "minute"],
				min: (time - 900000),
				twelveHourClock: true,
				timezone: "browser"
			},
			legend: {
				show: false
			}
		});

		$("#t0").click(function() {
			$.plot("#temperature", [{ label: "Temps", data: data, points: { symbol: "circle" } }], {
				yaxis: {
					min: 45,
					max: 75
				},
				xaxis: {
					mode: "time",
					minTickSize: [1, "minute"],
					min: (time - 900000),
					twelveHourClock: true,
					timezone: "browser"
				},
				legend: {
					show: false
				}
			});
		});

		$("#t1").click(function() {
			$.plot("#temperature", [{ label: "Temps", data: data, points: { symbol: "circle" } }], {
				yaxis: {
					min: 45,
					max: 75
				},
				xaxis: {
					mode: "time",
					minTickSize: [1, "minute"],
					min: (time - 3600000),
					twelveHourClock: true,
					timezone: "browser"
				},
				legend: {
					show: false
				}
			});
		});

		$("#t2").click(function() {
			$.plot("#temperature", [{ label: "Temps", data: data, points: { symbol: "circle" } }], {
				yaxis: {
					min: 45,
					max: 75
				},
				xaxis: {
					mode: "time",
					minTickSize: [1, "hour"],
					min: (time - 86400000),
					twelveHourClock: true,
					timezone: "browser"
				},
				legend: {
					show: false
				}
			});
		});

		$("#t3").click(function() {
			$.plot("#temperature", [{ label: "Temps", data: data, points: { symbol: "circle" } }], {
				yaxis: {
					min: 45,
					max: 75
				},
				xaxis: {
					mode: "time",
					minTickSize: [12, "hour"],
					min: (time - 604800000),
					twelveHourClock: true,
					timezone: "browser"
				},
				legend: {
					show: false
				}
			});
		});

		$("#t4").click(function() {
			$.plot("#temperature", [{ label: "Temps", data: data, points: { symbol: "circle" } }], {
				yaxis: {
					min: 45,
					max: 75
				},
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: (time - 2419200000),
					twelveHourClock: true,
					timezone: "browser"
				},
				legend: {
					show: false
				}
			});
		});
	});
	$.getJSON("get.php?data=humidity", function(json) {
		var hdata = json;
		var time = new Date().getTime();
		
		$.plot("#humidity", [{ label: "Humidity", data: hdata, points: { symbol: "circle" } }], { 
			yaxis: {
				min: 10,
				max: 50
			},
			xaxis: {
				mode: "time",
				minTickSize: [1, "minute"],
				min: (time - 900000),
				twelveHourClock: true,
				timezone: "browser"
			},
			legend: {
				show: false
			}
		});

		$("#h0").click(function() {
			$.plot("#humidity", [{ label: "Humidity", data: hdata, points: { symbol: "circle" } }], {
				yaxis: {
					min: 10,
					max: 50
				},
				xaxis: {
					mode: "time",
					minTickSize: [1, "minute"],
					min: (time - 900000),
					twelveHourClock: true,
					timezone: "browser"
				},
				legend: {
					show: false
				}
			});
		});

		$("#h1").click(function() {
			$.plot("#humidity", [{ label: "Humidity", data: hdata, points: { symbol: "circle" } }], {
				yaxis: {
					min: 10,
					max: 50
				},
				xaxis: {
					mode: "time",
					minTickSize: [1, "minute"],
					min: (time - 3600000),
					twelveHourClock: true,
					timezone: "browser"
				},
				legend: {
					show: false
				}
			});
		});

		$("#h2").click(function() {
			$.plot("#humidity", [{ label: "Humidity", data: hdata, points: { symbol: "circle" } }], {
				yaxis: {
					min: 10,
					max: 50
				},
				xaxis: {
					mode: "time",
					minTickSize: [1, "hour"],
					min: (time - 86400000),
					twelveHourClock: true,
					timezone: "browser"
				},
				legend: {
					show: false
				}
			});
		});

		$("#h3").click(function() {
			$.plot("#humidity", [{ label: "Humidity", data: hdata, points: { symbol: "circle" } }], {
				yaxis: {
					min: 10,
					max: 50
				},
				xaxis: {
					mode: "time",
					minTickSize: [12, "hour"],
					min: (time - 604800000),
					twelveHourClock: true,
					timezone: "browser"
				},
				legend: {
					show: false
				}
			});
		});

		$("#h4").click(function() {
			$.plot("#humidity", [{ label: "Humidity", data: hdata, points: { symbol: "circle" } }], {
				yaxis: {
					min: 10,
					max: 50
				},
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: (time - 2419200000),
					twelveHourClock: true,
					timezone: "browser"
				},
				legend: {
					show: false
				}
			});
		});
	});
});