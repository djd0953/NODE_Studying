// 콜백(Callback)

const a = callback =>
{
    console.log(`a`);
    callback();
};

const b = () =>
{
    console.log('b');
};

a(b);

// =================================================================

const sum = (a, b, c) =>
{
    setTimeout(() => 
    {
        c(a + b);
        return a + b;
    }, 1000); // 콜백 함수
};

sum(1, 2, value => console.log(value));

// =================================================================
// https://www.gstatic.com/webp/gallery/4.jpg

const loadImage = (url, cb) => 
{
    const imgEl = document.querySelector("#img");
    imgEl.src = url;
    imgEl.addEventListener("load", () => 
    {
        setTimeout(() => 
        {
            cb(imgEl);
        }, 1000); // 인위적으로 1초 늦춤
    });
};

const containerEl = document.querySelector(".container");
loadImage("https://www.gstatic.com/webp/gallery/4.jpg", (imgEl) => 
{
    containerEl.innerHTML = "";
    containerEl.append(imgEl);
});