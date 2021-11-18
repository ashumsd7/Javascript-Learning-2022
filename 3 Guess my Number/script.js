'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = ' You Are Winning;'
// console.log(document.querySelector('.message').textContent);


// document.querySelector('.score').textContent = 15;
// document.querySelector('.number').textContent = 15;



let secretNumber = Math.trunc(Math.random()*20) +1;
let score= 20;
let highScore=0;

const displayMessage= function(message){
    document.querySelector('.message').textContent= message
}
// document.querySelector('.score').textContent = score;


// document.querySelector('.number').textContent= secretNumber
console.log("You hacked :D Write Number",secretNumber);
// console.log(secretNumber);


document.querySelector('.check').addEventListener('click',function(){
    const guess= Number(document.querySelector('.guess').value);

    if(!guess){
        // document.querySelector('.message').textContent = ' 🔠 Enter a nuumber'
        displayMessage( ' 🔠 Enter a nuumber')
    }
    else if(guess==secretNumber){
        // document.querySelector('.message').textContent = ' 💡 You gussed it.'
        displayMessage(' 💡 You gussed it.')
        document.querySelector('body').style.backgroundColor= '#60b347'
        document.querySelector('.number').style.width='30rem'
        document.querySelector('.number').textContent= secretNumber
        if(score>highScore){
            // console.log('score is', score);
            // console.log('highScore is', highScore);
            highScore= score;
            // console.log('highScore updated', highScore);
            document.querySelector('.highscore').textContent=highScore
        }
    }

    else if(guess!==secretNumber){
        if(score){

            // document.querySelector('.message').textContent = 
            // guess>secretNumber ? '📉 Guess Low Number.' :  '📈Guess High Number'
            displayMessage( guess>secretNumber ? '📉 Guess Low Number.' :  '📈Guess High Number')
            score--
            document.querySelector('.score').textContent = score;
        }
        else{
            // document.querySelector('.message').textContent = ' You Lost 😠'
            displayMessage( ' You Lost 😠')
            document.querySelector('.score').textContent = 0;
        }
    }




    //--
    // else if(guess>secretNumber){
    //     if(score){

    //         document.querySelector('.message').textContent = '📉 Guess Low Number.'
    //         score--
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = ' You Lost 😠'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if(guess<secretNumber){
    //     if(score){

    //         document.querySelector('.message').textContent = ' 📈Guess High Number.'
    //         score--
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = ' You Lost 😠'
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    // }
    
})


document.querySelector('.again').addEventListener('click',()=>{
    document.querySelector('.score').textContent = 20;
    score=20;
    secretNumber=Math.trunc(Math.random()*20) +1;
    // console.log(secretNumber);
    // document.querySelector('.message').textContent = '🔀Start guessing'
    displayMessage('🔀Start guessing')
    document.querySelector('.guess').value= ''
    document.querySelector('body').style.backgroundColor= '#222'
    document.querySelector('.number').style.width='15rem'
    document.querySelector('.number').textContent = '?'


})