shownotes();
let addbtn = document.getElementById('addbtn');
let clrbtn = document.getElementById('clrbtn');

addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt')
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes)
    }

    if(addtxt.value != ""){
        notesobj.push(addtxt.value)
    }
    localStorage.setItem('notes', JSON.stringify(notesobj));
    addtxt.value = "";
    console.log(notesobj);
    shownotes();
})

clrbtn.addEventListener('click', function (e){
    let addtxt = document.getElementById('addtxt');
    addtxt.value = "";
})

function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes)
    }

    let html = "";

    notesobj.forEach(function (element, index) {
        html += `
<div class=" notecard card my-2 mx-2" style="width: 18rem;">

<div class="card-body">
    <h5 class="card-title">Note ${index+1}</h5>
    <p class="card-text">  ${element}</p>
    <button id="${index} " class="btn btn-primary" onclick="deletenotes(this.id)">Delete</button>
</div>
</div>`;
})

    let noteselem = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselem.innerHTML = html;
    }
    else{
        noteselem.innerHTML= `<h6> Nothing to show please Add notes </h6>`;
    }
}