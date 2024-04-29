

function getNotesFromLS (){
    let notesData;
    if(localStorage.getItem('notesData') === null){
        notesData = {};
    }else {
        notesData = JSON.parse(localStorage.getItem('notesData'));
    }
    return notesData;
}

function saveNotesToLS (notesData){
    localStorage.clear();
    localStorage.setItem('notesData', JSON.stringify(notesData));
}

export {getNotesFromLS , saveNotesToLS}