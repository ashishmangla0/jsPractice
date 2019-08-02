// assignment Operators
var x = 2;
var y = 3;
console.log(x);
// expected output: 2
console.log(x = y + 1); // 3 + 1
// expected output: 4
console.log(x = x * y); // 4 * 3
// expected output: 12


//Types of assignment Operators
/*

Assignment	x = y	x = y
Addition assignment	x += y	x = x + y
Subtraction assignment	x -= y	x = x - y
Multiplication assignment	x *= y	x = x * y
Division assignment	x /= y	x = x / y
Remainder assignment	x %= y	x = x % y
Exponentiation assignment	x **= y	x = x ** y
Left shift assignment	x <<= y	x = x << y
Right shift assignment	x >>= y	x = x >> y
Unsigned right shift assignment	x >>>= y	x = x >>> y
Bitwise AND assignment	x &= y	x = x & y
Bitwise XOR assignment	x ^= y	x = x ^ y
Bitwise OR assignment 
*/


/* Assignment Addition */

let a = 1;
let b = 2;
let c = true;
let d = 'ashish';

let e=[];
let f=[];

//add number and number -> addition
//console.log(`adding number and numbner ${a + b}`);
//console.log(`adding number ${a += 10}`);

//adding boolen and number -> addition
//console.log(`adding boolen and number ${b+true}`);

//adding boolen and boolen -> addition
//console.log(`adding boolen and boolem ${b+false}`);

//adding string and number -> concat
console.log(`adding number and string ${b +='doo'}`)

//adding sting and bollen -> concat
console.log(`adding sting and bollen ${d+=false}`);

//adding two empty array
//console.log(`adding two empty array ${e+=[]}`);

//adding empty array and empty object
console.log(`adding two empty array and empty object ${e+={}}`);







/*
Activites
1. Networking (yes, you may be required to wear a name tag) 
2. Intro to Venture7 and our tech stack by Sumit ch.
3. XD (creating design)
4. 
*/