const dictionary = {
  'Hello': '안녕하세요',
  'Bye': '안녕히 가세요'
};

const handler = {
  get: (target, name) => {
    console.log('[JONGMAN_LOG] target', target, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
    console.log('[JONGMAN_LOG] name', name, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
    return name in target ?
      target[name] :
      '존재하지 않는 값입니다.';
  }
};

dictionaryExceptionHandler = new Proxy(dictionary, handler);
dictionaryExceptionHandler['Hello'] /*?*/
dictionaryExceptionHandler['Hllo'] /*?*/
