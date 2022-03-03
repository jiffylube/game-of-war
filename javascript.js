class Card {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}

// let player1 = []
// let player2 = []


class Player{
  constructor(name, hand) {
    this.name = name
    this.hand = hand
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
    let score = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]

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




let newDeck = new Deck();
const Lawrence = new Player("Lawrence", newDeck.handOne)
const Jeff = new Player("Jeffrey", newDeck.handTwo)

newDeck.createDeck();
newDeck.shuffle();
console.log(newDeck);

newDeck.deal();
// console.log(newDeck.handOne)
// console.log(newDeck);
console.log(Lawrence, Jeff);
