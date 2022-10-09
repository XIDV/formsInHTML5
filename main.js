document.addEventListener('DOMContentLoaded', dcl => {
    console.log('Document is ready ...');

    // document.querySelector('#subBspl1Data').addEventListener('click', e => {
    //     e.preventDefault();
    //     console.log(e);
    // });

    document.querySelector('#bspl1').addEventListener('submit', e => {
        e.preventDefault();
        const inputs = e.target.querySelectorAll('input');
        inputs.forEach(input => {
            console.log(input.value);
        });
        showOutputDialog(inputs, document.querySelector('#bspl1Output'));
    });

});


function showOutputDialog(inputs, dialog) {
    dialog.show();

    console.log(dialog);

}
