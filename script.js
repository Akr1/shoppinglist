var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.querySelectorAll("li");



function initializeExistingLi(liList){
    for (let li of liList) {
        addItemCrossAfterClick(li);
        addDeleteButton(li);
    }
}

function addDeleteButton(li) {
    var button = document.createElement("button");
    button.textContent = "delete";
    button.addEventListener("click",()=>deleteItemAfterClick(li));
    li.appendChild(button);
}

function deleteItemAfterClick(li){
    li.remove();
}

function addItemCrossAfterClick(li) {
    li.addEventListener("click",() => {
        li.classList.toggle("done")});
}

function inputLength() {
    return input.value.length;
}

function createListELement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    addItemCrossAfterClick(li);
    addDeleteButton(li);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0){
        createListELement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > "0" && event.key === "Enter" ){
        createListELement();
    }
}

initializeExistingLi(liList);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
