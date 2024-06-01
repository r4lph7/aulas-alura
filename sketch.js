function setup() {
    createCanvas(600, 600);
     background("white");
  }
  
  function draw() {
   
    
      stroke("green")
      fill("red");
    
    // console.log(MouseIsPressed)
    
    if(mouseIsPressed){
      
        rect (mouseX,mouseY,10,20);
      
   }   
  }