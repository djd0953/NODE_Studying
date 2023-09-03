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