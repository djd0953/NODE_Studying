// 전개 연산자!
const arrayVar1 = [1, 2, 3];
console.log(...arrayVar1);

const arrayVar2 = [4, 5, 6];
console.log(...arrayVar2);

const arrayVar3 = [...arrayVar1,...arrayVar2];
console.log(...arrayVar3);
// const arrayVal3 = concat(arrayVar1, arrayVar2);

const objectVar1 = { x: 1, y: 2 };
const objectVar2 = { y: 3, z: 4 };

const objectVar3 = Object.assign({}, objectVar1, objectVar2);
console.log(objectVar3);
// y값이 하나로 합쳐짐

const objectVar4 = {objectVar1, objectVar2};
console.log(objectVar4);
// { objectVar1: { x: 1, y: 2 }, objectVar2: {y: 3, z: 4 } }

const objectVar5 = {...objectVar1,...objectVar2 };
console.log(objectVar5);
// { x: 1, y: 3, z: 4}

function SpreadOperatorExample(x, y, z)
{
    console.log(x, y, z);
}

SpreadOperatorExample(...arrayVar1);