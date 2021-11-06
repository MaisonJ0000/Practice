let user = {
  name: 'toby',
};

const validator = (target) => {
  return new Proxy(target, {
    set: (...args) => {
      const [, prop, value] = args;
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('The age is not an integer');
        }
      }
      return Reflect.set(...args);
    }
  });
}

user = validator(user);

user.age = 10;
user.age = 'ten';
