// 이게 뭐였더라?
const a = 0.1;
const b = 0.2;
console.log(Number((a + b).toFixed(1)));
function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
// Nullish 연산자!
const n = 0;
const num1 = n || 7;
console.log(num1);
const num2 = n ?? 7;
console.log(num2);
// 전개 연산자!
const arrayVar1 = [
    1,
    2,
    3
];
console.log(...arrayVar1);
const arrayVar2 = [
    4,
    5,
    6
];
console.log(...arrayVar2);
const arrayVar3 = [
    ...arrayVar1,
    ...arrayVar2
];
console.log(...arrayVar3);
// const arrayVal3 = concat(arrayVar1, arrayVar2);
const objectVar1 = {
    x: 1,
    y: 2
};
const objectVar2 = {
    y: 3,
    z: 4
};
const objectVar3 = Object.assign({}, objectVar1, objectVar2);
console.log(objectVar3);
// y값이 하나로 합쳐짐
const objectVar4 = {
    objectVar1,
    objectVar2
};
console.log(objectVar4);
// { objectVar1: { x: 1, y: 2 }, objectVar2: {y: 3, z: 4 } }
const objectVar5 = {
    ...objectVar1,
    ...objectVar2
};
console.log(objectVar5);
// { x: 1, y: 3, z: 4}
function SpreadOperatorExample(x, y, z) {
    console.log(x, y, z);
}
SpreadOperatorExample(...arrayVar1);

//# sourceMappingURL=index.c4775257.js.map
