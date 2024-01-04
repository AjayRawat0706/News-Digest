const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&apikey=fa218fbf07cc9735c465e5b13024db41`
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

async function getNews(category) {
    const data = await fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&apikey=fa218fbf07cc9735c465e5b13024db41`);
    const parsedData = await data.json();
    console.log(parsedData.articles)
    setNews(parsedData.articles);
}
function setNews(articles) {
    const newsArea = document.getElementById("news-page");
    const newsTemplate = document.getElementById("news-template");

    newsArea.innerHTML = "";

    articles.forEach((news) => {
        const cardCopy = newsTemplate.content.cloneNode(true);
        fillCard(cardCopy, news);
        newsArea.appendChild(cardCopy);
    });
}

function fillCard(cardCopy, news) {
    const image = cardCopy.querySelector(".image");
    const title = cardCopy.querySelector(".title");
    const authordetail = cardCopy.querySelector(".authordetail");
    const description = cardCopy.querySelector(".description");
    const url = cardCopy.querySelector(".url");

    image.src = news.image;
    title.innerHTML = `${news.title.substring(0, 60)}......`;
    description.innerHTML = `${news.description.substring(0,140)}.......`;
    authordetail.innerHTML = `BY-${news.source.name}`;
    url.href=news.url;
}
window.addEventListener("load", () => getNews("general"));

function handleCategory(category) {
    document.title = `News Digest ${category}`;
    getNews(category);
}

function handleCategoryMob(category) {
    document.title = `News Digest ${category}`;
    getNews(category);
    myFunction();
}





