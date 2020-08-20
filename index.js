const entryForm = document.getElementById("entryForm");
const entriesSection = document.getElementById("entries");
const entryTextbox = document.getElementsByClassName("entry-textbox");

entryForm.addEventListener('submit', handleForm);

function handleForm(e) {
    event.preventDefault();
    // console.log("entryTextbox: " + entryTextbox[0].value);
    
    const entryDiv = document.createElement("div");
    entryDiv.classList.add("single-entry");
    entryDiv.textContent = entryTextbox[0].value;
    entriesSection.append(entryDiv);

    entryTextbox[0].value = "";
}