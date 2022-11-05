import { articlesArray } from "/data.js"

export function renderMainArticles() {
	const mainArticles = document.getElementById("main-articles")
	mainArticles.innerHTML = ""
	articlesArray.forEach(function (article) {
		if (article.id < 4 && article.featured === "no") {
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

export function renderMoreArticles() {
	const readMoreArticles = document.getElementById("read-more-articles")
	readMoreArticles.innerHTML = ""
	articlesArray.forEach(function (article) {
		if (article.id > 3 && article.featured === "no") {
			readMoreArticles.innerHTML += `
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

export function renderFeatureArticles() {
	const featureArticle = document.getElementById("article-featured")
	featureArticle.innerHTML = ""
	articlesArray.forEach(function (article) {
		if (article.featured === "yes") {
			featureArticle.innerHTML += `
			<article class="container flex-column">
				<h2 class="article-featured-title">${article.title}</h2>
				<p class="article-featured-date">${article.date}</p>
				<p class="article-featured-content">${article.content}</p>
				<a class="article-featured-readmore" href="${article.readmelink}">Read more</a>
            </article>`
		}
	})
}
