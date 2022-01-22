 let titulo = document.getElementById('titulo')
 let descr = document.getElementById('desc')
 let res =document.getElementById('res')
 let anota = document.getElementById('anota')

 
 function deletar() {
     alert("deletou")
 }


 function salvar() {
    alert("salvou")
 }

 function editar() {
    alert("editar")
 }


 function guardar() {
       if (titulo.value.length==0 || descr.value.length ==0){
          alert('[ERRO] valores invalidos!')
       } else {
          res.innerHTML= `${titulo.value}`
          anota.innerHTML=`${descr.value}`
       }
     
 }