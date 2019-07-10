
$(document).ready(function(){

	$("#carta").flip({
  		trigger: 'manual'
	});
    
    var idElemento = Math.floor((Math.random() * 150) + 1);
    var entrou1 = false;
    var entrou2 = false;
    var entrou3 = false;
    var entrou4 = false;
    var entrou5 = false;
    var entrou6 = false;
    var entrou7 = false;
    
    var vet1 = [];
    var vet2 = [];
    var dados = [];
    var contVec = 0;
    
    
    var idE = Math.floor((Math.random() * 118) + 1);
    var grupo;
    
    var nomeJ = $("#nomeJogador").text();
    
    $.post({
        url: "verifica.php",
        data: {id:idE},
        type: "POST",
        success: function(result){
            var auxT = result.split(" ");
            console.log(result);
            dados.push(auxT[25]);
            dados.push(auxT[26]);
            dados.push(auxT[33]);
            dados.push(auxT[35]);
            dados.push(auxT[32]);
            dados.push(auxT[27]);
            console.log(dados);
            
            
            //Grupo a quel ele percence
            if(dados[4] == 1){
                grupo = "Metais Alcalinos";
                $(".back").css("background", "#FF6666");
            }else if(dados[4] == 2){
                grupo = "Metais Alcalinterrosos";
                $(".back").css("background", "#F9B56A");
            }else if(dados[4] == 17){
                 grupo = "Halogênios";
                $(".back").css("background", "#FFC0C0");  
            }else if(dados[4] == 18){
                 grupo = "Gases Nobres";
                $(".back").css("background", "#AFFFA0");   
            }else if((dados[4] >= 3) && (dados[4] <= 12)){
                grupo = "Metais De Transição";
                $(".back").css("background", "#E3FA67");    
            }else if((dados[4] >= 13) && (dados[4]  <= 16)){
                grupo = "Não Metais";
                $(".back").css("background", "#C0FFFF");   
            }else{
                grupo = "Metais De Transição";
                $(".back").css("background", "#E3FA67");      
            }
            //Natural
            if(dados[3] == "yes"){
                dados[3] = "Sim";
            }else{
                dados[3] = "Não";
            }
            //fase
            if(dados[2] == "solid"){
                dados[2] = "Solido";
            }else if(dados[2] == "liq"){
                dados[2] = "Liquilo";
            }else if(dados[2] == "artificial"){
                dados[2] = "Artificial";
            }else{
               dados[2] == "Gás";    
            }
            
            //DIcas
           
            $("#dica").click(function(){
                var box = document.getElementById("divDicas");
                var status =  box.style.display;
                if(status == "block"){
                    $("#divDicas").css("display","none");   
                }else{
                     $("#divDicas").css("display","block");    
                }
                console.log(status)
            });
            
            //Funçao para embarabar o vetor que ira selecionar as características
            function shuffle(arra1) {
                let ctr = arra1.length;
                let temp;
                let index;
                while (ctr > 0) {
                    index = Math.floor(Math.random() * ctr);
                    ctr--;
                    temp = arra1[ctr];
                    arra1[ctr] = arra1[index];
                    arra1[index] = temp;
                }
                return arra1;
            }

                //criando o vetor com as 3 principais características
                for(var i = 1;i < 4;i++){
                    vet1.push(i);
                }
                shuffle(vet1);

                //criando o vetor com as 4 secundarias características
                for(var i = 1;i < 5;i++){
                    vet2.push(i);
                }
                shuffle(vet2);


                //Passandos as características principais que ira ser mostrada na tela
                for(var i = 0;i < 1;i++){
                    var aux = vet1[i];
                    var aux1 = idE;

                    if(aux == 1){
                        $("#txtdados1").text("Numero Atômico" );
                        $('#txtdados1').append("<br>" + idE);  
                        entrou1 =true;
                    }else if (aux == 2){
                        $("#txtdados2").text("Nome" );
                        $('#txtdados2').append("<br>" + dados[0]);  
                        entrou2 =true;
                    }else{
                        $("#txtdados3").text("Simbolo" );
                        $('#txtdados3').append("<br>" + dados[1]);  
                        entrou3 =true;
                    }
                }
                
                //Passandos as características secundarias que ira ser mostrada na tela
                for(var i = 0;i < 0;i++){
                    var aux = vet2[i];
                    if(aux == 1){
                        $("#txtdados4").text("Grupo" );
                        $('#txtdados4').append("<br>" + grupo);  
                        entrou4 =true;
                    }else if (aux == 2){
                        $("#txtdados5").text("Elemento natural" );
                        $('#txtdados5').append("<br>" + dados[3]);  
                        entrou5 =true;
                    }else if (aux == 3){
                        $("#txtdados6").text("Massa Atômica" );
                        $('#txtdados6').append("<br>" + dados[5]); 
                        entrou6 =true;
                    }else if (aux == 4){
                        $("#txtdados7").text("Fase" );
                        $('#txtdados7').append("<br>" + dados[2]); 
                        entrou7 =true;
                    }

                } 

                $("#proximo").click(function(){
                    $("#carta").flip("toggle");
                    $("#proximo").css("display", "none");
                });
                
                $("#menu").click(function(){
                    window.location='../menu'; 
                });


                $("#txtdados1").click(function(){
                    if(entrou1 == false){
                        $("#txtdados1").css("display", "none");
                        $("#cxdados1").css("display", "block");    
                    } 
                });
                 $("#txtdados2").click(function(){
                    if(entrou2 == false){
                       
                        $("#txtdados2").css("display", "none");
                        $("#cxdados2").css("display", "block");
                    }
                });
                 $("#txtdados3").click(function(){
                    if(entrou3 == false){
                       
                        $("#txtdados3").css("display", "none");
                        $("#cxdados3").css("display", "block");
                    }
                });
                 $("#txtdados4").click(function(){
                    var aux = $("#txtdados4").text();
                    if(aux != "?"){
                        $("#txtdados4").css("display", "none");
                        $("#cxdados4").css("display", "block");
                    }
                });
                 $("#txtdados5").click(function(){
                     var aux = $("#txtdados5").text();
                    if(aux != "?"){
                        $("#txtdados5").css("display", "none");
                        $("#cxdados5").css("display", "block");
                    }
                });
                 $("#txtdados6").click(function(){
                    var aux = $("#txtdados6").text();
                    if(aux != "?"){
                        $("#txtdados6").css("display", "none");
                        $("#cxdados6").css("display", "block");
                    }
                });
                $("#txtdados7").click(function(){
                    var aux = $("#txtdados7").text();
                    if(aux != "?"){
                        $("#txtdados7").css("display", "none");
                        $("#cxdados7").css("display", "block");
                    }
                });
            console.log ("n " + idE);
            console.log(grupo);
            //Passando o valor do input para para o span
            $("#btdados1").click(function(){
                var texto = $("#inpdado1").val();
                $("#txtdados1").text("Numero Atômico" );
                $('#txtdados1').append("<br>" + texto);  
                if(idE.toString() == texto){
                    $("#txtdados1").css("display", "block");
                    $("#cxdados1").css("display", "none");
                    alert("ACERTOU");
                    entrou1 = true;
                    contVec++;
                    if(contVec == 6){
                        alert("VOCE ACETOU TODOS");
                        setTimeout(refresh,500);
                    }
                }else{
                    alert("ERROU");
                }
                
            });
            $("#btdados2").click(function(){
                var texto = $("#inpdado2").val();
                $("#txtdados2").text("Nome" );
                $('#txtdados2').append("<br>" + texto);  
                if(dados[0].toUpperCase() == texto.toUpperCase()){
                    $("#txtdados2").css("display", "block");
                    $("#cxdados2").css("display", "none");
                    alert("ACERTOU");
                    entrou2 = true;
                    contVec++;
                    if(contVec == 6){
                        $("#carta").flip("toggle");
                        alert("VOCE ACETOU TODOS");
                       setTimeout(refresh,500);
                    }
                }else{
                    alert("ERROU");
                }
                
                
            });
            $("#btdados3").click(function(){
                var texto = $("#inpdado3").val();
                $("#txtdados3").text("Simbolo" );
                $('#txtdados3').append("<br>" + texto);  
                if(dados[1].toUpperCase() == texto.toUpperCase()){
                    $("#txtdados3").css("display", "block");
                    $("#cxdados3").css("display", "none");
                    alert("ACERTOU");
                    entrou3 = true;
                    contVec++;
                    if(contVec == 6){
                        $("#carta").flip("toggle");
                        alert("VOCE ACETOU TODOS");
                        setTimeout(refresh,500);
                    }
                }else{
                    alert("ERROU");
                }
                
            });
            
            $("#btdados4").click(function(){
                var texto = $("#inpdado4").val();
                $("#txtdados4").text("Grupo" );
                $('#txtdados4').append("<br>" + texto);  
                if(grupo.toUpperCase() == texto.toUpperCase()){
                    $("#txtdados4").css("display", "block");
                    $("#cxdados4").css("display", "none");
                    alert("ACERTOU");
                    entrou4 = true;
                    contVec++;
                    if(contVec == 6){
                        $("#carta").flip("toggle");
                        alert("VOCE ACETOU TODOS");
                        setTimeout(refresh,500);
                    }
                }else{
                    alert("ERROU");
                }
                
            });
            $("#btdados5").click(function(){
                var texto = $("#inpdado5").val();
                $("#txtdados5").text("Elemento Natural" );
                $('#txtdados5').append("<br>" + texto);  
                if(dados[3].toUpperCase() == texto.toUpperCase()){
                    $("#txtdados5").css("display", "block");
                    $("#cxdados5").css("display", "none");
                    alert("ACERTOU");
                    entrou5 = true;
                    contVec++;
                    if(contVec == 6){
                        $("#carta").flip("toggle");
                        alert("VOCE ACETOU TODOS");
                       setTimeout(refresh,500);
                    }
                }else{
                    alert("ERROU");
                }
                
            });
            $("#btdados6").click(function(){
                var texto = $("#inpdado6").val();
                $("#txtdados6").text("Massa Atômica" );
                $('#txtdados6').append("<br>" + texto);  
                if(dados[5].toUpperCase() == texto.toUpperCase()){
                    $("#txtdados6").css("display", "block");
                    $("#cxdados6").css("display", "none");
                    alert("ACERTOU");
                    entrou6 = true;
                    contVec++;
                    if(contVec == 6){
                        $("#carta").flip("toggle");
                        alert("VOCE ACETOU TODOS");
                        setTimeout(refresh,500);
                    }
                }else{
                    alert("ERROU");
                }
                
            });
            $("#btdados7").click(function(){
                var texto = $("#inpdado7").val();
                $("#txtdados7").text("Fase" );
                $('#txtdados7').append("<br>" + texto);  
                if(dados[2].toUpperCase() == texto.toUpperCase()){
                    $("#txtdados7").css("display", "block");
                    $("#cxdados7").css("display", "none");
                    alert("ACERTOU");
                    entrou7 = true;
                    contVec++;
                    if(contVec == 6){
                        $("#carta").flip("toggle");
                        alert("VOCE ACETOU TODOS");
                        atualizar();
                        setTimeout(refresh,500);
                    }
                }else{
                    alert("ERROU");
                }
                
            });
            
            function refresh(){
                window.location.href = "../dificil/index.php?nome=" + nomeJ;
                atualizar();
            }
            
            function atualizar(){
                $.post({
                    url: "updatePonto.php",
                    data: {nomeJogador:nomeJ},
                    type: "POST",
                    success: function(result){
                        console.log(result);
                    } 
                });
            }
            
        }  
    });
});