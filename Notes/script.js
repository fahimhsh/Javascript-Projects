var titleInput = document.querySelector("#title_input")
var dateInput = document.querySelector("#date_input")
var mydiv = document.querySelector(".notes_container")

function createNew() {
    document.querySelector(".title_and_date_input").style.display = "block"
}
function createNotesContainer() {
    
    const noteItem = document.createElement("div")
     noteItem.innerHTML = `<h1> <span class="title_output"> ${titleInput.value} </span> <span class="date_output">${dateInput.value}</span> </h1>
     <p contenteditable="true" class="input_box">Write here...</p>
     <button onclick="deleteNote(this)"><img src="img/delete.png"></button>`
    document.querySelector(".notes_container").appendChild(noteItem)


    document.querySelector(".title_and_date_input").style.display = "none"

    
}

function deleteNote(button) {
    var listItem = button.parentNode;
    var todoList = document.querySelector(".notes_container");
    todoList.removeChild(listItem);
    
}

function cancel() {
    document.querySelector(".title_and_date_input").style.display = "none"
}

