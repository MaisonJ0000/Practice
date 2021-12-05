// map
const arr = [1, 2, 5];

const map = Object.fromEntries(arr.map(el => [el, 1]));
console.log(map);

// 코딩에 필요한 skill들이 있었음

for (const [i, el] of arr.entries()) {

}

// push를 concat으로 변환해서 깔끔하던 예시도 있었는데, 아마 map to array일듯
// 아래를 concat으로 하면 쉬웠던것같다다const map = {};
for (let str of strings) {
    const zSucc = getZSucc(str);
    if (!map[zSucc]) map[zSucc] = [str];
    else map[zSucc].push(str);
}
// return Object.values(map);




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


// sort 헷갈릴때

const sorted = nums.sort((b2,b1) => b2-b1);


const l = Array(s.length).fill(null).map(() => Array(s.length));


//char
const incCharNum = char.charCodeAt(0) + 1;
// return String.fromCharCode(incCharNum);



// splice slice 맨날 헷갈림, shift pop