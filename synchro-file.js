var fs=require('fs');
filename=process.argv[2];
var buf=fs.readFileSync(filename,'utf8');
var lines = buf.split('\n').length-1;
console.log(lines);

