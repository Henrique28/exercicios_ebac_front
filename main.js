const formCount = document.getElementById("form-count");
const btnAgain = document.getElementById("btn-again");


formCount.addEventListener("submit", function(e){
    e.preventDefault();

    const campoA = document.getElementById("campo-a");
    const campoB = document.getElementById("campo-b"); 
    const campoResp = document.getElementById("resp");
    const btnCalc = document.getElementById("btn-calc");  
    
    let numCampoA = parseInt(campoA.value)
    let numCampoB = parseInt(campoB.value)

    if(numCampoB > numCampoA){
        campoResp.innerHTML = `O Campo B, com valor de ${numCampoB}, é maior que o campo A, de valor ${numCampoA}. Você passou no teste!`;
        campoResp.classList.toggle("respSucesso");
    }else if (parseInt(numCampoB) === numCampoA){
        campoResp.innerHTML = `O Campo B, com valor de ${numCampoB}, é igual do campo A. Tente novamente`;
        campoResp.classList.toggle("respErrado");
    }else{
        campoResp.innerHTML = `O Campo B, com valor de ${numCampoB}, é menor que o campo A, de valor ${numCampoA}. Tente novamente`;
        campoResp.classList.toggle("respErrado");
    }
    campoA.value = "";
    campoB.value = "";
    btnCalc.classList.add("btn-disabled")
    btnCalc.disabled = true;  
    
    btnAgain.addEventListener("click", function(){
        location.reload()
    })
})