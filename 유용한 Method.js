//표준 내장 객체 (MDN 참조)
//String Methods
const str = "Hello!";
//           012345

str.length; // 문자열 길이 반환 (6)

str.includes("He"); // 문자열 포함 여부 (true)
str.includes("he"); // 문자열 포함 여부 (false)
str.includes("He", 0); // 0번째 문자열 포함 여부 (true)

str.indexOf("He"); // 문자와 일치하는 인덱스 반환 (0)
str.indexOf("lo"); // 문자와 일치하는 인덱스 반환 (3)
str.indexOf("he"); // 문자와 일치하는 인덱스 반환 (-1)

str.lastIndexOf("He"); // 마지막 문자와 일치하는 인덱스 반환 (6)
str.lastIndexOf("lo"); // 마지막 문자와 일치하는 인덱스 반환 (3)
str.lastIndexOf("he"); // 마지막 문자와 일치하는 인덱스 반환 (-1)

str.repeat(3); // 3회 반복된 문자열 반환 ("Hello!Hello!Hello!")

str.padEnd(7, '!'); // 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환 ("Hello!!!")
str.padEnd(4, '!'); // 대상 문자의 길이가 지정된 길이보다 작으면 무시 ("Hello!")

str.padStart(7, '!'); // 주어진 문자를 지정된 길이까지 처음에 붙여 새로운 문자를 반환 ("!!Hello!")
str.padStart(4, '!'); // 대상 문자의 길이가 지정된 길이보다 작으면 무시 ("Hello!")

str.startsWith("Hello"); // 문자열의 첫글자가 지정된 문자와 일치하는지 확인 (true)
str.startsWith("he"); // 문자열의 첫글자가 지정된 문자와 일치하는지 확인 (false)

const str2 = "Hello! Hello!";

str.replace("Hello", "Hi"); // "Hi! Hello!"
str.replace(/Hello/g, "Hi"); // "Hi! Hi!"

str.slice(0, 3); // "Hel"
str.slice(0, -1); // "Hello"
str.slice(2); // "llo!"
str.slice(-3); // "lo!"
str.slice(-3, -1); // "lo"

str.split(""); // ["H", "e", "l", "l", "o", "!"]
str.split("").reverse(); // ["!", "o", "l", "l", "e", "H"]
str.split("").reverse().join("") // "!olleH"
str2.split(" "); // ["Hello", "Hello!"]

str.toUpperCase(); // 대문자로 "HELLO!"
str.toLowerCase(); // 소문자로 "hello!"

str2.trim(); // 앞뒤 공백 제거 >> 중간 공백은 제거X ("Hello! Hello!")

// Number Methods
const num = 1000000;
const pi = 3.141592653589793238;

Number.isInteger(num); // 정수인지 확인 (true)
Number.isInteger(pi); // 정수인지 확인 (false)

num.toLocaleString(); // 1,000,000

pi.toFixed(3); // 3.141

Number.isNaN(num); // NaN인지 확인 (false)
Number.isNaN(str); // NaN인지 확인 (false)

Number.parseInt("3.14", 10); // 10진수 정수로 반환 (3)
Number.parseInt(pi, 10); // 10진수 정수로 반환 (3)

// Math Methods
Math.abs(2); // 2
Math.abs(-2); // 2

Meth.ceil(2.5); // 올림 (3)
Meth.floor(2.5); // 내림 (2)
Meth.round(2.5); // 반올림 (3)

Meth.max(2, 3, 4); // 큰 숫자 반환 (4)
Meth.min(2, 3, 4); // 작은 숫자 반환 (2)

Meth.pow(2, 3); // 2^3 (8)

Meth.random(); // 0이상 1미만의 난수 반환
const random = (min = 0, max = 10) => Math.floor(Math.random() * (max - min)) + min; // 첫번째 파라미터 부터 두번째 파라미터까지 난수 반환

// Date Methods
let date = new Date(); // "Sun Sep 03 2023 23:49:26 GMT+0900 (한국 표준시)"
date = new Date(2023, 9, 2, 22, 30); // "Mon Oct 02 2023 22:30:00 GMT+0900 (한국 표준시)" Month는 0부터 1월!
date = new Date("Mon Oct 02 2023 22:30:00 GMT+0900 (한국 표준시)"); // "Mon Oct 02 2023 22:30:00 GMT+0900 (한국 표준시)" Month는 0부터 1월!
date = new Date("2023-09-02 23:49:26"); // "Sun Sep 03 2023 23:49:26 GMT+0900 (한국 표준시)"

date.getFullYear(); // 2023
date.getMonth(); // 8 (0부터 11)
date.getDate(); // 2
date.getHours(); // 23
date.getMinutes(); // 49
date.getSeconds(); // 26

// Array Methods
// forEach 가능
let arrStr = ["a", "b", "c"];

console.log(arrStr[0]); // "a"
console.log(arrStr.at(0)); // "a"
console.log(arrStr.length); // 3 (배열 길이)
console.log(arrStr.at(-1)); // "c"

let arrStr2 = ["d", "e", "f"];
let arrStr3 = arrStr.concat(arrStr2); // ["a", "b", "c", "d", "e", "f"]
// let arrStr3 = [...arrStr, ...arrStr2]; // ["a", "b", "c", "d", "e", "f"]

let arrNum = [1, 2, 3, 4];
let arrMap = arrNum.map(item => item * 2); // [2, 4, 6, 8]
let arrMap2 = ArrayMapSample();
let arrIncludes = arrNum.includes(5); // 해당 데이터가 배열에 포함하는지 확인 {대소문자 구분} (false)
let arrJoin = arrStr.join(','); // a,b,c
let arrSome = arrNum.every(item => item < 4); // 요소 중 한개라도 True를 반환하는지 확인 (true)
let arrEvery = arrNum.every(item => item < 4); // 모든 요소가 True를 반환하는지 확인 (false)
let arr5 = arrNum.filter(item => item < 3); // True인 모든 요소를 새로운 배열로 반환 ([1, 2])
let arrFind = arrNum.find(item => item < 3); // True인 첫번째 요소 반환 (1)
let arrFIndIndex = arrNum.findIndex(item => item < 3); // True인 첫번째 요소의 인덱스 반환 (0)
let arrReduce = arrNum.reduce((acc, item) => acc + item, 0); // 초기값 0인채로 배열을 loop함. 매 순환시 반환값이 acc로 다음 배열값이 item값으로 들어와서 계산을하고 마지막 acc를 반환 (10)

let arrFlat = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let arrFlat2 = arrFlat.flat(); // 지정한 깊이까지 이어붙인다 default : 1 ([1, 2, 3, 4, [5, 6, [7, 8]]])
let arrFlat3 = arrFlat.flat(2); // 지정한 깊이까지 이어붙인다 default : 1 ([1, 2, 3, 4, 5, 6, [7, 8]])
let arrFlat4 = arrFlat.flat(Infinity); // 지정한 깊이까지 이어붙인다 default : 1 ([1, 2, 3, 4, 5, 6, 7, 8])

arrNum.pop(); // 마지막 요소 제거 ([1, 2, 3]) 
arrNum.push(7, 8); // 마지막에 하나 이상의 요소 추가 ([1, 2, 3, 7, 8])
arrNum.unshift(0); // 첫번째에 하나의 요소 추가 ([0, 1, 2, 3, 7, 8])
arrStr.reverse(); // 배열의 순서 반전 (["c, "b" ,"a"])
let arrShift = arrStr.shift(); // 배열의 첫 번째 요소를 제거하고, 제거된 요소 반환 (arrShift = "c", arrStr2 = ["b", "a"])

let arrSlice = ["a", "b", "c", "d", "e", "f", "g"];
console.log(arrSlice.slice(0, 3)); // ["a", "b", "c"]
console.log(arrSlice.slice(4, -1)); // ["e", "f"]
console.log(arrSlice.slice(4)); // ["e", "f", "g"]

let arrSort = [4, 17, 2, 103, 3, 1, 0];
arrSort.sort(); // 텍스트 기반(유니코드)으로 정렬 ([0, 1, 103, 17, 2, 3, 4])
arrSort.sort((a, b) => a - b); // 순환하면서 순환하는 데이터(a)와 그 다음 데이터(b)를 계산하여 정렬 ([0, 1, 2, 3, 4, 17, 103])
arrSort.sort((a, b) => b - a); // 순환하면서 순환하는 데이터(a)와 그 다음 데이터(b)를 계산하여 정렬 ([103, 17, 4, 3, 2, 1, 0])

let arrSplice = ["a", "b", "e"];
arrSplice.splice(2, 0, "c", "d"); // 2번째 인덱스부터 0개의 자리에 'c', 'd'를 추가(교체) (["a", "b", "c", "d", "e"])
arrSplice.splice(2, 1); // 2번째 인덱스부터 1개의 자리 요소 삭제 (["a", "b", "d", "e"])
arrSplice.splice(2, 1, 'c'); // 2번째 인덱스부터 1개의 자리에 'c'로 교체 (["a", "b", "c", "e"])

// Array.from(node.children) :: 유사배열을 배열로 변환 (node.children같은 경우 유사배열로 반환하여 forEach가 사용이 힘든경우 사용)
// Array.isArray(arr) :: 배열인지 확인 (배열이나 객체같은경우 typeof으로는 확인이 힘듬)

function ArrayMapSample()
{
    // 다음과 같이 map 매소드 활용 가능
    let users = 
    [
        { name: "Neo", "age" : 85 },
        { name: "Amy", "age" : 22 },
        { name: "Lewis", "age" : 11 }
    ];

    let newUsers = users.map(user => 
    ({
        ...user,
        isValid: true,
        email: null
    }));
        
    console.log(newUsers);
}

// Object Methods
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let obj3 = Object.assign({}, obj1, obj2); // {}에 하나 이상의 Object의 (obj1, obj2) 속성을 복사 {같은 속성이 있을 경우 마지막 값이 들어감} ({ a : 1, b: 3, c: 4 })
// obj3 = { ...obj1,...obj2 } // 위와 같은 효과

// Object.entries(obj) :: obj를 배열로 만들어 2차원 배열로 반환 {안쓸듯..}
console.log(Object.keys(obj1)); // 키를 배열로 반환 (["a", "b"])
console.log(Object.values(obj1)); // 값을 배열로 반환 ([1, 2])