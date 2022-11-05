import { articlesArray } from "/data.js"
import { renderMainArticles } from "/resources/helper.js"
import { renderMoreArticles } from "/resources/helper.js"
import { renderFeatureArticles } from "/resources/helper.js"

const viewMore = document.getElementById("view-more")
const readMoreArticles = document.getElementById("read-more-articles")

viewMore.addEventListener("click", function () {
	if (viewMore.textContent.includes("more")) {
		viewMore.textContent = "view less"
		renderMoreArticles()
	} else if (viewMore.textContent.includes("less")) {
		viewMore.textContent = "view more"
		readMoreArticles.innerHTML = ""
	}
})

renderMainArticles()
renderFeatureArticles()