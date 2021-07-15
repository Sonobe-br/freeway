//código do carro
//Listas
                //0 //1  //2
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [5.5, 7, 10, 9, 5, 2.5];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  image(imagemDoCarros[0], xCarros[0], yCarros[0], comprimentoCarro, alturaCarro);
  image(imagemDoCarros[1], xCarros[1], yCarros[1], comprimentoCarro, alturaCarro);
  image(imagemDoCarros[2], xCarros[2], yCarros[2], comprimentoCarro, alturaCarro);
  image(imagemDoCarros[3], xCarros[3], yCarros[3], comprimentoCarro, alturaCarro);
  image(imagemDoCarros[4], xCarros[4], yCarros[4], comprimentoCarro, alturaCarro);
  image(imagemDoCarros[5], xCarros[5], yCarros[5], comprimentoCarro, alturaCarro); 
}

function movimentaCarro() {
  for (let i = 0; i < imagemDoCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
} 

function posicaoInicialCarro(){
  for (let i = 0; i < imagemDoCarros.length; i = i + 1){
  if (passouTodaTela (xCarros[i])){
  xCarros[i] = 600;
    } 
  }
}

function passouTodaTela (xCarros){
  return xCarros < -50;
    
}