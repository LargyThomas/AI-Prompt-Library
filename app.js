// Simulating a fix in the JS code
//.
//.
//J
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
let button_request = document.querySelector('button.promptRequest');
let div_response   = document.querySelector('div.promptResponse');

let allPrompts = [];

fetch('prompts.json')
    .then(res => res.json())
    .then(data => {
        const localPrompts = JSON.parse(localStorage.getItem("prompts")) || [];
        allPrompts = [...data, ...localPrompts];
    });

let RecupJson = () => {
    const randomNumber = Math.floor(Math.random() * allPrompts.length);
    const prompt = allPrompts[randomNumber];
    div_response.innerHTML = '<p> Titre : ' + prompt.title + '<br> Catégorie : ' + prompt.categorie + '<br> Texte : ' + prompt.text + '</p>';
};

button_request.addEventListener('click', RecupJson);

const titleInput     = document.querySelector('input[name="title"]');
const categorieInput = document.querySelector('input[name="categorie"]');
const textInput      = document.querySelector('textarea[name="text"]');

function CheckAddPrompt() {
    if (titleInput.value.trim() !== "" && categorieInput.value.trim() !== "" && textInput.value.trim() !== "") {
        return true;
    }
    else {
        return false;
    }
};

function DiconaryAddPrompt() {
    let newPrompt = {
        "title": titleInput.value,
        "categorie": categorieInput.value,
        "text": textInput.value
    };
    return newPrompt;
}

function AddPrompt() {
    let newPrompt = DiconaryAddPrompt();
    allPrompts.push(newPrompt);
    let prompts = JSON.parse(localStorage.getItem("prompts")) || [];
    prompts.push(newPrompt);
    localStorage.setItem("prompts", JSON.stringify(prompts));
}

const addButton = document.querySelector('button.addPrompt');

function AddPromptHandler(event) {
    event.preventDefault();         // Empêche le rechargement de la page lors du clic sur le bouton
    if (CheckAddPrompt()) {
        AddPrompt();
        console.log("Nouveau prompt ajouté : ", allPrompts[allPrompts.length - 1]);
        console.log("Prompts actuels : ", allPrompts);
        alert("Le prompt a été ajouté à la librairie !");
    }
    else {
        alert("Veuillez remplir tous les champs avant d'ajouter le prompt.");
    }
}

addButton.addEventListener('click', AddPromptHandler);