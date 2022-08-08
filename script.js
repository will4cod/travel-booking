function load(){            
}

function updateLogo() {
    var logo = document.querySelector('.barras img');
    logoMenu = logo.src.split('menu.png')
    logoFechar = logo.src.split('fechar.png')


    // console.log(logo.src)
    if(logoMenu[1] == ''){
        logo.src =  logoMenu[0] + 'fechar.png'
    }else{
        logo.src =  logoFechar[0] + 'menu.png'   
    }
}

function clickMenu(){
    document.querySelector('nav').classList.toggle('active');
    updateLogo()
}
//document.querySelector('barras')