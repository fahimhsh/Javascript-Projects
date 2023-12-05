var titleInput = document.querySelector("#title_input")
var dateInput = document.querySelector("#date_input")
var mydiv = document.querySelector(".notes_container")
var noteInput = document.getElementById("note_input")
var editBtn = document.getElementById("edit_btn")
var saveBtn = document.getElementById("save_btn") 

function createNew() {
    document.querySelector(".title_and_date_input").style.display = "block"
}

function createNotesContainer() {
    
    const noteItem = document.createElement("div")
     noteItem.innerHTML = `<h1> <span class="title_output"> ${titleInput.value} </span> <span class="date_output">${dateInput.value}</span> </h1>
     <p class="input_box" id="edit_text" contenteditable="true">${noteInput.value}</p>
     <button onclick="deleteNote(this)"><img src="img/delete.png"></button>`
    document.querySelector(".notes_container").appendChild(noteItem)


    document.querySelector(".title_and_date_input").style.display = "none"

    saveData()
}

function deleteNote(button) {
    var listItem = button.parentNode;
    mydiv.removeChild(listItem);
    saveData()
}

function saveData() {
    localStorage.setItem("data", mydiv.innerHTML)
}

function cancel() {
    document.querySelector(".title_and_date_input").style.display = "none"
}


function showData() {
    mydiv.innerHTML = localStorage.getItem("data")
}
showData()
