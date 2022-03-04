class Card {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}

class Player{
  constructor(name, hand) {
    this.name = name
    this.hand = hand
    this.cardToPlay = []
  }
}

class Deck {
  constructor() {
    this.cards = []
    this.handOne = []
    this.handTwo = []
  }
  createDeck() {
    let suit = ["Spades", "Hearts", "Clubs", "Diamonds"]
    let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        this.cards.push(new Card(suit[i], rank[j], score[j]));
      }
    }
  }
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp
    }
    return this.cards
  }
  deal() {
    for (let i = 0; i < this.cards.length; i+=2) {
      this.handOne.push(this.cards[i])
      }
  
    for (let i = 1; i < this.cards.length; i+=2) {
      this.handTwo.push(this.cards[i])
     }
  }
}

class War {
  constructor() {
    this.theTwo = []
    }
  firstCard() {
    player1.cardToPlay.unshift(player1.hand[0])
    player1.hand.shift();
    player2.cardToPlay.unshift(player2.hand[0])
    player2.hand.shift();
    }
    compare() {
      if (player1.cardToPlay[0].score === player2.cardToPlay[0].score) {
        console.log("it's a tie")

      }
      if (player1.cardToPlay[0].score < player2.cardToPlay[0].score) {
        console.log("player 2 wins");
        
        
        // this.firstCard();
        // player2.push(this.theTwo);
      }
      if (player1.cardToPlay[0].score > player2.cardToPlay[0].score) {
        console.log("player 1 wins")
        


        // this.theTwo = player1.cardToPlay.concat(player2.cardToPlay);

        // this.firstCard();
        // player1.push(this.theTwo);
      }
    }
}


let newDeck = new Deck();
const player1 = new Player("Lawrence", newDeck.handOne)
const player2 = new Player("Jeffrey", newDeck.handTwo)
let playWar = new War();


newDeck.createDeck();
newDeck.shuffle();
// console.log(newDeck);
newDeck.deal();
// console.log(player1, player2);
playWar.firstCard();
console.log(player1, player2);
playWar.compare();
console.log(playWar.theTwo);

// console.log(player1, player2);
