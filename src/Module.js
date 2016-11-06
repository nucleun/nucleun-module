export default class Module {
  constructor() {
    this.$modules = {};

    return new Proxy(this, {
      get: (target, name) => {
        if (typeof target[name] === 'undefined') {
          return target.$modules[name];
        }
        return target[name];
      }
    });
  }

  use(name, fn) {
    this.$modules[name] = fn;
    return this;
  }
}
