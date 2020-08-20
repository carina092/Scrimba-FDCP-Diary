const entryForm = document.getElementById("entryForm");
// console.log(entryForm);

entryForm.addEventListener('submit', handleForm);

function handleForm(e) {
    event.preventDefault();
    // console.log("I was clicked");
}