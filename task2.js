const sampleJSON = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`;

const obj = JSON.parse(sampleJSON);

console.log(JSON.stringify(obj));