function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#ano')
    var res = document.querySelector('#res')
    var visres = document.querySelector('.res')
    var msgimage =  document.querySelector('section#circular_image p')
    var image =  document.querySelector('section#circular_image')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] - Verifique os dados tente novamente!')
    }else{
        visres.style.display = 'flex'
        msgimage.style.display = 'none'
        var fsex = document.getElementsByName('radsex')
        var idade =  ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id','imagem')

        
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','image/bebe-masculino.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src','image/jovem-masculino.jpg')
            }else if(idade  < 50){
                //Adulto
                img.setAttribute('src','image/adulto-masculino.jpg')
            }else{
                //idoso
                img.setAttribute('src','image/idoso-masculino.jpg')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','image/bebe-feminino.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src','image/jovem-feminino.jpg')
            }else if(idade  < 50){
                //Adulto
                img.setAttribute('src','image/adulto-feminino.jpg')
            }else{
                //idoso
                img.setAttribute('src','image/idoso-feminino.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        image.appendChild(img)
    }
}

