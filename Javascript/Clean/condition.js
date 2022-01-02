const data = {
  a: true,
  b: false,
  c: true,
  d: false,
}

const check = () => {
  if (!data.a) return 'a';
  if (data.b) return 'b';
  if (!data.c) return 'c';
  console.log("[COZE_LOG] call in check");
  if (data.d) return 'd';
  
  console.log("[COZE_LOG] here in check");
}

check(); /*?*/

const check2 = () => {
  const cond = [
    [!data.a, 'a'],
    [data.b, 'b'],
    [!data.c, 'c'],
    [data.d, 'd']
  ];
  const k = cond.reduce((acc, cond, _ , arr) => {
    console.log("[COZE_LOG] cond", cond);
    if (cond[0]) {
      arr.splice(1); // early return
      return [true, cond[1]];
    }
    return acc;
  }, [false, null])

  if (k[0]) return k[1];
  
  
  console.log("[COZE_LOG] here in check2");

}

check2(); /*?*/
