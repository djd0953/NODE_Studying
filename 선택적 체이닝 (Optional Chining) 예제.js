// 선택적 체이닝

const user = {};
console.log(user.name); // undefined Error가 뜨지 않음

const user2 = null;
console.log(user2.name); // Error 발생
console.log(user2?.name); // null Error가 발생하지 않음음

const userA = 
{
    name: '홍길동',
    age: 25,
    address:
    {
        country: "Korea",
        city: "Seoul"
    }
};

const userB =
{
    name: 'Neo',
    age: 22
};

function getCity(user)
{
    return user.address?.city || "주소 없음";
}

console.log(getCity(userA));
console.log(getCity(userB));