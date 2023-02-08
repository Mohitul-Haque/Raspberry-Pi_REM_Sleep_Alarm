		var fs = require('fs');
		d='dog';
		var stream = fs.createWriteStream("my_file.txt");
		stream.once('open', function(fd) {
		stream.write(d);
		stream.end();
		});
		
/* fs = require('fs')

console.log("Synchronous read: " );
console.log("Synchronous read: " );
console.log("Synchronous read: " );
console.log("Synchronous read: " );
console.log("Synchronous read: " );
console.log("Synchronous read: " );
		i=0;
	d='dog';
f='dog';	
		while (1) {
    i++;
	console.log(i);
	if(i==10){
		break;
	};
};

console.log(d); */