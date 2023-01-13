const datas = [{
    img: "https://books.google.com/books/content/images/frontcover/r23bFouhu1MC?fife=w256-h256",
    title: "Limitless: Upgrade Your Brain, Learn Anything Faster, and..",
    price: 120000,
}, ];

function app() {
    return datas.map((data) => { <
        div >
            <
            img src = { data.img } > < /img> <
            p > { data.title } < /p> <
            p > { data.price } < /p> <
            /div>;
    });
}

export default app;