const calcArea = (i,j, height) => {
  const width = j-i;
  let h = null;
  if (height[i] > height[j]) {
    h = height[j];
  } else
    h = height[i];
  return width * h;
}

var maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;
  while (i !== j) {
    if (calcArea(i, j, height) > maxArea) {
      maxArea = calcArea(i, j, height);
    }
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return maxArea;
};


/**
 * 긴 부분에서 더 좁게 줄여봐야 maxArea는 변하지 않는다는게 포인트.
 * 즉 검사하는 영역을 계속 좁힐 수 있다 => two pointer로 가능하다는 이야기.
 *
 */
let result1 = maxArea([4,3,2,1,4]);
result1
