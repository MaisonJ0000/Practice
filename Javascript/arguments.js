const sum = (a) => {
  return a + 10;
}
// caller needs to do something
sum(...[3]) /*?*/


// 아래처럼 하더라도 안됨. 불가능한 것으로 알자.
const genArgs = (args) => {
  return arguments;
}
sum(genArgs(1,2)) /*?*/




