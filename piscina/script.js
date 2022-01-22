let numb = document.getElementById('numb')
let QCGR = document.getElementById('QCG')
let QCLR = document.getElementById('QCL')
let RPH = document.getElementById('RPH')
let PH = document.getElementById('PH')
let inf =document.getElementById('info')
let cla = document.getElementById('clar')
let dec =document.getElementById('dec')
let h21 =document.getElementById('h21')
let decr = 0
let QC = 0
let QCG = 0
let QCL = 0
let PHC = 0
let QB80 = 0
let QB120= 0
let clar =0

function Informacao() {
    h21.innerHTML = `pH: ${PHC}<br>-Considerado <strong style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: green;">BAIXO-</strong><br>`    
           RPH.innerHTML += `<h3> Alcalinidade inicial=80ppm</h3>`       
           RPH.innerHTML += `Barrilha leve: ${QB80}g<br>`
           RPH.innerHTML += `<h3> Alcalinidade inicial=120ppm</h3>`  
           RPH.innerHTML += `Barrilha leve: ${QB120}g<br>` 
            inf.innerHTML += `<h3>Barrilha</h3>`
            inf.innerHTML += `<strong style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: green;">1.</strong> A Quantidade de Barrilha Leve necessaria depende de vários fatores além do pH atual da água. Baseie-se nas quantidades indicadas no valor acima<br><br>`
            inf.innerHTML += `<strong style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: green;">2.</strong> Dissolva o produto num balde plástico com água da própria piscina e distribua sua solição sobre a superfície da água de maneira uniforme.<br><br>`
            inf.innerHTML += `<strong style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: green;">3.</strong> No dia seguinte reanalise o pH da água e se ele não estiver na faixa ideal recomendada <strong style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: green;">(ENTRE 7.3 a 7.7)</strong>, repita todo o processo.<br><br>`
            inf.innerHTML += `<strong style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: green;"> Só utilizar a Piscina 30 minutos após aplicação do produto.</strong><br><br> .`   
}

function informacaoA() {
    h21.innerHTML = `pH: ${PHC}<br>-Considerado <strong>ALTO-</strong><br>`             
            RPH.innerHTML += `Quantidade de redutor de pH e alcalinidade: ${QB80}ML<br>`
            inf.innerHTML += `<h3>Redutor de pH</h3>`
            inf.innerHTML += `<strong>1.</strong> Adicione a dosagem recomendade de acordo com as informações acima em um Balde plástico com água da própia piscina e espalhe essa solução sobre a superficie da água com a circulação da piscina em funcionamento por pelo menos 60 minutos após aplicação do produto<br><br>`
            inf.innerHTML += `<strong>2.</strong> No dia seguinte reanalise o pH da água e se ele não estiver na faixa ideal recomendada <strong>(ENTRE 7.3 a 7.7)</strong>, repita todo o processo.<br><br>`
            inf.innerHTML += `<strong> Só utilizar a Piscina 30 minutos após aplicação do produto.</strong>.<br><br>`
}



function Calcular(){
        if (numb.value.length == 0 || PH.value.length ==0) {
            alert('[ERRO] Digite um valor') 
        } else {
            QCLR.innerHTML=''
            QCGR.innerHTML=''
            RPH.innerHTML=''
            inf.innerHTML=''
            cla.innerHTML=''
            let LP = Number(numb.value)
           QCG = LP /1000 * 15
           QCL = LP /1000 * 4
           clar = LP /1000 * 5
           QCGR.innerHTML += `Cloro granulado: ${QCG}g<br>`
           QCLR.innerHTML += `Cloro Liquido: ${QCL}ml<br>`
           cla.innerHTML += ` Clarificante: ${clar}ml<br>`
           
           PHC = Number(PH.value)  
           QC = LP / 1000       
         if (PHC > 8 ) {
            QB80 = QC * 20   
            informacaoA()
        } else if (PHC >= 7.8 && PHC <= 8) {
            QB80 = QC * 10   
            informacaoA()
        } else if (PHC > 7.2 && PHC < 7.8) {
            h21.innerHTML = `pH: ${PHC}<br>-Considerado <strong style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            color: green;">NORMAL-</strong><br>`             
        } else if (PHC <= 7.2 && PHC > 7.0) {
           QB80 = QC * 13  
           QB120 = QC * 21  
           Informacao()         
        } else if (PHC <= 7 && PHC >6.8 ) {
            QB80 = QC * 21  
            QB120 = QC * 34     
            Informacao()
        } else if (PHC <= 6.8 && PHC > 6.6 ) {
            QB80 = QC * 30 
            QB120 = QC * 48  
            Informacao()
        } else if (PHC <= 6.6 && PHC > 6.4 ) {
            QB80 = QC * 38  
            QB120 = QC * 61  
            Informacao()
        } else if (PHC <= 6.4 ) {
            QB80 = QC * 46  
            QB120 = QC * 74  
            Informacao()       
        }
    }
        numb.focus()
        numb.value= ''
        PH.value=''
        PH.focus()
 }         

 function Avaliar(){
    let nota = window.prompt('Nota de 1 a 5')    
    
     if (nota >= 1 && nota <= 5 ) {
           alert(`Sua Nota: ${nota}`)
           alert('Obrigado!!!')
     } 
      else {
           alert('[ERRO] Valor Invalido!!!')
     }
 } 
