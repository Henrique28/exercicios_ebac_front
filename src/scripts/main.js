document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(e){
        e.preventDefault();
        let numSorteador = document.getElementById('num-max').value;
        numSorteador = parseInt(numSorteador);

        let numAleatorio = Math.random() * numSorteador;
        numAleatorio = Math.floor(numAleatorio + 1);
        document.getElementById('val-resultado').innerText = numAleatorio;

        document.querySelector('.resultado').style.display = 'block';
    })
})