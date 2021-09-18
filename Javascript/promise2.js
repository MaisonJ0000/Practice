const sum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("[JONGMAN_LOG] after 3", new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
      resolve(a + b);
    }, 3000);
  });
};

const doSum = () => {
  return sum(4,5)
  .then((result) => {
    console.log('[JONGMAN_LOG] result', result, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
    return Promise.resolve(result);
  });
}

const main = async () => {
  console.log("[JONGMAN_LOG] start main", new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
  const pro = doSum();
  console.log('[JONGMAN_LOG] pro', pro, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));

}

main();
