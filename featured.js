import { renderFeatureArticles, renderArticles, listenForClicks } from "/resources/helper.js"

renderArticles()
listenForClicks()

// Render the article that the user has clicked by passing the id of the article stored in localstorage
renderFeatureArticles(localStorage.getItem("id"))
