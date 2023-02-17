const gameRules = {
  objective:
    "Choose all the cards once, while avoiding choosing the same card again.",
  gameplay: {
    one: "The player chooses one card from the cards one th board.",
    two: "After choosing a card, the cards are shuffled and placed in a random order.",
    three:
      "The player chooses another card, while avoiding choosing a card that was already chosen",
    four: "The game continues until the player chooses all the cards once or chooses a card that was already chosen.",
    five: "Game has three levels. Game ends successfully when all levels are finished ",
  },
  rules: {
    one: "The player can only choose each card once.",
    two: "Choosing a card the player has already chosen ends the game and results in a loss.",
    three: "The player wins when they choose all the cards once.",
  },
};

export default gameRules;
