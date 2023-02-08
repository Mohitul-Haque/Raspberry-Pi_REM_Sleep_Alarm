gpio = mraa.Gpio(7) 
gpio.dir(mraa.DIR_OUT)
with open('f.txt', 'r') as file:
    content=file.read()
from datetime import datetime
d1 = datetime.strptime(content, '%H:%M:%S')

while(1):
    l=datetime.now().strftime('%H:%M:%S')
    d2 = datetime.strptime(l, '%H:%M:%S')
    if d2>d1:
        gpio.write(1)
        break