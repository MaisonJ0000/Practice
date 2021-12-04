// map
const arr = [1, 2, 5];

const map = Object.fromEntries(arr.map(el => [el, 1]));
console.log(map);

// 코딩에 필요한 skill들이 있었음

for (const [i, el] of arr.entries()) {

}

// push를 concat으로 변환해서 깔끔하던 예시도 있었는데, 아마 map to array일듯



// if return 스코프 처리

const cond = 1;
let cnt = 0;

(function() {
    if (cond === 2) return;
        cnt++;
    if (cond === 3) return;
        cnt++;
    if (cond === 1) return;
    if (cond === 3) return;
        cnt++;
})();

console.log(cnt);