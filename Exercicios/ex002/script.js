 let numb = document.getElementById('numb')
 let list = document.getElementById('lista')
 let QC = 0


 function Calcular(){
         if (numb.value.length == 0) {
             alert('[ERRO] Digite um valor') 
         } else {
             list.innerHTML=''
             let LP = Number(numb.value)
            QC = numb /1000 * 15
            list.innerHTML = `Quantidade de Cloro necessario${QC}`
         } numb.focus()
           numb.value= ''
 }           
