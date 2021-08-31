const main = () => {
  const result = function() {
    // code here
    return {
      cb: () => { return; }
    }
  }();
  console.log('[JONGMAN_LOG] result', result, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
  if (result.cb) result.cb();

  console.log("[JONGMAN_LOG] should not reach here", new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
}

main();
