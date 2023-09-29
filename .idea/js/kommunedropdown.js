const urlKommune = "https://api.dataforsyningen.dk/kommuner";

function fetchKommuner(any) {
    return fetch(any).then(response => response.json());
}

async function fetchKommuner(urlKommune) {
    let kommuneArr = await fetchAnyUrl(urlKommune)
    console.log(kommuneArr)
    ddKommuner.innerHTML = ""
    kommuneArr.forEach(fillDropdownObj)
}

function actionFetch() {
    const kommuner = fetchKommuner(urlKommune);
    console.log(kommuner)
}

pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener('click', actionFetch)
