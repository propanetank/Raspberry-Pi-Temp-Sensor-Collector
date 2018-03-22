import MySQLdb
import Adafruit_DHT
import time

# Sensor and GPIO Pin info
#sensor = Adafruit_DHT.DHT11
sensor = Adafruit_DHT.DHT22
#sensor = Adafruit_DHT.AM2301
pin = 2

# Create the database session
conn = MySQLdb.connect(host="10.2.0.5", user="temps", passwd="tempreader", db="temps", port=3306)
x = conn.cursor()

# Get a reading from the sensor
humidity, temp = Adafruit_DHT.read_retry(sensor, pin)

# Convert from C to F
temp = temp * 9/5 + 32

# Get current date and time in seconds
date = int(round(time.time() * 1000))

# Save data to database
try:
	x.execute("""INSERT INTO serverrm (timestamp, temp, humidity) VALUES (%s,%s,%s)""", (date, temp, humidity))
	conn.commit()
except (MySQLdb.Error, MySQLdb.Warning) as e:
	conn.rollback()
	print(e)
	# Uncomment the next 3 lines to write to log file
	#logfile = open('tempLog.txt', 'a')
	#logFile.write(e)
	#logFile.close()
conn.close()
