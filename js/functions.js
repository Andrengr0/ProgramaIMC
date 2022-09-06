

$(()=>{

    var peso = $('#peso');
    var altura = $('#altura');

    for (i = 20; i <= 200; i++) {
        peso.append('<option value="+ item +">' + i + '</option>');
    }

    for (i = 80; i <= 250; i++) {
        altura.append('<option value="+ item +">' + i + '</option>');
    }

    
    function diagnostico(imc){

        if(imc < 18.5){
            var diagnostico = "Você está muito magro!"
            return diagnostico;
        }else if(imc >= 18.5 && imc < 24.9){
            var diagnostico = "Você está com peso normal!"
            return diagnostico;
        }else if(imc >= 25 && imc <= 29.9){
            var diagnostico = "Você está com sobrepeso!"
            return diagnostico;
        }else if(imc > 29.9 && imc < 35){
            var diagnostico = "Você está com obesidade grau 1!"
            return diagnostico;
        }else if(imc >= 35 && imc < 40){
            var diagnostico = "Você está com obesidade grau 2!"
            return diagnostico;
        }else if(imc >= 40 && imc < 45){
            var diagnostico = "Você está com obesidade grau 3!"
            return diagnostico;
        }
    }


    $('.mostrarResultado').click(()=>{
        var pesoC = parseInt($('select#peso option:checked').text());
        var alturaC = parseInt($('select#altura option:checked').text());

        function resultIMC(){
            var calculo = pesoC / ((alturaC / 100) * (alturaC / 100));

            return calculo;
        }

        var mostrarResultado = $('.card2').append("<p>Seu imc é de: "+resultIMC().toFixed(2)+"</p>");
        $('.card2 p').css('font-size','20px').css('color','#ffffff');

        var mostrarDiagnostico = $('.card2').append("<p>"+diagnostico(resultIMC())+"</p>")
        $('.card2 p').css('font-size','20px').css('color','#ffffff').css('margin-top','15px');

    })

})
