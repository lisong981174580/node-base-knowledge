// 读取系统 cpu 信息
const os = require('os');

// 显示系统 cpu 个数/几核
const cpus = os.cpus(); 
console.log('cpu 个数/几核', cpus.length);

// 显示系统内存大小
const totalmem = os.totalmem(); // bytes
console.log('内存大小', totalmem/1024/1024/1024) // kb/mb/gb

// 获取剩余内存信息
const freemem = os.freemem();
console.log('剩余内存大小', freemem/1024/1024/1024) // kb/mb/gb

// 剩余内存比
console.log('剩余内存比', freemem/totalmem);

// 显示当前网路状况
console.log('当前网络状况', os.networkInterfaces());