var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');

var PythonShell = require('python-shell');
		var five = require("johnny-five");
var mraa = require('mraa');
var led = new mraa.Gpio(7); 
led.dir(mraa.DIR_OUT);
var Edison = require("edison-io");
t=0;
n=0;
o=0;
p=0;


m=0;

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    }else if (req.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(req, res);
        
    }

});

function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
       res.write(data);
        res.end();
    });
}

function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields) {
		if(m!=1){
        s=JSON.stringify(fields);
		g=JSON.parse(s);
		d=g.name;
		console.log(d);
		var stream = fs.createWriteStream("d.txt");
		stream.once('open', function(fd) {
		stream.write(d);
		stream.end();
		});
		PythonShell.run('b.py', function (err) {
		if (err) throw err;
		});
		

	m=1;
		var myVar = setInterval(function(){
		var data = fs.readFileSync('my_file.txt');
		if(d==data.toString()){
			clearInterval(myVar);
			
			var board = new five.Board({
  io: new Edison()
});
	t=0;
n=0;
o=0;
p=0;	
board.on("ready", function() {


  // Plug the MMA7660 Accelerometer module
  // into an I2C jack
  var acceleration = new five.Accelerometer({
    controller: "MMA7660"

  });
 
  acceleration.on("change", function() {
	  
	  var read=JSON.stringify(this.x);
	  var read1=JSON.stringify(this.y);
	  var read2=JSON.stringify(this.z);
	  var sdata = {"x": read,"y": read1,"z": read2};
	   console.log(sdata);
	   if(t==1){
 		   if(this.x>(n+.20) || this.x<(n-.20) || this.y>(o+.20)|| this.z>(p+.20) || this.z<(p-.20)){
			  setTimeout(function(){ led.write(1);}, 1000);
		   };
		 };
		 
	   var a=this.x;
	  var b=this.y;
	  var c=this.z;
	  if(t!=0){
		  if(a!=n){
			  a=n;
		  }else {
			  a=n;
		  };
		  if(b!=o){
			  b=o;
		  }else {
			  b=o;
		  };
		  
		  if(c!=p){
			  c=p;
		  }else {
			  c=p;
		  };
		  
	   };
	   n=a;
	   o=b;
	   p=c;
	   var ndata = {"q": n,"r": o,"s": p};
	   console.log(ndata);
		t=1;
	   });
});};
		},5000);
		
		}else {
		PythonShell.run('c.py', function (err) {
		if (err) throw err;
		console.log('Alarm is off');
		process.exit(1);
		});

	

		
		};
    });
}

server.listen(8080);
console.log("server listening on 8080");