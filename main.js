const bspl1Dialog = document.querySelector('#bspl1Output');

document.addEventListener('DOMContentLoaded', dcl => {
    console.log('Document is ready ...');

    // Automatische Anzeige des Slider-value
    document.querySelector('#satisfaction').addEventListener('input', e => {
        document.querySelector('#satOutput').value = e.target.value;
    });


    // Values der Eingabefelder einlesen
    document.querySelector('#subBspl1Data').addEventListener('click', e => {
        const allFormInputs = document.querySelectorAll('#bspl1 .bspl1Input');
        let inputValues = {};
        allFormInputs.forEach(inputEl => {
            inputValues[inputEl.name] = inputEl.value;
        });

        showOutputDialog(inputValues);
    });

    // Bei Klick auf "Schließen"-Button modalen Dialog schließen.
    document.querySelector('#closeDialogBspl1').addEventListener('click', e => {
        bspl1Dialog.close();
    });

});



// Anzeige der Eingaben innerhalb eines modalen Dialogs
function showOutputDialog(inputValues) {
    const dialogOutputContainer = document.querySelector('#outputContainer');
    const existingOutput = dialogOutputContainer.querySelectorAll('p');
    
    // Bestehende Ausgaben im dialogOutputContainer löschen
    if(existingOutput.length != 0) {
        for(let i = 0; i < existingOutput.length; i++) {
            existingOutput[i].remove();
        }
    }
    
    // Ausgaben erzeugen
    for(element in inputValues) {
        const itemOut = document.createElement('p');
        let itemValue = inputValues[element];
        if(itemValue == "") {
            itemValue = "nichts";
        } else {
            itemValue = `" ${itemValue} "`;
        }
        itemOut.setAttribute('id', `${element}Out`);
        itemOut.textContent = ` Bei ${element} wurde ${itemValue} eingegeben`;
        dialogOutputContainer.appendChild(itemOut);
    }
    
    // Dialog anzeigen
    bspl1Dialog.showModal();
}