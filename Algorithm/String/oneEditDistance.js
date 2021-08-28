// insert, delete, replace (different character) 로 s에서 t로 전환가능한지.

const isOneDiffAtSame = (s1, s2) =>  {  // s1.length  === s2.length
  let diffCnt = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diffCnt++;
      if (diffCnt > 1) return false;
    }
  }
  return diffCnt === 1;

}

const isOneDiff = (l, s) => { // long short
  let diffCnt = 0;
  let j = 0;
  for (let i = 0; i < l.length; i++) {
    if (l[i] !== s[j]) {
      diffCnt++;
      if (diffCnt > 1) return false;
      continue;
    }
    j++;
  }
  return diffCnt === 1;
};

var isOneEditDistance = function(s, t) {
  if ((s.length + 1) === t.length) {
    return isOneDiff(t, s);
  } else if((t.length + 1) === s.length) {
    return isOneDiff(s, t);
  } else {
    return isOneDiffAtSame(s, t);
  }
};


/**
 * brute force에서 뭐 줄일 수 있나 보자.
 * 일단, insert, delete, replace는 두 string 길이보면 된다.
 * t-s 같은 것을 했을 때 하나 남는지 확인하면 되나?
 * 하나만 다른 것을 찾으면 된다.
 */

let result = isOneEditDistance('bbb', 'acb');
result
