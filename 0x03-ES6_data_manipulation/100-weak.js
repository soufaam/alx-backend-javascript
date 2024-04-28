const weakMap = new WeakMap();
const queryAPI = (api) => {
  if (!weakMap.has(api)) {
    weakMap.set(api, 1);
  } else {
    const counter = weakMap.get(api);
    if (counter >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(api, counter + 1);
  }
};

export { weakMap, queryAPI };
