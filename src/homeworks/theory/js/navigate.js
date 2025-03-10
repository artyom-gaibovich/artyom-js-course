function getPageNumber() {
	const fileName = window.location.pathname.split('/').pop();
	const pageNumber = parseInt(fileName.split('.')[0], 10);
	return pageNumber;
}

function updateNavigation() {
	const currentPage = getPageNumber();

	const nextPage = currentPage + 1;
	const prevPage = currentPage - 1;

	const nextPageLink = document.getElementById('nextPage');
	const prevPageLink = document.getElementById('prevPage');

	if (currentPage === 1) {
		prevPageLink.style.display = 'none';
	} else {
		prevPageLink.style.display = 'block';
		prevPageLink.href = prevPage + '.html';
	}

	const lastPage = 25;
	if (currentPage === lastPage) {
		nextPageLink.style.display = 'none';
	} else {
		nextPageLink.style.display = 'block';
		nextPageLink.href = nextPage + '.html';
	}
}

window.onload = updateNavigation;