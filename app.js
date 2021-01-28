const game = () => {
    let pScore=0;
    let cScore=0;

    //Start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            // match.classList.add("fadeIn");
        });
        
    };

    //Play match
    const playMatch = () =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".palyer-hand");
        const computerHand = document.querySelector(".computer-hand");

        const hands = document.querySelectorAll(".hands img");

         //Removing animation
        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            })
        })
        
        //Computer options
        const computerOptions = ['rock','paper','scissor'];

        options.forEach(option =>{
            option.addEventListener("click", function(){
                
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
               
                setTimeout(()=>{
                    //Here we compare hands
                    compareHands(this.textContent,computerChoice);

                    //Updated images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                },2000)
                
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        })

    }

    //Update score
    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    //Compare hands
    const compareHands = (playerChoice,computerChoice) => {
        const winner = document.querySelector(".winner");
        
        //Checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }

        //Checking for rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissor"){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }

        //Checking for paper
        if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return
            }else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }

        //Checking for scissor
        if(playerChoice === "scissor"){
            if(computerChoice === "paper"){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return
            }else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
    }

    //Calls inner function
    startGame();
    playMatch();
}

//Start the game function
game();