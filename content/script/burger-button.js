botao = document.querySelector('div#container-burge');
links = document.querySelector('div#container-links');


document.addEventListener('click', function(evento) {
    if (!botao.contains(evento.target) && !links.contains(evento.target)) {
      links.classList.remove('openBurge');
    }
})

function ClickBurge() {
    links.classList.toggle('openBurge');
}