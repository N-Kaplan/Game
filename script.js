let start = document.getElementById("run");

let cards = document.getElementsByClassName('card');

let cardFaces = ['resources/images/aquarium.png',
    'resources/images/bear-track.png',
    'resources/images/caterpillar.png',
    'resources/images/dragonfly.png',
    'resources/images/falcon.png',
    'resources/images/giraffe.png',
    'resources/images/octopus.png',
    'resources/images/seahorse.png',
    'resources/images/shark.png',
    'resources/images/slug.png'];

//double images array
cardFaces.push(...cardFaces);

const shuffleFaces = (faces) => {
    for (let i = 0; i < faces.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [faces[i], faces[j]] = [faces[j], faces[i]];
    }
};

const closeCard = (id) => {
    cards[id].classList.replace('face', 'back');
    cards[id].style.backgroundImage = 'url("resources/images/Puzzle-icon.png")';
    //remove card from open cards array
    for( let i = 0; i < open.length; i++) {
        if (open[i] === id) {
            open.splice(i, 1);
        }
    }
}

//start with shuffled deck
shuffleFaces(cardFaces);

//new game
start.addEventListener('click', () => {
    for (let i = 0; i < cards.length; i++) {
        closeCard(i);
    }
    shuffleFaces(cardFaces);
})

//turning cards in game, only 2 unmatched cards can be open at the same time
let open = [];
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        if (cards[i].getAttribute('class') === 'card back' && open.length < 2) {
            cards[i].classList.replace('back', 'face')
            cards[i].style.backgroundImage = `url(${cardFaces[i]})`;
            //store open card
            open.push(cards[i].id);
            console.log(open);

            //if cards don't match, turn both, if they do match, empty the open playing cards array
            if (open.length === 2) {
                if (cards[open[0]].style.backgroundImage !== cards[open[1]].style.backgroundImage) {
                    setTimeout(closeCard, 750, open[0]);
                    setTimeout(closeCard, 750, open[1]);
                } else {
                    open = [];
                }
            }
        }
    })
}