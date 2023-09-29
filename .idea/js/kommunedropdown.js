const urlKommune = "https://api.dataforsyningen.dk/kommuner";


async function fetchKommuner(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function actionFetch() {
    const kommuner = await fetchKommuner(urlKommune);
    fillDropdown(kommuner);
    //console.log(kommuner);
}

document.addEventListener("DOMContentLoaded", function () {
    const urlKommuneBase = "https://api.dataforsyningen.dk/kommuner/"; // Base URL til kommunelinks

    const pbFetchKommuner = document.getElementById("pbFetchKommuner");
    pbFetchKommuner.addEventListener('click', actionFetch);

    const kommuneDropdown = document.getElementById("kommuneDropdown");
    kommuneDropdown.addEventListener('change', function () {
        const valgtKommune = kommuneDropdown.value; // Får den valgte kommunes værdi (kommunekode)

        const link = document.createElement('a');
        link.href = urlKommuneBase + valgtKommune; // Opretter linkets href ved at tilføje kommunekoden til basen
        link.textContent = 'Gå til ' + kommuneDropdown.options[kommuneDropdown.selectedIndex].text; // Viser tekstetiketten for den valgte kommune

        const linkContainer = document.getElementById('linkContainer');
        linkContainer.innerHTML = ''; // Rydder indholdet af linkContainer
        linkContainer.appendChild(link); // Tilføjer det nye link til linkContainer
    });
});




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
