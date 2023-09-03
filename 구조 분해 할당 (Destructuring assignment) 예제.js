// 구조 분해 할당!
const arrayVar1 = [1, 2, 3];

const [DestVar1, DestVar2, DestVar3] = arrayVar1;
// const [, DestVar2, DestVar3] = arrayVar1; 이렇게 첫번째 인덱스를 빼거나
// const [DestVar1, ...DestVar2] = arrayVar1; 이렇게 2이후 인덱스를 한번에 넣는것도 가능
console.log(DestVar1, DestVar2, DestVar3);

const obj = 
{
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    y: 7
}

const {a, b} = obj;
console.log(a, b); // 1, 2

const {c} = obj;
console.log(c); // 3

const {x} = obj;
console.log(x); // undefined

const {y = 4, z = 4} = obj; // obj에 없다면 = 이후 값이 들어가고 있다면 무시
console.log(y, z); // 7, 4

const {d: newVar} = obj;
console.log(newVar); // 4 명칭 변경 (undefined = 까지 사용한다면 >> d: newVar = 10)

const {e, ...rest} = obj; // e를 제외한 나머지를 rest에 넣음
console.log(e, rest); // 5, e를 제외한 obj