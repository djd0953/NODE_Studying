function sum(a, b)
{
    // if (typeof a !== 'number' || typeof b !== 'number') return;
    return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(7)); // NaN

function newSum(a, b = 0)
{
    return a + b;
}

console.log(newSum(1, 2)); // 3
console.log(newSum(7)); // 7

// =================================================================================================

const user =
{
    name: 'John',
    age: 30
}

// 바로 name property를 출력
function getName({name})
{
    // if (name === undefined) return;
    return name;
}

function getName({email = "이메일을 입력해주세요."})
{
    return email;
}

console.log(getName(user)); // John

// =================================================================================================

const fruits = ["apple", "banana", "cherry"];

function getSecondItem([, b])
{
    return b;
}

console.log(getSecondItem(fruits)); // banana

// =================================================================================================
// 나머지 매개변수 (Rest Parameter)

function restSum(...rest)
{
    console.log(arguments); // 유사 배열 (Array-Like)
    return rest.reduce((acc, cur) =>
    {
        return acc + cur;
    }, 0);
}