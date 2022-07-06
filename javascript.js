class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.allCards();
    this.distribute();
  }

  suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
  ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  allCards() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        this.cards.push(new Card(this.suits[i], this.ranks[j], this.scores[j]));
      }
    }
  }

  distribute() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let temp = Math.floor(Math.random() * i);
      let pHolder = this.cards[i];
      this.cards[i] = this.cards[temp];
      this.cards[temp] = pHolder;
    }
    playerOneHand = this.cards.splice(0, this.cards.length / 2);
    playerTwoHand = this.cards.splice(0, this.cards.length);

  }
}

//Player's Hands
let playerOneHand;
let playerTwoHand;

let popo = new Deck;

function war(empPile = []) {
  let j = 1;
  while (j > 0) {
    let x = playerOneHand.length;
    let y = playerTwoHand.length;
    if (x < 5) {
      console.log('Player 1 does not have enough cards. Player 1 loses. A total of ' + n + ' rounds were played.');
      break;
    } else if (y < 5) {
      console.log('Player 2 does not have enough cards. Player 2 loses A total of ' + n + ' rounds were played.');
      break;
    } else {
      warPile = empPile;
      console.log('Draw. Engage in War');
      console.log('Player 1 puts down 3 cards and then plays the ' + playerOneHand[4].rank + ' of ' + playerOneHand[4].suit)
      warPile = warPile.concat(playerOneHand.splice(0, 4));
      console.log(warPile);
      console.log('Player 2 puts down 3 cards and then plays the ' + playerTwoHand[4].rank + ' of ' + playerTwoHand[4].suit)
      warPile = warPile.concat(playerTwoHand.splice(0, 4));
      console.log(warPile);
      if (playerOneHand[0].score > playerTwoHand[0].score) {
        console.log('Player 1 wins round and takes the cards')
        playerOneHand = playerOneHand.concat(warPile, playerTwoHand.shift(), playerOneHand.shift());
        j--;
      } else if (playerOneHand[0].score < playerTwoHand[0].score) {
        console.log('Player 2 wins round and takes the cards')
        playerTwoHand = playerTwoHand.concat(warPile, playerOneHand.shift(), playerTwoHand.shift());
        j--;
      } else {
        warPile = warPile.concat(playerOneHand.splice(0, 1), playerTwoHand.splice(0, 1));
        war(warPile);
        j--;
      }
    }
  }
}
let n = 1;
while (playerOneHand.length !== 0 || playerOneHand.length !== 0) {
  console.log('Round ' + n)
  let x = playerOneHand.length;
  let y = playerTwoHand.length;
  if (x < 5) {
    console.log('Player 1 does not have enough cards. Player 1 loses. A total of ' + n + ' rounds played.');
    break;
  } else if (y < 5) {
    console.log('Player 2 does not have enough cards. Player 2 loses. A total of ' + n + ' rounds played.');
    break;
  }
  console.log('Player 1 has ' + x + ' cards')
  console.log('Player 2 has ' + y + ' cards')
  console.log('Player 1 plays ' + playerOneHand[0].rank + ' of ' + playerOneHand[0].suit);
  console.log('Player 2 plays ' + playerTwoHand[0].rank + ' of ' + playerTwoHand[0].suit)
  if (playerOneHand[0].score > playerTwoHand[0].score) {
    console.log('Player 1 wins round and takes the card')
    playerOneHand.push(playerTwoHand.shift(), playerOneHand.shift());
  } else if (playerOneHand[0].score < playerTwoHand[0].score) {
    console.log('Player 2 wins round and takes the card')
    playerTwoHand.push(playerOneHand.shift(), playerTwoHand.shift());
  } else {
    war();
  }
  n++;
}