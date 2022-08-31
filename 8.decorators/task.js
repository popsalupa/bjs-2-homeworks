function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join();
    let index = cache.findIndex((key) => key.hash == hash);
    
      if(index !== -1) {
        console.log('Из кэша: ' + cache[index].valve);

          return 'Из кэша: ' + cache[index].valve;
        }

    let result = func(...args);
    cache.push({
      'hash' : hash,
      'valve' : result
      });

        if (cache.length > 5) {
          cache.shift();
        }

        console.log('Вычисляем: ' + result);
        return 'Вычисляем: ' + result;
      }
      return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timer = null;

  function wrapper(...args) {
    if (timer === null) {
      func(...args);
    }

    clearTimeout(timer);
    timer = setTimeout(() => func(...args), ms);
  }
  return wrapper;
}

function debounceDecorator2(func) {
  if (timer === null) {
    func(...args);
  }
  clearTimeout(timer);
  timer = serTimeout(() => func(...args), ms);
  wrapper.count = 0;
  return wrapper;
}
