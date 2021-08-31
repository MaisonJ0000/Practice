const sum = (a) => {
  return a + 10;
}
// caller needs to do something
sum(...[3]) /*?*/


// 아래처럼 하더라도 안됨. 불가능한 것으로 알자.
const genArgs = (args) => {
  console.log('[JONGMAN_LOG] args', args, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
  return arguments;
}
sum(genArgs(1,2)) /*?*/

const average = () => {
  const length = arguments.length;


  if (length == 0) return 0;

  const numbers = Array.prototype.slice.call(arguments);
  const sumReduceFn = function (a, b) { return a + Number(b) };

  return numbers.reduce(sumReduceFn, 0) / length;
}

average(1, 2,3) /*?*/


