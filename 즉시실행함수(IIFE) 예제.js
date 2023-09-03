// 즉시실행함수(IIFE, Immediately-Invoked Function Expression)

const a = 7;

const double = () => 
{
    console.log(a * 2);
}
double();

// 즉시 실행
(() => 
{
    console.log(a * 2);
})();

(() => {})();           // (Function)()
(function () {})();     // (Function)()
(function () {} ());    // (Function)()
!function() {}();       // !Function()
+function() {}();       // +Function()

// 유용하지 않다 (코드 난독화)
((a, b) => 
{
    console.log(a);
    console.log(b);
})(1, 2);