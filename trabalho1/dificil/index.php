<!DOCTYPE html>
<html>
	<head>
		<title>Jogo da advinhação - Fácil</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script src="https://cdn.rawgit.com/nnattawat/flip/master/dist/jquery.flip.min.js"></script>
        <script type="text/javascript" src="script.js" charset="utf-8"></script>
        <meta charset="utf-8">
	</head>
	<body>
		<div id="carta">
			<div class="front">

			</div>
			<div class="back">
                <div id="dados1">
                    <span id="txtdados1">
                        Numero Atomico<br/>
                        <span style="font-size: 35px;">?</span>
                    </span>
                    <span id="cxdados1">
                        <input type="text" id="inpdado1" value="" placeholder="Numero Atomico">
                        <button id="btdados1">Verificar</button>
                    </span>
                </div>
                
                <div id="dados2">
                    <span id="txtdados2">
                        Nome<br/>
                        <span style="font-size: 35px;">?</span>
                    </span>
                    <span id="cxdados2">
                        <input type="text" id="inpdado2" value="" placeholder="Nome">
                        <button id="btdados2">Verificar</button>
                    </span>
                </div>
                
                <div id="dados4">
                    <span id="txtdados4">
                        Grupo<br/>
                        <span style="font-size: 35px;">?</span></span>
                    <span id="cxdados4">
                        <input type="text" id="inpdado4" value="" placeholder="Grupo">
                        <button id="btdados4">Verificar</button>
                    </span>
                </div>
                    
                <div id="dados3">
                    <span id="txtdados3">
                        Simbolo<br>
                        <span style="font-size: 35px;">?</span>
                    </span>
                    <span id="cxdados3">
                        <input type="text" id="inpdado3" value="" placeholder="Simbolo">
                        <button id="btdados3">Verificar</button>
                    </span>
                </div>
                
                
                
                <div id="dados5">
                    <span id="txtdados5">
                        Elemento Natural<br>
                        <span style="font-size: 35px;">?</span>
                    </span>
                    <span id="cxdados5">
                        <input type="text" id="inpdado5" value="" placeholder="Elemento Natural">
                        <button id="btdados5">Verificar</button>
                    </span>
                </div>
                
                 <div id="dados7">
                    <span id="txtdados7">
                         Fase<br>
                        <span style="font-size: 35px;">?</span>
                    </span>
                    <span id="cxdados7">
                        <input type="text" id="inpdado7" value="" placeholder="Fase">
                        <button id="btdados7">Verificar</button>
                    </span>
                </div>
                
                <div id="dados6">
                    <span id="txtdados6">
                        Massa Atomico<br>
                        <span style="font-size: 35px;">?</span>   
                    </span>
                    <span id="cxdados6">
                        <input type="text" id="inpdado6" value="" placeholder="Massa Atomico">
                        <button id="btdados6">Verificar</button>
                    </span>
                </div>
			</div>
		</div>
		<button id="proximo">Virar</button>
        <button id="menu">Voltar ao Menu</button>
        <button id="dica">DICAS</button>
        <div id="divDicas">
            <h3>DICAS</h3>
            <p>Todas palavras deve ser acentuadas</p>
            <p>Os grupos são : Metais Alcalinos, Metais Alcalinterrosos, Halogênios, Gases Nobres, Metais De Transição, Não Metais</p>
            <p>"Elemesto Natural",Se o elemeto e encontrado na natureza "Sim" ou "Não"</p>
            <p>Fase, estado em que o elemento esta no ambiemte natural esses são : Solido, Liquido, Gás, Artificial</p>
        </div>
        <?php
            if(isset($_GET['nome'])){
                $nome = $_GET['nome'];
                echo "<p id ='nomeJogador' style='display:none'>". $nome ."</p>";
            }
        ?>
	</body>
</html>