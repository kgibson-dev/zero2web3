import { articlesArray } from "/data.js"

const viewMore = document.getElementById('view-more')
const readMoreArticles = document.getElementById('read-more-articles')
const mainArticles = document.getElementById('main-articles')

viewMore.addEventListener('click', function(){
    if (viewMore.textContent.includes("more")) {
		viewMore.textContent = "view less"
	} else if (viewMore.textContent.includes("less")) {
		viewMore.textContent = "view more"
	}
	readMoreArticles.classList.toggle("hidden")
})


function renderarticles() {
	mainArticles.innerHTML = ""
	articlesArray.forEach(function(article){
		if (article.id < 3) {
			mainArticles.innerHTML += `
			<article class="article-recent flex-column">
				<h2 class="article-recent-title">${article.title}</h2>
				<img class="article-recent-image" src="${article.image}" alt="${article.altText}">
				<p class="article-recent-date">${article.date}</p>
				<p class="article-recent-content">${article.content}</p>
				<a class="article-recent-readmore" href="${article.readmelink}">Read more</a>
            </article>`
		}
		
	})
}

renderarticles()
