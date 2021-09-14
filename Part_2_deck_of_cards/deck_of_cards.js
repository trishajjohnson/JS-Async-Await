let new_deck_id;

async function shuffleDeck() {
    
    try {
        const newDeckURL = "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
        let res = await axios.get(newDeckURL);
        new_deck_id = res.data.deck_id;
        console.log("deck id", new_deck_id);
        $("#drawn-card").attr("src", "https://s3.amazonaws.com/images.penguinmagic.com/images/products/original/5075a.jpg");

    }
    catch (e) {
        console.log("Rejected", e);
    }
}

shuffleDeck();


// Draw a Card 

async function drawCard() {
    
    try {

        const newCardURL = `http://deckofcardsapi.com/api/deck/${new_deck_id}/draw/?count=1`;
        let res = await axios.get(newCardURL);
        $("#drawn-card").attr("src", res.data.cards[0].image);
    }

    catch (e) {
        console.log("Rejected", err);
    }

}

$("#new-card").on("click", drawCard);
    