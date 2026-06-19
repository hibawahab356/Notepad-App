let btn = document.querySelector("#btn")
btn.addEventListener("click",() =>{
    let note = document.querySelector("#note")
    

    let cardContainer = document.querySelector("#cardContainer")
    cardContainer.innerHTML +=  ` <div class=card>
    <h1 class=heading>${note.value}</h1>
    <div class=btnsDiv>
    <button id="edit" onclick= edit(event)>Edit</button>
    <button id="dlt" onclick= dlt(event)>Delete</button>
</div>
 </div>`
})


const edit = (event) =>{
    let updatedNote = prompt("Edit your note",note.value)
 event.target.parentNode.parentNode.firstChild.nextSibling.innerHTML  = updatedNote

 note.value = ""

}


const dlt = (event)=>{
    event.target.parentNode.parentNode.remove()
}
