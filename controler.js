var marcados = [0,0,0,0,0,0,0,0,0];
var jogador = 1;
var j1 = 0;
var j2 = 0;
var jogando = true;

function riscarVert(pos){
    for(let i = 0; i < 9; i++){
        let elemento = document.getElementById(pos+i).firstChild;
        let backup = elemento.innerHTML;
        let vertical = "<polygon stroke='#F00' stroke-width='10' points='50,-10 50,110' fill='none'/>";
        elemento.innerHTML = backup + vertical;
        i+=2
    }
}

function riscaHori(pos){
    for(let i = 0; i < 3; i++){
        let elemento = document.getElementById(pos+i).firstChild;
        let backup = elemento.innerHTML;
        let vertical = "<polygon stroke='#F00' stroke-width='10' points='-10,50 110,50' fill='none'/>";
        elemento.innerHTML = backup + vertical;
    }
}

function riscaDiag(pos){
    if(pos == 0){
        for(let i = 0; i < 9; i++){
            let elemento = document.getElementById(pos+i).firstChild;
            let backup = elemento.innerHTML;
            let vertical = "<polygon stroke='#F00' stroke-width='10' points='-10,-10 110,110' fill='none'/>";
            elemento.innerHTML = backup + vertical;
            i+=3;
        }
    } else {
        for(let i = 0; i < 6; i++){
            let elemento = document.getElementById(pos+i).firstChild;
            let backup = elemento.innerHTML;
            let vertical = "<polygon stroke='#F00' stroke-width='10' points='110,-10 -10,110' fill='none'/>";
            elemento.innerHTML = backup + vertical;
            i+=1;
        }
    }
}

function pontuar(jogador, jo1, jo2){
    j1 = jo1;
    j2 = jo2;
    jogando = false;
    let j = document.getElementById(jogador);

    if( jogador == 'j1'){
        j.innerText = ('Jogador X: ' + j1);
        alert('Jogador 1 ganhou!');
    } else {
        j.innerText = ('Jogador O: ' + j2);
        alert('Jogador 2 ganhou');
    }   
}

function verifica(){
    if(marcados[0] == marcados[1] &&
       marcados[1] == marcados[2] && 
       marcados[0] != 0){

        riscaHori(0);

        if(marcados[0] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
    } else if(marcados[3] == marcados[4] &&
              marcados[4] == marcados[5] && 
              marcados[3] != 0){
        
        riscaHori(3);

        if(marcados[3] == 'x'){
                    pontuar('j1',j1+1,j2);
        } else {
                    pontuar('j2',j1,j2+1);
        }
    } else if(marcados[6] == marcados[7] &&
              marcados[6] == marcados[8] && 
              marcados[6] != 0){
                
        riscaHori(6);

        if(marcados[6] == 'x'){
                pontuar('j1',j1+1,j2);
        } else {
                pontuar('j2',j1,j2+1);
        }
          //-------------------linhas
    } else if(marcados[0] == marcados[4] &&
            marcados[4] == marcados[8] && 
            marcados[0] != 0){

        riscaDiag(0);

        if(marcados[0] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
    } else if(marcados[2] == marcados[4] &&
              marcados[4] == marcados[6] && 
              marcados[2] != 0){

        riscaDiag(2);

        if(marcados[2] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
        //--------------------------diagonais
    } else if(marcados[0] == marcados[3] &&
                marcados[3] == marcados[6] && 
                marcados[0] != 0){
        
                    riscarVert(0);

        if(marcados[0] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
    } else if(marcados[1] == marcados[4] &&
            marcados[4] == marcados[7] && 
            marcados[1] != 0){
        
                riscarVert(1);
        
        if(marcados[1] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
    }
    else if(marcados[2] == marcados[5] &&
            marcados[5] == marcados[8] && 
            marcados[2] != 0){

                riscarVert(2);

        if(marcados[2] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
        //------------------------colunas
    } else {
        let velha = true;
        for(let i = 0; i < marcados.length; i++){
            if(marcados[i] == 0){
                velha = false;
            }
        }
        if(velha == true){
            alert('Deu velha');
            jogando = false;
            document.getElementById("velha").style.display = 'block';
        }
        //------------------velha
    }
    
}

function recomecar(){
    marcados = [0,0,0,0,0,0,0,0,0];
    let tab = document.getElementsByTagName('svg');
    jogador = 1;
    for(let i = 0; i < tab.length; i++){
        tab[i].innerHTML = '';
    }
    jogando = true;
    document.getElementById("velha").style.display = 'none';

}

function zerar(){
    j1 = 0;
    j2 = 0;
    let t1 = document.getElementById('j1');
    let t2 = document.getElementById('j2');
    t1.innerText = ('Jogador X: ' + j1);
    t2.innerText = ('Jogador O: ' + j2);
    
    recomecar();
}
    

function marcar(quadrante){
    let quadro = document.getElementById(quadrante).firstElementChild;

    if(marcados[quadrante] == 0){
        if(jogando == true){
            if(jogador == 1){
                marcados[quadrante] = 'x';
                quadro.innerHTML = "<polygon stroke='#FFF' stroke-width='6' points='5,20 36,50 5,80 16,94 48,63 79,94 90,80 62,51 92,17 80,6 50,38 16,6' fill='none'/>";
                verifica();
                jogador = 2;
            } else {
                marcados[quadrante] = 'o';
                quadro.innerHTML = " <circle cx='50%' cy='50%' r='40%' stroke='#FFF' stroke-width='15' fill='none' />"
                verifica();
                jogador = 1;
            }
        }
    }
}