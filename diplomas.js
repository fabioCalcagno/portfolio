

var descendentes = document.querySelectorAll(".cursos-list-itens");
for (let i = 0; i < descendentes.length; i++) {
    descendentes[i].addEventListener("click", function (e) {
      
        this.setAttribute('class', 'cursos-list-itens-huge'); 
       
})
}


var descendentes = document.querySelectorAll(".cursos-list-itens");
for (let i = 0; i < descendentes.length; i++) {
    descendentes[i].addEventListener("touchmove", function (e) {
      
        this.removeAttribute('class', 'cursos-list-itens-huge');
        this.setAttribute('class', 'cursos-list-itens');
       
})
descendentes[i].addEventListener("mousemove", function (e) {
      
    this.removeAttribute('class', 'cursos-list-itens-huge');
    this.setAttribute('class', 'cursos-list-itens');
   
})
}
    
function removeHugeImage(hugeImage){

    hugeImage.removeAttribute('class', 'cursos-list-itens-huge');
    hugeImage.setAttribute('class', 'cursos-list-itens');
}

















/* document.querySelector('cursos-list-itens').onclick = function(event) {
    event.target.style.backgroundImage = document.documentElement.classList.add('cursos-list-itens-huge');
};

document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};


document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
}; */