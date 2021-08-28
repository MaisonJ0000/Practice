/**
 * 앞뒤가 똑같은 string = Palindrome
 * @param {string} s
 * @return {string}
 */



var longestPalindrome = function(s) {
  s = '#' + s;
  const l = Array(s.length).fill(null).map(() => Array(s.length));
  for (let i = s.length - 1; i >= 1 ; i--) {
    for (let j = i; j < s.length; j++) {

      if (i===j) {
        l[i][j] = true;
        continue;
      }
      l[i][j] = function() {
        if (s[i] !== s[j]) return false;
        else {
          if ((j-i) <= 1) {
            return true;
          }
          else {
            return l[i+1][j-1];
          }
        }
      }();
    }
  }

  let longStr = '';
  for (const [i, row] of l.entries()) {
    for (const [j, val] of row.entries()) {
      if (val) {
        if ((j - i) >= longStr.length) {
          longStr = s.slice(i, j+1);
        }
      }
    }
  }
  return longStr;
};

/** 왜 dp인가
 * greedy로 하기엔 substring의 가지수가 많다. substring 수만 해도 O(n^2) (n(n-1)/2) 이다. 총 O(n^3)이 걸릴것이다.
 * 작은 문제로 나눌 수 있어보인다.
 * Note: 무리해서 O(n)으로 시도해보지는 말자. 시작은 작은 단위로 쪼개보는 것 부터.
 */

/**
 * dp로 풀어보자.
 * i번째에서 시작하여 j번째로 끝나는 것이 Palin인지 여부.
 * 이중에 max만 찾으면 되는걸로.
 *
 * 기본은 l(i,j) = s[i] === s[j] && l(i+i,j-1) 이다
 * i 와 j가 같을때만 예외처리해주면 되지 않나?
 */

// 코딩 시작.


let result1 = longestPalindrome("SQQSYYSQQS");
result1

