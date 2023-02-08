with open('d.txt', 'r') as file:
	content=file.read()
import os 
# import time

# time.sleep(10)

# if success:
    # print(good)
# else:
    # print(bad)
from datetime import datetime
d1 = datetime.strptime(content, '%H:%M:%S')
d2 = datetime.strptime('00:06:00', '%H:%M:%S')
s=d1-d2
import datetime
def convert_timedelta(duration):
    days, seconds = duration.days, duration.seconds
    hours = days * 24 + seconds // 3600
    minutes = (seconds % 3600) // 60
    seconds = (seconds % 60)
    return hours, minutes, seconds
td = s
hours, minutes, seconds = convert_timedelta(td)
d=("{:02}".format(seconds))
e=("{:02}".format(minutes))
f=("{:02}".format(hours))
g=f+':'+e+':'+d

from datetime import datetime
from Naked.toolshed.shell import execute_js

d1 = datetime.strptime(g, '%H:%M:%S')


while(1):
    l=datetime.now().strftime('%H:%M:%S')
    d2 = datetime.strptime(l, '%H:%M:%S')
    if d2>d1:
		f = open('my_file.txt', 'w')
		f.write(content)
		break
		# success = execute_js('s.js')
		
		
		# os.system('python c.py')
		
        
   