import { articlesArray } from "/data.js"


// This function allows the re-use of the HTML for articles to make the code DRY
function getArticleHTML(article) {
	return `<article class="article-recent"><h2 class="article-recent-title">${article.title}</h2><img class="article-recent-image" src="${article.image}" alt="${article.altText}"><p class="article-recent-date">${article.date}</p><p class="article-recent-content">${article.content}</p><a class="article-recent-readmore" id="${article.id}" href="${article.readmelink}" data-readmorelink="${article.id}">Read more</a></article>`
}

//THis funciton renders the HTML for the featured article in the home page and the recent posts 
export function renderArticles() {
	const mainArticles = document.getElementById("main-articles")
	mainArticles.innerHTML = ""
	let articleCount = 0
	
		articlesArray.reverse().forEach(function (article) {
			// Ensure 3 articles always appear in recent posts
			if (articleCount < 3) {
				if (
					article.featured === "no" && // Ensure article is not a featured article
					article.id != localStorage.getItem("id") // Don't render if the article id is in localstorage
				) {
					mainArticles.innerHTML += getArticleHTML(article)
					articleCount++
				}
			}
			// Render the home page feature article
			if (article.featured === "yes") {
				if (document.getElementById("article-featured")) {
					document.getElementById("article-featured").innerHTML = `
						<article class="container">
							<p class="article-featured-title">${article.title}</p>
							<p class="article-featured-date">${article.date}</p>
							<p class="article-featured-content">${article.content}</p>
							<a class="article-featured-readmore" id="${article.id}" data-readmorelink="${article.id}" href="${article.readmelink}">Read more</a>
						</article>
					`
					document.getElementById(
						"article-featured"
					).style.backgroundImage = `url("${article.image}")`
				}
			}
		})
	
	} 

// This function renders all articles when the view more link is clicked.  It is called from listenForClicks function
export function renderMoreArticles() {
	const mainArticles = document.getElementById("main-articles")
	mainArticles.innerHTML = ""
	articlesArray.reverse().forEach(function (article) {
		if (article.featured === "no") {
			mainArticles.innerHTML += getArticleHTML(article)
		}
	})
}


// This function renders the article that the user selected by clicking the Read More link for that article
// It gets the id from the listenForClicks event handler function and then renders the article in featured-article.html
export function renderFeatureArticles(id) {
	console.log(id)
	const currentArticle = document.getElementById("article-current")
	currentArticle.innerHTML = ""
	articlesArray.forEach(function (article) {
		if (article.id == id) {
			currentArticle.innerHTML += `<h2 class="article-current-title">${article.title}</h2>
				<p class="article-current-date">${article.date}</p>
				<p class="article-current-content">${article.content}</p>
				<img class="article-current-image" src="${article.image}" alt="${article.altText}">
				<p class="article-current-subtitle">${article.subTitle1}</p>
				<p class="article-current-content">${article.paragraph1}</p>
				<p class="article-current-subtitle">${article.subTitle2}</p>
				<p class="article-current-content">${article.paragraph2}</p>
				`
		}
	})
}

// This function is used on all pages to listen for any clicks on the document.
// If it detetcs a click on the Read More article links it stores the article id in local storage so that when the featured-article.html page loads
// it uses the article id to render the article that was clicked.
// If it detects a click in the View more link then it calls renderMoreArticles function to show more articles.
export function listenForClicks() {
	document.addEventListener("click", function (e) {
		if (e.target.dataset.readmorelink) {
			localStorage.setItem("id", e.target.dataset.readmorelink)
		}
		else if (e.target.id === "view-more") {
			if (e.target.textContent.includes("more")) {
				e.target.textContent = "view less"
				renderMoreArticles()
			} else if (e.target.textContent.includes("less")) {
				e.target.textContent = "view more"
				renderArticles()
			}
		}
	})
}
