let overAgregar = document.getElementsByClassName('agregar');

for (let i = 0; i < overAgregar.length; i++) {
    overAgregar[i].addEventListener('mouseover', function() {
        overAgregar[i].style.backgroundColor = 'green';
    });
}

for (let i = 0; i < overAgregar.length; i++) {
    overAgregar[i].addEventListener('mouseout', function() {
        overAgregar[i].style.backgroundColor = '';
});
}

const queryString = location.search;
const stringObj = new URLSearchParams(queryString);
const id = stringObj.get("id");