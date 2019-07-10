<!DOCTYPE html>
<html>
	<head>
        <meta charset="utf-8">
	</head>
	<body>
		<?php 
			include "../conexao.php";
            $nome = $_POST['nome'];
            
            if(isset($_POST['nivel'])){
                $nivel = $_POST['nivel'];
            }else{
                echo "<script type='text/javascript'>alert('SELECIONE UM NÍVEL!!');";
                echo "javascript:window.location='index.php';</script>";
            }
            
            
        
            if($nome == "" && isset($_POST['nivel'])){
                $resultados = mysqli_query($conn,"SELECT * FROM jogadores");
                $num_rows = mysqli_num_rows($resultados);
                $num_rows = $num_rows + 1;
                $nome = "nick" . $num_rows;
            }
        
            $sql =  "SELECT * FROM jogadores WHERE nick = '" . $nome . "'";
            $resultados = mysqli_query($conn,$sql);
            
            if(!mysqli_fetch_array($resultados,MYSQLI_NUM)){
                $sql = "INSERT INTO jogadores (nick, pontos, nivel) VALUES ('" . $nome . "', 0 ,'" . $nivel . "');";
                if(mysqli_query($conn,$sql)){
        
                }else{
                    echo "<p>Erro" . mysqli_error($conn) . "</p>" ;   
                }
            }
                       
            while($linha = mysqli_fetch_array($resultados,MYSQLI_NUM)) {
                
                if($linha[1] != $nome){
                    $sql = "INSERT INTO jogadores (nick, pontos, nivel) VALUES ('" . $nome . "', 0 ,'" . $nivel . "');";
                    if(mysqli_query($conn,$sql)){
                        
                    }else{
                        echo "<p>Erro" . mysqli_error($conn) . "</p>" ;   
                    }
                }    
            }
            

              
        
            if($nivel == "facil"){
                echo "<script>";
                echo "window.location.href = '../facil/index.php?nome=" . $nome . "'";
                echo "</script>";
            }else if($nivel == "medio"){
                echo "<script>";
                echo "window.location.href = '../medio/index.php?nome=" . $nome . "'";
                echo "</script>";
            }else{
                echo "<script>";
                echo "window.location.href = '../dificil/index.php?nome=" . $nome . "'";
                echo "</script>";  
            }
             mysqli_close($conn);
		 ?>
	</body>
</html>