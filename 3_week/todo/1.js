'use strict'

let checkbox = document.getElementsByClassName("done")[0],
    trashes = document.getElementsByClassName('trash'),
    dones = document.getElementsByClassName('done'),
    add = document.getElementById('item_add');


let done =  () =>  {
    if(checkbox.checked){
        console.log("asdf")
    }
}
for (let trash of trashes) {
    trash.onclick = function (){

        this.parentElement.parentElement.style.display = "none"
    }
}
for (let done of dones) {
    done.onclick = function (){

        this.nextElementSibling.classList.toggle('checked')
    }
}


let a = () =>{
    let name = document.getElementById("item_name")

    if(name.value === "")
        alert("Write something")
    else{
        let todo = document.getElementsByClassName("wrapper_list")[0],

            inner_item = "<div class=\"list__item\">\n" +
                "                    <div class=\"item__right\"><input type=\"checkbox\" name=\"\" class=\"done\" onclick=\"done()\">\n" +
                `                        <div class=\"item__name \">${name.value}</div>\n` +
                "                    </div>\n" +
                "                    <div class=\"item__left\"><img src=\"images/trash-solid.svg\" alt=\"\" class=\"trash\"></div>\n" +
                "                </div>"

        todo.innerHTML += inner_item

    }
    name.value = ""

    for (let trash of trashes) {
        trash.onclick = function (){

            this.parentElement.parentElement.style.display = "none"
        }
    }
    for (let done of dones) {
        done.onclick = function (){

            this.nextElementSibling.classList.toggle('checked')
        }
    }
}
add.addEventListener('click', a)

