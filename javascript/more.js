var btnMore = document.getElementById('read-more');
btnMore.addEventListener('click', function(){
    var serv = document.querySelector('.serv-content');
    serv.classList.toggle('active');
    if(serv.classList.contains('active')){
        return btnMore.textContent = 'Menos';
    } else{
        btnMore.textContent = 'Mais'
    }
});

var btnMais = document.getElementById('skills-more');
btnMais.addEventListener('click', function(){
    var hab = document.querySelector('.column-right2');
    hab.classList.toggle('active');
    if(hab.classList.contains('active')){
        return btnMais.textContent = 'Menos';
    } else{
        btnMais.textContent = 'Mais'
    }
});