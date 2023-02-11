
    
        let food = 100; // valor de la variable food
        let timefood; //Controlar velocidad de que se termina la comida
        let sleep = 100; // valor de  la variable star 
        let timesleep; //Controlar velocidad de que se termina el sueño
        let gameover = 0; //para cuando se termine el juego
        let playButton= document.getElementById('play-button');

        let buttonsmusic =new Audio ('./music/lifeandfood.wav');
        let muertemusic = new Audio ('./music/muerte.wav');
        let playgamemusic = new Audio ('./music/comenzar.wav');

        /*se  basa el botton star en codigo de la culebrita*/
        function startGame() {
            clearGame();
            
            timefood = setInterval(() => {
                disminuirComida(); 
              }, 160);
            timesleep = setInterval(() => {
                disminuirSueño(); 
              }, 160);
              document.documentElement.style.setProperty('--colorsleep', 'green');
              document.documentElement.style.setProperty('--colorfood', 'green');
              document.getElementById("Dogface").src = "./img/sprites/comer.gif";
              playgamemusic.play();

            console.log('estoy entrando a la funcion ');

        }

        function clearGame() {
            food = 100;
            sleep = 100;
           clearInterval(timefood);
           clearInterval(timesleep);
            


        }
       

        function gameovercheck(){
            if(food==0&&sleep==0&&gameover==0){
                alert("Fin del el juego!");
                gameover++;
                caraperromuriendo();
                muertemusic.play();

            }
            else{
                caraperromuriendo();
            }
        }
        
        function caraperrohambre(){
            if(food <= 50 && food > 30){
                document.getElementById("Dogface").src = "./img/sprites/hambre.gif";
            }
        }


        function caraperrohambre(){
            if(sleep <= 50 && sleep > 30){
                
                document.getElementById("Dogface").src = "./img/sprites/hambre.gif";

            }

        }

        function caraperromuriendo(){
            if(food==0&&sleep==0){
                document.getElementById("Dogface").src = "./img/sprites/muriendo.gif";
            }
            
        }
        
        //esta funcion es para dar de comer y para que la brra  aumente de 5 en 5
        function darComida(){
            if(food<=99&&food!=0){
                food += 5;
                if(food >= 50 && food > 30){
                    document.documentElement.style.setProperty('--colorfood', 'green')
                    document.getElementById("Dogface").src = "./img/sprites/comer.gif";
                    buttonsmusic.play();
                    
                }
            }
            else if(food==0){
                food+=0;
            }
        }
        
        //funcion de poner a domir y definir color de brra verde
        function ponerDomir(){
            if(sleep<=99&&sleep!=0){
                sleep += 5;
                if(sleep >= 50 &&  sleep> 30){
                    document.documentElement.style.setProperty('--colorsleep', 'green')
                    document.getElementById("Dogface").src = "./img/sprites/comer.gif"
                    buttonsmusic.play();
                }
            }
            else if(sleep==0){
                sleep+=0;
            }
        }
        

        
        //funcion para poner los if de condicion para disminuir la comida 
        function disminuirComida(){
            if(food == 0){
                clearInterval(timefood );
                alert("Tu murio de hambre");
                gameovercheck();
            }else if(food <= 50 && food > 30){
                document.documentElement.style.setProperty('--colorfood', '#868A08')
                food--;
                document.getElementById("foodbar").value = food;
                document.getElementById("Dogface").src = "./img/sprites/hambre.gif"
            }else if(food <= 30){
                document.documentElement.style.setProperty('--colorfood', 'red')
                document.getElementById("Dogface").src = "./img/sprites/hambre.gif"
                food--;
                document.getElementById("foodbar").value = food;
            }
            else{
                food--;
                document.getElementById("foodbar").value = food;
                caraperrohambre();
            }
        }
        
        
        function disminuirSueño(){// funcion para bajar barra de sueño
            if(sleep == 0){
                clearInterval(timesleep);
                alert("Tu mascota no soportó tanto tiempo sin dormir");
                gameovercheck();
            }else if(sleep <= 50 && sleep > 30){
                document.documentElement.style.setProperty('--colorsleep', '#868A08')
                sleep--;
                document.getElementById("sleepbar").value = sleep;
            }else if(sleep <= 30){
                
                document.documentElement.style.setProperty('--colorsleep', 'red')
                sleep--;
                document.getElementById("sleepbar").value = sleep;
            }
            else{
                sleep--;
                document.getElementById("sleepbar").value = sleep;
                caraperrohambre();
            }
        }
        

