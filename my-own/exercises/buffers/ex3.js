var buffer = new Buffer(100);

for(var i = 0; i < buffer.length; i++) {
  buffer[i] = i;
}

var slice = new Buffer(20);
var targetStart = 0.
    sourceStart = 40,
    sourceEnd = 60;

buffer.copy(slice, targetStart, sourceStart, sourceEnd);

console.log(slice);

