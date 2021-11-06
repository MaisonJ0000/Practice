const items = [];

const createObservable = (target, observer) => {
  const observable = new Proxy(target, {
    set: (...args) => {
      const [obj, prop] = args;
      if (prop in obj) {
        observer(obj);
      }
      return Reflect.set(...args);
    }
  });
  return observable;
};

const obsItems = createObservable(items, (list) => {
  const sum = list.reduce((sum, val) => sum + val, 0);
  console.log(sum);
});

obsItems.push(12); // 12
obsItems.push(4); // 16
