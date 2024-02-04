
const inputBox  = document.getElementById("input-box")

const addBtn = document.getElementById("add-btn")

const listContainer = document.getElementById("list-container")


addBtn.addEventListener("click",addTask)

window.addEventListener("keydown", event => {
    let key = event.key
    if(key === "Enter"){
        addTask()
    }
})

function addTask(){
    let inputValue = inputBox.value 
    if(inputValue === ""){
        alert("You must write something")
    } else {
        inputBox.value = ""
        createItem(inputValue)
    }
}

function createItem(inputValue){
    const newItem = document.createElement("li")
    newItem.textContent = inputValue

    const span = document.createElement("span");
    span.innerHTML = "\u00d7"
    newItem.appendChild(span)

    listContainer.appendChild(newItem)
    saveData()
}

listContainer.addEventListener("click", event => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked")
        saveData()
    } else if (event.target.tagName === "SPAN"){
        event.target.parentElement.remove()
        saveData()
    }
})


function saveData(){
    localStorage.setItem("data", JSON.stringify(listContainer.innerHTML))
}

function showData(){
    let storedData = JSON.parse(localStorage.getItem("data"))
    listContainer.innerHTML = storedData
}

showData()