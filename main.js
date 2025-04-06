const accesskey = "tRR36ILLnhR1BZ39Q9KKMYO3mS-SoKJDhWHKEHBAE4c";
const searchForm = document.getElementById('search-form');
const input = document.getElementById('inputSearch');
const searchResult = document.querySelector('.search-result');
const searchMore = document.querySelector('.search-more-btn');
const searchbtn = document.querySelector('#search-btn');

let inputData = "";
let page = 1;

async function searchImage() {
    inputData = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        //?
        searchResult.innerHTML = "";
    }

    // Why ?
    // else if(inputData ==" ")
    // {
    //     alert("Enetr Something!")
    // }

    results.forEach((x) => {
        const imgElement = document.createElement('div');
        imgElement.innerHTML = `<img src="${x.urls.small}" alt="${x.alt_description}"> `;
        searchResult.appendChild(imgElement);
    });
    searchMore.style.display="block"
}



// searchResult.addEventListener('submit', function(event) {
searchbtn.addEventListener('click', function(event) {
    //?
    event.preventDefault();
    page = 1;
    searchImage();
   
});

searchMore.addEventListener('click', function() {
    page++;
    searchImage();
     
});