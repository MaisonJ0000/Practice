
const target = {};
const handler = {
  get: () => console.log('하라는 get은 안하고'),
};
const targetProxy = new Proxy(target, handler);

target.name = 'toby';

const a = target.name;
const b = targetProxy.name;

console.log(a);
console.log(b);

