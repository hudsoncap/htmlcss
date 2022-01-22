    let conta = document.getElementById('nome')
    let senha= document.getElementById('senha')
    let ini = document.getElementById('inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let res = document.getElementById('res')
    let logado = false

     function verconta(c) {if(c.value.length == 0){return true} else {return false}}
     function versenha(s) {if(s.value.length == 0){return true} else {return false}}

    function confirmar() {
        if (verconta(conta) || versenha(senha)) {
            alert('[ERRO] Conta ou senha Invalida!')
            logado = false
        } else {
            alert(`Olá, ${conta.value}, Logado(a) com Sucesso!`)
            logado = true                
        }
        conta.value=''
        conta.focus()
        senha.value=''
        senha.focus()
    }
         
    function contar() {
         res.innerHTML=''
         if (logado == false){
            alert('Efetue o Loguin para usar o contador')}
         else {
            alert('Vamos contar')
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            for (var c = i; c <= f ; c += p){
                res.innerHTML +=`${c} \u{1F3F4}`
            }
         }  
        ini.value=''
        ini.focus()
        fim.value=''
        fim.focus()
        passo.value=''
        passo.focus()          
    }