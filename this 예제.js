// this
//// 일반 함수의 this는 호출 위치에서 정의
//// 화살표 함수의 this는 자신이 선언된 함수 (렉시컬) 범위에서 정의

const user = 
{
    firstName: "Hyunjin",
    lastName: "Jo",
    age: 33,
    getFullName: function()
    {
        return `${this.firstName} ${this.lastName}`;
    },
    getFullNameArrowFunction: () => 
    {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(user.getFullName()); // "Hyunjin Jo"
console.log(user.getFullNameArrowFunction()); // undefined undefined

function userB()
{
    this.firstName = "Seongha";
    this.lastName = "Jo";
    
    return {
        firstName: "Hyunjin",
        lastName: "Jo",
        age: 33,
        getFullName: function() // getFullName() { }, 로 축약 가능
        {
            return `${this.firstName} ${this.lastName}`;
        },
        getFullNameArrowFunction: () => 
        {
            return `${this.firstName} ${this.lastName}`;
        }
    };
}

const u = userB();
console.log(u.getFullName()); // "Hyunjin Jo"
console.log(u.getFullNameArrowFunction()); // "Seongha Jo"

const userC = 
{
    firstName: "Siyeon",
    lastName: "Seo"
}

console.log(u.getFullName.call(userC)); // "Siyeon Seo"

// =========================================================================

const timer = 
{
    title: "TIMER!",
    timeout() 
    {
        console.log(this.title);
        setTimeout(function() 
        {
            console.log(this.title); // setTimeout() 안에서 title를 찾으나 없으니 undefined 리턴
        }, 1000);
    },
    timeoutArrowFunction()
    {
        console.log(this.title);
        setTimeout(() => 
        {
            console.log(this.title); // TIMER!
        }, 1000);
    }
};

tile.timeout(); // TIMER! // 1초뒤 undefined
tile.timeoutArrowFunction(); // TIMER! // 1초뒤 TIMER!