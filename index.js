const recipeAPI = "https://www.boredapi.com/api/activity"

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#fetch-activities").addEventListener("click", fetchActivity)
    buttonUp.addEventListener("click", changeColor)
    buttonDown.addEventListener("click", changeColor)
    document.querySelector("#activity-list").addEventListener("click", event => {
        // event 3 add event listener on clicks of text for activities and change to lightblue
        if (event.target.tagName === "LI") {
            event.target.style.color = "lightblue"
        }
    })

})


// fetching activity name data and append to DOM based on button clicked.
function fetchActivity(){
    fetch(recipeAPI)
    .then(res => res.json())
    .then(data => appendActivity(data))
}

function appendActivity(act){
    let ul = document.querySelector("#activity-list")
    let li = document.createElement("li")
    li.innerText = act.activity
    ul.appendChild(li)
}

// user click activity of thumb up or thumb down and change color button color to pink
const buttonUp = document.querySelector("#thumb-up")
const buttonDown = document.querySelector("#thumb-down")
const changeColor = function(event){
    if (event.target === buttonUp) {
        buttonUp.style.backgroundColor = "pink";
        buttonDown.style.backgroundColor = "gray";
    }
    if (event.target === buttonDown) {
        buttonDown.style.backgroundColor = "pink";
        buttonUp.style.backgroundColor = "gray";
    }
}


