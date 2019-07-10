<html>
    <head>
    </head>
    <body>
        <?php
            $servidor = "localhost";
            $user = "root";
            $senha = "";
            $bd = "tabela";
            
            $conn = mysqli_connect($servidor,$user,$senha,$bd);
            if ($conn) {
                //echo "<p>Conexao feita com sucesso</p>";
            }else{
                die("Conexao não realizada" . mysql_connect_error());
            }
        ?>
    </body>
</html>