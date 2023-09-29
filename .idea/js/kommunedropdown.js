const urlKommune = "https://api.dataforsyningen.dk/kommuner";

async function fetchKommuner(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


function fillDropdown(kommuner) {
    const dropdown = document.getElementById("kommuneDropdown");
    dropdown.innerHTML = "";
    kommuner.forEach(kommune => {
        const option = document.createElement("option");
        option.textContent = kommune.navn;
        option.value = kommune.kode;
        dropdown.appendChild(option);
    });
}

async function actionFetch() {
    const kommuner = await fetchKommuner(urlKommune);
    fillDropdown(kommuner);
    //console.log(kommuner);
}



const pbFetchKommuner = document.getElementById("pbFetchKommuner");
pbFetchKommuner.addEventListener('click', actionFetch);


