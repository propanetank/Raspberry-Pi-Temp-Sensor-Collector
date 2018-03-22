# ReadME

### TOC
- Intro
- Requirements
- Setup

### Intro
Small data collector client for raspberry pi temp and humidity sensor with web app that graphs the data using Float charts. Backend written in PHP, client in Python.

### Requirements
 - Web server
 - PHP
 - MySQL
 - Raspberry Pi
 - Python, comes preinstalled on raspbian image
 - DHT based temp sensor, I use this one: https://www.amazon.com/gp/product/B018JO5BRK/ref=oh_aui_detailpage_o06_s00?ie=UTF8&psc=1 I think the readme has 3 or so different models that the library is capable of reading from

### Installation
There is a readme in the Adafruit zip file that says how to install that library on the raspberry pi. Other than that, place the webserver files on an accessible website and setup your database info in the temp.py file and the get.php file. Also will need to specify your temp sensor and the pin it's connected to in the temp.py file.
