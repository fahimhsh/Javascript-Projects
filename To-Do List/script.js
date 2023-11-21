 const inputBox = document.getElementById("input-box")
 const listContaiiner = document.getElementById("list-container")
 function addTask() {
    if(inputBox.value === '') {
        alert("You Must write something!!!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContaiiner.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData()
 }

listContaiiner.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContaiiner.innerHTML)
}
function showList() {
    listContaiiner.innerHTML = localStorage.getItem("data")
}
showList()