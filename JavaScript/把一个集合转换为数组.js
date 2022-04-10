const A = 'asdfgh';

const B = { 0: 1, b: 2, 5: 3, length: 8 }


let arr

// arr = Array.from(A) // [ 'a', 's', 'd', 'f', 'g', 'h' ]
// arr = Array.from(B) // [ 1, undefined, undefined, undefined, undefined, 3, undefined, undefined ]


// arr = [].slice.apply(A) // [ 'a', 's', 'd', 'f', 'g', 'h' ]
// arr = [].slice.apply(B) // [ 1, <4 empty items>, 3, <2 empty items> ]


// arr = [...A] // [ 'a', 's', 'd', 'f', 'g', 'h' ]
arr = [...B] // [ 'a', 's', 'd', 'f', 'g', 'h' ]


// arr = [].map.call(A, o => o) // [ 'a', 's', 'd', 'f', 'g', 'h' ]
// arr = [].map.call(B, o => o) // [ 'a', 's', 'd', 'f', 'g', 'h' ]


console.log(arr)