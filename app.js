let button_request = document.querySelector("button.promptRequest");
let div_response   = document.querySelector("div.promptResponse");

let RecupJson = async () => {
    let result = await fetch("prompts.json");
    let data   = await result.json();
    const randomNumber = Math.floor(Math.random() * 7);

    div_response.innerHTML = '<p> Titre : ' + data[randomNumber].title + '<br> Catégorie : ' + data[randomNumber].categorie + 
    '<br> Texte : ' + data[randomNumber].text + '</p>';
}

button_request = addEventListener("click", RecupJson);