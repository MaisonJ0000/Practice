const sum = (a, b) => {
  console.log("[JONGMAN_LOG] here", new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("[JONGMAN_LOG] after 3", new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
      resolve(a + b);
    }, 3000);
  });
};

const add = (a,b) => a+b;

const main = async () => {
  const result = await add(3,4);
  console.log('[JONGMAN_LOG] result', result, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));

  // const answer = await new Promise((resolve, reject) => {
  //   const queue = [];
  //   const report = (aa) => {
  //     queue.push(aa);
  //     if (queue.length === 2) resolve(queue);
  //   }
  //   sum(5,6)
  //   .then((a) => {
  //     report(a);
  //   })
  //
  //   sum(4,5)
  //   .then((b) => {
  //     report(b);
  //   })
  // });
  // console.log('[JONGMAN_LOG] answer', answer, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
};

main()





