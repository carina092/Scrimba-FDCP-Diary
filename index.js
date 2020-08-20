const entryForm = document.getElementById("entryForm");
const entriesSection = document.getElementById("entries");
const entryTextbox = document.getElementsByClassName("entry-textbox");

entryForm.addEventListener('submit', handleForm);

function handleForm(e) {
    event.preventDefault();
    console.log(entryTextbox[0].value);
    // console.log("I was clicked");
}