 const randomImages=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]


  document.getElementById("refreshButton").addEventListener("click", function() {

    const randomNumber1=Math.ceil (Math.random()*6)
    const randomNumber2=Math.ceil (Math.random()*6)
    
    document.querySelector(".img1").setAttribute("src",randomImages[randomNumber1-1] )
    document.querySelector(".img2").setAttribute("src",randomImages[randomNumber2-1] )
    
    console.log("sdf")
    
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML=" &#128681 player1 Wins!"
    }else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML=" &#128681 player2 Wins!"
    
    }else{
        document.querySelector("h1").innerHTML="draw"
    
    }

    
   //window.location.reload();
  });
  

