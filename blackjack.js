let firstcard=getrandomcard()
let secondcard=getrandomcard()
let sum=0
let hasblackjack=false
let message=""
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector(".card-el")
let cards=[]
let messageEl=document.getElementById("message-el")
let isalive=false
let player={
    name:"houda",
    chips:150,
    sayhello:function(){
        console.log("hello !")
    }
}
player.sayhello()
let playerEl=document.getElementById("player-el")

function getrandomcard(){
let randomnumber=Math.floor(Math.random()*13)+1
  if(randomnumber===1){
  return 11
  }
  else if(randomnumber > 10){
    return 10
  }
  else{
    return randomnumber
  }
}


function startgame(){
    isalive=true
    cards[0]=getrandomcard()
    cards[1]=getrandomcard()
    sum=cards[0]+cards[1]
    rendergame()
}

// function rendergame(){
    
//    for(let i=0;i<cards.length;i++){
//     cardEl.textContent+=cards[i]+" "
//    } 
//   if (sum <= 20) {
//     message = "Do you want to draw a new card? 🙂"
// } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack! 🥳"
//     hasBlackJack = true
// } else {
//     message = "You're out of the game! 😭"
//     isAlive = false
// }
// document.getElementById("message-el").textContent= message
// sumEl.innerText="sum:" +" "+sum
// // cardEl.innerText="card:"+" "+cards[0]+" "+cards[1]
// }   

function rendergame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
       hasblackjack = true
    } else {
        message = "You're out of the game!"
        isalive = false
    }
    messageEl.textContent = message
}



function newcard(){
    if(isalive===true && hasblackjack===false){
    console.log("Drawing a new card from the deck!")
    let card=getrandomcard()
    sum+=card
    cards.push(card)
    rendergame()
    }
}

playerEl.textContent=player.name+" :$"+player.chips
