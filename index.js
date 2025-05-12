
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count")
let count = 0
console.log(saveEl)
function inc(){
    count += 1
    countEl.textContent = count 
}
function save(){

    let countStr = count + " - "
    count = 0
    countEl.textContent = count
    saveEl.textContent += countStr

}
