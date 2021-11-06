
const target = {};
const handler = {
  get: (target, props) => {
    console.log('[JONGMAN_LOG] target', target, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
    console.log('[JONGMAN_LOG] props', props, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
    console.log('하라는 get도 충실히 하겠습니다.');
    return target[props];
  },
};
const targetProxy = new Proxy(target, handler);

target.name = 'toby';

const a = target.name;
const b = targetProxy.name;

console.log(a);
console.log(b);
