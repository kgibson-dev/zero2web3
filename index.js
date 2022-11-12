import { renderArticles, listenForClicks } from "/resources/helper.js"

// Clear localstorage so that all articles are displayed correctly
localStorage.clear()

renderArticles()
listenForClicks()
