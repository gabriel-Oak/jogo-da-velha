var marcados = [0,0,0,0,0,0,0,0,0];
var jogador = 1;

function verifica(){
    if(marcados[0] == marcados[1] &&
       marcados[1] == marcados[2] && 
       marcados[0] != 0){

        if(marcados[0] == 'x'){
            alert('Jogador 1 ganhou');
        } else {
            alert('Jogador 2 ganhou');
        }
    } else if(marcados[3] == marcados[4] &&
              marcados[4] == marcados[5] && 
              marcados[3] != 0){
        
                if(marcados[3] == 'x'){
                    alert('Jogador 1 ganhou');
                } else {
                    alert('Jogador 2 ganhou');
                }
    } else if(marcados[6] == marcados[7] &&
              marcados[6] == marcados[8] && 
              marcados[6] != 0){
  
          if(marcados[6] == 'x'){
              alert('Jogador 1 ganhou');
          } else {
              alert('Jogador 2 ganhou');
          }
          //-------------------linhas
    } else if(marcados[0] == marcados[4] &&
            marcados[4] == marcados[8] && 
            marcados[0] != 0){

        if(marcados[0] == 'x'){
            alert('Jogador 1 ganhou');
        } else {
            alert('Jogador 2 ganhou');
        }
    } else if(marcados[2] == marcados[4] &&
              marcados[4] == marcados[6] && 
              marcados[2] != 0){

        if(marcados[2] == 'x'){
            alert('Jogador 1 ganhou');
        } else {
            alert('Jogador 2 ganhou');
        }
        //--------------------------diagonais
    } else if(marcados[0] == marcados[3] &&
                marcados[3] == marcados[6] && 
                marcados[0] != 0){

        if(marcados[0] == 'x'){
            alert('Jogador 1 ganhou');
        } else {
            alert('Jogador 2 ganhou');
        }
    } else if(marcados[0] == marcados[3] &&
            marcados[3] == marcados[6] && 
            marcados[0] != 0){

        if(marcados[0] == 'x'){
            alert('Jogador 1 ganhou');
        } else {
            alert('Jogador 2 ganhou');
        }
    } else if(marcados[1] == marcados[4] &&
            marcados[4] == marcados[7] && 
            marcados[1] != 0){

        if(marcados[1] == 'x'){
            alert('Jogador 1 ganhou');
        } else {
            alert('Jogador 2 ganhou');
        }
    }
    else if(marcados[2] == marcados[5] &&
            marcados[5] == marcados[8] && 
            marcados[2] != 0){

        if(marcados[2] == 'x'){
            alert('Jogador 1 ganhou');
        } else {
            alert('Jogador 2 ganhou');
        }
    }
}
    

function marcar(quadrante){
    let quadro = document.getElementById(quadrante);
    if(marcados[quadrante] == 0){
        if(jogador == 1){
            marcados[quadrante] = 'x';
            quadro.innerHTML = "<img src='imgs/x.jpg'/>"
            verifica();
            jogador = 2;
        } else {
            marcados[quadrante] = 'o';
            quadro.innerHTML = "<img src='imgs/o.jpg'/>"
            verifica();
            jogador = 1;
        }
    }
}