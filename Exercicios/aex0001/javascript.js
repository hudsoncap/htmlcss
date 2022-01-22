  let numero = document.getElementById('numb')
  let res = document.getElementById('res')
  let list = document.getElementById('lista')
  

  function escrever(){
       if (numero.value.length == 0 ){
           window.alert('Digite seu nome')
       }  else { 
          list.innerHTML=''
          let n = Number(numero.value)
          for (let c = 1;c <= 10;c++){
          let item = document.createElement('option')
          item.text = `${n} x ${c} = ${n*c}`
          list.appendChild(item)
       }  numero.value= ''
          numero.focus()
  }}