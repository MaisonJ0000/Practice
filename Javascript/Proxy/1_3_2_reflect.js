
const target = {};
const handler = {
  get: (target, props) => {
    console.log('하라는 get도 충실히 하겠습니다.');
    return Reflect.get(target, props);;
  },
};
const targetProxy = new Proxy(target, handler);

target.name = 'toby';

const a = target.name;
const b = targetProxy.name;

console.log(a);
console.log(b);
