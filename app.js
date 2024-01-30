document.addEventListener("DOMContentLoaded", function () {
    // ificar se o usuário está logado
    const isUserLoggedIn = localStorage.getItem("loggedIn");
  
    if (isUserLoggedIn) {
      // se estiver logado, redirecionar para a tela de seleção de perfil
      window.location.href = "/browser/index.html";
    }
  
    // Restante do seu código atual
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');
  
    // config param
    let countItem = items.length;
    let itemActive = 0;
  
    // event next click
    next.onclick = function(){
        itemActive = itemActive + 1;
        if(itemActive >= countItem){
            itemActive = 0;
        }
        showSlider();
    }
  
    //event prev click
    prev.onclick = function(){
        itemActive = itemActive - 1;
        if(itemActive < 0){
            itemActive = countItem - 1;
        }
        showSlider();
    }
  
    // auto run slider
    let refreshInterval = setInterval(() => {
        next.click();
    }, 10000);
  
    function showSlider(){
        // remove item active old
        let itemActiveOld = document.querySelector('.slider .list .item.active');
        let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');
  
        // active new item
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
  
        // clear auto time run slider
        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.click();
        }, 10000);
    }
  
    // click thumbnail
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
        });
    });
  });

  var ultimoClicado = null;

  // Função JavaScript para mudar a cor e voltar ao original
  function mudarCor(elemento) {
      // Se um span foi clicado anteriormente, volta à cor original
      if (ultimoClicado !== null) {
          ultimoClicado.style.backgroundColor = '#2f3137';
      }

      // Define a nova cor para o span clicado
      elemento.style.backgroundColor = '#9747FF';

      // Armazena o span clicado para referência futura
      ultimoClicado = elemento;
  }