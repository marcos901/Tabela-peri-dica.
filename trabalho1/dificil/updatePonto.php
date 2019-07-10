<?php
    include "../conexao.php";
    
    $nomeJogador = $_POST['nomeJogador'];

    $sql =  "SELECT * FROM jogadores";
    $resultados = mysqli_query($conn,$sql);
    
    while($linha = mysqli_fetch_array($resultados,MYSQLI_NUM)) {
        if($linha[1] == $nomeJogador){
            $pontos = $linha[2] + 1;
            $sql =  "UPDATE jogadores SET pontos=" . $pontos . " WHERE nick ='" . $nomeJogador . "'";
            $resultados = mysqli_query($conn,$sql);
            echo $sql;
            if(mysqli_query($conn,$sql)){
                
            }else{
                echo "<p>Erro" . mysqli_error($conn) . "</p>" ;   
            }
        }    
    }
    
   mysqli_close($conn);

?>