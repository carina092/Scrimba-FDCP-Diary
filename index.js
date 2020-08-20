const entryForm = document.getElementById("entryForm");
const entriesSection = document.querySelector("#entries");
const entryTextbox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector('.entries-nav');

entryForm.addEventListener('submit', handleForm);

let count = 1;

function handleForm(e) {
    event.preventDefault();
    
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("single-entry");
    entryDiv.textContent = entryTextbox.value;
    
    entryDiv.style.display = "none";
    entriesSection.append(entryDiv);

    entryTextbox.value = "";

    const displayEntryButton = document.createElement("button");
    displayEntryButton.className = "entry-button"; 
    displayEntryButton.textContent = count;
    entriesNav.append(displayEntryButton);

    count++;
}