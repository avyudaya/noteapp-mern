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
})

clrbtn.addEventListener('click', function (e){
    let addtxt = document.getElementById('addtxt');
    addtxt.value = "";
})
