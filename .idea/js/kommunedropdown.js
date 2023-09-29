const urlKommune = "https://api.dataforsyningen.dk/kommuner";

function fetchKommuner(any) {
    return fetch(any).then(response => response.json());
}

async function fetchKommuner(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function actionFetch() {
    const kommuner = await fetchKommuner(urlKommune);
    console.log(kommuner);
}


const pbFetchKommuner = document.getElementById("pbFetchKommuner");
pbFetchKommuner.addEventListener('click', actionFetch);

