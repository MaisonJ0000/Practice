/**
 * 앞뒤가 똑같은 string = Palindrome
 * @param {string} s
 * @return {string}
 */

const findLongFrom = (s, i) => {
  // s[0] is dummy char.
  // i will be > 0

  //center long
  let centerLong = s[i];
  let start = i-1;
  let end = i+1;
  while (start >= 0 && end < s.length) {
    if(s[start] !== s[end]) break;
    centerLong = s[start] + centerLong + s[end];
    start--;
    end++;
  }

  let leftLong = '';
  start = i-1;
  end = i;
  while (start >= 0 && end < s.length) {
    if(s[start] !== s[end]) break;
    leftLong = s[start] + leftLong + s[end];
    start--;
    end++;
  }

  if (centerLong.length > leftLong.length) return centerLong;
  else return leftLong;
}

var longestPalindrome = function(s) {
  s = '#' + s;
  const l = {};
  for (let i = 1; i < s.length; i++) {
    l[i] = findLongFrom(s, i);
  }

  return Object.values(l).reduce((max, str) => {
    if (max.length <= str.length) return str;
    return max;
  }, '');
};

/** 왜 dp인가
 * greedy로 하기엔 substring의 가지수가 많다. substring 수만 해도 O(n^2) (n(n-1)/2) 이다. 총 O(n^3)이 걸릴것이다.
 * 작은 문제로 나눌 수 있어보인다.
 * Note: 무리해서 O(n)으로 시도해보지는 말자. 시작은 작은 단위로 쪼개보는 것 부터.
 */

/**
 * 1. i index를 중심으로 하는 최대를 찾아서 max 로 구하기.
 * 떠올리기도 쉽다.
 * 홀수이면 쉬울테고, 아닌 경우에는 왼쪽지점을 포인트로 잡아서 appending 해나가기.
 */

// 코딩 시작.


let result1 = longestPalindrome("SQQSYYSQQS");
result1

