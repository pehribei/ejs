const articles = [
    {
        id: 1,
        title: "Entenda como as startups espaciais estão crescendo",
        description: "Empreendimentos ligados ao cosmos atraíram mais de US$ 15 bilhões em financiamento total durante 2021"
    },
    {
        id: 2,
        title: "Spotify compra empresa de games. Entenda o motivo",
        description: "A Spotify anunciou sua primeira aquisição no segmento de games com a compra do Heardle, jogo musical sensação do momento. O movimento é parte de esforços para aperfeiçoar a descoberta de música na plataforma"
    }
];

function getArticles() {
    return articles;
}

function getArticleById(articleId) {
    return articles.find(article => {
        return article.id === Number(articleId)
    });
}

export {getArticles, getArticleById};
