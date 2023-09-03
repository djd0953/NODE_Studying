// 소수점 이하 버림, CheckType 타입 확인
const a = 0.1;
const b = 0.2;

console.log(Number((a + b).toFixed(1)));

function checkType(data)
{
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}