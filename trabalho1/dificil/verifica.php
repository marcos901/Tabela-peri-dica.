<?php
    include "../conexao.php";
    $id = $_POST['id'];

    $sql =  "SELECT * FROM elempt WHERE AtomicNumber = " . $id;
    $resultados = mysqli_query($conn,$sql);
    header("Content-type: text/html; charset=utf-8");
   while($linha = mysqli_fetch_array($resultados,MYSQLI_NUM)) {
        $qtd = mysqli_num_fields($resultados);
        for ($i=1; $i < $qtd; $i++) {
            echo " " . utf8_encode($linha[$i]) ;
        }
   }
    
    mysqli_close($conn);

?>