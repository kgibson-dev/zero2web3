const viewMore = document.getElementById('view-more')
const readMoreArticles = document.getElementById('read-more-articles')



viewMore.addEventListener('click', function(){
    if (viewMore.textContent.includes("more")) {
		viewMore.textContent = "view less"
	} else if (viewMore.textContent.includes("less")) {
		viewMore.textContent = "view more"
	}
	readMoreArticles.classList.toggle("hidden")
})