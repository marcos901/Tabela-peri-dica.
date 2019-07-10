<!DOCTYPE html>
<html>
    <head>
        <title>Jogo da advinhação</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <div id="dados">
            <form action="inserir.php" method="post">
                <label for="nome">Nome do Jogador: <input type="text" name="nome" placeholder="Digite seu nome"></label>
                <p>
                    <label for="facil">Fácil<input type="radio" name="nivel" value="facil"></label>
                    <label for="medio">Médio<input type="radio" name="nivel" value="medio"></label>
                    <label for="difícil">Difícil<input type="radio" name="nivel" value="dificil"></label>
                </p>
                <p>
                    <input type="submit" value="Jogar" id="jogar">
                </p>
            </form>
            <h1>SCORE</h1>
            <table>
                <tr>
                    <?php
                        include "../conexao.php";
                        $sql =  "Select * from jogadores order by pontos desc";
                        $resultados = mysqli_query($conn,$sql);

                        $campos = mysqli_fetch_fields($resultados);
                        foreach ($campos as $v) {
                            if($v->name != "id"){
                                echo "<th>$v->name</th>";
                            } 
                        }
                        $cont = 0;
                        while($linha = mysqli_fetch_array($resultados,MYSQLI_NUM)) {
                            echo "<tr>"; 
                            $qtd = mysqli_num_fields($resultados);
                            for ($i=1; $i < $qtd; $i++) {
                                echo "<td>$linha[$i]</td>";
                            }
                            echo "</tr>";
                            $cont++;
                            if($cont == 10){
                                break;
                            }
                        }
                        
                    ?>
                </tr>
            </table>
        </div>
    </body>
</html>