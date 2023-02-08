var five = require("johnny-five");
var mraa = require('mraa');
var led = new mraa.Gpio(13); 
led.dir(mraa.DIR_OUT);
var Edison = require("edison-io");
m=0;
n=0;
o=0;
p=0;
var board = new five.Board({
  io: new Edison()
});

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
	   if(m==1){
 		   if(this.x>(n+.10) || this.x<(n-.10) || this.y>(o+.10)|| this.z>(p+.10) || this.z<(p-.10)){
			  setTimeout(function(){ led.write(1);}, 1000);
		   };
		 };
		 
	   var a=this.x;
	  var b=this.y;
	  var c=this.z;
	  if(m!=0){
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
		   m=1;
	   });
});
