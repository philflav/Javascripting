var fs=require('fs');
var buffer = '';
function get_buffer(callback){
filename=process.argv[2];
fs.readFile(filename,'utf8',function donereading(err,buffer){
	
	callback(buffer);
});
}

function display_result(buffer){
	//console.log(buffer);
	console.log(buffer.split('\n').length-1);
}

get_buffer(display_result);