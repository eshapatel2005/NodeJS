const os=require('os');

//Operating system type
//console.log(os.type());

//Operating system platform
//console.log(os.platform());

//CPU Architecture
//console.log(os.arch());

//Host Name
//console.log(os.hostname());

//Home Directory
//console.log(os.homedir());

//Temporary Directory
//console.log(os.tmpdir());

//Total Memory
//console.log(os.totalmem());

//Total memory in GB
console.log(os.totalmem() / (1024 * 1024 * 1024));