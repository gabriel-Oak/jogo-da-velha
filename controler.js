var marcados = [0,0,0,0,0,0,0,0,0];
var jogador = 1;
var j1 = 0;
var j2 = 0;
var jogando = true;

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

        if(marcados[0] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
    } else if(marcados[3] == marcados[4] &&
              marcados[4] == marcados[5] && 
              marcados[3] != 0){
        
                if(marcados[3] == 'x'){
                    pontuar('j1',j1+1,j2);
                } else {
                    pontuar('j2',j1,j2+1);
                }
    } else if(marcados[6] == marcados[7] &&
              marcados[6] == marcados[8] && 
              marcados[6] != 0){
  
          if(marcados[6] == 'x'){
                pontuar('j1',j1+1,j2);
          } else {
                pontuar('j2',j1,j2+1);
          }
          //-------------------linhas
    } else if(marcados[0] == marcados[4] &&
            marcados[4] == marcados[8] && 
            marcados[0] != 0){

        if(marcados[0] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
    } else if(marcados[2] == marcados[4] &&
              marcados[4] == marcados[6] && 
              marcados[2] != 0){

        if(marcados[2] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
        //--------------------------diagonais
    } else if(marcados[0] == marcados[3] &&
                marcados[3] == marcados[6] && 
                marcados[0] != 0){

        if(marcados[0] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
    } else if(marcados[0] == marcados[3] &&
            marcados[3] == marcados[6] && 
            marcados[0] != 0){

        if(marcados[0] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
    } else if(marcados[1] == marcados[4] &&
            marcados[4] == marcados[7] && 
            marcados[1] != 0){

        if(marcados[1] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
    }
    else if(marcados[2] == marcados[5] &&
            marcados[5] == marcados[8] && 
            marcados[2] != 0){

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
    let tab = document.getElementsByTagName('td');
    for(let i = 0; i < tab.length; i++){
        tab[i].innerHTML = '';
    }
    jogando = true;
    document.getElementById("velha").style.display = 'none';

}

function zerar(){
    j1 = 0;
    j2 = 0;
    recomecar();
}
    

function marcar(quadrante){
    let quadro = document.getElementById(quadrante);
    if(marcados[quadrante] == 0){
        if(jogando == true){
            if(jogador == 1){
                marcados[quadrante] = 'x';
                quadro.innerHTML = "<img src='imgs/x.jpg' alt='x'/>"
                verifica();
                jogador = 2;
            } else {
                marcados[quadrante] = 'o';
                quadro.innerHTML = "<img src='imgs/o.jpg' alt='o'/>"
                verifica();
                jogador = 1;
            }
        }
    }
}