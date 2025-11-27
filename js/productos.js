let overComprar = document.getElementsByClassName('compra');

for (let i = 0; i < overComprar.length; i++) {
    overComprar[i].addEventListener('mouseover', function() {
        overComprar[i].style.backgroundColor = 'green';
    });
}

for (let i = 0; i < overComprar.length; i++) {
overComprar[i].addEventListener('mouseout', function() {
    overComprar[i].style.backgroundColor = '';
});
}