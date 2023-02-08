# import mraa
# gpio = mraa.Gpio(13) 
# gpio.dir(mraa.DIR_OUT)
# while(1):
    # gpio.write(0)
    # break
import mraa
import time
gpio = mraa.Gpio(7) 
gpio.dir(mraa.DIR_OUT)
while(1):
	# time.sleep(2)
    # # gpio.write(1)
	# # time.sleep(2)
	# gpio.write(1)
	# # time.sleep(2)
	# time.sleep(2)
    # gpio.write(1)
	# time.sleep(2)
	gpio.write(0)
	break
	# time.sleep(2)
    
