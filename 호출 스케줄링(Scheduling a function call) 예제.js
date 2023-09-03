setTimeout(() =>
{
    console.log("2초 뒤");
}, 2000);

const hello = () =>
{
    console.log("2초 뒤 Hello World");
}

const timeout = setTimeout(hello, 2000);
// const timeout = setInterval(hello, 2000); // 2초마다 반복
document.querySelector("h1").addEventListener("click", () => 
{
    console.log("Clear!!");
    clearTimeout(timeout);
});