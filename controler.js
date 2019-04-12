let marcados = [0,0,0,0,0,0,0,0,0];
let jogadas =[];
let jogador = 1;
let j1 = 0;
let j2 = 0;
let jogando = true;
let ia = 0;

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

function verificaLinha(pos){
    if(marcados[pos] == marcados[pos+1] &&
       marcados[pos+1] == marcados[pos+2] && 
       marcados[pos+0] != 0){

        riscaHori(pos);

        if(marcados[pos] == 'x'){
            pontuar('j1',j1+1,j2);
        } else {
            pontuar('j2',j1,j2+1);
        }
        
    } else if(pos < 6){verificaLinha(pos+3)}
    else{return false;}
}

function verificaColuna(pos){
    if(marcados[pos] == marcados[pos+3] &&
                marcados[pos+3] == marcados[pos+6] && 
                marcados[pos] != 0){
        
                    riscarVert(pos);

        if(marcados[pos] == 'x'){
            pontuar('j1',j1+1,j2);
        	
        } else {
            pontuar('j2',j1,j2+1);
        }
        return true;
    } else if(pos < 2){verificaColuna(pos+1)}
    else{return false;}
}

function pontuar(jogador, jo1, jo2){
    j1 = jo1;
    j2 = jo2;
    jogando = false;
    let j = document.getElementById(jogador);

    if( jogador == 'j1'){
        j.innerText = ('Jogador X: ' + j1);
        //alert('Jogador 1 ganhou!');
    } else {
        j.innerText = ('Jogador O: ' + j2);
        //alert('Jogador 2 ganhou');
    }   
}

function verifica(){
    verificaLinha(0);
    verificaColuna(0);
    if(marcados[0] == marcados[4] &&
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
        
    } else if(jogando != false){
        let velha = true;
        for(let i = 0; i < marcados.length; i++){
            if(marcados[i] == 0){
                velha = false;
            }
        }
        if(velha){
            jogando = false;
            document.getElementById("velha").style.display = 'block';
        }
        //------------------velha
    }
    
}

function recomecar(){
    marcados = [0,0,0,0,0,0,0,0,0];
    jogadas = [];
    let tab = document.getElementsByTagName('svg');
    jogador = 1;
    for(let i = 0; i < tab.length; i++){
        tab[i].innerHTML = '';
    }
    jogando = true;
    document.getElementById("velha").style.display = 'none';
    ia = 0;
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
                jogadas.push(quadrante);
                marcados[quadrante] = 'x';
                quadro.innerHTML = "<polygon stroke='#FFF' stroke-width='6' points='5,20 36,50 5,80 16,94 48,63 79,94 90,80 62,51 92,17 80,6 50,38 16,6 3,22' fill='none'/>";
                verifica();
                jogador = 2;
                if(ia == 1){
                    jogoIa(Math.floor(Math.random() * 8.9));
                }
            } else {
                marcados[quadrante] = 'o';
                quadro.innerHTML = " <circle cx='50%' cy='50%' r='40%' stroke='#FFF' stroke-width='15' fill='none' />"
                verifica();
                jogador = 1;
            }
        }
    }
}

function start(){
    recomecar();
    ia = 1;
    alert('Jogo facil selecionado');
}

function jogoIa(num){
    if(jogando){
        if(marcados[4] == 0){
            marcar(4);
        }else if((jogadas.length > 1 && jogadas.length < 4)){
            
            if((marcados[0] == 'x' && marcados[2] == 'x') && marcados[1] == 0 ){
                marcar(1);
            } else if((marcados[0] == 'x' && marcados[6] == 'x') && marcados[3] == 0){
                marcar(3);
            } else if((marcados[2] == 'x' && marcados[8] == 'x') && marcados[5] == 0){
                marcar(5);
            } else if((marcados[6] == 'x' && marcados[8] == 'x') && marcados[7] == 0){              
                marcar(7);                            
            } else {
                let x = true;
                while(x == true){
                    let i = Math.floor(Math.random() * 8.9);
                    
                    if((i == 0 || i == 2 || i == 6 || i == 8) && marcados[i] == 0){
                        marcar(i);
                        x = false;
                    }
                }
            }
        }else if(marcados[num] == 0){
            //marcar(num);
            if(marcados[num+1] == 'x'){
                marcar(num);
            } else if(marcados[num-1] == 'x'){
                marcar(num);
            } else if(marcados[num-3] == 'x'){
                marcar(num);
            } else if( marcados[num+3] == 'x'){
                marcar(num);
            } else if(marcados[num-4] == 'x'){
                marcar(num);
            } else if(marcados[num+4] == 'x'){
                marcar(num);
            } else { jogoIa(Math.floor(Math.random() * 8.9)); }
        } else{
            jogoIa(Math.floor(Math.random() * 8.9));
        }
    }
}