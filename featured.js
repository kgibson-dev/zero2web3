import { renderFeatureArticles, renderArticles, listenForClicks } from "/resources/helper.js"

renderArticles()
listenForClicks()
renderFeatureArticles(localStorage.getItem("id"))
