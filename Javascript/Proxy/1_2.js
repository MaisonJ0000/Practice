
const target = {};
const handler = {};
const targetProxy = new Proxy(target, handler);

target.name = 'toby';
console.log(targetProxy.name);

targetProxy.age = 15;
console.log(target.age);
