/**
 *  중간에 element를 넣거나 뺄 수 있어서 보기 쉽게 하기
 *
 */
// const arr = [115,236,2343,344,345,126];
// arr.splice(3,0,555);
//
// const arr = [115,236,2343,HERE(555),344,345,126];
//


let k = undefined;  // or 값을 가질 수 있음

// good
let a = [23423,2156,...(k ? [k] : []),323, 0, undefined, 22];
a


//bad (어디에 들어가는건지 한눈에 모르겠다)
a = [23423,2156,323, 0, undefined, 22];
if (k) a.splice(2, 0, k);

//bad (too long)
a = [23423,2156];
if (k) a.push(k);
a = a.concat([323, 0, undefined, 22]);

a = [1,2].concat(k && k)
a


/**
 * for of
 */

let arr = ['a', 'b', 'c'];
for (const what of arr) {
  console.log('[JONGMAN_LOG] what', what, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
}
for (const [what] of arr) {
  console.log('[JONGMAN_LOG] what', what, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
}

for (const [what, what2] of arr) {
  console.log('[JONGMAN_LOG] what', what, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
  console.log('[JONGMAN_LOG] what2', what2, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
}



