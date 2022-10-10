document.addEventListener('DOMContentLoaded', dcl => {
    console.log('Document is ready ...');


    document.querySelector('#satisfaction').addEventListener('input', e => {
        document.querySelector('#satOutput').value = e.target.value;
    });
});