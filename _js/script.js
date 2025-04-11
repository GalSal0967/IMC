document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById('calcular');
    const resultadoDiv = document.getElementById('resultado');
    const imcValor = document.getElementById('imc-valor');
    const classificacao = document.getElementById('classificacao');

    calcularBtn.addEventListener('click', function() {
        // Obter valores dos inputs
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        
        // Verificar se os valores são válidos
        if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }
        
        // Calcular IMC
        const imc = peso / Math.pow(altura, 2);
        const imcFormatado = imc.toFixed(2).replace('.', ',');
        
        
        imcValor.textContent = imcFormatado;
        
        
        let classificacaoText = '';
        if (imc < 18.5) {
            classificacaoText = 'Abaixo do peso';
        } else if (imc < 25) {
            classificacaoText = 'Peso ideal';
        } else if (imc < 30) {
            classificacaoText = 'Sobrepeso';
        } else if (imc < 35) {
            classificacaoText = 'Obesidade grau I';
        } else if (imc < 40) {
            classificacaoText = 'Obesidade grau II';
        } else {
            classificacaoText = 'Obesidade grau III';
        }
        
        
        classificacao.textContent = classificacaoText;
        
        
        resultadoDiv.style.display = 'block';

        

    });
});