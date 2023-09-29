console.log("im in fetchurl")

const inpUrl = document.getElementById("inpUrl")
const textArea = document.getElementById("txt")
const pbFetch = document.getElementById("pbFetchUrl")
pbFetch.addEventListener('click', actionFetchUrl)


function actionFetchUrl(btn) {
    const url = inpUrl.value;
    console.log(url)
    textArea.textContent = url
}

function fetchAnyUrl(url) {
    console.log("inside fetch url=" + url)
    return  fetch(url).then(response => response.json());
}

function actionFetchUrl(btn) {
    const url = inpUrl.value
    console.log(url)
    const jsonOutput = fetchAnyUrl(url)
    textArea.textContent = jsonOutput
    console.log(jsonOutput)
}

async function actionFetchUrl(btn) {
    const url = inpUrl.value
    console.log(url)
    const jsonOutput = await fetchAnyUrl(url)
    textArea.textContent = jsonOutput
    console.log(jsonOutput)
}

function fetchAnyUrlText(url) {
    console.log("inside fetch text url=" + url)
    return  fetch(url).then(response => response.text());
}

const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
};

const firstProperty = Object.keys(obj)[0];

console.log(firstProperty);
console.log(obj[firstProperty]);

function convertJsonToText2(json) {
    const txt = json.map(region => `{"region": "${region.kode}"}`).join(', ');
    return txt
}

function getKeysAndValuesFromObj(obj) {
    const keys = Object.keys(obj)
    return keys.map(key => `${key}`)
}

async function actionFetchUrl(btn) {
    const url = inpUrl.value
    console.log(url)
    const jsonOutput = await fetchAnyUrl(url)
    let showTxt = ""
    if (Array.isArray(jsonOutput)) {
        showTxt = getKeysAndValuesFromObj(jsonOutput[0])
    } else {
        showTxt = getKeysAndValuesFromObj(jsonOutput)
    }
    textArea.textContent = showTxt
    console.log(jsonOutput)
}


    function getKeysAndValuesFromObj(obj) {
    const keys = Object.keys(obj)
    return keys.map(key => `${key} : ${obj[key]}`)
}



