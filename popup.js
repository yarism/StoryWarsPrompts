function fetchCategory() {
	var select = document.getElementById("category");
	var selectedCategory = select.options[select.selectedIndex].value;
	saveCategory(selectedCategory);
	return selectedCategory;
}

function saveCategory(category) {
	chrome.storage.sync.set({'category': category});
}

function setSavedCategory(category) {
	var select = document.getElementById("category");
	for(var i=0; i < select.options.length; i++) {
		if (select.options[i].value === category) {
			select.selectedIndex = i;
			break;
		}
	}
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
	chrome.storage.sync.get('category', function (result) {
		if (result.category) {
			setSavedCategory(result.category);
		}
	});
});