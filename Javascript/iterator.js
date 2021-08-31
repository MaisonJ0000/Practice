const a = [1,2,3,4];

// a.next(); /*?*/

const aIter = a[Symbol.iterator]();
aIter.next(); /*?*/
aIter.next(); /*?*/
