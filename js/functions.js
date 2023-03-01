

$(()=>{

    var peso = $('#peso');
    var altura = $('#altura');

    for (i = 1; i <= 200; i++) {
        peso.append('<option value="+ item +">' + i + '</option>');
    }

    for (i = 20; i <= 250; i++) {
        altura.append('<option value="+ item +">' + i + '</option>');
    }

    
    function diagnostico(imc){

        if(imc < 18.5){
            var diagnostico = "Você está muito magro!<br>Procure uma dieta focada no ganho de peso!"
            return diagnostico;
        }else if(imc >= 18.5 && imc < 25){
            var diagnostico = "Você está com peso normal!<br>Procure manter uma alimentação saudável e realizar atividas físicias regulares!"
            return diagnostico;
        }else if(imc >= 25 && imc < 30){
            var diagnostico = "Você está com sobrepeso!<br>Procure uma dieta saudável focada na perca de peso e realizar bastante exercício físico regularmente!"
            return diagnostico;
        }else if(imc >= 30 && imc < 35){
            var diagnostico = "Você está com obesidade grau 1!<br>Procure uma dieta saudável focada na perca de peso e realizar bastante exercício físico regularmente, procure também um nutricionista!"
            return diagnostico;
        }else if(imc >= 35 && imc < 40){
            var diagnostico = "Você está com obesidade grau 2!<br>Procure uma dieta saudável focada na perca de peso e realizar bastante exercício físico regularmente, procure também um nutricionista!"
            return diagnostico;
        }else if(imc >= 40 && imc < 45){
            var diagnostico = "Você está com obesidade grau 3!<br>Procure uma dieta saudável focada na perca de peso e realizar bastante exercício físico regularmente, procure também um nutricionista!"
            return diagnostico;
        }else{
            var diagnostico = "Informação incorreta, tente novamente!"
            return diagnostico;
        }
    }


    $('.mostrarResultado').click(()=>{
        function clear(){
            $('.card2 p').remove();
        }
        clear();

        var pesoC = parseInt($('select#peso option:checked').text());
        var alturaC = parseInt($('select#altura option:checked').text());

        function resultIMC(){
            var calculo = pesoC / ((alturaC / 100) * (alturaC / 100));

            return calculo;
        }

        var mostrarResultado = $('.card2').append("<p>Seu imc é de: "+resultIMC().toFixed(2)+"</p>");
        $('.card2 p').css('font-size','20px').css('color','#ffffff');

        var mostrarDiagnostico = $('.card2').append("<p>"+diagnostico(resultIMC())+"</p>")
        $('.card2 p').css('font-size','20px').css('color','#ffffff').css('margin-top','15px').css('line-height','25px');

    })

})
