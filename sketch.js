let squareSize = 18; //dimensione dei quadratini 
let spacing = 7.5; //dimensione dello spazio tra due quadratini affinacati (con rotazione di 0 gradi)
let gridSizeX, gridSizeY;
let angles = []; //Array per gli angoli di rotazione
let padding = 24;

function setup() {
  createCanvas(windowWidth, windowHeight); //il contenuto occupa tutto lo spazio della finestra
  background("#cfd5da"); //colore grigino 
//funzione che stabilisce quanti quadratini devono stare lungo tutta l'altezza e la larghezza della griglia
//L'attributo "floor" viene utilizzato per arrotondare per difetto un numero decimale al numero intero più vicino
//floor consente quindi che il numero di quadrati calcolato per riempire la griglia sia sempre un numero intero
  gridSizeX = floor((width - 2 * padding + spacing) / (squareSize + spacing)); //righe
  gridSizeY = floor((height - 2 * padding + spacing) / (squareSize + spacing));//colonne

// Genera angoli di rotazione casuali tra questi due valori definiti: 0 gradi e 45 gradi 
//Crea un array lungo quanto il numero totale di quadrati (griglia X * griglia Y).
  angles = Array.from({ length: gridSizeX * gridSizeY }, () => random([radians(45), 0,])); //angoli espressi in gradi 

  noLoop();
}
//variabili per calcolare le coordinate della posizone di ciascun quadratino, tenendo conto del padding esterno e dello spazio tra i quadratini
function draw() {
  for (let y = 0; y < gridSizeY; y++) {
    for (let x = 0; x < gridSizeX; x++) {
      let posX = padding + x * (squareSize + spacing);
      let posY = padding + y * (squareSize + spacing);
      //funzione per disegnare un quadrato nella posizione, con dimensione specificata e angolo di rotazione
      drawSquare(posX, posY, squareSize, angles[y * gridSizeX + x]);
    }
  }
}

function drawSquare(x, y, size, angle) {
  push();
  translate(x + size / 2, y + size / 2);
  rotate(angle);
  rectMode(CENTER);
  fill(0); //colore nero
  noStroke();
  rect(0, 0, size, size);
  pop();
}
//Quando la finestra viene ridimensionata il canvas si adatta alla nuova larghezza e altezza della finestra del browser
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();  // Ricalcola la griglia
}
