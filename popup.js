function fetchCategory() {
	var select = document.getElementById("category");
	var selectedCategory = select.options[select.selectedIndex].value;
	return selectedCategory;
}

function clickHandler(e) {
	var selectedCategory = fetchCategory();
	chrome.tabs.create({
    	url: "https://www.storywars.net/stories/recommended/random/writing/" + selectedCategory
	});
	window.close();
}

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('.btn').addEventListener('click', clickHandler);
});